"use strict";
class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
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
Person.species = 'Homo sapiens';
class Teacher extends Person {
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
console.log(Person.species);
console.log(Person.isAdult(30));
