let arg = Number(prompt('indtast et tal'));
let start = new Date();
let b = isPrime(arg);
let stop = new Date();
let elapsed = stop - start;

document.write('Er tallet et primtal?' + ' ' + isPrime(arg) + ' ' + 'udregning tog' + ' ' + elapsed + ' ' + 'ms');


