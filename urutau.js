var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

headShape(177.5, 230);
eye(150, 207);
iris(145, 207);
eye(205, 207);
iris(210, 207);
tip();
nose();
ctx.lineWidth = 1;
wingsLeft(125, 260);
wingsRight(229, 260);
cutHead(177.5, 142);

function cutHead(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFF";
  ctx.fill();
}

function headShape(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 60, 0, 2 * Math.PI);
  ctx.fillStyle = "#8B7355";
  ctx.fill();
}

function eye(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFCC00";
  ctx.strokeStyle="#696969";
  ctx.fill();
  ctx.stroke();
}

function iris(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 17, 0, 2 * Math.PI);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.stroke();
  ctx.moveTo(177, 230);
}

function tip() {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle="#2E2E2E";
  ctx.moveTo(177, 230);
  ctx.lineTo(140, 240);
  ctx.lineTo(125, 260);
  ctx.lineTo(214, 240);
  ctx.lineTo(229, 260);
  ctx.stroke();
}

function nose() {
  ctx.beginPath();
  ctx.fillStyle="#2E2E2E";
  ctx.moveTo(172, 230);
  ctx.lineTo(177.5, 250);
  ctx.lineTo(182, 230);
  ctx.stroke();
  ctx.fill();
}

function wingsLeft(x, y) {
  ctx.beginPath();
  ctx.moveTo(x+10, y+10);
  ctx.lineTo(x+20, y+15);
  ctx.lineTo(x+30, y+10);
  ctx.lineTo(x+52, y+30);
  ctx.strokeStyle="#CDAA7D";
  ctx.stroke();
}

function wingsRight(x, y) {
  ctx.beginPath();
  ctx.moveTo(x-10, y+10);
  ctx.lineTo(x-20, y+15);
  ctx.lineTo(x-30, y+10);
  ctx.lineTo(x-52, y+30);
  ctx.stroke();
}
