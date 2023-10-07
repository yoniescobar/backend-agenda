
const express = require('express');
const router = express.Router();
const db = require('../db'); // Importar la conexión a la base de datos

// Obtener todos los contactos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM contacts';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(result);
  });
});

// Crear un nuevo contacto
router.post('/', (req, res) => {
  const { name, phone, email } = req.body;
  const sql = 'INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)';
  db.query(sql, [name, phone, email], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(201).json({ message: 'Contacto creado correctamente' });
  });
});

// Actualizar un contacto
router.put('/:id', (req, res) => {
  const { name, phone, email } = req.body;
  const sql = 'UPDATE contacts SET name=?, phone=?, email=? WHERE id=?';
  db.query(sql, [name, phone, email, req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json({ message: 'Contacto actualizado correctamente' });
  });
});

// Eliminar un contacto
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM contacts WHERE id=?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json({ message: 'Contacto eliminado correctamente' });
  });
});

module.exports = router;
