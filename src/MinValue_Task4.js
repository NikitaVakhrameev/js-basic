/*Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.*/

function minValue(a, b) {
    if (a < b){
        return a;
    } else {
        return b;
    }
}
console.log((minValue(7,6)));