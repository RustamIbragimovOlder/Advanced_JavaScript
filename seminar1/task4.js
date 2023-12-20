/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/

const lessonsTeacher = new Map();
const studentLessons = new Map();
const lessonsIvan = new Set();
const lessonsPetr = new Set();

const ivan = {
    name: 'Иван',
};

const petr = {
    name: 'Петр',
};

lessonsIvan.add('русский');
lessonsIvan.add('физкультура');

lessonsPetr.add('математика');
lessonsPetr.add('физика');

lessonsTeacher.set('математика', 'Иван Петрович');
lessonsTeacher.set('русский', 'Вера Ивановна');
lessonsTeacher.set('физика', 'Лев Григорьевич');
lessonsTeacher.set('физкультура', 'Анатолий Александрович');

studentLessons.set(ivan, lessonsIvan);
studentLessons.set(petr, lessonsPetr);

console.log(`Преподаватель по математике: ${lessonsTeacher.get('математика')}`); // Преподаватель по Математике: Иван Петрович

console.log(`Уроки Ивана: ${[...lessonsIvan].join(', ')}`); // Уроки Ивана: русский, физкультура
console.log(`Уроки Петра: ${[...lessonsPetr].join(', ')}`); // Уроки Петра: математика, физика