const express = require('express');
const router = express.Router();

router.get('/tic_tac_toe', (req, res) => {
  res.render('ch05/tic_tac_toe')
})

module.exports = router;