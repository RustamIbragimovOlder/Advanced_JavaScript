// Работа с window

// console.log(window);

// const newWindow = window.open('https://www.example.com', '_blank'); // Открывает новое окно браузера
// window.close(); // Закрывает текущее окно. Скрипты могут закрывать только те окна, которые были ими открыты.

// window.resizeTo(800, 600); // Изменяет размер окна на 800х600 пикселей

// window.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу
// console.log(window.location);

// const windowWidth = window.innerWidth; // Получает ширину окна
// console.log(windowWidth);

// Работа с window.window

// const isWindowOpen = window.window.open('https://www.example.com') !== null; // Проверяет открыто ли окно
// const windowHeight = window.window.innerHeight; // ПОлучает высоту окна
// window.window.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу во вложенном окне

// Работа с self

// const newWindowSelf = self.open('https://www.example.com', '_blank'); // Открывает новое окно браузера
// self.close(); // Закрывает текущее окно.
// self.resizeTo(800, 600); // Изменяет размер окна на 800х600 пикселей
// self.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу

// Работа с frames

// const frame = frames[0]; // Получает ссылку на фрейм по индексу
// console.log(frame);
// frames[0].location.href = 'https://www.example.com'; // Перенаправляет на другую страницу во фрейме
// const frameCount = frames.length; // Получает количество фреймов на странице
// const parentWindow = window.parent; // Получает доступ к родительскому окну из фрейма

// Работа с globalThis

// const globalObject = globalThis; // Получает глобальный объект
// globalThis.newVariable = 'Hello, world!'; // Определяет новую глобальную переменную
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; // Получает доступ к глобальным переменным из различных сред исполнения

// Example
// var
var glob = 5;
// function
function increment(value) {
    return value + 1;
}
console.log(window.glob); // 5
console.log(window.increment);
// ƒ increment(value) {
// return value + 1;
// }

// alert
// console.log(alert() === window.alert()); // true
// alert('Можно так');
// window.alert('А можно так');

// const & let
// const local = 5;
// let localFunc = () => 'localFunc';
// console.log(local); // 5
// console.log(localFunc()); // localFunc
// console.log(window.local); // undefined
// console.log(window.localFunc); // undefined

// Из прошлой части

console.log(window.Symbol.for); // ƒ for() { [native code] }
console.log(window.Symbol.iterator); // Symbol(Symbol.iterator)
console.log(window.Array.from); // ƒ from() { [native code] }


