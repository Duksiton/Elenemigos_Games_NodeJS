# backend/config.py
import mysql.connector

def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',  # Reemplaza con tu usuario de MySQL
        password='',  # Reemplaza con tu contraseña de MySQL
        database='elenemigos'
    )
    return connection
