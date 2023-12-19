// const symbol = Symbol(); // объявление

// const dogID = Symbol('dog'); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1);
// console.log(dog2);

// console.log(dog1 == dog2); // false

// // alert(dogID) // TypeError: Canot convert a Symbol value to a string
// console.log(dogID); // Symbol(dog)

// console.log(dogID.description); // dog можно посмотреть описание
// const dogID2 = Symbol('super dog');
// console.log(dogID2.description); // super dog

// let id = Symbol('dogID');
// let id = Symbol('id');
// let buddy = {
//     [id]: 'Жучка'
// }
// console.log(buddy[id]); // Жучка
// buddy[id] = 'Бобик';
// console.log(buddy[id]); // Бобик

// Проблемы, которые могут возникнуть без использования Symbol

// let buddy = { name: 'Тузик' };
// buddy.id = 'Наш идентификатор';
// buddy.id = 'Их идентификатор';
// console.log(buddy.id);

// // Как решить?
// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',
//     elephant: 'Слон'
// }
// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том числе и символьные

// buddies.cat = 'Барсик';
// console.log(buddies);

// console.log(newBuddies);


// // ------ Symbol.for -----

// // читаем символ из глобального реестра и записывем его в переменную
// let id = Symbol.for('id'); // если символа не существует - он будет создан

// // читаем символ снова и записывем его в другую переменную (возможно из другого места кода)
// let idAgain = Symbol.for('id');

// // проверяем: это один и тот же символ
// alert(id === idAgain); // true

// ----- Symbol.keyFor ----- описание символа по идентификатору
// получаем символ по имени
let sym1 = Symbol.for('name');
let sym2 = Symbol.for('id');

// получаем имя по символу
console.log(Symbol.keyFor(sym1)); // name
console.log(Symbol.keyFor(sym2)); // id


