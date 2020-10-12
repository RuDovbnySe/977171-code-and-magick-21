'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215,' +
' 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

for (i = 0; i < 4; i++) {
  let HeroName = function arrayRandElement(WIZARD_NAMES) {
    var min = 0;
    var max = WIZARD_NAMES.length - 1;
    var rand = Math.ceil(Math.random() * (max - min));
    return WIZARD_NAMES[rand];
  };

  let HeroSurname = function arrayRandElement(WIZARD_SURNAMES) {
    var min = 0;
    var max = WIZARD_SURNAMES.length - 1;
    var rand = Math.ceil(Math.random() * (max - min));
    return WIZARD_SURNAMES[rand];
  };

  var HeroCoatColors = function arrayRandElement(COAT_COLORS) {
    var min = 0;
    var max = COAT_COLORS.length - 1;
    var rand = Math.ceil(Math.random() * (max - min));
    return COAT_COLORS[rand];
  };

  var HeroEyesColors = function arrayRandElement(EYES_COLORS) {
    var min = 0;
    var max = EYES_COLORS.length - 1;
    var rand = Math.ceil(Math.random() * (max - min));
    return EYES_COLORS[rand];
  };

  var wizards = [
    {
      name: HeroName(WIZARD_NAMES) + ' ' + HeroSurname(WIZARD_SURNAMES),
      coatColor: HeroCoatColors(COAT_COLORS),
      eyesColor: HeroEyesColors(EYES_COLORS)
    },
    {
      name: HeroName(WIZARD_NAMES) + ' ' + HeroSurname(WIZARD_SURNAMES),
      coatColor: HeroCoatColors(COAT_COLORS),
      eyesColor: HeroEyesColors(EYES_COLORS)
    },
    {
      name: HeroName(WIZARD_NAMES) + ' ' + HeroSurname(WIZARD_SURNAMES),
      coatColor: HeroCoatColors(COAT_COLORS),
      eyesColor: HeroEyesColors(EYES_COLORS)
    },
    {
      name: HeroName(WIZARD_NAMES) + ' ' + HeroSurname(WIZARD_SURNAMES),
      coatColor: HeroCoatColors(COAT_COLORS),
      eyesColor: HeroEyesColors(EYES_COLORS)
    },
  ];
}
console.log(wizards);

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}


