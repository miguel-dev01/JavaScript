/*
Enunciado ejercicio 2

Dada una cadena de texto, comprobar si es un palíndromo o no.
Los políndromos son palabras que se leen igual aun estando invertidas.
Por ejemplo: ana, bob, otto, allivessevilla.
*/

function Separar(texto){
    let invertir = texto.split('').reverse().join('');

    console.log(invertir)

    if(invertir === texto){
        return "Es un palíndromo";
    }else{
        return "No es un palíndromo";
    }
};


console.log("¿Es una palíndromo?" + Separar('otafeesnto'));