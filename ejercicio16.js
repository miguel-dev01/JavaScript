/* 
Enunciado Ejercicio 16 -->

Dada una cadena de texto, devolver cuantas vocales (a,e,i,o,u) tiene.
*/

// Solución realizada por mí a lo chapucero
function Vocales(text){

    let contador_A = 0;
    let contador_E = 0;
    let contador_I = 0;
    let contador_O = 0;
    let contador_U = 0;
    
    for(vocal of text){
        if(vocal === "a"){
            contador_A += 1;
        }else if(vocal === "e"){
            contador_E += 1;
        }else if(vocal === "i"){
            contador_I += 1;
        }else if(vocal === "o"){
            contador_O += 1;
        }else if(vocal === "u"){
            contador_U += 1;
        }
    }
    console.log(`La vocal A se repite ${contador_A} veces.`)
    console.log(`La vocal E se repite ${contador_E} veces.`)
    console.log(`La vocal I se repite ${contador_I} veces.`)
    console.log(`La vocal O se repite ${contador_O} veces.`)
    console.log(`La vocal U se repite ${contador_U} veces.` + "\n")
}

console.log(Vocales("miiguel"));



///// SOLUCIÓN DEL PROFESOR

function ContarVocales(texto){
    let cadena = texto.match(/[aeiou]/gi);

    return `En este string o cadena de texto hay ${cadena.length} vocales.`;
}

console.log(ContarVocales("migueasddaseeee"));