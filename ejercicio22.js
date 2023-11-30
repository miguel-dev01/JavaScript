/*
 * Enunciado Ejercicio 22
 * Dados dos numeros, indicar cual es mayor y cual es menor
 * 
 */

function MayorMenor(numero1, numero2) {

    let mayor;
    let menor;

    if(typeof numero1 != "number" || typeof numero2 != "number"){
        return "\nNo se puede introducir letras u otros caracteres especiales";
    }

    if(numero1 === numero2 || numero2 === numero1){
        return "\nLos numeros NO pueden ser iguales";
    }

    if (numero1 > numero2) {
        mayor = numero1;
    }

    if (numero1 < numero2) {
        menor = numero1;
    }

    if(numero2 > numero1){
        mayor = numero2;
    }

    if (numero2 < numero1) {
        menor = numero2;
    }

    return "\nEl numero mayor es " + mayor + " y el numero menor es " + menor;

}

number1 = 5;
number2 = 10;

//console.log(typeof number1);
//console.log(typeof number2);

console.log(MayorMenor(number1, number2));