# backend/routes.py
from flask import Flask, request, jsonify
from models import get_user_by_email, create_user
from flask_cors import CORS
import hashlib

app = Flask(__name__)
CORS(app)  # Para permitir peticiones desde tu frontend en React

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = get_user_by_email(email)
    
    if user and user['contraseña'] == hashlib.sha256(password.encode()).hexdigest():
        return jsonify({"message": "Inicio de sesión exitoso"}), 200
    else:
        return jsonify({"message": "Correo o contraseña incorrectos"}), 401

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    nombre = data.get('name')
    correo = data.get('email')
    contraseña = hashlib.sha256(data.get('password').encode()).hexdigest()

    user = get_user_by_email(correo)
    if user:
        return jsonify({"message": "El usuario ya existe"}), 409

    create_user(nombre, correo, contraseña)
    return jsonify({"message": "Usuario registrado exitosamente"}), 201
