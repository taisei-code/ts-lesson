let hasValue: boolean = false;

let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12

let single: string = 'hello';
let double: string = "hello"
let back: string = `hello`;

// オブジェクト
const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}

// 配列
const fruits: string[] = ['Apple', 'Banana', 'Grape']

// Tuple
const book: [string, number, boolean] = ['business', 1500, false]

// Enum
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

console.log(CoffeeSize.SHORT)

// any
let anything: any = true
anything = 'hello';
anything = ['hello', 33, true];
anything = {};

// Union
let unionType: number | string = 10;
unionType = 'hello'

let unionTypes: (number | string)[] = [21, 'hello']

// Literal
const apple: 'apple' = 'apple'

// let clothSize: 'small' | 'medium' | 'large' = 'small'

// typeエイリアス
type ClothSize = 'small' | 'medium' | 'large'

let clothSize: ClothSize = 'large';