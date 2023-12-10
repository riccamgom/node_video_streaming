const express = require('express');
const router = express.Router();

// Main routes
router.get('/', (req, res) => {
    res.send('Respuesta de la ruta principal');
});

module.exports = router;
