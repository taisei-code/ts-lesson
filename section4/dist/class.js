"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // メソット
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
    }
}
// インスタンス（オブジェクト）生成
const quill = new Person('Quill', 38);
quill.incrementAge();
quill.greeting();
