/* 
Enunciado Ejercicio 7:
Dados dos números, devolver cuantos números IMPARES hay entre ellos.
*/

function NumerosImpares(numero1, numero2){
    let contador = 0;

    while(numero1 < numero2){

        if(numero1%2 !== 0){
            contador++;
        }

        numero1++;
    }

    return "En el rango indicado hay " + contador + " numeros pares";
}

console.log(NumerosImpares(0, 25));


function NumerosImpares2(numero1, numero2){
    console.log("\n")

    while(numero1 < numero2){
        if(numero1 % 2 !== 0){
            console.log(numero1 + " Es impar");
        }

        numero1++;
    }
}

NumerosImpares2(20, 30)