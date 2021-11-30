// Snack 3
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.



const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let newArray = [];
// let myArray2 = [];



// myArray.forEach((element, index, array) => {
//     // if ( index > 2 && index < 5 ) {
//     //     newArray.push(element);
//     // } else {
//     //     myArray2.push(element);
//     // }
//     (index > 2 && index < 5) ? newArray.push(element) : myArray2.push(element); // : null
// });




const myArray2 = myArray.forEach((element, index, array) => {
    let thisStudent;
    if (index > 2 && index < 5) {
        newArray.push(element);
    }
});

console.log(newArray);
console.log(myArray2);
