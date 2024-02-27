// -------------------esercizio 1----------------------
// collego i miei elemnti a quelli del DOM tramite Id
const form = document.getElementById("form");
const input = document.getElementById("textInput");
const submit = document.getElementById("submit");
const btnDelete = document.getElementById("btnDelete");
// Controlla se esiste una chiave "nome"
window.onload = function () {
  const storedValue = localStorage.getItem("nome");
  //   imposto di ricaricare l'input con il valore precedentemente inviato
  if (storedValue) {
    input.value = JSON.parse(storedValue);
  }
};
// funzione per il bottone submit (invia)
form.onsubmit = function (e) {
  // Impedisco il comportamento predefinito che è il refresh della pagina
  e.preventDefault();
  //   imposto nome come valore di input
  const nome = input.value;
  console.log(nome);
  // immagazzino nel local storage trasformando in stringa il valore immesso nell'input
  // svuotandolo quando viene immesso
  localStorage.setItem("nome", JSON.stringify(input.value));
  input.value = "";
};
// imposto una funzione cal bottone cancella che faccia si che si cancelli il nome nell'input una volta inserito
// e lo cancelli anche da localStorage
btnDelete.onclick = function () {
  input.value = "";
  localStorage.removeItem("nome");
};

// -------------------esercizio 2----------------------

function updateCounter() {
  // controllo se c'è un counter altrimenti lo trasformo in num intero
  let counter = sessionStorage.getItem("counter");
  if (!counter) {
    counter = 0;
  } else {
    counter = parseInt(counter);
  }
  //  imposto il counter ogni secondo
  counter++;
  document.getElementById("timer").textContent = counter + " secondi";
  //   session storage imposta il counter per la sessione corrente
  sessionStorage.setItem("counter", counter);
}

// intervallo settato su 1s (1000 millisecondi)
setInterval(updateCounter, 1000);
