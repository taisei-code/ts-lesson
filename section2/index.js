var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
// オブジェクト
var person = {
    name: 'Jack',
    age: 21
};
// 配列
var fruits = ['Apple', 'Banana', 'Grape'];
// Tuple
var book = ['business', 1500, false];
// Enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// console.log(CoffeeSize.SHORT)
// any
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
// Union
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
// Literal
var apple = 'apple';
var clothSize = 'large';
// 関数
function add(num1, num2) {
    return num1 + num2;
}
// void
function sayHello() {
    // console.log('Hello')
}
// コールバック関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    // console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never
function error(message) {
    throw new Error(message);
}
console.log(error('error'));
