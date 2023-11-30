/* 
Enunciado Ejercicio 17 -->

Dado un número, mostrar los números de 1 hasta el número.
Pero para múltiplos de tres imprimir "buzz" en lugar del número
y para los múltiplos de cinco imprimir "lightyear".
Para múltiplos de tres y cinco imprimen "Buzzlightyear".

Ejemplos:
buzz(5);

// Devuelve
1
2
buzz
4
lightyear
...
Pasos:
- Crear una función que reciba el número
- Condiciones número actual multiplo de 3 o 5 o ambos
- Crear una función para recorrer y mostrar
- Bucle del 1 al número
*/


function Multiplo(numero){
    let multiplo = "";

    if(numero%3==0 && numero%5===0){
        multiplo = "BuzzLightYear";
    }else if(numero%3==0){
        multiplo = "buzz";
    }else if(numero%5==0){
        multiplo = "lightyear";
    }else{
        return numero;
    }

    return multiplo;
}

//console.log(Multiplo(15));


function Buzz(number){
    for(let i = 1; i <= number; i++){
        console.log(Multiplo(i));
    }
}


//console.log(Buzz(20));

Buzz(20);




console.log("\n" + "--------------------------------------------")


// Solución realizada por mí;
/////////// Esta solucion está inacabada
function FizzBuzz(numerico){
    var result = "";
    
    for(var i = 1; i <= numerico; i++){

        if(i % 3 === 0){
            result += "Buzz";
        }else if(i % 5 === 0){
            result += "LightYear";
        }else{
            return numerico;
        }
    }

    return result;
}

console.log(FizzBuzz(20));