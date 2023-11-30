/* 
Enunciado Ejercicio 11 -->

Dado un texto y una búsqueda, censurar todas las coincidencias de la búsqueda en el texto con 
[-CENSURADO-]

Si texto o búsqueda están vacíos mostrar:
"No puedes leer el texto y la búsqueda" en el caso de que ambos parámetros no lleguen.
*/

function Censura(text, search){

    let result = "";

    if(!text && !search){
        result = "Ha de haber texto y búsqueda.";
    }else if(!text && search){
        result = "Debe haber un texto.";
    }else if(text && !search){
        result = "Debe haber una búsqueda.";
    }else if(text && search){
        result = text.replace(new RegExp(search, 'gi'), "[-CENSORED-]");
    }

    return `${result}` + "\n";
}
console.log(Censura("hola que que hola","que"));

console.log(Censura("que hola que hola que tal","hola"));

console.log(Censura());