'use strict';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215,' +
' 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomNumber(0, array.length - 1);
  const element = array[randomIndex];
  return element;
};

let wizards = [];
for (let i = 0; i < 4; i++) {
  const wizarnName = getRandomArrayItem(WIZARD_NAMES);
  const wizardSurname = getRandomArrayItem(WIZARD_SURNAMES);
  const wizardFullName = wizarnName + ' ' + wizardSurname;
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

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}


