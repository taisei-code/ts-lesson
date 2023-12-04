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
console.log(CoffeeSize.SHORT);
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
