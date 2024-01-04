// Опциональная цепочка вызовов методов и оператор нулевого слияния

// Объект с информацией о пользователе
const user = {
    name: 'Rustam',
    age: 50,
    address: {
        city: 'Piter',
        street: '123 Nevskiy St'
    },
    contacts: {
        email: 'rus@example.ru',
        phone: '+71234567890'
    }
};

// Опциональная цепочка вызовов методов
const email = user?.contacts?.email;
console.log(email); // rus@example.ru

// Если значение не определено или null или undefined, используется значение по умолчанию
const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue); // Default Value

// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName); // 123 Nevskiy St, если бы значения не было - вывод Unknown