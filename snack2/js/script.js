// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//creo array di oggetti con all' interno squadre di calcio 
const footballTeams =
[
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

//creo nuovo array dove inserire oggetti modificati
let myTeams = [];

//percorro array con ciclo for per avere a disposizione le singole squadre, e pusho in array gli oggetti con solo le chiavi selezionate
for ( i = 0; i < footballTeams.length; i++ ) {

    // ad ogni ciclo accedo al singolo team
    let thisTeam = footballTeams[i];

    // // METODO LUNGO

    // creo una variabile e le assegno una chiave 
    // let thisPuntiFatti = footballTeams[i]['puntiFatti'];
    // let thisFalliSubiti = footballTeams[i]['falliSubiti'];

    // assegno alla variabile creata un numero casuale 
    // thisPuntiFatti = getRndInteger(15, 114);
    // thisFalliSubiti = getRndInteger(20, 50);
    // ///////////////////////////////////////////
    
    // METODO NORMALE 

    // destrutturo l'oggetto e ad ogni ciclo assegno alle chiavi scelte un valore casuale
    let {nome, puntiFatti, falliSubiti} = thisTeam;
    puntiFatti = getRndInteger(15, 114);
    falliSubiti = getRndInteger(20, 50); 
    // //////////////////////////////////////////


    //modifico l'oggetto ad ogni ciclo facendo comparire solo le chiavi selezionate
    thisTeam = {
        nome,
        falliSubiti //thisFalliSubiti
    };

    //pusho gli oggetti modificati nel nuovo array
    myTeams.push(thisTeam);


    // //METODO BREVE

    // let {nome, puntiFatti, falliSubiti} = thisTeam;
    // myTeams.push(
    //     thisTeam = {
    //         nome,
    //         falliSubiti: getRndInteger(20, 50),
    //     }
    // );
}

//output in console
console.log(myTeams);






/////////////
//FUNCTIONS//
/////////////

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}