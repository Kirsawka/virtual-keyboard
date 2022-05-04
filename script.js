const keys = {
    enKeyLowerCaseFirstRow: {
        Digit1: '1',
        Digit2: '2',
        Digit3: '3',
        Digit4: '4',
        Digit5: '5',
        Digit6: '6',
        Digit7: '7',
        Digit8: '8',
        Digit9: '9',
        Digit0: '0',
        Minus: '-',
        Equal: '=',
    },
    enKeyLowerCaseSecondRow: {
        KeyQ: 'q',
        KeyW: 'w',
        KeyE: 'e',
        KeyR: 'r',
        KeyT: 't',
        KeyY: 'y',
        KeyU: 'u',
        KeyI: 'i',
        KeyO: 'o',
        KeyP: 'p',
        BracketLeft: '[',
        BracketRight: ']',
        Backslash: '\\',
    },
    enKeyLowerCaseThirdRow: {
        KeyA: 'a',
        KeyS: 's',
        KeyD: 'd',
        KeyF: 'f',
        KeyG: 'g',
        KeyH: 'h',
        KeyJ: 'j',
        KeyK: 'k',
        KeyL: 'l',
        Semicolon: ';',
        Quote: "'",
    },
    enKeyLowerCaseFourthRow: {
        KeyZ: 'z',
        KeyX: 'x',
        KeyC: 'c',
        KeyV: 'v',
        KeyB: 'b',
        KeyN: 'n',
        KeyM: 'm',
        Comma: ',',
        Period: '.',
        Slash: '/',
    },
};

const systemButtons = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock', 'Tab', 'Backspace', 'Enter', 'Delete'];
const textarea = document.querySelector('.textarea');

function init() {
    let firstRowOut = '';
    for (let key in keys.enKeyLowerCaseFirstRow) {
        firstRowOut += '<div class = \'keyboard-btn\' id = ' + key + '>' + keys.enKeyLowerCaseFirstRow[key] + '</div>';
    }
    document.querySelector('.first-row').innerHTML = firstRowOut;

    let secondRowOut = '';
    for (let key in keys.enKeyLowerCaseSecondRow) {
        secondRowOut += '<div class = \'keyboard-btn\' id = ' + key + '>' + keys.enKeyLowerCaseSecondRow[key] + '</div>';
    }
    document.querySelector('.second-row').innerHTML = secondRowOut;

    let thirdRowOut = '';
    for (let key in keys.enKeyLowerCaseThirdRow) {
        thirdRowOut += '<div class = \'keyboard-btn\' id = ' + key + '>' + keys.enKeyLowerCaseThirdRow[key] + '</div>';
    }
    document.querySelector('.third-row').innerHTML = thirdRowOut;

    let fourthRowOut = '';
    for (let key in keys.enKeyLowerCaseFourthRow) {
        fourthRowOut += '<div class = \'keyboard-btn\' id = ' + key + '>' + keys.enKeyLowerCaseFourthRow[key] + '</div>';
    }
    document.querySelector('.fourth-row').innerHTML = fourthRowOut;
}

init();

document.addEventListener('keydown', function (event) {
    if (event) {
        document.querySelector(`#${event.code}`).classList.add('active');
    }
    event.preventDefault();
});

document.addEventListener('keyup', function (event) {
    if (event && !systemButtons.includes(event.code)) {
        document.querySelector(`#${event.code}`).classList.remove('active');
        textarea.textContent += event.key;
    }
})
