function deleteByEmail() {
    
    const input = document.querySelector(`[name='email']`);
    const pattern = input.value.toLocaleLowerCase();
    const output = document.getElementById('result')
    if(!pattern) {
        output.textContent = 'Not found. ';
        return;
    }
    
    const rows = document.querySelectorAll('#customers tbody tr');
    let found = false;
     
    for(let i = 0; i < rows.length; i++) {
        const currentRow = rows[i];
        if (currentRow.textContent.toLocaleLowerCase().includes(pattern)){
            currentRow.remove();
            found = true;
        }
    }

    input.value = '';
    if (found) {
        output.textContent = 'Deleted';
    } else {
        output.textContent = 'Not found.';
    }
}