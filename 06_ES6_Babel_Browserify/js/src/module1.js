/*
分别暴露
 */

export let data='avans';

export function demo(){
  console.log('我是module1里的函数',data.toUpperCase())
}

export  function test(){
  console.log('我是module1里的test函数',data.toLowerCase())
}

