
const fs = require('fs');

const multiplicar=async (base,listar,hasta)=> {


    try {
        let contenido="";
        for (let index = 1; index <= hasta; index++) {
         
            contenido+=`${base} x ${index} = ${base * index} \n`
        }
        (listar)?console.log(contenido):"";

        fs.writeFileSync(`table-${base}.txt`,contenido);
        return `table-${base}.txt`

    } catch (error) {
        throw error;
    }

}

module.exports=multiplicar;