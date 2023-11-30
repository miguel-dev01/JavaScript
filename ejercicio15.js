/* 
Enunciado Ejercicio 15 -->

Dada una cadena de texto o string, devolver el carácter más usado.
*/


function MasUsado(text){
    let letters = {};
    let numero_maximo = 0;
    let letra_mas_repetida = "";
    
    for(let letter of text){

        if(letters[letter]){
            letters[letter]++;
        }else{
            letters[letter] = 1;
        }
    }

    console.log(letters);

    for(let letra in letters){
        
        if(letters[letra] > numero_maximo){
            numero_maximo = letters[letra];
            letra_mas_repetida = letra;
        }
    }

    return `La letra más repetida de "${text}" es:  ${letra_mas_repetida}`;
}

console.log(MasUsado("JavaScript se usa en aplicaciones web"));

//MasUsado("miiguel")
