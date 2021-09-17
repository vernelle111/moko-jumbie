//MOKO JUMBIE DRAWING APP
//BY VERNELLE A. A. NOEL (SEPT 17, 2021)

//var s;


function setup() {
  createCanvas(windowWidth, windowHeight);
  keyPressed();

  // Slider1 for depth
  mySlider1 = createSlider(5, windowWidth, 8);
  mySlider1.position(10, 10);
  mySlider1.style('width', '80px');

    // Slider2 for depth
  mySlider2 = createSlider(5, windowWidth, 15);
  mySlider2.position(10, 30);
  mySlider2.style('width', '80px');

    // Slider3 for depth
  mySlider3 = createSlider(5, windowWidth, 5);
  mySlider3.position(10, 50);
  mySlider3.style('width', '80px');

    // Slider4 for depth
  mySlider4 = createSlider(5, windowWidth, 8);
  mySlider4.position(10, 70);
  mySlider4.style('width', '80px');

  myButton = createButton('PRESS ALT TO SAVE');
  myButton.position(10, 500);


}


function draw() {
  background(0);
  //drawText(s);
  drawRect(width/2, height/2, width, height, mySlider1.value());
  //drawRect2(width/2, height/2, width, height, 32);
  drawRect2(width/2, height/2, width, height, mySlider2.value());
  drawRect3(width/6, height/4, width, height, mySlider3.value());
  drawRect4(width/3, height/3, width, height, mySlider4.value());
}

function drawRect(x, y, w, h, depth) {
  noFill();
  stroke(255);
  rectMode(CENTER);
  rect(x, y, w, h);

  if (depth > 1) {
    depth = depth - 1;
    //x = cos(radians(angle))*distance // y = sin(radians(angle))*distance
    drawRect(x+cos(mouseX * radians(1)) * 10, y+sin(mouseY * radians(1)) * 10, w / 1.2, h / 1.2, depth);
    //drawRect2(x + mouseX, y + mouseY, w / 2, h / 2, depth);
  }

}

function drawRect2(x, y, w, h, depth) {
  noFill();
  stroke(255);
  //stroke(45, 225, 235);
  rectMode(CENTER);
  rect(x, y, w, h);

  if (depth > 1) {
    depth = depth - 1;
        drawRect2(x+sin(mouseY * radians(1)) * 10, y+cos(mouseX * radians(1)) * 10, w / 1.2, h / 1.2, depth);
  }

}

function drawRect3(x, y, w, h, depth) {
  noFill();
  stroke(255);
  //stroke(168, 50, 56);
  rectMode(CORNER);
  rect(x, y, w, h);

  if (depth > 1) {
    depth = depth - 1;
        drawRect3(x+tan(mouseY * radians(1)) * 10, y+tan(mouseX * radians(1)) * 10, w / 1.2, h / 1.2, depth);
  }

}


function drawRect4(x, y, w, h, depth) {
  noFill();
  stroke(255);
  //stroke(235, 229, 45);
  rectMode(CENTER);
  rect(x, y, w, h);

  if (depth > 1) {
    depth = depth - 1;
        drawRect4(x+sin(mouseY * radians(1)) * 10, y+sin(mouseX * radians(1)) * 10, w / 1.2, h / 1.2, depth);
  }

}

/*
function drawText(s) {
  s = 'PRESS ALT KEY TO SAVE';
  fill(181, 45, 235);
  stroke(181, 45, 235)
  text(s, 50, 140, 70, 80);
}
*/



function keyPressed() {
  if (keyCode === ALT) {
      save('myCanvas.jpg');
      return false;
  }

}

function windowResized() {
  resizeCanvas(window.windowWidth, window.windowHeight);
  resetCanvas();
}
