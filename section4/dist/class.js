"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    // メソット
    greeting() {
        console.log(`Hello My name is ${this.name}`);
    }
}
// オブジェクト生成
const quill = new Person('Quill');
quill.greeting();
const anotherQuill = {
    name: "anotherTaisei",
    anotherGreeting: quill.greeting
};
anotherQuill.anotherGreeting();
