class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName
  }

}

// オブジェクト生成
const quill = new Person('Quill');
console.log(quill)