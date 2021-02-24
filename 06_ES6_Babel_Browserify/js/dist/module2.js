'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
分别暴露
 */
//私密arr
var arr = [1, 3, 5, 7, 9];
function demo2() {
  console.log('我是module2里的函数', arr);
}

function test2() {
  console.log('我是module2里的test2函数', arr);
}

exports.demo2 = demo2;
exports.test2 = test2;