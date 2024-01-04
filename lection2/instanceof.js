// instanceof

// Помогает определить:
// принадлежит ли объект к предполагаемому классу,
// либо к одному из встроенных классов,
// или для функций - конструкторов

// function Rabbit() { }
// console.log(new Rabbit() instanceof Rabbit); // true

// Определение класса Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Определение класса Dog, который наследуется от класса Animal
class Dog extends Animal {
    bark() {
        console.log('Woof!');
    }
}

// создание объектов
const animal = new Animal('Animal');
const dog = new Dog('Dog');

// проверка с помощью instanceof
console.log(animal instanceof Animal); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(animal instanceof Dog); // false
console.log(dog instanceof Cat); // Uncaught ReferenceError: Cat is not defined