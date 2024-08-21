/* ESERCIZIO 2 - Finta Login
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

//1 recupero gli elementi dal DOM
//2 Creo un array contenente le email autorizzate
//3 aggiungo dinamicità al mio button
//4 eseguo un controllo per verificare che la mail sia nella lista autorizzata
//5 preparo un messaggio da rimandare all'utente
//6 invio il messaggio al DOM

//1 recupero gli elementi dal DOM
const mailField = document.getElementById('email');
const form = document.querySelector('form');
const message = document.getElementById('sys-message');