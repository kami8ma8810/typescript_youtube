"use strict";
var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -1.5;
var single = 'hello';
var back = "hello";
var person = {
    name: {
        first: 'james',
        last: 'smith',
    },
    age: 21,
};
console.log(person);
var fruits = ['apple', 'banana', 'grape'];
fruits.push('cherry');
console.log(fruits);
var book = ['bussiness', 1500, false];
console.log(book);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
    CoffeeSize[CoffeeSize["NUMBER"] = 100] = "NUMBER";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.NUMBER,
};
console.log(coffee);
console.log(coffee.size);
var anything = true;
anything = ['hello', 33, true];
anything = {};
console.log(anything);
var banana = 'banana';
banana = anything;
console.log(banana);
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
var zero = 0;
var apple = 'apple';
var clothSize;
var cloth = {
    color: 'white',
    size: 'medium',
};
console.log(cloth);
var displaySize = 'small';
var display = {
    weight: 6000,
    size: 'large',
};
console.log(display);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 5));
function sayHello() {
    console.log('hello');
}
console.log(sayHello());
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
console.log(doubleNumber(2));
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(20, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 10;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('this is an error'));
