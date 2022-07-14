const radioBtn1 = document.getElementById("male");
const radioBtn2 = document.getElementById("female");
let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");

function clrSelection() {
  if (radioBtn1.checked === true) {
    radioBtn1.checked = false;
  } else if (radioBtn2.checked === true) {
    radioBtn2.checked = false;
  }
  age.value = "";
  height.value = "";
  weight.value = "";
  document.getElementById("outputDisplay").innerHTML = 0;
}

function bmrCalculate() {
  if (radioBtn1.checked === true) {
    let bmr =
      88.362 +
      13.397 * parseInt(weight.value) +
      4.799 * parseFloat(height.value) -
      5.677 * parseInt(age.value);
    document.getElementById("outputDisplay").innerHTML = bmr;
  } else if (radioBtn2.checked === true) {
    let bmr =
      447.593 +
      9.247 * parseInt(weight.value) +
      3.098 * parseFloat(height.value) -
      4.33 * parseInt(age.value);
    document.getElementById("outputDisplay").innerHTML = bmr;
  }
}
