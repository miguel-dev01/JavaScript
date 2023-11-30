/*
Enunciado Ejercicio 5
¿Cuanto es el X por cierto de X número?
*/


function TantoPorCiento(percentaje, number){
    
    let result = percentaje * number / 100;
    
    return `El porcentaje ${percentaje}% de ${number} es: ${result}.`
}

console.log(TantoPorCiento(20, 100))

console.log(TantoPorCiento(43, 897))
