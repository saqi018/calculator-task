function appendChar(char) {
    document.forms.screen.value += char;
    vib();
}

function clearScreen() {
    document.forms.screen.value = '';
    vib();
}

function calculate() {
    document.forms.screen.value = eval(document.forms.screen.value);
    vib();
}

function vib() {
    console.log("Vibrating...");
}
