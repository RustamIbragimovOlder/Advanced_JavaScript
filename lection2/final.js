// Система регистрации пользователей для веб-приложения

// Глобальный объект
const App = {};

// Защищенные свойства класса
class User {
    #_name; // Защищенное свойство _name

    constructor(name) {
        this.#_name = name;
    }

    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        // Проверка введенных данных
        if (!name || !email || !password) {
            throw new Error('Данные введены не полностью');
        }

        // Создание экземпляра класса User
        const user = new User(name);

        // Дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };
        // Здесь можно добавить логику сохранения пользователя в БД или отправку данных на сервер

        console.log('Пользователь успешно зарегистрирован: ', user.getName());
        console.log('Дополнительные данные пользователя: ', userData);
    } catch (error) {
        console.error('Ошибка регистрации: ', error.message);
    } finally {
        console.log('Завершение регистрации пользователя');
    }
};

// Вызов функции регистрации
App.registerUser('Rustam', 'rus@example.com', 'password12345')
App.registerUser('Nick', '', 'password67890')