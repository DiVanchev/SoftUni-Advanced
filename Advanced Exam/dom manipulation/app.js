window.addEventListener("load", solve);

function solve() {
  const typeEl = document.getElementById("type");
  const intensityEl = document.getElementById("intensity");
  const caloriesEl = document.getElementById("calories");
  const durationEl = document.getElementById("duration");
  const dateEl = document.getElementById("date");
  const addBtn = document.getElementById("add-activity");
  const previewList = document.getElementById("preview-activity");
  const activityTableBody = document.getElementById("activities-table");

  addBtn.addEventListener("click", handleAddActivity);

  function createButton(text, onClickHandler, buttonClass) {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = buttonClass;
    button.addEventListener("click", onClickHandler);
    return button;
  }

  function createCell(content) {
    const cell = document.createElement("td");
    cell.textContent = content;
    return cell;
  }

  function resetInputs() {
    typeEl.value = "";
    intensityEl.value = "";
    caloriesEl.value = "";
    durationEl.value = "";
    dateEl.value = "";
  }

  function handleAddActivity() {
    const activityData = {
      type: typeEl.value.trim(),
      intensity: intensityEl.value.trim(),
      calories: caloriesEl.value.trim(),
      duration: durationEl.value.trim(),
      date: dateEl.value.trim(),
    };

    if (
      !activityData.type ||
      !activityData.intensity ||
      !activityData.calories ||
      !activityData.duration ||
      !activityData.date ||
      Number(activityData.calories) <= 0 ||
      Number(activityData.duration) <= 0
    ) {
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `Activity: ${activityData.type}  Intensity: ${activityData.intensity}  Duration: ${activityData.duration} min. \n \n Date: ${activityData.date}  Calories: ${activityData.calories}`;

    const editButton = createButton("Edit", () => handleEdit(listItem, activityData), "edit-btn");
    const nextButton = createButton("Next", () => moveToTable(activityData, listItem), "next-btn");

    listItem.appendChild(editButton);
    listItem.appendChild(nextButton);
    previewList.appendChild(listItem);

    resetInputs();
    addBtn.disabled = true;
  }

  function handleEdit(listItem, data) {
    typeEl.value = data.type;
    intensityEl.value = data.intensity;
    caloriesEl.value = data.calories;
    durationEl.value = data.duration;
    dateEl.value = data.date;

    listItem.remove();
    addBtn.disabled = false;
  }

  function moveToTable(activityData, listItem) {
    const row = document.createElement("tr");

    const typeCell = createCell(activityData.type);
    const durationCell = createCell(activityData.duration);
    const caloriesCell = createCell(activityData.calories);
    const dateCell = createCell(activityData.date);
    const intensityCell = createCell(activityData.intensity);

    const actionCell = document.createElement("td");
    const deleteButton = createButton("Delete", () => row.remove(), "delete-btn");
    actionCell.appendChild(deleteButton);

    row.appendChild(typeCell);
    row.appendChild(durationCell);
    row.appendChild(caloriesCell);
    row.appendChild(dateCell);
    row.appendChild(intensityCell);
    row.appendChild(actionCell);

    activityTableBody.appendChild(row);
    listItem.remove();
    addBtn.disabled = false;
  }
}
