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
    enKeyUpperCaseFirstRow: {
        Digit1: '!',
        Digit2: '@',
        Digit3: '#',
        Digit4: '$',
        Digit5: '%',
        Digit6: '^',
        Digit7: '&',
        Digit8: '*',
        Digit9: '(',
        Digit0: ')',
        Minus: '_',
        Equal: '+',
    },
    enKeyUpperCaseSecondRow: {
        KeyQ: 'Q',
        KeyW: 'W',
        KeyE: 'E',
        KeyR: 'R',
        KeyT: 'T',
        KeyY: 'Y',
        KeyU: 'U',
        KeyI: 'I',
        KeyO: 'O',
        KeyP: 'P',
        BracketLeft: '{',
        BracketRight: '}',
        Backslash: '|',
    },
    enKeyUpperCaseThirdRow: {
        KeyA: 'A',
        KeyS: 'S',
        KeyD: 'D',
        KeyF: 'F',
        KeyG: 'G',
        KeyH: 'H',
        KeyJ: 'J',
        KeyK: 'K',
        KeyL: 'L',
        Semicolon: ':',
        Quote: '""',
    },
    enKeyUpperCaseFourthRow: {
        KeyZ: 'Z',
        KeyX: 'X',
        KeyC: 'C',
        KeyV: 'V',
        KeyB: 'B',
        KeyN: 'N',
        KeyM: 'M',
        Comma: '<',
        Period: '>',
        Slash: '?',
    },
    ruKeyLowerCaseSecondRow: {
        KeyQ: 'й',
        KeyW: 'ц',
        KeyE: 'у',
        KeyR: 'к',
        KeyT: 'е',
        KeyY: 'н',
        KeyU: 'г',
        KeyI: 'ш',
        KeyO: 'щ',
        KeyP: 'з',
        BracketLeft: 'х',
        BracketRight: 'ъ',
        Backslash: '\\',
    },
    ruKeyLowerCaseThirdRow: {
        KeyA: 'ф',
        KeyS: 'ы',
        KeyD: 'в',
        KeyF: 'а',
        KeyG: 'п',
        KeyH: 'р',
        KeyJ: 'о',
        KeyK: 'л',
        KeyL: 'д',
        Semicolon: 'ж',
        Quote: "э",
    },
    ruKeyLowerCaseFourthRow: {
        KeyZ: 'я',
        KeyX: 'ч',
        KeyC: 'с',
        KeyV: 'м',
        KeyB: 'и',
        KeyN: 'т',
        KeyM: 'ь',
        Comma: 'б',
        Period: 'ю',
        Slash: '.',
    },
    ruKeyUpperCaseFirstRow: {
        Digit1: '!',
        Digit2: '"',
        Digit3: '№',
        Digit4: ';',
        Digit5: '%',
        Digit6: ':',
        Digit7: '?',
        Digit8: '*',
        Digit9: '(',
        Digit0: ')',
        Minus: '_',
        Equal: '+',
    },
    ruKeyUpperCaseSecondRow: {
        KeyQ: 'Й',
        KeyW: 'Ц',
        KeyE: 'У',
        KeyR: 'К',
        KeyT: 'Е',
        KeyY: 'Н',
        KeyU: 'Г',
        KeyI: 'Ш',
        KeyO: 'Щ',
        KeyP: 'З',
        BracketLeft: 'Х',
        BracketRight: 'Ъ',
        Backslash: '/',
    },
    ruKeyUpperCaseThirdRow: {
        KeyA: 'Ф',
        KeyS: 'Ы',
        KeyD: 'В',
        KeyF: 'А',
        KeyG: 'П',
        KeyH: 'Р',
        KeyJ: 'О',
        KeyK: 'Л',
        KeyL: 'Д',
        Semicolon: 'Ж',
        Quote: "Э",
    },
    ruKeyUpperCaseFourthRow: {
        KeyZ: 'Я',
        KeyX: 'Ч',
        KeyC: 'С',
        KeyV: 'М',
        KeyB: 'И',
        KeyN: 'Т',
        KeyM: 'Ь',
        Comma: 'Б',
        Period: 'Ю',
        Slash: ',',
    }
};

const keysNotForKeyboardPrint = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock', 'Tab', 'Backspace', 'Enter', 'Delete', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];
const keysNotForPrint = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock', 'Tab', 'Backspace', 'Enter', 'Delete'];
const keysForShortcuts = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock'];

const textarea = document.querySelector('.textarea');
const keyboardContainer = document.querySelector('.keyboard-container');
let textareaText = [];
let strForLang = '';

// функция для формирования строк ------------------------------------------------------------------------------РАБОТАЕТ
const getRows = (theObject, className) => {
    let row = '';
    for (let key in theObject) {
        row += '<div class = \'keyboard-btn\' id = ' + key + '>' + theObject[key] + '</div>';
    }
    document.querySelector(`.${className}`).innerHTML = row;
}

// вывод строк в зависимости от языка в LocalStorage -----------------------------------------------------------РАБОТАЕТ
let language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';

const outputLowerCase = (language) => {
    if (language === 'en') {
        getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
        getRows(keys.enKeyLowerCaseSecondRow, 'second-row');
        getRows(keys.enKeyLowerCaseThirdRow, 'third-row');
        getRows(keys.enKeyLowerCaseFourthRow, 'fourth-row');
        document.querySelector('#Backquote').textContent = '`';
    } else {
        getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
        getRows(keys.ruKeyLowerCaseSecondRow, 'second-row');
        getRows(keys.ruKeyLowerCaseThirdRow, 'third-row');
        getRows(keys.ruKeyLowerCaseFourthRow, 'fourth-row');
        document.querySelector('#Backquote').textContent = 'ё';
    }
}

outputLowerCase(language);

const outputUpperCase = (language) => {
    if (language === 'en') {
        getRows(keys.enKeyUpperCaseFirstRow, 'first-row');
        getRows(keys.enKeyUpperCaseSecondRow, 'second-row');
        getRows(keys.enKeyUpperCaseThirdRow, 'third-row');
        getRows(keys.enKeyUpperCaseFourthRow, 'fourth-row');
        document.querySelector('#Backquote').textContent = '~';
    } else {
        getRows(keys.ruKeyUpperCaseFirstRow, 'first-row');
        getRows(keys.ruKeyUpperCaseSecondRow, 'second-row');
        getRows(keys.ruKeyUpperCaseThirdRow, 'third-row');
        getRows(keys.ruKeyUpperCaseFourthRow, 'fourth-row');
        document.querySelector('#Backquote').textContent = 'Ё';
    }
}

const outputForCaps = (language) => {
    if (language === 'en') {
        getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
        getRows(keys.enKeyUpperCaseSecondRow, 'second-row');
        getRows(keys.enKeyUpperCaseThirdRow, 'third-row');
        getRows(keys.enKeyUpperCaseFourthRow, 'fourth-row');
        document.querySelector('#Backquote').textContent = '`';
    } else {
        getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
        getRows(keys.ruKeyUpperCaseSecondRow, 'second-row');
        getRows(keys.ruKeyUpperCaseThirdRow, 'third-row');
        getRows(keys.ruKeyUpperCaseFourthRow, 'fourth-row');
        document.querySelector('#Backquote').textContent = 'Ё';
    }
}

// запись языка в localStorage перед уходом --------------------------------------------------------------------РАБОТАЕТ
const setLocalStorage = () => {
    localStorage.setItem('language', language);
}

window.addEventListener('beforeunload', setLocalStorage);

// нажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной -------------------------------РАБОТАЕТ
const keyDownEvent = (event) => {
    event.preventDefault();
    document.querySelector(`#${event.code}`).classList.toggle('active');
    if (event.key === 'Shift') {
        outputUpperCase(language);
    }
    textarea.selectionStart = cursorPosition;
}

document.addEventListener('keydown', keyDownEvent);

// отмена подсветки нажатия на кнопку ---------------------------------------------------------------------ДОБАВИТЬ ШИФТ
const keyUpEvent = (event) => {
    event.preventDefault();
    if (event && !keysForShortcuts.includes(event.code)) {
        document.querySelector(`#${event.code}`).classList.remove('active');
    }
    if (event.code === 'Tab') {
        textareaText.splice(cursorPosition, 0, '\t');
        cursorPosition += 1;
        textarea.textContent = textareaText.join('');
    }
    (document.querySelector('#CapsLock').classList.contains('active')) ? outputForCaps(language) : outputLowerCase(language);
    if (event.code === 'Enter') {
        textareaText.splice(cursorPosition, 0, '\n');
        cursorPosition += 1;
    }
    if (event.code === 'Space') {
        textareaText.splice(cursorPosition, 0, ' ');
        cursorPosition += 1;
        textarea.textContent = textareaText.join('');
    }
    if (event.code === 'Backspace') {
        textareaText.splice(cursorPosition - 1, 1);
        textarea.textContent = textareaText.join('');
        if (cursorPosition === 0) {
            cursorPosition = 0;
        } else {
            cursorPosition--;
        }
    }
    if (event.code === 'Delete') {
        textareaText.splice(cursorPosition, 1);
        textarea.textContent = textareaText.join('');
    }

    if (document.querySelector('#ShiftLeft').classList.contains('active') || document.querySelector('#ShiftRight').classList.contains('active')) {
        document.querySelector('#ShiftRight').classList.remove('active');
        document.querySelector('#ShiftLeft').classList.remove('active');
        outputLowerCase(language);
    }


//смена языка
    if (event.key === 'Shift' && event.altKey) {
        language = (language === 'en') ? 'ru' : 'en';
        localStorage['language'] = language;
        (document.querySelector('#CapsLock').classList.contains('active')) ? outputForCaps(language) : outputLowerCase(language);
        document.querySelector('#AltLeft').classList.remove('active');
    }
    
    if (event && !keysNotForKeyboardPrint.includes(event.code)) {
        textareaText.splice(cursorPosition, 0, document.querySelector(`#${event.code}`).innerHTML);
        cursorPosition++;
        textarea.textContent = textareaText.join('');
    }
    textarea.focus();
    textarea.selectionStart = cursorPosition;
}

document.addEventListener('keyup', keyUpEvent);


// Действия при нажатиях на кнопки --------------------------------------------------------------------

let cursorPosition = textarea.selectionStart;
textarea.addEventListener('click', () => {
    cursorPosition = textarea.selectionStart;
});


const printText = (event) => {
    if (event && !keysNotForPrint.includes(event.target.id)) {
        textareaText.splice(cursorPosition, 0, event.target.innerText);
        cursorPosition++;
    }
    if (event.target.id === 'Space') {
        textareaText.push(' ');
    }
    textarea.textContent = textareaText.join('');
}

// залипание/отлипание shift, ctrl, alt, caps
const getKeysForShortcuts = (event) => {
    if (keysForShortcuts.includes(event.target.id) && event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight' && event.target.id !== 'CapsLock') {
        document.querySelector(`#${event.target.id}`).classList.toggle('active');
    }
    console.log('getKeysForShortcuts', textareaText);
    // поведение при нажатом CapsLock и Shift - ЕЩЕ ПОДУМАТЬ

}

const shiftPress = (event) => {
    if (event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight' && !document.querySelector('#CapsLock').classList.contains('active')) {
        document.querySelector('#ShiftLeft').classList.remove('active');
        document.querySelector('#ShiftRight').classList.remove('active');
        outputLowerCase(language);
    }
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
        document.querySelector(`#${event.target.id}`).classList.toggle('active');
        if (document.querySelector(`#${event.target.id}`).classList.contains('active')) {
            outputUpperCase(language);
        } else {
            outputLowerCase(language);
        }
    }
    console.log('shiftPress', textareaText);
}

const capsPress = (event) => {
    if (event.target.id === 'CapsLock') {
        document.querySelector('#CapsLock').classList.toggle('active');
        (document.querySelector('#CapsLock').classList.contains('active')) ? outputForCaps(language) : outputLowerCase(language);
    }
}

const enterPress = (event) => {
    if (event.target.id === 'Enter') {
        textareaText.push('\n');
    }
}

const backspacePress = (event) => {
    if (event.target.id === 'Backspace') {
        textareaText.splice(cursorPosition - 1, 1);
        textarea.textContent = textareaText.join('');

        if (cursorPosition === 0) {
            cursorPosition = 0;
        } else {
            cursorPosition--;
        }
    }
}

const del = (event) => {
    if (event.target.id === 'Delete') {
        console.log(textareaText);
        // textareaText.splice(cursorPosition, 1);
        // textarea.textContent = textareaText.join('');
    }
}

const tabPress = (event) => {
    if (event.target.id === 'Tab') {
        textareaText.splice(cursorPosition, 0, '   ');
        cursorPosition += 3;
    }
}

const changeLang = (event) => {
    if (event.target.innerText === 'shift' || event.target.innerText === 'alt') {
        strForLang += event.target.innerText;
    } else {
        strForLang = '';
    }
    if (strForLang === 'shiftalt' || strForLang === 'altshift') {
        strForLang = '';
        language = (language === 'en') ? 'ru' : 'en';
        localStorage['language'] = language;
        (document.querySelector('#CapsLock').classList.contains('active')) ? outputForCaps(language) : outputLowerCase(language);
        document.querySelector('#AltLeft').classList.remove('active');
        document.querySelector('#AltRight').classList.remove('active');
    }
}

keyboardContainer.addEventListener('click', printText);
keyboardContainer.addEventListener('click', getKeysForShortcuts);
keyboardContainer.addEventListener('click', shiftPress);
keyboardContainer.addEventListener('click', capsPress);
keyboardContainer.addEventListener('click', enterPress);
keyboardContainer.addEventListener('click', backspacePress);
keyboardContainer.addEventListener('click', tabPress);
keyboardContainer.addEventListener('click', changeLang);
keyboardContainer.addEventListener('click', del);


