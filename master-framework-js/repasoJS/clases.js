var clases = document.getElementById("clases");

clases.innerHTML=`
    <hr/>
    <h1>CLASES</h1>
    <hr/>
`;

class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del autobus es: "+this.altura;
    }
}

var autobus1 = new Autobus('SCANIA', 150, 2014);
console.log(autobus1);
console.log(autobus1.mostrarAltura);



var coche1 = new Coche('Mercedes', 250, 2017);
var coche2 = new Coche('Audi', 300, 2015);
var coche3 = new Coche('Tesla', 450, 2021);

document.write("<h1> Velocidad:"+coche1.velocidad+"</h1>")
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.reducirVelocidad();

console.log(coche1);