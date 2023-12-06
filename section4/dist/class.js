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
// インスタンス（オブジェクト）生成
const quill = new Person('Quill');
quill.greeting();
const anotherQuill = {
    name: "anotherTaisei",
    greeting: quill.greeting
};
anotherQuill.greeting();
