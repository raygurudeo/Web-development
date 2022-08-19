

// ===========Pelindrome question=============
// function isPelindrome(str){
//     str = str.replace('/\W/g','').toLowerCase();
//     return (str === str.split('').reverse().join(''));
// }
// console.log(isPelindrome("level"));

// ================= write syntex for below which work same=============
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function sum(x) {                // const sum = (x) => {  --- here we can not use arrow function as arrow function does not support arguments binding , this binding, etc.
//     if(arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     } else {
//         return function(y) { return x+y; };
//     }
// }
// console.log(sum(2,3));
// console.log(sum(3)(3));

// (function(){
//     console.log(a);
//     var a=10;
// })();

function myMemoize(fn, context) {
    const res = {};
    return (...args) => {
        var argsCashe = JSON.stringify(args);
        if(!res[argsCashe]) {
            res[argsCashe] = fn.call(context || this, ...args);
        } else {
            return res[argsCashe];
        }
    }
}


const findSquare = (num1, num2) => {
    for(let i=0; i<=10000000000; i++){}
    return num1*num2;
}

const memoizedFindSquare = myMemoize(findSquare);
console.time("first call");
console.log(memoizedFindSquare(234, 435));
console.timeEnd("first call");

console.time("first call");
console.log(memoizedFindSquare(234, 435));
console.timeEnd("first call");
