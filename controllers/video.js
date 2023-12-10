const express = require('express');
const router = express.Router();

// Video routes
router.get('/', (req, res) => {
    res.send('Respuesta de la ruta de video');
});

module.exports = router;
