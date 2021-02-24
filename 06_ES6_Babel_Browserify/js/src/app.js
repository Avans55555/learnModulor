/*
汇总
 */
//在es6的模块化规范中 用哪一种方式引入取决于暴露方式
// import {data,demo,test} from "./module1";
//分别暴露另一种
import * as demo1 from "./module1"
// import {demo2,test2} from "./module2";
//统一暴露另一种
import * as haha1 from"./module2";
import module3 from "./module3";

import module4,{arr,bar,foo,p1,obj} from "./module4";

console.log(demo1.data);
demo1.demo();
demo1.test();
haha1.demo2();
haha1.test2();
console.log(module3.name);
console.log(module3.age);
module3.sayName();

console.log(arr);
bar();
foo();
console.log(obj);
console.log(p1);
p1.sayName();
module4();
