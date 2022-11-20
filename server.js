const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req,res){
    // res.statusCode = 200;
    // res.send('Olá mundo');
    try{
        res.statusCode = 200;
        res.send({})
    }catch(err){
        res.statusCode = 500;
        res.send({
            msg: err
        })
    }
});

app.get('/home', function(req,res){
    res.send('Página home');
});

app.listen(port, function(){
    console.log("Aplicação rodando.")
})