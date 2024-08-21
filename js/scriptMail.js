//1 recupero gli elementi dal DOM
//2 Creo un array contenente le email autorizzate
//3 aggiungo dinamicità al mio form
//4 preparo un messaggio da rimandare all'utente
//5 eseguo un controllo per verificare che la mail sia nella lista autorizzata
//6 invio il messaggio al DOM

//1 recupero gli elementi dal DOM
const emailField = document.getElementById('email');
const form = document.querySelector('form');
const message = document.getElementById('sys-message');

//2 Creo un array contenente le email autorizzate

const validEmails = ['alex@gmail.com','bob@gmail.com','phil@yahoo.it', 'lawrence@gmail.com'];

//3 aggiungo dinamicità al mio form

form.addEventListener('submit', function(e) {
    e.preventDefault();

    //raccolgo i dati inseriti dall'utente
    const email = emailField.value.trim();

//4 preparo un messaggio da rimandare all'utente
    
    let sysMessage = 'Accesso Negato!';

//4 eseguo un controllo per verificare che la mail sia nella lista autorizzata
    for(let i = 0; i < validEmails.length; i++) {
       const controlEmail = validEmails[i];
       if(email === controlEmail) sysMessage = 'Bentornato!' ;
    }

//6 invio il messaggio al DOM
    message.classList.add('display');
    message.innerText = sysMessage;

    form.reset();
}) 

