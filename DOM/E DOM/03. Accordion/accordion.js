function toggle() {
  const buttonEl = document.querySelector(".button");
  const extraEL = document.querySelector("#extra");
  const initialDisplay = extraEL.style.display;

  if (initialDisplay == "block") {
    extraEL.style.display = "none";
    buttonEl.textContent = "More";
  } else {
    extraEL.style.display = "block";
    buttonEl.textContent = "Less";
  }
}
