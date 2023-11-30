/* 
Enunciado Ejercicio 12 -->
Dado un número mostrar todos los números desde ese al 0 de 8 en 8,
en una lista con guiones donde cada número debe empezar por nº
*/

// Solución realizada por MI
function HastaCero(number){
    let encabezado = `Rango del ${number} al 0` + "\n";
    console.log(encabezado);

    for(let i=number; i >= 0; i-=8){
        console.log("- nº" + i);
    }

    let fin = "--FIN--";
    console.log(fin + "\n");

}

HastaCero(100)


// Solución del profesor
function hastacero(numero){
    let resultado = `---- Del ${numero} al 0 ---- \n`;

    while(numero >= 0){
        resultado += `- nº ${numero} \n`;
        numero -= 8;
    }

    resultado += "---- FIN ----";

    return resultado;
}

console.log(hastacero(100))