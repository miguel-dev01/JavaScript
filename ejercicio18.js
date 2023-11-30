/* 
Enunciado Ejercicio 18 -->

Dado un número, mostrar todos sus números divisores.

Ejemplo:
mostrarDivisores(5);

// Devuelve
1
5



Pasos:
- Función que compruebe qué números divisores tiene.
- Función que recorra y muestre.
*/

/// Lo que he hecho yo
function Divisores1(number){
    
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            console.log(i);
        }
    }
}

Divisores1(20);



// Otra solución siguiendo los pasos del profesor
function Divisores(numerito, divisor){
    if(numerito % divisor === 0){
        return divisor;
    }else{
        return 0;
    }
}

//console.log(Divisores(10, 5));
function MostrarDivisores(number){
    for(let i = 0; i <= number; i++){
        let result = Divisores(number,i);

        if(result){
            console.log(result);
        }
    }
    
    return result;
}


//console.log(MostrarDivisores(10));