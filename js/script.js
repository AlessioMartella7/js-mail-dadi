console.log('js ok')


/* ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:warning: NOTE:
- è vietato utilizzare il metodo includes()
- La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
- Non è necessario usare il tag <form>, ma se lo usate, ricordate di impedire il comportamento di default dell'evento altrimenti il form ricaricherà la pagina. In alternativa, potete impostare il type="button" sul <button> .
- L'esito del controllo deve essere stampato in pagina */

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