// class AutoMobile {
//     _horsePowers = 0; // Объявление приватного свойства _horsePowers со значением 0, используя синтаксис приватных полей

//     set horsePowers(value) { // Определение сеттера для свойства horsePowers
//         if (value < 0) throw new Error('Отрицательное значение сил'); // Проверка значения, иначе выбрасывается исключение
//         this._horsePowers = value; // Установка значения свойства _horsePowers
//     }

//     get horsePowers() { // Определение геттера для свойства horsePowers
//         return this._horsePowers; // Возращает значение свойства _horsePowers
//     }

//     constructor(power) { // Определение конструктора класса
//         this._horsePowers = power; // Установка значения свойства _horsePowers при создании объекта класса
//     }
// }

// // Создаем новую машину
// let auto = new AutoMobile(100); // Создание нового объекта класса и передача значения 100 в конструктор

// // устанавливаем количество сил
// auto.horsePowers = 10; // должно вызвать исключение

// // добавляем комментарий для сеттера
// // auto.horsePowers = 10;

// Приватные свойства - свойства начинаются со знака # и имеют защиту на уровне языка

class AutoMobile {
    #horsePowers = 0;

    set horsePowers(value) {
        if (value < 0) throw new Error('Отрицательное значение сил');
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}

// создаем новую машину
let auto = new AutoMobile(100);
auto.horsePowers = 50;
console.log(auto.horsePowers); // 50
// устанавливаем количество сил напрямую
auto.#horsePowers = 10; // Uncaught SyntaxError: Private field '#horsePowers' must be declared in an enclosing class