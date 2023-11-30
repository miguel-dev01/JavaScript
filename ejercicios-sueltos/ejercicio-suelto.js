/*
Sacar cuantas veces se repite una vocal en JavaScript
*/

function Vocal(frase){

    contador = 0;
    frase_convertida = frase.toLowerCase();

    for(let i of frase_convertida){
        if(i === "a"){
            contador += 1;
        }
        
    }
    
    return contador;
}

console.log(Vocal("esta frase contiene mAs"))