/*
混合暴露
 */

export let arr=[1,3,5,7,9,15];
export function bar(){
  console.log('-------bar');
}
export function foo() {
  console.log('-------foo');
}

 let obj={name:'hello',age:18};
 class Per {
   constructor(name,age) {
     this.name=name;
     this.age=age;
   }
   sayName(){
     console.log(this.name)
   }
 };
 let p1 = new Per('avans',18);
 export {obj,p1};

 export default function (){
   console.log('没话说了')
 }