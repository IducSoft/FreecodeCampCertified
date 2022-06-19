function palindrome(str) {

    // La siguiente funcion determina si una cadena de texto pasada como parametro es un palindromo

    let strWithout = str.replace(/[^0-9a-z]/gi, '').toLowerCase(),
        arrayFirst = strWithout.split(""),
        arraySecond = [];
    
    for (const key of arrayFirst) {
        
        arraySecond.unshift(key)
    }

    // Bucle tradicional

    for (let index = 0; index < arrayFirst.length; index++) {
        const elementFirst = arrayFirst[index],
            elementSecond = arraySecond[index];

        if(!(elementFirst === elementSecond)) {

            // console.log("son iguales", elementFirst, elementSecond)
            return false;
        }
    }
    
    return true;
}

// Este algoritmo funciona correctamente
  
palindrome("never odd or even")