import keys from './object.js';

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
  document.querySelector(`#${event.code}`).classList.toggle('active');
  textarea.selectionStart = cursorPosition;
};

document.addEventListener('keydown', keyDownEvent);

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
      textareaText.splice(cursorPosition, 0, document.querySelector(`#${event.code}`).innerHTML);
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
