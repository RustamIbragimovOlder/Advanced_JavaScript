// В примере мы видим, что все обращения нам возвращают один объект. Более того, они строго равны между собой.

console.log(window);
console.log(window.window);
console.log(self);
console.log(frames);

// В последних стандартах введён новый глобальный объект globalThis, призванный стандартизировать обращение к глобальным объектам. В браузере он вернёт объект window.
console.log(globalThis);
console.log(globalThis === window); // true