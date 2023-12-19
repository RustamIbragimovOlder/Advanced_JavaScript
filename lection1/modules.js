// Экспорт
// Чтобы получить доступ к объектам модулей, их надо экспортировать
// Внутри блоков экспортировать нельзя!!!

export const name = 'square'; // ключевое слово export

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

// Импорт

import { name, draw, reportArea, reportPerimetr } from './modules/square.js';

import * as Square from './modules/square.js'; // Импортировать все что можно