/*
分别暴露
 */
//私密arr
let arr=[1,3,5,7,9];
function demo2(){
  console.log('我是module2里的函数',arr)
}

function test2(){
  console.log('我是module2里的test2函数',arr)
}

export {demo2,test2}