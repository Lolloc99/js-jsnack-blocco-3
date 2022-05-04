/*
2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

const array = [];
let sum = 0;

while (sum < 50) {
    let num = parseInt(prompt("Inserisci un numero"));

    if ((sum + num) < 50) {
        array.push(num)
        sum += num
    } else if ((sum + num) >= 50) {
        break
    }

    console.log(array, sum);
};

console.log(array, sum);