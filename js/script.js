// ESERCIZIO DADI
//1 raccolgo i dati da DOM
//2 genero un numero random per il giocatore e uno per il computer
//3 stabilisco il vincitore confrontando i risultati
//4 rimando il risultato in pagina

//1 raccolgo i dati da DOM
const resultMessage = document.getElementById('result');

//2 genero un numero random per il giocatore e uno per il computer
const playerNumber = Math.floor(Math.random() * 6 ) +1;
const computerNumber = Math.floor(Math.random() * 6) +1 ;

console.log('playerNumber', playerNumber)
console.log('computerNumber', computerNumber)

//3 stabilisco il vincitore confrontando i risultati

let message = 'Pari!';

if(playerNumber > computerNumber) {
    message = 'Hai vinto!'
   
} else if (playerNumber < computerNumber) {
    message = 'Hai perso!'
}

console.log(message)

//4 rimando il risultato in pagina
resultMessage.innerHTML = ` <p> <strong>Hai fatto</strong> : ${ playerNumber} </p>
<p> <strong>Il computer ha fatto</strong> : ${ computerNumber} </p>
<p> <strong>${message}</strong></p>
`
