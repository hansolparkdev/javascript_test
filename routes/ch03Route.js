const express = require('express');
const router = express.Router();

router.get('/wordrelay', (req, res) => {
    res.render('ch03/wordrelay')
})

module.exports = router;