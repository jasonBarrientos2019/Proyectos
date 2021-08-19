const express = require('express');
const hbs=require('hbs');
require('dotenv').config();

const app=express();
const port= process.env.PORT;


hbs.registerPartials(__dirname+'/views/partials', (err) =>{})

app.set('view engine','hbs')

//middleware
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{nombre:"Jason"})
})

app.get('/hola-mundo',(req,res)=>{
    res.send('Hola munde')
})
app.get('*',(req,res)=>{
    res.send('404 Not Found')
})
app.listen(port,()=> {
    console.log(`App corriendo en http:localhost:${port}`);
})