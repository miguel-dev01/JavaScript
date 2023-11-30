/* 
Enunciado Ejercicio 20 -->
Dadas dos cadenas de texto, crear un algoritmo que compruebe si son dos anagramas entre sí.

Una cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad.

No tener en cuenta símbolos raros, ni puntos, etc...

Ejemplos:
 Anagramas("Miguel", "leugiM") // Devuelve: true
 Anagramas("Mario", "Robles") // Devuelve: false
*/


function Anagramas(cadena1, cadena2) {

    if (cadena1.length != cadena2.length) {
        return false;
    }

    let array1 = cadena1.split("");
    let array2 = cadena2.split("");

    let i = 0;
    let j = array2.length - 1;
    while (i < array1.length) {
        if (array1[i].toLowerCase() != array2[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

result1 = Anagramas("MigueL", "leugiM");
result2 = Anagramas("Mario", "Robles");
result3 = Anagramas("ss", "SS");

console.log(result1);
console.log(result2);
console.log(result3);
