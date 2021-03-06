// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo oggetto studente 
    var student = {
        'name' : 'Giorgio',
        'surname' : 'Rossi',
        'age' : 25
    };
    // console.log('oggetto: ', student);

// stampo a schermo le proprietà dell'oggetto con un ciclo for in
    for (var key in student) {
        var thisKey = key;
        console.log('proprietà: ', thisKey);
        var keyValue = student[key];
        console.log('valore: ', keyValue);
    }

// creo un array di oggetti di studenti 
    var classe = [
        {
            'name' : 'Franco',
            'surname' : 'Franchi',
            'age' : 23
        },
        {
            'name' : 'Rosa',
            'surname' : 'Fiori',
            'age' : 27
        },
        {
            'name' : 'Federica',
            'surname' : 'Colli',
            'age' : 30
        },
        {
            'name' : 'Bernardo',
            'surname' : 'Bianchi',
            'age' : 65
        }
    ]
    console.log('array di oggetti: ', classe);

// eseguo un ciclo per sfogliare l'array di studenti
    for (var i = 0; i < classe.length; i++) {
        var thisStudent = classe[i];
        console.log('studente: ', thisStudent);

        // thisStudent rappresenta ogni oggetto (studente)
        // stampo nome e cognome di ogni studente  
            console.log(thisStudent.name);
            console.log(thisStudent.surname);
        
    }

// aggiungo nuovo oggetto da prompt dell'utente
    var user = {
        'name' : prompt("inserisci il tuo nome"),
        'surname' : prompt("inserisci il tuo cognome"),
        'age' : parseInt(prompt("inserisci la tua età"))
    }

// // pusho il nuovo utente dentro la classe studenti
    classe.push(user);

    console.log('array dopo inserimento utente: ', classe);