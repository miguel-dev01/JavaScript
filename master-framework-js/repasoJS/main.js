var nombre = "Miguel Sánchez";
var altura = 180;

var concatenacion = nombre + " " + altura;

/* Lo siguiente queda comentado para ser añadido en la función MuestraMiNombre
var datos = document.getElementById("datos")
datos.innerHTML = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;
*/

/* Condicionales a continuación */
/* Ponemos un mas igual (+=) al innerHTML porque si no te machaca lo anterior, y queremos que se mantenga todo lo anterior */


if(altura >= 190){
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`;
}

for(var i = 0; i <= 2020; i++){
    // Bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: </h2>" + i;
}

function MuestraMiNombre(nombre, altura){
    var misDatos = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function Imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Miguelon", 200);
}

Imprimir();

// Definir Array en JavaScript
var nombres = ["Miguel", "Maria", "Markus", "Angel"];
// alert(nombres[2]);


// length quiere decir en este caso si (i) es mayor a la LONGITUD TOTAL DEL ARRAY
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
};

var coche = {
    modelo: 'Audi R8',
    velocidad_maxima: 500,
    antiguedad: 2022,
    mostrarDato(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedades: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>")
coche.mostrarDato();


var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos";

        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }

    }, 2000);
});

// Lo que hará esto será esperarse unos 2 segundos, y se ejucutará "saludar".
saludar.then(resultado => {
    alert(resultado);
})
.catch(err =>{
    alert(err);
})
