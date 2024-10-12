function attachEventsListeners() {
  const inputElDays = document.querySelector("#days");
  const inputElHours = document.querySelector("#hours");
  const inputElMinutes = document.querySelector("#minutes");
  const inputElSeconds = document.querySelector("#seconds");

  const buttons = document.querySelectorAll(`input[type="button"]`);

  const units = {
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };

  function updateUnits(secondsAmount) {
    inputElDays.value = Number(secondsAmount / units.days).toFixed(2);
    inputElHours.value = Number(secondsAmount / units.hours).toFixed(2);
    inputElMinutes.value = Number(secondsAmount / units.minutes).toFixed(2);
    inputElSeconds.value = Number(secondsAmount / units.seconds).toFixed(2);
  }

  function clickEventHandler(e) {
    const inputTimeType = e.target.getAttribute("id").split("Btn")[0];
    const currentInputEl = document.querySelector("#" + inputTimeType);
    const currentValue = currentInputEl.value;

    const multiplier = units[inputTimeType];

    updateUnits(currentValue * multiplier);
    buttons.forEach((button) => {
      button.addEventListener("click", clickEventHandler);
    });
  }
}
