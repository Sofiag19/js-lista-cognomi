// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// QUINDI OUTPUT sarà:
// - array disordinato di partenza
// - array ordinato;
// - posizione in cui si trova il cognome dell’utente nell’array ordinato.

// richiesta cognome
var surnReq = prompt("INSERISCI IL TUO COGNOME SE VUOI ESSERE RECLUTATO NEL TEAM");

// array altri cognomi
var surnList = ["Ferrari","Ricci","Rossi","Bianchi","Alunni","Giorgetti"];
console.log(surnList);
var origSurnList = surnList.slice(0);

// aggiunta cognome
surnList.push(surnReq);

// array ordinato - sort
surnList.sort();
console.log(surnList);

// OUTPUTs
document.getElementById('saluto').innerHTML = "Oggi colleghi, si unisce a noi un nuovo membro: salutiamo tutti insieme il Sig." + surnReq + "!";

for (var i = 0; i < surnList.length; i++) {
  if (surnList[i] === surnReq) {
    document.getElementById('position').innerHTML = "Sig. " + surnReq + " ti potrai posizionare nella scrivania n." + (i + 1) + ", vicino ai tuoi colleghi.<br> Bene, eccoci al completo:";
  }
}

// document.getElementById('surnames').innerHTML = surnOrd;

var surnOrdPrec;
var a = 0;
while (a < surnList.length){
  surnOrdPrec = document.getElementById('surnames').innerHTML;
  document.getElementById('surnames').innerHTML = surnOrdPrec + "<li>" + surnList[a] + "</li>";
  a++;
}

console.log(origSurnList);
