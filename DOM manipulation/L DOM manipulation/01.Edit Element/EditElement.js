function editElement(ref, match, replacer) {
    const regexp = new RegExp (match, 'g');
    ref.textContent = ref.textContent.replace(regexp, replacer)
}