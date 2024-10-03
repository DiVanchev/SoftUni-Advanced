function sumTable() {
    const output = document.getElementById('sum');
    const tableRows = document.querySelectorAll('table tr');
    const rows = Array.from(tableRows).slice(1, -1);
    const cols = rows.map(r => r.children[r.children.length - 1])

    let sum = 0;

    for (const col of cols) {
        sum += Number(col.textContent);
    }

    output.textContent = sum;
}