'use strict';

// console.log(process.argv);
/*let total = 0;
for (let i = 2; i < process.argv.length; i++) {
  total += Number(process.argv[i]);
}

console.log(total);*/
const [a,b, ...rest] = process.argv;
console.log(rest.reduce((t, n) => t + Number(n), 0));