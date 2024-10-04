function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const studentListRows = document.querySelectorAll("table tbody tr");
    const searchfieldEl = document.querySelector("#searchField");
    const searchStr = searchfieldEl.value.toLowerCase();

    studentListRows.forEach((row) => {
      row.classList.remove("select");
    });

    if (searchStr == "") return;

    studentListRows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();
      if (rowText.includes(searchStr)) {
        row.classList.add("select");
      }
    });

    searchfieldEl.value = "";
  }
}
