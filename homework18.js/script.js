'use strict';
// №1
let a ;

if ( a ==='1'){
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


item = (item !=true) ? 'Верно': 'Не верно';
console.log(item);


//#3
if (a > 0 && a < 4){
    console.log('Верно');
}
else{
    console.log(' Не верно');
}

 // №4


let b ;
a = 5; b =10;

if (a > 3 && a < 12 || b >= 7 && b < 15){
    console.log('Верно');
}
else{
    console.log(' Не верно');
}


// №5
let month = prompt( 'введите месяц рождения',' ');


if(month == 12 || month == 1 || month == 2){
    console.log('Зима');


}else if(month == 3 || month <= 5){
    console.log('Весна');
    
}else if(month == 5|| month <= 8){
    console.log('Лето');

}else if(month == 9|| month <= 11){
    console.log('Осень');

}else{
    console.log('Месяц введен не верно!');
}
