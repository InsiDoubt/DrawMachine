let rl = 0;
let bl = 0;
let gl = 0;
let lineWeight = 0;
let imgReset;
let imgSave;
let dynWidth;
let dynHeight;
let symLine = 3;


function setup() {
  //dynWidth = windowWidth *.98;
  //dynHeight = windowHeight -155;
  //canvas = createCanvas(dynWidth,dynHeight);
  canvas = createCanvas(500 ,500);
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
   if (lineWeight >= .2) {
      lineWeight = lineWeight - .1;
    }
  if (mouseIsPressed && symLine == 3) {
    //quad1
    if (mouseX <= (width * .5), mouseY <= (height * .5)) {
      lineDrawXY();
    }
    //quad2
    if (mouseX >= width * .5, mouseY <= (height * .5)) {
      lineDrawXY();
    }
    //quad3
    if (mouseX <= width * .5, mouseY >= (height * .5)) {
      lineDrawXY();
    }
    //quad4
    if (mouseX >= width * .5, mouseY >= (height * .5)) {
      lineDrawXY();
    }
  }
  if (mouseIsPressed && symLine == 2) {
    //quad1
    if (mouseX <= (width * .5), mouseY <= (height * .5)) {
      lineDrawX();
    }
    //quad2
    if (mouseX >= width * .5, mouseY <= (height * .5)) {
      lineDrawX();
    }
    //quad3
    if (mouseX <= width * .5, mouseY >= (height * .5)) {
      lineDrawX();
    }
    //quad4
    if (mouseX >= width * .5, mouseY >= (height * .5)) {
      lineDrawX();
    }
  }
  if (mouseIsPressed && symLine == 1) {
    //quad1
    if (mouseX <= (width * .5), mouseY <= (height * .5)) {
      lineDrawY();
    }
    //quad2
    if (mouseX >= width * .5, mouseY <= (height * .5)) {
      lineDrawY();
    }
    //quad3
    if (mouseX <= width * .5, mouseY >= (height * .5)) {
      lineDrawY();
    }
    //quad4
    if (mouseX >= width * .5, mouseY >= (height * .5)) {
      lineDrawY();
    }
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

function keyPressed() {
  if (key == '3') {
    symLine = 3;
    console.log(symLine);
  }
   if (key == '2') {
    symLine = 2;
    console.log(symLine);
  }
   if (key == '1') {
    symLine = 1;
    console.log(symLine);
  }
}

function lineDrawX(){
  line(mouseX, mouseY, pmouseX, pmouseY);
  push();
  translate(0, height);
  line((mouseX), (mouseY * -1), (pmouseX), (pmouseY * -1));
  pop();
}
function lineDrawY(){
  line(mouseX, mouseY, pmouseX, pmouseY);
   push();
  translate(width, 0);
  line((mouseX * -1), (mouseY), (pmouseX * -1), (pmouseY));
  pop();
}
function lineDrawXY(){
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

/* Needed to be split into different functions but saving for posterity
function lineDraw() {
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
*/