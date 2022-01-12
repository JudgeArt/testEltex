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
let char = prompt('Введите символ для замены букв');
let stringReplaceLetters = replaceLetters(char, rndStr);

// 3. Замена чисел
let number = prompt('Введите символ для замены цифр');
let stringReplaceNumbers = replaceNumbers(number, stringReplaceLetters);
 
// 4. Рассчитать: количество измененных букв и чисел; неизмененных символов
calcSymbols(stringReplaceNumbers, counter);

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
function replaceLetters (letter, Str) {
    counter.firstSymbolName = letter;
    let bufStr = '';
    for(let i = 0; i < Str.length; i++){
        if ((Number(Str[i]) >= 0 && Number(Str[i]) <= 9) || ('~$_-+'.includes(Str[i]))){
            bufStr += Str[i];            
        }
        else {
            bufStr += String(letter);
        }
    }
    console.log('2. Заменить буквы');
    console.log(bufStr);
    return bufStr;
}

// 3. Замена чисел
function replaceNumbers(numb, Str) {
    counter.secondSymbolName = numb;
    let bufStr = '';
    for(let i = 0; i < Str.length; i++){
        if (Number(Str[i]) >= 0 && Number(Str[i]) <= 9){
            bufStr += String(numb);         
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
        if (('~$_-+'.includes(str[i]))) counter.defaultSymbol++;
    }
    console.log(counter.firstSymbol);
    console.log(counter.secondSymbol);
    console.log(counter.defaultSymbol);
}

