// VARIABLES
// Una variable es un contenendor de información


/*
La principal diferencia que hay entre LET y VAR es que VAR actúa a nivel global en todo 
nuestro fichero JS. y LET actúa solo a nivel local para un determinado bloque de código.
*/


var pais = "España";
var continente = "Europa";
var antiguedad = 2022;

var antiguedad = pais + ' ' + continente;

let prueba = "hola";

// Pruebas y diferencias entre let y var

// Prueba con VAR
var numero = 40;
console.log(numero); // valor 40


if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50


// Prueba con LET
var texto = "Curso JS Miguel Sánchez";
console.log(texto); // Valor es el mismo que texto

if(true){
    let texto = "Curso Python";
    console.log(texto);  // Valor va a ser Curso Python
}

console.log(texto); //valor va a ser Curso JS