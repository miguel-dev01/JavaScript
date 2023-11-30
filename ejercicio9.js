/*
Enunciado Ejercicio 9 -->
Dados dos arrays, devolver array con solo los elementos comunes entre ambos.

Pasos:
- Función que reciba dos arrays
- Filtrar array y evaluando una condición
- Devolver array nuevo
*/


function ElementosComunes(array1, array2){
    const filtrado = array1.filter(elemento => {return array2.includes(elemento);});

    console.log(filtrado);
}

ElementosComunes([3,4,5,7], [1,2,4])