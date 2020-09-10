/*
const isPrime = function (arg) {
    for (var i = 2; i < arg; i += 1) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}
*/


const isPrime = function (arg) {
    for(let i = 3; i < Math.sqrt(arg); i += 2) {
        if (arg % i === 0) {
            return false;
        }
    }
 return true;
}
// let x = 6*i-1
// let y = 6*i+1 
// når man når kvadratroden kan man holde op med at dividere
// Math.sqrt(arg) 