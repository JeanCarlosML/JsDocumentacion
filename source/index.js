let empleados = [
  { id: 1, name: "Jean", estado: false },
  { id: 2, name: "Juan", estado: true },
  { id: 3, name: "Cesar", estado: false },
  { id: 4, name: "Matias", estado: true },
  { id: 5, name: "Ronaldo", estado: false },
  { id: 6, name: "Pedro", estado: true },
  { id: 7, name: "Roman", estado: false },
  { id: 8, name: "Matias", estado: true },
];

//======findIndex=========
//Regresa la posicion del elemento en el array ejm 2 , 3 , 4 , si la condicion se cumple
//Si la condicion nose cumple con ningun elemento retorna un -1
//No modifica el array original
let findById = empleados.findIndex((empleado) => empleado.id === 6);
console.log({ findById });

//======find=========
//Regresa el primer elemento del array que cumpla con la condicion
//Si la condicion nose cumple regresa un undefined
//No modifica el array original
let find = empleados.find((empleado) => empleado.id < 4);
console.log({ find });

//======map=========
//Crea un nuevo array con los elementos modificados por la funcion
//No modifica el array original
let map = empleados.map((empleado) => empleado.name);
console.log({ map });

//======splice=========
//Devuelve la parte recortada del array
//Modifica el array original
let splice = empleados.splice(2, 1);
console.log({ splice });
console.log({ empleados });

//======slice=========
//Devuelve la parte recortada del array
//No modifica el array original
let slice = empleados.slice(1, 3);
console.log({ slice });

//======filtrer=========
//Devuelve la parte recortada del array
//No modifica el array original
let filter = empleados.filter((empleado) => empleado.id > 4);
console.log({ filter });
