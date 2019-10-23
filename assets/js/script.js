// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// QUINDI OUTPUT sarà:
// - array disordinato di partenza
// - array ordinato;
// -  posizione in cui si trova il cognome dell’utente nell’array ordinato.

// richiesta cognome
var surnReq = prompt ("inserisci il tuo cognome");

// array altri cognomi
var surnList = ["Ferrari","Ricci","Rossi","Bianchi","Alunni","Giorgetti"];
// console.log(surnList);

// aggiunta cognome
surnList.push (surnReq);
// console.log(surnList);

// array ordinato - sort
var surnOrd = surnList.sort ();
// console.log(surnOrd);

// OUTPUTs
for (var i = 0; i < surnOrd.length; i++) {
  if (surnOrd[i] === surnReq) {
    document.getElementById('position').innerHTML = "Il cognome " + surnReq + " si trova nella posizione " + (i + 1) + ".";
  }
}

document.getElementById('surnames').innerHTML = surnOrd;
