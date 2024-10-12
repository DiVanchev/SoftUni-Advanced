function addItem() {
  const input = document.getElementById("newItemText");
  const list = document.getElementById("items");

  const text = input.value;

  if (!text) {
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = text;
  
  list.appendChild(newItem);

  input.value = "";
}
