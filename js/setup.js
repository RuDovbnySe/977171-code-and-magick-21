'use strict';

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);
const setupOpen = document.querySelector('.setup-open');
const setup = document.querySelector('.setup');
const setupClose = setup.querySelector('.setup-close');
const setupWizard = document.querySelector('.setup-wizard');
const wizardCoat = setupWizard.querySelector('.wizard-coat');
const wizardEyes = setupWizard.querySelector('.wizard-eyes');
const setupFireball = document.querySelector('.setup-fireball-wrap');
const wizardCoatOnClick = document.querySelector('#wizard-coat');
const wizardEyestOnClick = document.querySelector('#wizard-eyes');
const userNameInput = document.querySelector('.setup-user-name');
const coatColorInput = document.getElementsByName('coat-color');
const eyesColorInput = document.getElementsByName('eyes-color');
const fireballColorInput = document.getElementsByName('fireball-color');
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;


const WIZARD_NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];
const WIZARD_SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];
const COAT_COLORS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const EYES_COLORS = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];
const FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
]

// В файле stat.js также есть getRandomNumber, консоль выдаёт ошибку. Как лучше поступить?
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomNumber(0, array.length - 1);
  const element = array[randomIndex];
  return element;
};

let wizards = [];
for (let i = 0; i < 4; i++) {
  const wizardName = getRandomArrayItem(WIZARD_NAMES);
  const wizardSurname = getRandomArrayItem(WIZARD_SURNAMES);
  const wizardFullName = `${wizardName} ${wizardSurname}`;
  const wizardCoatColor = getRandomArrayItem(COAT_COLORS);
  const wizardEyesColor = getRandomArrayItem(EYES_COLORS);

  const generateWizardData =
    {
      name: wizardFullName,
      coatColor: wizardCoatColor,
      eyesColor: wizardEyesColor
    };

  wizards.push(generateWizardData);
}

for (let i = 0; i < wizards.length; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards[i].name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards[i].coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

const onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});

const settingColor = (array, touch) => {
  const randomColor = getRandomArrayItem(array);
  touch.style.fill = randomColor;
  return randomColor;
};
wizardEyestOnClick.onchange = (Color) => {
  eyesColorInput.value = Color;
  coatColorInput.value = Color;
};

wizardCoatOnClick.addEventListener('click', function (evt) {
  evt.preventDefault();
  const randomCoatColor = settingColor(COAT_COLORS, wizardCoat);
  coatColorInput.value = randomCoatColor;
  console.log(coatColorInput.value);
});

wizardEyestOnClick.addEventListener('click', function (evt) {
  evt.preventDefault();
  const randomEyesColor = settingColor(EYES_COLORS, wizardEyes);
  eyesColorInput.value = randomEyesColor;
  console.log(eyesColorInput.value);
});

const settingFireballColor = () => {
  const randomColor = getRandomArrayItem(FIREBALL_COLORS);
  setupFireball.style.backgroundColor = randomColor;
  setupFireball.value = randomColor;
  console.log(randomColor);
  console.log(setupFireball.value);
};

setupFireball.addEventListener('click', function (evt) {
  evt.preventDefault();
  settingFireballColor();
});

