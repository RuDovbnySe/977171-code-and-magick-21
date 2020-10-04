'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var TEXT_WIDTH = 48;
var TEXT_GAP = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 140, 30, 210);
  ctx.fillText('Список результатов:', 140, 46, 210);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_GAP + BAR_HEIGHT + TEXT_WIDTH);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, 76 + BAR_HEIGHT - (BAR_HEIGHT * (times[i] / maxTime)));
  }

  for (i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + i * 25 + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + TEXT_WIDTH + TEXT_GAP * 3 + BAR_HEIGHT, BAR_WIDTH * 1, BAR_HEIGHT * (times[i] / maxTime) * (-1));
  }
};


// Пробовал по аналогии с облаком отдельную функцию
// var firstStroke = 'Ура вы победили!';
// var secondStroke = 'Список результатов:';
//
// var winnerList = function (ctx) {
//   ctx.fillText(firstStroke, 0, 10);
//   ctx.fillText(secondStroke, 0, 58);
//   ctx.font = '16 px PT Mono';
//   ctx.textBaseline = 'hanging';
// };
//
// window.renderStatistics = function (ctx) {
//   winnerList(ctx);
// };

// Пробовал копировать из лекции
// var canvas = document.getElementById('canvas');
//
// var ctx = canvas.getContext('2d');


// ctx.font = '16 px PT Mono';
// ctx.textBaseline = 'hanging';
// ctx.color = 'black';
// ctx.fillText('Ура вы победили!', 0, 10);
// ctx.fillText('Список результатов:', 0, 48);

