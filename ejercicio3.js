/*
Enunciado Ejercicio 3

Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parámetros de una función.

Pasos:
-   Función con dos parametros
-   Poner string en minúsculas y limpiarlo
-   Comprobar si la búsqueda está incluida en la frase
-   Crear un array de palabras de la frase
-   Mapear esas palabras y hacer un contador de cada una
-   Devolver el contador de la búsqueda
*/

function Coincidencias(frase, busqueda){
    let convertir_minusculas = frase.toLowerCase().replace(/[!¡.,-]/gi,'');
    let contador = 0;


    if(convertir_minusculas.includes(busqueda)){

        let palabras = convertir_minusculas.split(" ");
        let mapa = {};

        for(let palabra of palabras){

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }

        contador = mapa[busqueda];

    }else{
        contador = 0;
    };

    return contador;

}

console.log(
    "Número de coincidencias: ",
    Coincidencias('Hola java java', 'java')
);


// INCLUDES lo que hace es buscar si dentro de una variable o string está incluido aquello que le indiquemos.
/*
Principal diferencia entre FOR IN y FOR OF -->
FOR IN significa que por cada iteración lo que devolverá el bucle será el número del ÍNDICE de ese array.
FOR OF significa que por cada iteración lo que devolverá será el STRING tal cual está en una cadena.
*/