let rl = 0;
let bl = 0;
let gl = 0;
let lineWeight = 0;
let imgReset;
let imgSave;



function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  frameRate(60);
  canvas = createCanvas(400, 400);

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

    lineWeight = lineWeight - .2;

    //quad1
    if (mouseX <= 200, mouseY <= 200) {
      linedraw();
    }
    //quad2
    if (mouseX >= 200, mouseY <= 200) {
      linedraw();
    }
    //quad3
    if (mouseX <= 200, mouseY >= 200) {
      linedraw();
    }
    //quad4
    if (mouseX >= 200, mouseY >= 200) {
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
    translate(400, 400);
    line((mouseX * -1), (mouseY * -1), (pmouseX * -1), (pmouseY * -1));
    pop();
    push();
    translate(400, 0);
    line((mouseX * -1), (mouseY), (pmouseX * -1), (pmouseY));
    pop();
    push();
    translate(0, 400);
    line((mouseX), (mouseY * -1), (pmouseX), (pmouseY * -1));
    pop();
  }
