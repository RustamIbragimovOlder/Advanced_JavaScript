// 1. Все работает как с циклами. Это также работает с другими символами (даже с нестандартными)

// const string = 'Hello';
// console.log(string[1]); // e
// console.log(string.length); // 5

// for (let str of string) {
//     console.log(str);
// }

// 2. Мы хотим сделать последовательность от 1 до 10

// let range = {
//     from: 1,
//     to: 10
// };

// // 2.1. Вызов for...of сначала вызывает эту функцию
// range[Symbol.iterator] = function () {
//     // функция возврашает объект итератора:
//     // 2.2. Далее for(..of..) работает только с этим итератором, запрашивая у него новые значения
//     return {
//         current: this.from,
//         last: this.to,

//         // 2.3. next() вызывается на каждой итерации цикла for(..of..)
//         next() {
//             // 4. он должен вернуть значение в виде объекта {done:..., value:...}
//             return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
//         }
//     };

// };
// // теперь все работает
// for (let number of range) {
//     console.log(number);
// }

// // Можно было вместе, но тогда this будет общий
// let range = {
//     from: 1,
//     to: 15,
//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },
//     next() {
//         return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
//     }
// };

// for (let number of range) {
//     console.log(number);
// }


// ----- Array.from -----
let pseudo = {
    0: 'first',
    1: 'second',
    2: 'new element',
    length: 3
}

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

// Работает даже со строкой
let pseudo2 = 'It`s Array Like!';
let array2 = Array.from(pseudo2);
console.log(array2);


