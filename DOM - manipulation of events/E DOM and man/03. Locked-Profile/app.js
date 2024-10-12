function lockedProfile() {
  [...document.querySelectorAll("button")].forEach((button) => {
    button.addEventListener("click", clickEventHandler);
  });

  function clickEventHandler(e) {
    const profile = e.target.closest(".profile");
    const state = profile.querySelector(`input[type="radio"]:checked`).value;

    if (state == "unlock") {
      const hiddenFieldsEl = profile.querySelector(`[id*="HiddenFields"]`);

      if (hiddenFieldsEl.style.display == "block") {
        hiddenFieldsEl.style.display = "none";
        e.target.textContent = "Show more";
      } else {
        hiddenFieldsEl.style.display = "block";
        e.target.textContent = "Hide it";
      }
    }
  }
}
