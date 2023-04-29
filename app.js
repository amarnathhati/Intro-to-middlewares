const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/add-product', (req, res, next) => {
    res.send('<form action=/product method="POST" ><input type="text" name="title" placeholder="Enter name"><input type="number" placeholder="Enter size" name="size"><button type="submit">Add product</button></form>');


});

app.use('/product', (req, res, next) => {
    console.log(req.body);

    res.redirect('/');
});


app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express JS</h1>')
});



app.listen(4100);