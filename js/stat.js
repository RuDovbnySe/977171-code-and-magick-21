'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const TEXT_WIDTH = 48;
const TEXT_GAP = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 140, 30, 210);
  ctx.fillText('Список результатов:', 140, 46, 210);

  var maxTime = getMaxElement(times);


  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_GAP + BAR_HEIGHT + TEXT_WIDTH);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, 76 + BAR_HEIGHT - (BAR_HEIGHT * (times[i] / maxTime)));

    var randomSource = Math.ceil(Math.random() * 100);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + randomSource + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + TEXT_WIDTH + TEXT_GAP * 3 + BAR_HEIGHT, BAR_WIDTH * 1, BAR_HEIGHT * (times[i] / maxTime) * (-1));
  }
};
