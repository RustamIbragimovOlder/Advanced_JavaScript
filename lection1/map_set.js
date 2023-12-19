// // 1.
// let map = new Map();

// map.set('1', 'str1'); // строка '1' в качестве ключа
// map.set(1, 'num1'); // цифра 1 в качестве ключа
// map.set(true, 'bool1'); // булево значение в качестве ключа

// console.log(map);

// console.log(map.get(1)); // 'num1'
// console.log(map.get('1')); // 'str1'
// console.log(map.size); // 3


// // 2. get set

// let map = new Map();
// map.set('1', 'We').set(1, 'likes').set(true, 'JS');

// console.log(map);

// // 3. Перебор коллекции Map

// let recipeMap = new Map([
//     ['огурец', 500],
//     ['помидор', 350],
//     ['лук', 50],
// ]);
// console.log(recipeMap);

// // перебор по ключам
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // огурец, помидор, лук
// }

// // перебор по значениям
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }

// // перебор по элементам в формате [ключ, значение] аналогично recipeMap.entries()
// for (let entry of recipeMap) {
//     console.log(entry); //
// }

// // функция для каждой пары [ключ, значение]
// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`); // огурец: 500 и т.д.
// })

// // 4. Работа с объектами

// // Object.entries поможет создать Map
// let map = new Map(Object.entries(obj));

// // Object.fromEntries поможет создать объект из Map
// let obj = Object.fromEntries(map);

// 5. ------ Set -------

let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Тузик',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Тузик',
    'Манька'
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies);

// Перевести обратно в массив:
let arr = Array.from(uniqueBuddies);
console.log(arr);