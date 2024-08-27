const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para el registro
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Leer el archivo JSON
    const filePath = path.join(__dirname, 'users.json');
    fs.readFile(filePath, (err, data) => {
        if (err) return res.status(500).json({ message: 'Error al leer el archivo' });

        const users = JSON.parse(data);
        const userExists = users.find(user => user.email === email);

        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Agregar nuevo usuario
        users.push({ name, email, password });
        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) return res.status(500).json({ message: 'Error al guardar el usuario' });
            res.status(200).json({ message: 'Usuario registrado exitosamente' });
        });
    });
});

// Servir archivos estáticos (opcional si estás sirviendo una aplicación React)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
