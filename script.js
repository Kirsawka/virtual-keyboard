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

const keysNotForPrint = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock', 'Tab', 'Backspace', 'Enter', 'Delete', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];
const keysForShortcuts = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock'];

const textarea = document.querySelector('.textarea');
const keyboardContainer = document.querySelector('.keyboard-container');
let textareaText = [];

// функция для формирования строк --------------------------------------------------------------------
const getRows = (theObject, className) => {
    let row = '';
    for (let key in theObject) {
        row += '<div class = \'keyboard-btn\' id = ' + key + '>' + theObject[key] + '</div>';
    }
    document.querySelector(`.${className}`).innerHTML = row;
}

// вывод строк в зависимости от языка в LocalStorage --------------------------------------------------------------------
let language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';

const whatLang = (language) => {
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

whatLang(language);

const whatLangToUpper = (language) => {
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

// запись языка в localStorage перед уходом --------------------------------------------------------------------
function setLocalStorage() {
    localStorage.setItem('language', language);
}

window.addEventListener('beforeunload', setLocalStorage);

// нажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной --------------------------------------------------------------------
const keyDownEvent = (event) => {
    event.preventDefault(); //для прерывания событий нажатия
    if (event) {
        document.querySelector(`#${event.code}`).classList.toggle('active');
    }
}

document.addEventListener('keydown', keyDownEvent);


// отмена подсветки нажатия на кнопку --------------------------------------------------------------------
const keyUpEvent = (event) => {
    event.preventDefault(); //для прерывания событий нажатия
    if (event && !keysForShortcuts.includes(event.code)) {
        document.querySelector(`#${event.code}`).classList.remove('active');
    }

    // вывод текста в textarea, РАЗОБРАТЬСЯ С КУРСОРОМ
    if (event && !keysNotForPrint.includes(event.code)) {
        textareaText.push(event.key);
        textarea.textContent = textareaText.join('');
        // textarea.textContent += event.key;
    }

    //ПОДУМАТЬ
    console.log(event.code);
    if (document.querySelector('#CapsLock').classList.contains('active')) {
        whatLangToUpper(language);
    } else {
        whatLang(language);
    }
}

document.addEventListener('keyup', keyUpEvent);


// вывод текста при нажатии на кнопки --------------------------------------------------------------------
const printText = (event) => {
    if (event && !keysNotForPrint.includes(event.target.id)) {
        textareaText.push(event.target.innerText);
        // textarea.textContent += event.target.innerText;
    }
    if (event.target.id === 'Space') {
        textareaText.push(' ');
        // textarea.textContent += ' ';
    }
    textarea.textContent = textareaText.join('');
}

keyboardContainer.addEventListener('click', printText);

// залипание/отлипание shift, ctrl, alt, caps

const getKeysForShortcuts = (event) => {
    if (keysForShortcuts.includes(event.target.id) && event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight' && event.target.id !== 'CapsLock') {
        document.querySelector(`#${event.target.id}`).classList.toggle('active');
    }
    // поведение при нажатом CapsLock и Shift - ЕЩЕ ПОДУМАТЬ
    // if ((event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') && document.querySelector('#CapsLock').classList.contains('active')) {
    //     whatLang(language);
    // } else if (document.querySelector('#CapsLock').classList.contains('active')) {
    //     whatLangToUpper(language);
    // } else {
    //     whatLang(language);
    // }
}

// вывод заглавных букв по нажатию Shift
const shiftPress = (event) => {

    // вывод строчный букв по нажатию любой кнопки после Shift
    if (event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight' && !document.querySelector('#CapsLock').classList.contains('active')) {
        document.querySelector('#ShiftLeft').classList.remove('active');
        document.querySelector('#ShiftRight').classList.remove('active');
        whatLang(language);
    }

    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
        document.querySelector(`#${event.target.id}`).classList.toggle('active');
        if (document.querySelector(`#${event.target.id}`).classList.contains('active')) {
            whatLangToUpper(language);
        } else {
            whatLang(language);
        }
    }
}

// все заглавные буквы по нажатию CapsLock
const capsPress = (event) => {
    if (event.target.id === 'CapsLock') {
        document.querySelector('#CapsLock').classList.toggle('active');
        if (document.querySelector('#CapsLock').classList.contains('active')) {
            whatLangToUpper(language);
        } else {
            whatLang(language);
        }
    }
}

const enterPress = (event) => {
    if (event.target.id === 'Enter') {
        textareaText.push('\n');
        // textarea.textContent += '\n';
    }
}

// const keysNotForPrint = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock', 'Tab', 'Backspace', 'Enter', 'Delete', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];
const BackspacePress = (event) => {
    if (event.target.id === 'Backspace') {
        console.log(textareaText.length);
        textareaText.pop();
    }
}

const tabPress = (event) => {
    if (event.target.id === 'Tab') {
        textareaText.push('  ');
    }
}
let strForLang = '';
const changeLang = (event) => {
    if (event.target.id === 'ControlLeft' ||
        event.target.id === 'AltLeft' ||
        event.target.id === 'ControlRight' ||
        event.target.id === 'AltRight') {
        strForLang += event.target.id;
    } else {
        strForLang = '';
    }
    switch (strForLang) {
        case 'ControlLeftAltLeft':
        case 'AltLeftControlLeft':
        case 'ControlRightAltRight':
        case 'AltRightControlRight':
        case 'ControlLeftAltRight':
        case 'ControlRightAltLeft':
        case 'AltLeftControlRight':
        case 'AltRightControlLeft':
            strForLang = '';
            language = (language === 'en') ? 'ru' : 'en';
            localStorage['language'] = language;
            whatLang(language);
            document.querySelector('#ControlLeft').classList.remove('active');
            document.querySelector('#ControlRight').classList.remove('active');
            document.querySelector('#AltLeft').classList.remove('active');
            document.querySelector('#AltRight').classList.remove('active');
    }
}

//const keysForShortcuts = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock'];

keyboardContainer.addEventListener('click', getKeysForShortcuts);
keyboardContainer.addEventListener('click', shiftPress);
keyboardContainer.addEventListener('click', capsPress);
keyboardContainer.addEventListener('click', enterPress);
keyboardContainer.addEventListener('click', BackspacePress);
keyboardContainer.addEventListener('click', tabPress);
keyboardContainer.addEventListener('click', changeLang);


