const express = require('express');
const router = express.Router();

router.get('/star', (req, res) => {
    res.render('ch02/star')
})
router.get('/object', (req, res) => {
    res.render('ch02/object')
})
router.get('/array', (req, res) => {
    res.render('ch02/array')
})
router.get('/gugudan', (req, res) => {
    res.render('ch02/gugudan')
})
module.exports = router