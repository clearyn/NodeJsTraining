const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text", name="title"></input><button action="submit">send</button></form>')
});
app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>hello from express</h1>');
});

app.listen(3000);