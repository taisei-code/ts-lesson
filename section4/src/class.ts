class Person {
  name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName
    this.age  = initAge
  }

  // メソット
  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello My name is ${this.name}. I am ${this.age} years old`)
  }

}

// インスタンス（オブジェクト）生成
const quill = new Person('Quill', 38);
quill.incrementAge()
quill.greeting()

