/*
3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
*/

const squadre = [
    {
        nome : "Tediore",
        puntiSegnati : 0,
        falliSubiti : 0
    },

    {
        nome : "Hyperion",
        puntiSegnati : 0,
        falliSubiti : 0
    },

    {
        nome : "Jakobs",
        puntiSegnati : 0,
        falliSubiti : 0
    },

    {
        nome : "Maliwan",
        puntiSegnati : 0,
        falliSubiti : 0
    },
];

squadre.forEach(element => {
    element.falliSubiti = getRndInteger(1, 100) 
    element.puntiSegnati = getRndInteger(1, 100) 
    console.log("La squadra:", element.nome, "ha subito:", element.falliSubiti, "falli, totalizzando ", element.puntiSegnati, " punti");
});

console.log(squadre);

// FUNCTIONS
/*
Descrizione: Genera numeri casuali
    Dato 1: range numero minimo → "min"
    Dato 2: range numero massimo → "max"
    Return: numero casuale compreso tra "min" e "max"
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}