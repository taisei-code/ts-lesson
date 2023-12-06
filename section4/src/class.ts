class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName
  }

  // メソット
  greeting(this: { name: string }) {
    console.log(`Hello My name is ${this.name}`)
  }

}

// オブジェクト生成
const quill = new Person('Quill');
quill.greeting()

const anotherQuill = {
  name: "anotherTaisei"
  anotherGreeting: quill.greeting
}

anotherQuill.anotherGreeting()