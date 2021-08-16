const argv =require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption:true,
        description:"Indica la base de la multiplicacion"
    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        demandOption:true,
        default:false,
        description:"Indica si quiere imprimer la tabla"

    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption:false,
        default:10,
        description:"Indica el limite de la tabla"

    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw '\n## La base (-b) tiene q ser un numero ##\n'.red
        }
        if(isNaN(argv.h)){
            throw '\n## El limite (-h) tiene q ser un numero ##\n'.red
        }
        return true;
    })
    .argv;

module.exports=argv;