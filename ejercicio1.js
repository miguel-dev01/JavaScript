/*
Advertencias:
- Test en cada ejercicio
*/

/*
    Enunciado Ejercicio 1:
    Dado un número, devolver su tabla de multiplicar completa.
*/

// Solución mía

function tablaMultiplicar(numero){
    let linea = `## Tabla de multiplicar del ${numero} ##`;
    console.log(linea);


    for(tabla = 1; tabla <= 10; tabla++){
        console.log(numero, "x", tabla ,"= ", numero*tabla);
    }
}

tablaMultiplicar(5);


// Solución realizada por el profesor
/*
function tablaMultiplicar(numero){
    let resultado = `## Tabla del ${numero} ## \n` ;

    for(let i = 1; i <= 10; i++){
        let multiplicacion = (i*numero);

        resultado += `${i} x ${numero} = ${multiplicacion} \n`;
    }

    return resultado;
}

console.log(tablaMultiplicar(5));
*/
