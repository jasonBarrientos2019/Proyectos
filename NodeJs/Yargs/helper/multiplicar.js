
const fs = require('fs');

const multiplicar=async (base)=> {

    try {
        let contenido="";
        for (let index = 1; index <= 10; index++) {
            contenido+=`${base} x ${index} = ${base * index} \n`
        }
        fs.writeFileSync(`table-${base}.txt`,contenido);
        return `table-${base}.txt`

    } catch (error) {
        throw error;
    }

}

module.exports=multiplicar;