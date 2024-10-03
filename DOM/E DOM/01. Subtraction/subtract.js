function subtract() {
  const fNumEl = document.querySelector("#firstNumber");
  const sNumEl = document.querySelector("#secondNumber");

  const resultEl = document.querySelector("#result");
  const sum = Number(fNumEl.value) - Number(sNumEl.value);

  return (resultEl.textContent = sum);
}
