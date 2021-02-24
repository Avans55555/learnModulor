'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo = demo;
exports.test = test;
/*
分别暴露
 */

var data = exports.data = 'avans';

function demo() {
  console.log('我是module1里的函数', data.toUpperCase());
}

function test() {
  console.log('我是module1里的test函数', data.toLowerCase());
}