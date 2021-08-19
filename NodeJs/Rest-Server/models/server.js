const express = require('express');
const cors = require('cors')



class Server{

    constructor(){
        this.app= express();
        this.port= process.env.PORT;
        this.usersPath='/api/user';

        //middlerware
        this.middlewares();
        //Rutas
        this.routes();
    }
    middlewares(){
        //Cors
        this.app.use(cors());

        //parse to Json
        this.app.use(express.json());
        
        //Directorio publico
        this.app.use(express.static('public'));

    }
    listen(){
        this.app.listen(this.port,()=> {
        console.log(`Servidor corriendo en el puerto ${this.port}`);
    })}
    routes(){
        
      this.app.use(this.usersPath,require('../routes/user.route'));
    }
 
}
module.exports=Server;