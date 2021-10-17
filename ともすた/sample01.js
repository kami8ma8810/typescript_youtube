"use strict";
let x = 10;
let y = 5;
let answer = x * y;
// console.log(answer);
// union type
// ①tsc --initでtsconfigを生成
// ②crtl + shift + Bでビルドまたはウォッチ可能
// 消費税と価格の計算サンプル
let addTax = (price, tax = 10) => {
    return Math.round(price * (1 + tax / 100));
};
console.log(addTax(12000, 8));
let addTax2 = (price, tax) => {
    if (tax === undefined) {
        tax = 10;
    }
    return Math.round(price * (1 + tax / 100));
};
console.log(addTax2(12000, 8));
