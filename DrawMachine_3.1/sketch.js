let rl = 0;
let bl = 0;
let gl = 0;
let lineWeight = 0;
let imgReset;
let imgSave;
let dynWidth;
let dynHeight;


function setup() {
  dynWidth = windowWidth *.98;
  dynHeight = windowHeight -155;
  canvas = createCanvas(dynWidth,dynHeight);
  canvas.parent('sketch-holder');
  frameRate(60);


  stroke(rl, bl, gl);
  strokeWeight(lineWeight);


  imgReset = createButton('Reset Image');
  imgReset.parent('reset-button');
  imgReset.mousePressed(clear);

  imgSave = createButton('Save Image');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);
}

function draw() {
  //for random coloring
  //rl = (int(random(0,255)));
  //gl = (int(random(0,255)));
  //bl = (int(random(0,255)));
  stroke(rl, bl, gl);
  strokeWeight(lineWeight);

  if (mouseIsPressed) {
    if (lineWeight > .2) {
      lineWeight = lineWeight - .1;
    }
    //quad1
    if (mouseX <= (width * .5), mouseY <= (height * .5)) {
      linedraw();
    }
    //quad2
    if (mouseX >= width * .5, mouseY <= (height * .5)) {
      linedraw();
    }
    //quad3
    if (mouseX <= width * .5, mouseY >= (height * .5)) {
      linedraw();
    }
    //quad4
    if (mouseX >= width * .5, mouseY >= (height * .5)) {
      linedraw();
    }
  } else {
    lineWeight = 6;
  }
}

function saveImage() {
  saveCanvas(canvas, 'myDrawing', 'png');
}

function clear() {
  background(0);
}

function linedraw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  push();
  translate(width, height);
  line((mouseX * -1), (mouseY * -1), (pmouseX * -1), (pmouseY * -1));
  pop();
  push();
  translate(width, 0);
  line((mouseX * -1), (mouseY), (pmouseX * -1), (pmouseY));
  pop();
  push();
  translate(0, height);
  line((mouseX), (mouseY * -1), (pmouseX), (pmouseY * -1));
  pop();
}