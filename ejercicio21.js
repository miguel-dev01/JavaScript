/*
 * Enunciado Ejercicio 21: 
 * Dada una cadena de texto y numero, recortar el string mostrando los X 
 * primeros caracteres.
 * 
 * Ejemplo: 
 * recortar('Cursos Desarrollo Web', 6) // Devuelve 'Cursos'
 */

function Recortar(text, number) {

    return text.substring(0, number);

} // cierre Recortar()


console.log(Recortar("Cursos Desarrollo Web", 6));