const express = require('express');
const app = express();
const port = 3000;

//Rotas

const user = require('./routes/user');
const auth = require('./routes/auth');
const product = require('./routes/product');
const category = require('./routes/category');

app.use('/user', user);
app.use('/auth', auth);
app.use('/product', product);
app.use('/category', category);

app.listen(port, function(){
    console.log("Aplicação rodando.")
});