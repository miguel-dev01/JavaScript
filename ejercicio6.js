/* 
Enunciado Ejercicio 6 -->
Dibujar un cuadrado hueco con asteriscos:

****
*  *
*  *
****

*/


function ladoArribaAbajo(numero){
    let lado = "";

    for(let i = 1; i < numero; i++){
        lado += "*";
    }

    return lado;
}


function ladoDerechaIzquierda(numero){
    let dibujo = ladoArribaAbajo(numero) + "\n";

    let contenido = "";

    // Filas
    for(let i = 0; i < (numero-2); i++){
        contenido = "*";

        // Contenido hueco
        for(let x = 0; x < (numero-3); x++){
            contenido += " ";
        }

        contenido += "*";

        // Añadir fila al dibujo
        dibujo += contenido + "\n";
    }

    // Lado de abajo
    dibujo += ladoArribaAbajo(numero);

    return dibujo;
}

console.log(ladoDerechaIzquierda(10))