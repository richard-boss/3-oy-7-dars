var elForm = document.querySelector(".form")
var elSelect = document.querySelector(".select")
var dollar = 11223;
var euro = 11631;
var rubl = 184;
var elTitle = document.querySelector("h1")
var elInput = document.querySelector(".input")

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log(elSelect.value);
    if (elSelect.value == "euro") {
    elTitle.textContent = (elInput.value / euro).toFixed(2) + " 💶"
    } else if (elSelect.value == "usd") {
      elTitle.textContent = (elInput.value / dollar).toFixed(2) + " 💵"
    } else if (elSelect.value == "rubl") {
      elTitle.textContent = (elInput.value / rubl).toFixed(2) + " ₽"
    } else if (isNaN(elInput)) {
      elTitle.textContent = "Son kiriting"
    } else if (elInput < 0) {
      elTitle.textContent = "Minus son kiritish munkun emas"
    }


});