const express = require('express');
const router = express.Router();

router.get('/wordrelay', (req, res) => {
    res.render('ch03/wordrelay')
})

router.get('/gugudan', (req, res) => {
    res.render('ch03/gugudan')
})

module.exports = router;