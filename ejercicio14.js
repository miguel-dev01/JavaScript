/* 
Enunciado Ejercicio 14 -->

Dado un string y un número, repetir el string tantas veces como el número indique.
*/

function RepetirString(texto, numero){

    let result = "";

    for(let i = 0; i < numero; i++){
        result = result + texto;
    }

    return result;
}

console.log(RepetirString("polla", 4))