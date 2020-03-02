const express = require('express');
const router = express();

router.get('/number_baseball', (req, res) => {
  res.render('ch04/number_baseball')
})
module.exports = router;