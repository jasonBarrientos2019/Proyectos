const deadpool={
   nombre:"wade",
   apellido:"winston",
   poder:"Regeneracion",
   getNombre(){
      return `${this.nombre} ${this.apellido}`
   }
}

const {nombre, apellido,poder}=deadpool

console.log(nombre,apellido);

