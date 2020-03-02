const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const ch01Route = require('./routes/ch01Route');
const ch02Route = require('./routes/ch02Route');
const ch03Route = require('./routes/ch03Route');
const ch04Route = require('./routes/ch04Route');
const ch05Route = require('./routes/ch05Route');

app.use('/ch01', ch01Route)
app.use('/ch02', ch02Route)
app.use('/ch03', ch03Route)
app.use('/ch04', ch04Route)
app.use('/ch05', ch05Route)

app.listen(3000, () => {
    console.log('server start')
})
