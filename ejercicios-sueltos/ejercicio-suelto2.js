// Solución realizada del EJERCICIO 12, probando...

function HastaCero(number){
    let result = `Rango del ${number} al 0` + "\n";

    for(let i=number; i >= 0; i-=8){
        result += "- nº " + i + "\n";
    }

    result += "---- FIN ----";

    return result;

}

console.log(HastaCero(100));