const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('ch01/index')
})
router.get('/null_undefined', (req, res) => {
    res.render('ch01/null_undefined')
})
router.get('/if', (req, res) => {
    res.render('ch01/if')
})

module.exports = router