window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, 800, 500);

  ctx.beginPath();
  ctx.arc(700, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();

  function drawCloud(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.arc(x + 40, y, 30, 0, 2 * Math.PI);
    ctx.arc(x + 20, y - 20, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  drawCloud(100, 100);
  drawCloud(150, 100);
  drawCloud(200, 100);
  drawCloud(400, 150);
  drawCloud(450, 150);
  drawCloud(500, 150);

  function drawMountain(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 150, y - 200);
    ctx.lineTo(x + 300, y);
    ctx.closePath();
    ctx.fillStyle = "grey";
    ctx.fill();
  }

  drawMountain(-100, 500);
  drawMountain(-50, 500);
  drawMountain(100, 500);
  drawMountain(300, 500);
  drawMountain(400, 460);
  drawMountain(150, 500);
  drawMountain(250, 500);
  drawMountain(350, 500);
  drawMountain(550, 500);
  drawMountain(450, 500);
  drawMountain(600, 500);

  function drawHouse(x, y) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, 100, 100); // Body của nhà

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y - 50);
    ctx.lineTo(x + 100, y);
    ctx.closePath();
    ctx.fillStyle = "brown";
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.fillRect(x + 35, y + 50, 30, 50);

    ctx.fillStyle = "lightblue";
    ctx.fillRect(x + 10, y + 10, 25, 25); // Cửa sổ trái
    ctx.fillRect(x + 65, y + 10, 25, 25); // Cửa sổ phải
  }

  drawHouse(500, 400);

  function drawTree(x, y) {
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(x, y, 40, 100);
    ctx.beginPath();
    ctx.arc(x + 20, y, 70, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
  }

  drawTree(200, 400);
  drawTree(700, 400);

  function drawGrass(x, y) {
    var grassHeight = 10;
    var grassWidth = 3;
    ctx.fillStyle = "green";

    for (var i = 0; i < 1000; i++) {
      var xOffset = Math.random() * canvas.width;
      var yOffset = Math.random() * 20;
      ctx.fillRect(x + xOffset, y - yOffset, grassWidth, grassHeight);
    }
  }

  drawGrass(0, 500);

  ctx.fillStyle = "sienna";
  ctx.fillRect(0, 500, 800, 100);
};
