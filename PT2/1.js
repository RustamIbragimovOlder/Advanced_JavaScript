"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];

    constructor(books) {
        this.#books = books;
    }

    // Проверка, что предоставленный массив не содержит дубликатов
    checkAbsenceDuplicatesBooks() {
        const set = new Set(this.#books);
        try {
            if (this.#books.length !== set.size) {
                throw new Error('В библиотеке содержаться дубликаты');
            }
            return console.log('В библиотеке нет дубликатов');
        } catch (error) {
            console.log(error.message);
        }
    }

    // Функция, которая возвращает текущий список книг
    allBooks() {
        return console.log(this.#books.join("\n"));
    }

    // Добавление книги в список
    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(
                    `Книга "${title}" уже есть в библиотеке. Ее добавить нельзя`
                );
            }
            this.#books.push(title);
            console.log(`Книга "${title}" добавлена в библиотеку`);
        } catch (error) {
            console.log(error.message);
        }
    }

    // Удаление книги из списка по названию
    removeBook(title) {
        const index = this.#books.indexOf(title);
        try {
            if (index === -1) {
                throw new Error(
                    `Книги "${title}" нет в библиотеке. Ее нельзя удалить`
                );
            }
            this.#books.splice(index, 1);
            console.log(`Книга "${title}" удалена из библиотеки`);
        } catch (error) {
            console.log(error.message);
        }
    }

    // Проверка наличия книги в библиотеке
    hasBook(title) {
        if (!this.#books.includes(title)) {
            return false;
        }
        return true;
    }
}

// Создание библиотеки и проверка дубликатов
console.log('Проверка дубликатов: ');
const library1 = new Library([
    'Первая книга',
    'Вторая книга',
    'Первая книга',
]);

const library2 = new Library([
    'Третья книга',
    'Четвертая книга',
    'Пятая книга',
    'Шестая книга'
]);

library1.checkAbsenceDuplicatesBooks(); // В библиотеке содержаться дубликаты
library2.checkAbsenceDuplicatesBooks(); // В библиотеке нет дубликатов
console.log('');

// Возврат текущего списка книг
console.log('Возврат текущего списка книг: ');
console.log('Список книг в бибилиотеке: ', { library1 });
library1.allBooks();
console.log('Список книг в бибилиотеке: ', { library2 });
library2.allBooks();
console.log('');

// Добавление книги в список и возврат текущего списка книг
console.log('Добавление книги в список: ');
library1.addBook('Вторая книга');
library2.addBook('Седьмая книга');
console.log('Текущий список книг в бибилиотеке: ', { library1 });
library1.allBooks();
console.log('Текущий список книг в бибилиотеке: ', { library2 });
library2.allBooks();
console.log('');

// Удаление книги из списка по названию
console.log('Удаление книги из списка по названию: ');
library1.removeBook('Пятая книга');
library2.removeBook('Пятая книга');
console.log('Текущий список книг в бибилиотеке: ', { library1 });
library1.allBooks();
console.log('Текущий список книг в бибилиотеке: ', { library2 });
library2.allBooks();
console.log('');

// Проверка наличие книги в библиотеке
console.log('Проверка наличие книги в библиотеке: ');
console.log(library1.hasBook('Вторая книга'));
console.log(library2.hasBook('Вторая книга'));