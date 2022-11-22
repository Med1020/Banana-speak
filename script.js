const btn = document.querySelector(".btn-translate");
var textInput = document.querySelector("#input");
var outputText = document.querySelector(".output");
var error = document.querySelector(".error");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".btn");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModal();

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

let count = 0;

const getTranslationURL = (text) => {
  return serverURL + "?text=" + text;
};

const errorHandler = (error) => {
  console.log("Error has occured:", error);
};

btn.addEventListener("click", () => {
  var text = textInput.value;
  if (count < 5) {
    if (text) {
      count += 1;
      fetch(getTranslationURL(text))
        .then((response) => response.json())
        .then((json) => (outputText.innerText = json.contents.translated))
        .catch(errorHandler);
    } else {
      error.innerText = "* Please enter some text here";
    }
  } else {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal.innerText = "Sorry you've used up your 5 turns";
  }
});
