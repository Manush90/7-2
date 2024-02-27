// -------------------esercizio 1----------------------
const form = document.getElementById("form");
const input = document.getElementById("textInput");
const submit = document.getElementById("submit");
const btnDelete = document.getElementById("btnDelete");

window.onload = function () {
  const storedValue = localStorage.getItem("nome");
  if (storedValue) {
    input.value = JSON.parse(storedValue);
  }
};

form.onsubmit = function (e) {
  e.preventDefault();
  const nome = input.value;
  console.log(nome);

  localStorage.setItem("nome", JSON.stringify(input.value));
  input.value = "";
};

btnDelete.onclick = function () {
  input.value = "";
  localStorage.removeItem("nome");
};

// -------------------esercizio 2----------------------

function updateCounter() {
  let counter = sessionStorage.getItem("counter");
  if (!counter) {
    counter = 0;
  } else {
    counter = parseInt(counter);
  }
  counter++;
  document.getElementById("timer").textContent = counter + " secondi";
  sessionStorage.setItem("counter", counter);
}

setInterval(updateCounter, 1000);
