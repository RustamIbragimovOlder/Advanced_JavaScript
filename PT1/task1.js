"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = [
    { title: 'Bohemian Rhapsody', artist: 'Queen', year: '1975' },
    { title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: '1973' },
    { title: '1', artist: 'The Beatles', year: '2000' },
    { title: 'The Eminem Show', artist: 'Eminem', year: '2002' },
    { title: 'ABBA Gold: Greatest Hits', artist: 'ABBA', year: '1992' },
];

const musicAlbums = {
    musicCollection,

    // Variant 1 итератор
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.musicCollection.length) {
                    return { done: false, value: this.musicCollection[index++] };
                }
                return { done: true };
            }
        }
    }

    // // Variant 2 генератор
    // *[Symbol.iterator]() {
    //     for (const element of musicCollection) {
    //         yield element;
    //     }
    // }
};

for (const element of musicCollection) {
    console.log(element);
}