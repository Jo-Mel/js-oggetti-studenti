// Creare un oggetto che descriva uno studente con le seguenti
// proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti
// gli studenti e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo oggetto studente inserendo nell’ordine:
// nome, cognome e età.

// Creo un oggetto studente
var studente = {
  nome: "Jona",
  cognome: "Meleqi",
  eta: "30",
};

for (var k in studente) {
  console.log(k + ": " + studente[k]);
}

// Creo un array di oggetti di studenti
var studenti = [
  {
    nome: "Jona",
    cognome: "Meleqi",
    eta: "30",
  },
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: "20",
  },
  {
    nome: "Maria",
    cognome: "Bianchi",
    eta: "35",
  },
];

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
for (var i = 0; i < studenti.length; i++) {
  var stud = studenti[i];
  console.log(stud.nome + " " + stud.cognome);
}

// Chiedo all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeStudente = prompt("Inserisci il nome");
var cognomeStudente = prompt("Inserisci il cognome");
var etaStudente = prompt("Inserisci l'età");

// Creo l'oggetto nuovo studente
var nuovoStudente = {
  nome: nomeStudente,
  cognome: cognomeStudente,
  eta: etaStudente,
};

// Inserisco il nuovo oggetto nell'array di studenti
studenti.push(nuovoStudente);
console.log(studenti);
