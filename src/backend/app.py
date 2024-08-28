from flask import Flask, request, jsonify
from flask_cors import CORS  # Importa CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Permite CORS para todas las rutas

# Configuración de la conexión a la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",  # Cambia a tu usuario de MySQL
    password="",  # Cambia a tu contraseña de MySQL
    database="elenemigos"
)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    cursor = db.cursor(dictionary=True)

    # Buscar el usuario por email y comparar la contraseña
    query = "SELECT * FROM usuarios WHERE correo = %s AND contraseña = %s"
    cursor.execute(query, (email, password))
    user = cursor.fetchone()

    if user:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    nombre = data.get('nombre')
    correo = data.get('correo')
    contraseña = data.get('contraseña')

    cursor = db.cursor()

    # Insertar nuevo usuario en la base de datos
    query = "INSERT INTO usuarios (nombre, correo, contraseña) VALUES (%s, %s, %s)"
    cursor.execute(query, (nombre, correo, contraseña))
    db.commit()

    return jsonify({"message": "Registration successful"}), 201



if __name__ == '__main__':
    app.run(debug=True)
