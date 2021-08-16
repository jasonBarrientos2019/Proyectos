const inquirer = require('inquirer');
require('colors');

const preguntas=[{
    type:'list',
    name:'opcion',
    message:'¿Que desea hacer?',
    choices:[
        {
            value:'1',
            name:`${'1.'.green} Crear una tarea`
        }, {
            value:'2',
            name: `${'2.'.green} Listar tareas`
        }, {
            value:'3',
            value:`${'3.'.green} Listar tareas completadas`
        }, {
            value:'4',
            name:`${'4.'.green} Listar tareas pendientes`
        }, {
            value:'5',
            name:`${'5.'.green} Completar tarea/s`
        }, {
            value:'6',
            name:`${'6.'.green} Borrar tarea`
        }, {
            value:'0',
            name:`${'0.'.green} Salir`
        }]
}]

const pausa=async()=>{
 const enter=[{
     type:'input',
     name:"enter",
     message:"Presione ENTER para continuar"
 }]  

 await inquirer.prompt(enter);
}
    
    
    
    
    
const inquirerMenu=async()=>{

    console.clear();
  
    const {opcion}=await inquirer.prompt(preguntas);
    return opcion;
}

const leerInput= async(message)=>{
    const question=[{
        type:'input',
        name:'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Porfavor ingrese un valor'
            }
            return true;
        }
    }];

    const {desc}= await inquirer.prompt(question);
    return desc;
}

module.exports={
    inquirerMenu,pausa,leerInput
};