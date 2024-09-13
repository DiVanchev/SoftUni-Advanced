function wordsUpperCase(str) {
    let res = str.split(/[^A-Za-z0-9]+/gm);
    let buffer = "";
    for (i = 0; i < res.length; i++) {
        let word = res[i];
        word = word.toUpperCase();
        if (res[i + 1]) {
            buffer += word + ", ";
        } else{
            buffer += word + " ";
        }
    }
    console.log(buffer);
}
wordsUpperCase('Hi, how are you?');