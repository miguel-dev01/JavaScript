/* 
Dado un array de objetos, de películas (título, director) mostrar todas las pelis
indicando cuales has visto y cuales no.

EJEMPLOS -->


Pasos:
- Crear array con objetos
- Crear funcion que recorra y muestre
*/

function Film(lista){

    for(filmacion of lista){
        let mostrar = `${filmacion.titulo}`;
        
        if(!filmacion.visto){
            console.log("Esta pelicula NO la has visto - ", mostrar);
        }else{
            console.log("Esta pelicula la has visto");
        }
    }
}


const pelis = [
    {
    titulo: "Pelicula de Madrid",
    director: "de director1 ",
    visto: true
    },
    {
    titulo: "Pelicula de Murcia",
    director: "de director2 ",
    visto: false
    }

]

console.log(Film(pelis));