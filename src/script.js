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
  enForCapsSecondRow: {
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
    BracketLeft: '[',
    BracketRight: ']',
    Backslash: '\\',
  },
  enForCapsThirdRow: {
    KeyA: 'A',
    KeyS: 'S',
    KeyD: 'D',
    KeyF: 'F',
    KeyG: 'G',
    KeyH: 'H',
    KeyJ: 'J',
    KeyK: 'K',
    KeyL: 'L',
    Semicolon: ';',
    Quote: '\'',
  },
  enForCapsFourthRow: {
    KeyZ: 'Z',
    KeyX: 'X',
    KeyC: 'C',
    KeyV: 'V',
    KeyB: 'B',
    KeyN: 'N',
    KeyM: 'M',
    Comma: ',',
    Period: '.',
    Slash: '/',
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
    Quote: 'э',
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
    Quote: 'Э',
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
  },
  ruForCapsSecondRow: {
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
    Backslash: '\\',
  },
  ruForCapsFourthRow: {
    KeyZ: 'Я',
    KeyX: 'Ч',
    KeyC: 'С',
    KeyV: 'М',
    KeyB: 'И',
    KeyN: 'Т',
    KeyM: 'Ь',
    Comma: 'Б',
    Period: 'Ю',
    Slash: '.',
  },
};

const container = document.createElement('div');
container.classList.add('container');

const textareaContainer = document.createElement('div');
textareaContainer.classList.add('textarea-container');

const textareaTag = document.createElement('textarea');
textareaTag.classList.add('textarea');

const keyboardContainerTag = document.createElement('div');
keyboardContainerTag.classList.add('keyboard-container');

const keyboardLine1 = document.createElement('div');
keyboardLine1.classList.add('keyboard-line');

const keyboardLine2 = document.createElement('div');
keyboardLine2.classList.add('keyboard-line');

const keyboardLine3 = document.createElement('div');
keyboardLine3.classList.add('keyboard-line');

const keyboardLine4 = document.createElement('div');
keyboardLine4.classList.add('keyboard-line');

const keyboardLine5 = document.createElement('div');
keyboardLine5.classList.add('keyboard-line');

document.body.appendChild(container);
container.appendChild(textareaContainer);
textareaContainer.appendChild(textareaTag);
container.appendChild(keyboardContainerTag);

keyboardContainerTag.appendChild(keyboardLine1);
keyboardLine1.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn backspace" id="Backspace">&larr;</div>');
keyboardLine1.insertAdjacentHTML('afterbegin', '<div class="keyboard-row first-row"></div>');
keyboardLine1.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn backquote" id="Backquote">`</div>');

keyboardContainerTag.appendChild(keyboardLine2);
keyboardLine2.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn del" id="Delete">del</div>');
keyboardLine2.insertAdjacentHTML('afterbegin', '<div class="keyboard-row second-row"></div>');
keyboardLine2.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn tab" id="Tab">tab</div>');

keyboardContainerTag.appendChild(keyboardLine3);
keyboardLine3.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn enter" id="Enter">enter</div>');
keyboardLine3.insertAdjacentHTML('afterbegin', '<div class="keyboard-row third-row"></div>');
keyboardLine3.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn caps" id="CapsLock">caps lock</div>');

keyboardContainerTag.appendChild(keyboardLine4);
keyboardLine4.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn top-row" id="ArrowUp">▲</div>');
keyboardLine4.insertAdjacentHTML('afterbegin', '<div class="keyboard-row fourth-row"></div>');
keyboardLine4.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn shift" id="ShiftLeft">shift</div>');
keyboardLine4.insertAdjacentHTML('beforeend', '<div class="keyboard-btn shift" id="ShiftRight">shift</div>');

keyboardContainerTag.appendChild(keyboardLine5);
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn ctrl" id="ControlRight">ctrl</div>');
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn right-row" id="ArrowRight">►</div>');
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn down-row" id="ArrowDown">▼</div>');
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn left-row" id="ArrowLeft">◄</div>');
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn alt" id="AltRight">alt</div>');
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn space" id="Space"></div>');
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn alt" id="AltLeft">alt</div>');
keyboardLine5.insertAdjacentHTML('afterbegin', '<div class="keyboard-btn ctrl" id="ControlLeft">ctrl</div>');

keyboardContainerTag.insertAdjacentHTML('afterend', '<p class="description">Для переключения языка комбинация: левыe shift + alt.</p>');
keyboardContainerTag.insertAdjacentHTML('afterend', '<p class="description">Клавиатура создана в операционной системе Windows.</p>');

const keysNotForKeyboardPrint = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock', 'Tab', 'Backspace', 'Enter', 'Delete'];
const keysNotForPrint = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock', 'Tab', 'Backspace', 'Enter', 'Delete'];
const keysForShortcuts = ['ControlLeft', 'ControlRight', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'CapsLock'];

const textarea = document.querySelector('.textarea');

const keyboardContainer = document.querySelector('.keyboard-container');
const shiftLeft = document.querySelector('#ShiftLeft');
const shiftRight = document.querySelector('#ShiftRight');
const capsLock = document.querySelector('#CapsLock');
const altLeft = document.querySelector('#AltLeft');
const altRight = document.querySelector('#AltRight');
const backQuote = document.querySelector('#Backquote');

const textareaText = [];
let strForLang = '';
let cursorPosition = textarea.selectionStart;

const getRows = (theObject, className) => {
  let row = '';
  Object.entries(theObject).forEach((key) => {
    row += `<div class = 'keyboard-btn' id = ${key[0]}>${key[1]}</div>`;
  });
  document.querySelector(`.${className}`).innerHTML = row;
};

let language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';

const outputLowerCase = (lang) => {
  if (lang === 'en') {
    getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
    getRows(keys.enKeyLowerCaseSecondRow, 'second-row');
    getRows(keys.enKeyLowerCaseThirdRow, 'third-row');
    getRows(keys.enKeyLowerCaseFourthRow, 'fourth-row');
    backQuote.textContent = '`';
  } else {
    getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
    getRows(keys.ruKeyLowerCaseSecondRow, 'second-row');
    getRows(keys.ruKeyLowerCaseThirdRow, 'third-row');
    getRows(keys.ruKeyLowerCaseFourthRow, 'fourth-row');
    backQuote.textContent = 'ё';
  }
};

outputLowerCase(language);

const outputUpperCase = (lang) => {
  if (lang === 'en') {
    getRows(keys.enKeyUpperCaseFirstRow, 'first-row');
    getRows(keys.enKeyUpperCaseSecondRow, 'second-row');
    getRows(keys.enKeyUpperCaseThirdRow, 'third-row');
    getRows(keys.enKeyUpperCaseFourthRow, 'fourth-row');
    backQuote.textContent = '~';
  } else {
    getRows(keys.ruKeyUpperCaseFirstRow, 'first-row');
    getRows(keys.ruKeyUpperCaseSecondRow, 'second-row');
    getRows(keys.ruKeyUpperCaseThirdRow, 'third-row');
    getRows(keys.ruKeyUpperCaseFourthRow, 'fourth-row');
    backQuote.textContent = 'Ё';
  }
};

const outputForCaps = (lang) => {
  if (lang === 'en') {
    getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
    getRows(keys.enForCapsSecondRow, 'second-row');
    getRows(keys.enForCapsThirdRow, 'third-row');
    getRows(keys.enForCapsFourthRow, 'fourth-row');
    backQuote.textContent = '`';
  } else {
    getRows(keys.enKeyLowerCaseFirstRow, 'first-row');
    getRows(keys.ruForCapsSecondRow, 'second-row');
    getRows(keys.ruKeyUpperCaseThirdRow, 'third-row');
    getRows(keys.ruForCapsFourthRow, 'fourth-row');
    backQuote.textContent = 'Ё';
  }
};

const setLocalStorage = () => {
  localStorage.setItem('language', language);
};

window.addEventListener('beforeunload', setLocalStorage);

const keyDownEvent = (event) => {
  event.preventDefault();
  if (document.querySelector(`#${event.code}`)) {
    document.querySelector(`#${event.code}`).classList.toggle('active');
  }
  textarea.selectionStart = cursorPosition;
};

document.addEventListener('keydown', keyDownEvent);

const keyUpEvent = (event) => {
  event.preventDefault();
  if (event && !keysForShortcuts.includes(event.code)) {
    if (document.querySelector(`#${event.code}`)) {
      document.querySelector(`#${event.code}`).classList.remove('active');
    }
  }
  if (event.code === 'Tab') {
    textareaText.splice(cursorPosition, 0, '\t');
    cursorPosition += 1;
    textarea.textContent = textareaText.join('');
  }
  if (capsLock.classList.contains('active')) {
    outputForCaps(language);
  } else {
    outputLowerCase(language);
  }
  if (shiftLeft.classList.contains('active')) {
    outputUpperCase(language);
  }
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
      cursorPosition -= 1;
    }
  }
  if (event.code === 'Delete') {
    textareaText.splice(cursorPosition, 1);
    textarea.textContent = textareaText.join('');
  }

  if (event.key === 'Shift' && event.altKey) {
    language = (language === 'en') ? 'ru' : 'en';
    localStorage.language = language;
    if (capsLock.classList.contains('active')) {
      outputForCaps(language);
    } else {
      outputLowerCase(language);
    }
    altLeft.classList.remove('active');
    shiftLeft.classList.remove('active');
  }

  if (event && !keysNotForKeyboardPrint.includes(event.code)) {
    if (event.key !== 'Shift' && (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active'))) {
      textareaText.splice(cursorPosition, 0, document.querySelector(`#${event.code}`).innerHTML.toUpperCase());
      shiftLeft.classList.remove('active');
      shiftRight.classList.remove('active');
      if (capsLock.classList.contains('active')) {
        outputForCaps(language);
      } else {
        outputLowerCase(language);
      }
    } else {
      if (document.querySelector(`#${event.code}`)) {
        textareaText.splice(cursorPosition, 0, document.querySelector(`#${event.code}`).innerHTML);
      }
    }
    cursorPosition += 1;
    textarea.textContent = textareaText.join('');
  }
  textarea.focus();
  textarea.selectionStart = cursorPosition;
};

document.addEventListener('keyup', keyUpEvent);

textarea.addEventListener('click', () => {
  cursorPosition = textarea.selectionStart;
});

const printText = (event) => {
  textarea.focus();

  if (keysForShortcuts.includes(event.target.id) && event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight' && event.target.id !== 'CapsLock') {
    document.querySelector(`#${event.target.id}`).classList.toggle('active');
  }

  if (event && !keysNotForPrint.includes(event.target.id)) {
    textareaText.splice(cursorPosition, 0, event.target.innerText);
    cursorPosition += 1;
  }

  if (event.target.id === 'Space') {
    textareaText.splice(cursorPosition, 0, ' ');
    cursorPosition += 1;
    textarea.textContent = textareaText.join('');
  }

  if (event.target.id !== 'ShiftLeft' && event.target.id !== 'ShiftRight' && !capsLock.classList.contains('active')) {
    shiftLeft.classList.remove('active');
    shiftRight.classList.remove('active');
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

  if (event.target.id === 'CapsLock') {
    capsLock.classList.toggle('active');
    if (capsLock.classList.contains('active')) {
      outputForCaps(language);
    } else {
      outputLowerCase(language);
    }
  }

  if (event.target.id === 'Enter') {
    textareaText.splice(cursorPosition, 0, '\n');
    cursorPosition += 1;
  }

  if (event.target.id === 'Backspace') {
    textareaText.splice(cursorPosition - 1, 1);
    textarea.textContent = textareaText.join('');

    if (cursorPosition === 0) {
      cursorPosition = 0;
    } else {
      cursorPosition += -1;
    }
  }

  if (event.target.id === 'Delete') {
    textareaText.splice(cursorPosition, 1);
    textarea.textContent = textareaText.join('');
  }

  if (event.target.id === 'Tab') {
    textareaText.splice(cursorPosition, 0, '\t');
    cursorPosition += 1;
    textarea.textContent = textareaText.join('');
  }
  if (event.target.innerText === 'shift' || event.target.innerText === 'alt') {
    strForLang += event.target.innerText;
  } else {
    strForLang = '';
  }
  if (strForLang === 'shiftalt' || strForLang === 'altshift') {
    strForLang = '';
    language = (language === 'en') ? 'ru' : 'en';
    localStorage.language = language;
    if (capsLock.classList.contains('active')) {
      outputForCaps(language);
    } else {
      outputLowerCase(language);
    }
    altLeft.classList.remove('active');
    altRight.classList.remove('active');
  }

  textarea.textContent = textareaText.join('');
  textarea.selectionStart = cursorPosition;
};

keyboardContainer.addEventListener('click', printText);
