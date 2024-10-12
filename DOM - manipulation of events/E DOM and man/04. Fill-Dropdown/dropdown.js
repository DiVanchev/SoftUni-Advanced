function addItem() {
    const menuEl = document.querySelector('#menu');
    const newItemText = document.querySelector('#newItemText');
    const newItemValue = document.querySelector('#newItemValue');

    if (newItemText.value == '' || newItemValue == '') {
        return;
    }

    const newOption = document.createElement('option');
    newOption.textContent = newItemText.value;
    newOption.setAttribute('value', newItemValue.value)

    menuEl.appendChild(newOption);

    newItemText.value = '';
    newItemValue.value = '';

    newItemText.focus();
}