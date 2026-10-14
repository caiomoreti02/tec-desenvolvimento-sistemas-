// ELEMENTOS DO FORMULÁRIO
const numberInput = document.getElementById("number");
const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const cvvInput = document.getElementById("cvv");

// ELEMENTOS DO CARTÃO

const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardDate = document.getElementById("cardDate");
const cardCvv = document.getElementById("cardCvv");

const cardContainer =
  document.getElementById("cardContainer");

// NÚMERO DO CARTÃO

numberInput.addEventListener("input", function () {

  // Remove tudo que não for número
  let value = this.value.replace(/\D/g, "");

  // Limita para 16 números
  value = value.substring(0, 16);

  // Coloca espaço a cada 4 números
  value = value.replace(
    /(\d{4})(?=\d)/g,
    "$1 "
  );

  // Atualiza o input
  this.value = value;

  // Atualiza o cartão
  cardNumber.textContent =
    value || "0000 0000 0000 0000";

});

// NOME

nameInput.addEventListener("input", function () {

  // Remove números
  let value = this.value.replace(/[0-9]/g, "");

  // Converte para maiúsculas
  value = value.toUpperCase();

  // Atualiza o input
  this.value = value;

  // Atualiza o cartão
  cardName.textContent =
    value || "SEU NOME";

});

// VALIDADE

dateInput.addEventListener("input", function () {

  // Remove tudo que não for número
  let value = this.value.replace(/\D/g, "");

  // Limita para 4 números
  value = value.substring(0, 4);

  // Adiciona "/" depois do mês
  if (value.length >= 3) {

    value =
      value.substring(0, 2) +
      "/" +
      value.substring(2);

  }

  // Atualiza o input
  this.value = value;

  // Atualiza o cartão
  cardDate.textContent =
    value || "00/00";

});

// CVV

cvvInput.addEventListener("input", function () {

  // Permite somente números
  let value = this.value.replace(/\D/g, "");

  // Limita para 3 números
  value = value.substring(0, 3);

  // Atualiza o input
  this.value = value;

  // Atualiza o cartão
  cardCvv.textContent =
    value || "000";

});


// FOCO NO CVV

cvvInput.addEventListener("focus", function () {

  cardContainer.classList.add("flipped");

});

// SAIU DO CVV

cvvInput.addEventListener("blur", function () {

  cardContainer.classList.remove("flipped");

});

// ENVIO DO FORMULÁRIO

const paymentForm =
  document.getElementById("paymentForm");


paymentForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();

    alert("Demonstração concluída!");

  }
);