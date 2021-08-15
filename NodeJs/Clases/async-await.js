const empleados = [ {
    id: 1,
    nombre: 'Fernando'
}, {
        id: 2,
        nombre: 'Linda'
    }, {
        id: 3,
        nombre: 'Kevin'
    }
]
const salarios = [
    {
        id: 1,
        salario: 1000
    }, {
        id: 2,
        salario: 1500
    }
]

const getEmpleado=(id)=>{

    return new Promise((resolve,reject)=>{
            const empleado= empleados.find(e => e.id === id)?.nombre;
            (empleado)?resolve(empleado):reject(`No existe empleado con id ${id}`);
    });
}

const getSalario=(id)=>{

    return new Promise((resolve,reject)=>{
            const salario= salarios.find(e => e.id === id)?.salario;
            (salario)?resolve(salario):reject(`No existe salario para el empleado con id ${id}`);
    });
}

// await tiene q estar dentro de una funcion o metodo asincrono
//asyn trasnforma una funcion y la convierte en una promesa

const id =3;

const getInfoUsuario= async(id)=>{

    try {
        const empleado= await getEmpleado(id);
        const salario= await getSalario(id);

        return `El salario del empleado: ${empleado} es ${salario}`;

    } catch (error) {
        throw error;
    }
 
}

getInfoUsuario(id)
    .then(msg=>console.log(msg))
    .catch(err=>console.log(err));