'use strict';
// №1
let d ;

if (d ==='1'){
    console.log('Верно');
}
else{
    console.log(' Не верно');
}

// №2

let item = false;

if (item != true){
    console.log('Верно');
}
else{
    console.log(' Не верно');
}

console.log( item == false); 
console.log( item == true); 



// №3
let c ;

if (c > 0 && c < 4){
    console.log('Верно');
}
else{
    console.log(' Не верно');
}

 // №4
let a ;
let b ;

if (a > 3 || a < 12){
    console.log('Верно');
}
else if(b >= 7 || b < 15 ){
    console.log('Верно');
}
else{
    console.log(' Не верно');
}

// №5
let month;
month = '4';

if(month < 4 ){
    console.log('Зима');
}else if(month > 3 && month < 7 ){
    console.log('Весна');
}else if(month > 6 && month < 10){
    console.log('Лето');
}else{
    console.log('Осень');
}
