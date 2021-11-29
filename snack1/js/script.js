// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM


//creo array di oggetti
const bikesArray =
[
    {
        modello: 'prova1',
        peso: 50
    },

    {
        modello: 'prova2',
        peso: 20
    },

    {
        modello: 'prova3',
        peso: 30
    }
];

//creo variabile a cui assegnare valore ad ogni ciclo
let bikePiuLeggera = bikesArray[0];

//creo ciclo per accedere a tutti gli oggetti presenti nell'array
for ( i = 0; i < bikesArray.length; i++ ) {
    let thisBike = bikesArray[i];
    console.log(thisBike);

    //ad ogni ciclo, se l'oggetto avrà la chiave 'peso' minore, verrà inserite nella variabile dichiarata prima del ciclo    if (thisBike.peso > bikeWeightier.peso) {
     if ( thisBike.peso < bikePiuLeggera.peso) {
        bikePiuLeggera = thisBike;
     }
   
}

//destrutturo l'oggetto 
const {modello, peso} = bikePiuLeggera;

console.log(peso);

//selezione elemento del dom 
let userMessageDom = document.getElementById('user-message');

//creo output per utente
let userMessage = `
    <h2>Il modello con peso maggiore è ${modello}, con un peso totale di ${peso} Kg.</h2>
`;

//concateno messaggio creato all'elemtento del dom selezionato
userMessageDom.innerHTML += userMessage;





