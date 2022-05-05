/*
Bonus. Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

const array = [1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10];
const pari = [];
const dispari = [];

array.forEach(number => {
    if (number % 2 === 0) {
        pari.push(number);
    } else {
        dispari.push(number);
    };
});

document.getElementById("pari").innerHTML = `<h1 class="green";">I numeri pari sono: ${pari}</h1>`;
document.getElementById("dispari").innerHTML = `<h1 class="red";">I numeri dispari sono: ${dispari}</h1>`;