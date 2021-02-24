(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module1");

var demo1 = _interopRequireWildcard(_module);

var _module2 = require("./module2");

var haha1 = _interopRequireWildcard(_module2);

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

var _module5 = require("./module4");

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
汇总
 */
//在es6的模块化规范中 用哪一种方式引入取决于暴露方式
// import {data,demo,test} from "./module1";
//分别暴露另一种
console.log(demo1.data);
// import {demo2,test2} from "./module2";
//统一暴露另一种

demo1.demo();
demo1.test();
haha1.demo2();
haha1.test2();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.sayName();

console.log(_module5.arr);
(0, _module5.bar)();
(0, _module5.foo)();
console.log(_module5.obj);
console.log(_module5.p1);
_module5.p1.sayName();
(0, _module6.default)();
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bar = bar;
exports.foo = foo;

exports.default = function () {
  console.log('没话说了');
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
混合暴露
 */

var arr = exports.arr = [1, 3, 5, 7, 9, 15];
function bar() {
  console.log('-------bar');
}
function foo() {
  console.log('-------foo');
}

var obj = { name: 'hello', age: 18 };

var Per = function () {
  function Per(name, age) {
    _classCallCheck(this, Per);

    this.name = name;
    this.age = age;
  }

  _createClass(Per, [{
    key: 'sayName',
    value: function sayName() {
      console.log(this.name);
    }
  }]);

  return Per;
}();

;
var p1 = new Per('avans', 18);
exports.obj = obj;
exports.p1 = p1;
},{}]},{},[1]);
