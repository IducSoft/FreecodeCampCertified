

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





function rot13(str) {

    // LA siguiente funcionalidad es para crear el cifrado cesar rot13

    let string = str.toLowerCase(),
        strResult = "";
    let array1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        array2 = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m"]    
  
    for(let i=0; i<string.length; i++){
  
      if(!string[i].match(/[^a-z]/gi)){
        
        let indexLetter = array1.indexOf(string[i]);
        strResult += array2[indexLetter];
      }else{

        strResult += string[i];
      }
    }
    return strResult.toUpperCase();
}



// Vamos a programar una caja registradora 

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let arrayReverse = cid.reverse();
    let montoEnCaja = 0;
    let monto = 0;
    let arrResult = [];
    cid.forEach(element => {
        // console.log(element)
        if(element[1] !== 0){
            montoEnCaja = element[1] + montoEnCaja;
        }
    });

    // let penny = cid[0][1],
    //     nickel = cid[1][1],
    //     dime = cid[2][1],
    //     quarter = cid[3][1],
    //     one = cid[4][1],
    //     five = cid[5][1],
    //     ten = cid[6][1],
    //     twenty = cid[7][1],
    //     oneHundre = cid[8][1];
    // console.log(penny, nickel, dime, quarter, one, five, ten, twenty, oneHundre)
    
    if(change > montoEnCaja) return {status: "INSUFFICIENT_FUNDS", change: []}
    if(change === montoEnCaja) return {status: "CLOSED", change:[...cid]}

    // aqui debe ir el ultimo fragmento de mi codigo para completar el curso y obtener mi certificado de freecodecamp
    


    return change;
    
}
  
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))


// Este codigo es para hackerRank



