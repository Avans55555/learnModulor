/*
汇总的文件
 */

let module1=require('./modules/module1');
let module2=require('./modules/module2');
let module3=require('./modules/module3');
let uniq= require('uniq');



console.log(module1);
module1.test();
console.log(module2);
module2.haha();
console.log(module3);
console.log(uniq([1, 2, 8, 4, 4,4,4,45, 3, 7]));