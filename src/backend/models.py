# backend/models.py
from config import get_db_connection

def get_user_by_email(email):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM usuarios WHERE correo = %s", (email,))
    user = cursor.fetchone()
    cursor.close()
    connection.close()
    return user

def create_user(nombre, correo, contraseña):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO usuarios (nombre, correo, contraseña) VALUES (%s, %s, %s)",
        (nombre, correo, contraseña)
    )
    connection.commit()
    cursor.close()
    connection.close()
