const express = require('express');
const router = express.Router();

// User routes
router.get('/', (req, res) => {
    res.send('Respuesta de la ruta de usuario');
});

module.exports = router;
