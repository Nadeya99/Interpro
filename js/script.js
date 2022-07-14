'use strict';
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('Насколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('Насколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

console.log( NaN || 2 || undefined ); // 2
 
console.log( NaN && 2 && undefined ); //NaN
 
console.log( 1 && 2 && 3 ); //3
 
console.log( !1 && 2 || !3 );  // false
 
console.log( 25 || null && !3 ); //25
 
console.log( NaN || null || !3 || undefined || 5); // 5
 
console.log( NaN || null && !3 && undefined || 5); //5
 
console.log( 5 === 5 && 3 > 1 || 5); //true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}






//Циклы 

let num = 50;
while (num <=50) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
}

let ni = 5;
do {
    console.log(ni);
    ni++;
}
while(ni < 11);

while(ni < 11) {
    console.log(ni);
    ni++; 
}

for (i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } 
    else {
        console.log(i);
    }
}

// Одна задача - два варианта решения

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
    
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
// заполнить массив цифрами от 5 до 10 включительно
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);
return arrayOfNumbers;

// Вложеннность  циклов

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// Пирамида
//*
//**
//***
//****
//*****
//******

let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

//Метки во вложенных циклах 
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

const arr = [3, 5, 8, 16, 20, 23, 50];
let results = [];

for (i = 0; i < arr.length; i++) {
    results[i] = arr[i];
}
console.log(results);
return results;


let data = [5, 10, 'Shopping', 20, 'Homework'];
for (i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    }
    else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} -done`;
    }
}
console.log(data);
return data;

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];

for (let i = 1; i <= data1.length; i++) {
    result1[i - 1] = data1[data1.length - i]
}
console.log(result1);
return result1;  


//вторая пирамида
//      *
//     ***
//    *****
//   *******
//  **********

const lines = 5;
let resulti = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        resulti += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        resulti += "*";
    }
    resulti += "\n";
}

console.log(resulti);

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");

function calc(a, b) {
    return (a + b);
}
console.log(calc(2, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// Функциональное выражение
const logger = function() {
    console.log("Hello World");
};
logger();

// Стрелочная функция
const cilc = (c, d) => {return c + d; };
// Если в одну строчку, можно так
const milc = (c, d) =>  c + d;

// function convert(amount) {
//     console.log(28 * amount);
// }
// convert(500);

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result){
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if(i === 3) return 
    }
    console.log('Done');
}

test();

// Место для первой задачи
function sayHello(name) {
    const say = console.log('Привет,' + name + '!');
    return say;
}

sayHello("Антон");

// Место для второй задачи
function returnNeighboringNumbers(num) {
    const arr = [num - 1, num, num + 1];
    return arr;   
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
// function getMathResult(num, times) {
//     for(let i = 0; i < b;) {
//         let num =console.log(a**b);
//         console.log(num + '---');
//     }
// }
// getMathResult(2, 3);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);