/**
 * Ejercicio 23
 * Dada una cadena de texto, poner en mayuscula la primera letra
 * de cada palabra en la cadena y luego devolver la cadena.
 * 
 **/

function FirstLetter(text){

    let result = "";

  //let cortar = new Array();
    let cortar = text.split(" ");
    let slicear;

    for(let i = 0; i < cortar.length; i++){
        slicear = cortar[i].slice(1);
        result += cortar[i].charAt(0).toUpperCase() + slicear + " ";
    }

    return result;

}

text1 = "me gusta la programacion";
text2 = "la tecnologia git es muy util";

console.log(FirstLetter(text1));
console.log(FirstLetter(text2));