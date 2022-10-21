

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
  
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))


// Este codigo es para hackerRank


function diagonalDifference(arr) {
    // Lo primero es determinar cual es la longitud mas grande de un array en la matriz.

    let long = 0,
        arrayInsert=[],
        resultFirstDiagonal = 0,
        resultSecondDiagonal = 0;


    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.length >= long) {
            long = element.length;
        }
    }
    // ahora vamos a insertar en el arreglo los elementos que poseen la misma longitud de long
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.length == long) arrayInsert.push([...element]) 
    }

    

    // Aqui estamos recorriendo la segunda diagonal y primera diagonal

    for(let i = 0;i<arrayInsert.length;i++){
        for(let j = 0;j<arrayInsert[i].length;j++){
            if(i==j){
                resultFirstDiagonal += arrayInsert[i][j];
            }
            
            if(i+j == arrayInsert.length - 1){
                resultSecondDiagonal += arrayInsert[i][j];
            }
        }
    }

    if(resultFirstDiagonal - resultSecondDiagonal < 0) return (resultFirstDiagonal - resultSecondDiagonal) * -1;

    return resultFirstDiagonal - resultSecondDiagonal;
}




// let matrix = [[3], [11, 2, 4,5], [4, 5, 6,6], [10, 8, -12,7], [10, 8, -12,7], [3,45]];


// console.log(diagonalDifference(matrix))




// Otro problemas para resolver en hackerRank


function plusMinus(arr) {
    // Write your code here


    let base = arr.length;

    let positivos = 0,
        negativos = 0,
        ceros = 0;
    

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(element > 0){

            positivos += 1;
        }else if(element < 0){

            negativos += 1;
        }else if(element === 0){

            ceros += 1;
        }
        
    }

    let proPo = positivos / base,
        proNe = negativos / base,
        proCe = ceros / base;

    console.log(proPo.toFixed(6))
    console.log(proNe.toFixed(6))
    console.log(proCe.toFixed(6))


}

// plusMinus([0, 100, 35, 0, 94, 40, 42, 87, 59, 0])

// Sigamos resolviendo problemas en hackerRank


function staircase(n) {
    // Write your code here


    let iterator = 1;
    let text = "";


    while(iterator <= n){

        for (let index = 1; index <= iterator; index++) {
            
            text += "#";
            
        }

        console.log(text);
        text="";
        iterator += 1;
    }


}

// staircase(20)

// Sigamos con mas problemas en hackerRank


function miniMaxSum(arr) {
    // Write your code here

    let newArr = [];

    // Este trozo de codigo permite crear las suma de los elemtentos
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        // console.log(element);
        let resultSum = 0;
        
        for (let j = 0; j < arr.length; j++) {
            
            if(element !== arr[j]){
                // console.log(arr[j]);
                resultSum += arr[j];
            }
            
        }

        newArr.push(resultSum);
    }

    // Ahora vamos a calcular el valor mas pequeño del arreglo
    let min = newArr[0],
        max = newArr[0];

    for (let index = 0; index < newArr.length; index++) {
        const element = newArr[index];
        
        if(min > newArr[index]){

            min=newArr[index];
        }

        if (max < newArr[index]) {
            max = newArr[index];
        }   
    }

    console.log(min, max);

}


// miniMaxSum([5,5,5,5,5])

// Sigamos con mas ejercicios de hackerRank

function birthdayCakeCandles(candles) {
    // Write your code here

    let lengthMaxCandles = candles[0],
        maxCandlesSizes = 0;

    // Este bucle es para determinar el entero de mayor tamaño en el arreglo
    for (let index = 0; index < candles.length; index++) {
        const element = candles[index];
        
        // console.log(element);

        if (element >= lengthMaxCandles) {
            
            lengthMaxCandles = element;
        }
    }


    // El siguiente bucle sirve para ver cuantas veces se repite el entero de mayor tamaño

    for (let index = 0; index < candles.length; index++) {
        const element = candles[index];
        
        if(element === lengthMaxCandles){

            maxCandlesSizes += 1;
        }
    }
    

    console.log(lengthMaxCandles, maxCandlesSizes);
    return maxCandlesSizes;

}

// birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36])


function timeConversion(s) {
    // Write your code here
    
    // El siguente algoritmo toma una hora en formato 12 horas AM/PM y la devuelve en formato de 24 horas
    let hour = s;
    let format12 = /pm|PM/;

    if(hour.match(format12)) {
        
        let horaMilitar = parseInt(hour.substring(0, 2)) + 12;
        
        // console.log(hour.substring(0, hour.length - 2), horaMilitar)

        return `${horaMilitar === 24 ? "12"  : horaMilitar}${hour.substring(2, hour.length - 2)}`;
    }

    let hora12 = hour.substring(0, 2) === "12" ? "00" : hour.substring(0, 2);


    return `${hora12}${hour.substring(2, hour.length - 2)}`;

    
}


// console.log(timeConversion("12:05:45AM"))


// sigamos con mas ejercicios de hackerrank


function gradingStudentsFun(grades) {
    // Write your code here
    

    if(grades < 40) return grades;

    let siguienteMultiplo5Nota = grades,
        bandera = true;

    while(bandera){

        if(siguienteMultiplo5Nota % 5 == 0){

            bandera = false;
        }else{

            siguienteMultiplo5Nota ++;
        }
    }

    if(siguienteMultiplo5Nota - grades < 3){

        return siguienteMultiplo5Nota;
    }

    return grades;
}

// console.log(gradingStudents(57))



// Funcion que cuenta las manzanas y naranjas que caen en la casa de sam

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    let samRangeHouse = [s,t],
        appleTreeLocation = a,
        orangesTreeLocation = b,
        applesInSamHouse = 0,
        orangesInSamHouse = 0;

    // En este primer bucle vamos a ver cuantas manzanas cayeron el la casa de sam

    for (let index = 0; index < apples.length; index++) {
        const element = apples[index] + appleTreeLocation;
        // console.log(element)

        

        if (samRangeHouse[0] <= element && element <= samRangeHouse[1])  {
            
            applesInSamHouse ++;
        }
        
    }

    // En este segundo bucle vamos a ver cuantas naranzas cayeron en la casa de sam

    
    for (let index = 0; index < oranges.length; index++) {
        const element = oranges[index] + orangesTreeLocation;

        if (samRangeHouse[0] <= element && element <= samRangeHouse[1]) {
            
            orangesInSamHouse++;
        }
        
    }

    console.log(applesInSamHouse, orangesInSamHouse);

}

// countApplesAndOranges(2,3, 1, 5, [2], [-2])


// Vamos con otro algoritmo de ordenaciòn.

function hourglassSum(arr) {
    // Write your code here

    // Variables
    let rangeMinFil=0, rangeMaxFil=2, rangeMinCol=0, rangeMaxcol=2;

    // Arrays

    let arrMajor = [];
    let arrResult = [];
    let numberPerCadaArreglo =0;
        
    

    // El siguiente codigo sirve para separar los 16 relojes de arena de la matriz principal

    while (rangeMaxFil <= 5) {

        rangeMaxcol=2;
        rangeMinCol=0;
        
        while(rangeMaxcol <= 5){

            let arrManor=[];

            for (let i = rangeMinFil; i<= rangeMaxFil; i++) {

              for (let j = rangeMinCol; j <= rangeMaxcol; j++) {

                const element = arr[i][j];
                // console.log(element)
                arrManor.push(element);
                
              }
            }
            rangeMaxcol++;
            rangeMinCol++;

            arrMajor.push(arrManor);
            
        }
        rangeMaxFil++;
        rangeMinFil++;

        
    }

    // Ahora vamos determinar cual es el reloj de arena con el valor mayor

    for (let i = 0; i < arrMajor.length; i++) {
        
        numberPerCadaArreglo =0;
        
        for (let j = 0; j < arrMajor[j].length; j++) {

            let index = j;
            const element = arrMajor[i][j];

            
            if(index !== 3 && index !== 5){

                numberPerCadaArreglo = numberPerCadaArreglo + element;
            }


            
            
        }

        arrResult.push(numberPerCadaArreglo)
        
    }


    

    

    return Math.max(...arrResult);

    // el codigo funciona.

    

}

// hourglassSum([[-9,-9,-9,1,1,1],  [0,-9,0,4,3,2],  [-9,-9,-9,1,2,3],  [0,0,8,6,6,0],  [0,0,0,-2,0,0],  [0,0,1,2,4,0]])

// Continuamos con hackerRank


function rotateLeft(d, arr) {
    // Write your code here

    function determinateIndex(index, long, rot){

        let nextIndex = index;

        for (let i = 0; i < rot; i++) {
            nextIndex --;
            if(nextIndex < 0){

                nextIndex = long;
            }
            
        }


        return nextIndex;
    }


    let arrRotated = new Array(arr.length),
        lastIndex = (arr.length - 1);

    for (let index = 0; index < arr.length; index++) {
        
        let elementToRotate = arr[index]
        arrRotated[determinateIndex(index, lastIndex, d)] = elementToRotate;
        
    }

    return arrRotated;
    
    
}

console.log(rotateLeft(10, [41, 73, 89 ,7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]))
