/*
Enunciado Ejercicio 4
Dada una cadena de texto, darle la vuelta e invertir el orden de sus carácteres, sin usar métodos
propios del lenguaje, solo estructuras de control.

*/

function Invertir(texto){

    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }

    return invertido;

}

console.log(Invertir("miguel"))


// Otra solución
function Invertir2(cadena){
    return cadena.split("").reverse().join("");
}

console.log(Invertir2("miguel2"))