/*
1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

const array2 = [1, 1, 1, 1];
const array1 = [1, 1, 1, 1, 1, 1, 1, 1];
const element = 1;

// while (array1.length < array2.length) {
//     array1.push(element)
//     console.log(array1, array2);
// };

if (array1.length < array2.length) {
    while (array1.length < array2.length) {
        array1.push(element)
        console.log(array1, array2);
    };
} else if (array2.length < array1.length) {
    while (array2.length < array1.length) {
        array2.push(element)
        console.log(array1, array2);
    };
};