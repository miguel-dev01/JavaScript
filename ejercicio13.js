/* 
Enunciado Ejercicio 13 -->
Dado un array, dividirlo en tantas sub-arrays como sea necesario 
basándonos en un número que indique su tamaño.

Dividirlo en arrays de X elementos. 
*/

/* Funcion realizada por mí -->
function DivideArray(array, number){
    let result = [];

    for(let i=0; i < number; i++){
        result = array;
    }

    return result;
}

console.log(DivideArray([10, 20, 30, 40], 2))
*/


function DivideArray(array, number){
    let main_array = [];

    for(let element of array){

        let ultimo = main_array[main_array.length - 1];
        
        if(!ultimo || ultimo.length === number){
            main_array.push([element]);
        }else{
            ultimo.push(element);
        }

        console.log(main_array);
    }
}

DivideArray([10,20,30], 2)