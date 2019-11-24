'use strict';
// № 1
function fib(n){
    let a = 1, b = 1;
    for( let i = 3; i <= n; i++){
        let c = a + b;
        a = b; b = c;
    }
 return b;
}
console.log(fib(11) );

// №2
let num =0;
let n=1000;
while ( n/=2, n>50){
    num++;
   
console.log(num)

}

console.log('количество итераций'+ num);