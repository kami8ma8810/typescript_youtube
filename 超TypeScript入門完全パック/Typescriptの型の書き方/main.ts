let hasValue = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -1.5;
let single: string = 'hello';
let back: string = `hello`;

const person = {
  name: {
    first: 'james',
    last: 'smith',
  },
  age: 21,
};
console.log(person);

// 配列の型注釈
const fruits: string[] = ['apple', 'banana', 'grape'];
fruits.push('cherry');
console.log(fruits);

// 配列内の型の順番を決めたい場合
const book: [string, number, boolean] = ['bussiness', 1500, false];
// book[1]= 'magagine'//numberではないのでエラーになる
console.log(book);

// 列挙型について（コーヒーのサイズを固定したい場合）
enum CoffeeSize { //enum…enumeration（列挙）文字列でなくてもよい
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI',
  NUMBER = 100,
}
const coffee = {
  hot: true,
  // size: CoffeeSize.short,//特定の４つと一致しないのでエラー
  size: CoffeeSize.NUMBER,
};
console.log(coffee);
console.log(coffee.size);

// any型について（なんでも許容 ※できるだけ使わない
let anything: any = true;
anything = ['hello', 33, true];
anything = {};
console.log(anything);
let banana: any = 'banana';
banana = anything;
console.log(banana); //1

// ユニオン型（複数の型
let unionType: number | string = 10;
unionType = 'hello'; //stringなのでOK
// unionType = true//booleanなのでエラー
let unionTypes: (number | string)[] = [21, 'hello'];

// リテラル型（特定の値のみを扱う
const zero: 0 = 0; //appleではないのでエラー
const apple: 'apple' = 'apple'; //appleではないのでエラー
// const apple:'apple'= 'hello'//appleではないのでエラー
// ※「const」を使うことで自動的にリテラル型になる

// 実践的な使い方
let clothSize: 'small' | 'medium' | 'large';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: 'medium',
};
console.log(cloth);

// タイプエイリアス（別名、置き換え）。変数、定数みたいな使い方ができる
type DisplaySize = 'small' | 'medium' | 'large';
let displaySize: DisplaySize = 'small';
const display: {
  weight: number;
  size: DisplaySize;
} = {
  weight: 6000,
  size: 'large',
};
console.log(display);

// 関数に型をつける
function add(num1: number, num2: number): number {
  //※戻り値は型推論できるが、引数は必ず型が必要。だけど基本は指定する
  return num1 + num2;
}
console.log(add(10, 5));

// 何も返さない場合はvoidをつかう（undefined型、は存在するが滅多に使わない）
//ただしTypeScriptはundefined型で指定はできない
function sayHello(): void {
  console.log('hello');
}
console.log(sayHello());

// 関数を保持する定数・変数の型注注釈（アローを使う
const anotherAdd: (n1: number, n2: number) => number = function (
  num1: number,
  num2: number
): number {
  return num1 + num2;
};
const doubleNumber: (number: number) => number = (num) => num * 2;
console.log(doubleNumber(2));

// コールバック関数の型定義
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  //cbは引数がnumber、返り値がnumberの関数ということ
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(20, (doubleNum) => {
  return doubleNum;
});

// unknown型（unknown型は使うときに型を指定すれば使えるもの
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 10;
// text = unknownInput;
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// エラーの関数を定義しておいて、プロジェクト全体でエラーの処理を統一する方法はよくある
// never型は何も返さない場合
function error(message: string): never {
  throw new Error(message);
}
console.log(error('this is an error'));
