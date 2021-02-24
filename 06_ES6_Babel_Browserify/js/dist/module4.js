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