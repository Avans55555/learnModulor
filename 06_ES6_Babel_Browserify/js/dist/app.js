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