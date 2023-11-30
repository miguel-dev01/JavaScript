/* 
Enunciado Ejercicio 10 -->
Dado un número, mostrar una escalera con escalones de "[-]" usando
el número para los niveles de la escalera.
*/
/*--------------------*/
// La función siguiente ha sido realizada por mí
/*
function Escalera(numero){
    let nivel = "";

    for(let i = 1; i <= numero; i++){
        nivel += "[-]" + "\n";

        for(let x = 0; x < i; x++){
            nivel += "[D]";
        }
    }

    return nivel;

}

//Escalera(4)

console.log(Escalera(4));
*/

// Realizado por el profesor
function Escalera_Profesor(numero){

    // Nivel
    for(let i = 1; i <= numero; i++){
        let escalones = "d";

        // Escalon
        for(let x = 1; x <= i; x++){
            escalones += "[-]";

        }

        console.log(escalones);
    }
}


Escalera_Profesor(4)