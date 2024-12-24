const firstResButton = document.getElementById("first-task-res-button");
const messageField = document.getElementById("messageInputField");
const resField = document.getElementById("first-task-result-field");

firstResButton.addEventListener("click", () => {
  resField.value = slugify(messageField.value);
});

// Друге завдання

const secondResButton = document.getElementById("second-task-res-button");
const firstArray = document.getElementById("firstArrayField");
const secondArray = document.getElementById("secondArrayField");
const maxLength = document.getElementById("maxLengthArray");
const resSecondField = document.getElementById("second-task-result-field");

secondResButton.addEventListener("click", () => {
  console.log(firstArray.value.replace(/[\[\],"]/g, "").split(" "));
  resSecondField.value = makeArray(
    firstArray.value.replace(/[\[\],"]/g, "").split(" "),
    secondArray.value.replace(/[\[\],"]/g, "").split(" "),
    maxLength.value
  ).join(", ");
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
