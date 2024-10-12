function addItem() {
    const input = document.getElementById('newItemText');
    const list = document.getElementById('items');

    const text = input.value;

    if (!text) {
        return;
    }

    const newItem = document.createElement('li');
    newItem.textContent = text;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    newItem.appendChild(deleteBtn);
    deleteBtn.addEventListener('click',function onClick (e){
        const btn = e.target;
        btn.parentElement.remove();
    }) 


    list.appendChild(newItem);

    input.value = '';
}