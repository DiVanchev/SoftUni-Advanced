function focused() {
    document.addEventListener('focusin', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.closest('div').classList.add('focused');
        }
    });

    document.addEventListener('focusout', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.closest('div').classList.remove('focused');
        }
    });
}
