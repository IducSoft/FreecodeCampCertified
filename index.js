

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

    let penny = cid[0][1],
        nickel = cid[1][1],
        dime = cid[2][1],
        quarter = cid[3][1],
        one = cid[4][1],
        five = cid[5][1],
        ten = cid[6][1],
        twenty = cid[7][1],
        oneHundre = cid[8][1];
    // console.log(penny, nickel, dime, quarter, one, five, ten, twenty, oneHundre)
    
    if(change > montoEnCaja) return {status: "INSUFFICIENT_FUNDS", change: []}
    if(change === montoEnCaja) return {status: "CLOSED", change:[...cid]}

    // aqui debe ir el ultimo fragmento de mi codigo para completar el curso y obtener mi certificado de freecodecamp
    
    for (const iterator of arrayReverse) {
        
        if(iterator[0] === "ONE HUNDRED" && monto + 100 <= change){

            let arrayPrice = ["ONE HUNDRED", 0];

            while (monto + 100 <= change && oneHundre > 0){

                monto += 100;
                oneHundre -= 100;
                arrayPrice[1] += 100;
            }

            arrResult.push(arrayPrice)
        }else if(iterator[0] === "TWENTY" && monto + 20 <= change){

            let arrayPrice = ["TWENTY", 0];

            while (monto + 20 <= change && twenty > 0){

                monto += 20;
                twenty -= 20;
                arrayPrice[1] += 20;
            }

            arrResult.push(arrayPrice)
        }else if(iterator[0] === "TEN" && monto + 10 <= change){

            let arrayPrice = ["TEN", 0];

            while (monto + 10 <= change && ten > 0){

                monto += 10;
                ten -= 10;
                arrayPrice[1] += 10;
            }
            arrResult.push(arrayPrice)

        }else if (iterator[0] === "FIVE" && monto + 5 <= change){

            let arrayPrice = ["FIVE", 0];

            while (monto + 5 <= change && five > 0){

                monto += 5;
                five -= 5;
                arrayPrice[1] += 5;
            }
            arrResult.push(arrayPrice)
        }else if(iterator[0] === "ONE" && monto + 1 <= change){

            let arrayPrice = ["ONE", 0];

            while (monto + 1 <= change && one > 0){

                monto += 1;
                one -= 1;
                arrayPrice[1] += 1;
            }
            arrResult.push(arrayPrice)
        }else if(iterator[0] === "QUARTER" && monto + 0.25 <= change){

            let arrayPrice = ["QUARTER", 0];

            while (monto + 0.25 <= change && quarter > 0){

                monto += 0.25;
                quarter -= 0.25;
                arrayPrice[1] += 0.25;
            }
            arrResult.push(arrayPrice)
        }else if(iterator[0] === "DIME" && monto + 0.1 <= change){

            let arrayPrice = ["DIME", 0];

            while (monto + 0.1 <= change && quarter > 0){

                monto += 0.1;
                dime -= 0.1;
                arrayPrice[1] += 0.1;
            }
            arrResult.push(arrayPrice)
        }else if(iterator[0] === "NICKEL" && monto + 0.05 <= change){

            let arrayPrice = ["NICKEL", 0];

            while (monto + 0.05 <= change && nickel > 0){

                monto += 0.05;
                nickel -= 0.05;
                arrayPrice[1] += 0.05;
            }
            arrResult.push(arrayPrice)
        }else if(iterator[0] === "PENNY" && monto + 0.01 <= change){

            let arrayPrice = ["PENNY", 0];

            while (monto + 0.01 <= change && penny > 0){

                monto += 0.01;
                penny -= 0.01;
                arrayPrice[1] += 0.01;
            }
            arrResult.push(arrayPrice)
        }
    }

    return {status: "OPEN", change: arrResult};
    
}
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))


// Este codigo es para hackerRank



