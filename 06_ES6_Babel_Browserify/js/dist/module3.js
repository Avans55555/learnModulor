'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
默认暴露 只能暴露一次
 */

exports.default = {
  name: 'kobe',
  age: 18,
  sayName: function sayName() {
    var _this = this;

    setTimeout(function () {
      console.log('\u6211\u53EB' + _this.name + ',\u6211\u7684\u5E74\u9F84\u662F' + _this.age);
    }, 1000);
  }
};