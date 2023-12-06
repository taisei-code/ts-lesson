class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName
  }

  // メソット
  greeting(this: Person) {
    console.log(`Hello My name is ${this.name}`)
  }

}

// インスタンス（オブジェクト）生成
const quill = new Person('Quill');
quill.greeting()

const anotherQuill = {
  name: "anotherTaisei",
  greeting: quill.greeting
}

anotherQuill.greeting()