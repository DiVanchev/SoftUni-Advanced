function attachGradientEvents() {
    const output = document.getElementById('result');
    const box = document.getElementById('gradient');
    box.addEventListener('mousemove', function onMove(event){
        const offset = Math.floor(event.offsetX / box.clientWidth * 100) + '%';
        output.textContent = offset;
    })
}