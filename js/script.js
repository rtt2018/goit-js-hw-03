const firstResButton = document.getElementById("first-task-res-button");
const quantityField = document.getElementById("quantity");
const pricePerDroidField = document.getElementById("pricePerDroid");
const customerCredits = document.getElementById("customerCreditsCount");
const resField = document.getElementById("first-task-result-field");

firstResButton.addEventListener("click", () => {
  resField.value = makeTransaction(
    quantityField.value,
    pricePerDroidField.value,
    customerCredits.value
  );
});

// Друге завдання

const secondResButton = document.getElementById("second-task-res-button");
const message = document.getElementById("country");
const maxLength = document.getElementById("price");
const resSecondField = document.getElementById("second-task-result-field");

secondResButton.addEventListener("click", () => {
  resSecondField.value = formatMessage(message.value, maxLength.value);
});

// Третє завдання

const thirdResButton = document.getElementById("third-task-res-button");
const contentMessage = document.getElementById("third-tasc-message");
const resThirdField = document.getElementById("third-task-result-field");

thirdResButton.addEventListener("click", () => {
  resThirdField.value = checkForSpam(contentMessage.value);
});

// Четверте завдання

const getCountry = document.getElementById("four-input-label");
const fourResButton = document.getElementById("four-task-res-button");
const resFourField = document.getElementById("four-task-result-field");

fourResButton.addEventListener("click", () => {
  resFourField.value = getShippingCost(getCountry.value);
});
