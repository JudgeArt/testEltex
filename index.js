'use strict'

let symbols = "QWERTYUIOADFGHJKLZVBNM1234567890+-_$~";
let counter = {
    firstSymbol: 0,
    secondSymbol: 0,
    defaultSymbol: 0,
    firstSymbolName: '',
    secondSymbolName: ''
}

// 1. Строка случайных символов
let countRandomSymbols = prompt('Введите количество символов');
let rndStr = (randomString(countRandomSymbols));

// 2. Замена букв
let symbol = prompt('Введите символ для замены букв');
rndStr = replaceLetters(symbol, rndStr, counter);

// 3. Замена чисел
symbol = prompt('Введите символ для замены цифр');
rndStr = replaceNumbers(symbol, rndStr, counter);
 
// 4. Рассчитать: количество измененных букв и чисел; неизмененных символов
calcSymbols(rndStr, counter);

//-------------------------------------------------------

// 1. Строка случайных символов
function randomString(N) {
    let string = "";
    for(let i = 0; i < N; i++) {
        string += (symbols[Math.floor(Math.random()*(symbols.length))]);
    }
    console.log('1. Составить строку из случайных символов');
    console.log(string);
    return string;
}

// 2. Замена букв
function replaceLetters (symbol, Str, count) {
    count.firstSymbolName = symbol;
    let bufStr = '';
    for(let i = 0; i < Str.length; i++){
        if ((Number(Str[i]) >= 0 && Number(Str[i]) <= 9) || ('~$_-+'.includes(Str[i]))){
            bufStr += Str[i];            
        }
        else {
            bufStr += String(symbol);
            if(Str[i] === symbol) count.firstSymbol--;
        }
    }
    console.log('2. Заменить буквы');
    console.log(bufStr);
    return bufStr;
}

// 3. Замена чисел
function replaceNumbers(symbol, Str, count) {
    count.secondSymbolName = symbol;
    let bufStr = '';
    for(let i = 0; i < Str.length; i++){
        if (Number(Str[i]) >= 0 && Number(Str[i]) <= 9){
            bufStr += String(symbol);      
            if(Str[i] === symbol) count.secondSymbol--;   
        }
        else {
            bufStr += Str[i];  
        }
    }
    console.log('3. Заменить цифры');
    console.log(bufStr);
    return bufStr;
}

// 4. Рассчитать: количество измененных букв и чисел; неизмененных символов
function calcSymbols(str, counter) {
    for (let i = 0; i < str.length; i++){
        if (str[i] === counter.firstSymbolName) counter.firstSymbol++;
        if (str[i] === counter.secondSymbolName) counter.secondSymbol++;
        if (str[i] !== counter.secondSymbolName && str[i] !== counter.firstSymbolName) counter.defaultSymbol++;
    }
    console.log('Счетчик замены букв:');
    console.log(counter.firstSymbol);
    console.log('Счетчик замены цифр:');
    console.log(counter.secondSymbol);
    console.log('Счетчик неизмененных символов:');
    console.log(counter.defaultSymbol);
}

