/* 
Enunciado Ejercicio 8:
Dado un número entero, inviértelo y devuelve de nuevo el entero
*/

function InvertirEntero(number){
    let invert = number.toString().split('').reverse().join('');
    
    return invert;
}

console.log("El número invertido es", InvertirEntero(467))