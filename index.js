//RESUELVE LOS EJERCICIOS AQUÍ

//Ejercicio 1

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

for (ana of empleados){
    ana = empleados[1]
}

//Ejercicio 2

for (emailLuis of empleados){
    emailLuis = empleados[0].email
}

//Ejercicio 3

// Inicialmente
let a = 5;
let b = 3;

[a, b] = [3, 5]

//Ejercicio 4

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

  const maximaHoy = HIGH_TEMPERATURES.today;
  const maximaManana = HIGH_TEMPERATURES.tomorrow;

//Ejercicio 5

function sumEveryOther(...numeros){
  let sumaNumeros = numeros.reduce((acc, num) => acc + num, 0);
  return sumaNumeros;
}

console.log(sumEveryOther(6, 8, 2, 3, 1))
console.log(sumEveryOther(11, 3, 12))

//Ejercicio 6

function addOnlyNums(...argumentos){
  let sumaNumerosDos = 0;
  for(dato of argumentos){
    if(typeof dato === "number"){
      sumaNumerosDos += dato
    }
  }
  return sumaNumerosDos;
}

console.log(addOnlyNums(1, "perro", 6, "gato", 7))
console.log(addOnlyNums(94, "perro", 45, "gato", 80))

//Ejercicio 7

function countTheArgs(...argmts){
  contador = 0;
  for (ag of argmts){
    if (typeof a === "number"){
      contador++;
    }
  }
  return contador;
}

console.log(countTheArgs("perro", "gato"))

//Ejercicio 8

function combineTwoArrays(arrayUno, arrayDos){
    let arrayConcatenado = arrayUno.concat(arrayDos);
    return arrayConcatenado;
}

console.log(combineTwoArrays([1, 2, 3, 4], ["gato", "perro", 22]))

//Ejercicio 9

function onlyUniques(...argumentosDos){
  let elementosUnicos = argumentosDos.filter((n, i, array) => array.indexOf(n) === i);
  return elementosUnicos;
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"))

//Ejercicio 10

function combineAllArrays(...args){
  let arrayCombinado = [].concat(...args)
  return arrayCombinado
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]))
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]))

//Ejercicio 11

function sumAndSquare(...argumentosTres){
  let cuadradoYSuma = argumentosTres.map((elemento) => elemento ** 2)
                                    .reduce((accum, numm) => accum + numm, 0)
  return cuadradoYSuma;
}

console.log(sumAndSquare(1,2,3,4,5,6))
