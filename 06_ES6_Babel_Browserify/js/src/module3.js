/*
默认暴露 只能暴露一次
 */

export default {
  name:'kobe',
  age:18,
  sayName(){
    setTimeout(()=>{
      console.log(`我叫${this.name},我的年龄是${this.age}`);
    },1000)
  }

}