let bubble = [];
let n = 2000;
let s = 5
let angle, dx, dy
let i = 0
let words = ''
let fade = 0
let fadeAmount = 2
let show = false

function setup() {
  createCanvas(window.innerWidth - 20, window.innerHeight - 60);
  for (let i = 0; i < n; i++) {
    bubble[i] = {
      x: 1,
      y: 1,
      angle: 1,
      dx: 1,
      dy: 1,
      color: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255)
      },
      size: random(20, 100)
    };
  bubble[i].x = random(0, width)
  bubble[i].y = random(0, height)
  bubble[i].angle = random(0, 360)
  }
  document.querySelector("#nBalls").value = 100
  document.querySelector("#sBalls").value = 5

  switch (i) {
    case 0:
      words = 'Sometimes it is helpful to let your mind rest and focus on something else.';
      i++;
      break;
    case 1:
      words = 'Focus on here and now.';
      i++;
      break;
    case 2:
      words = 'Watch the bubbles as they float across the screen.';
      i++;
      break;
    case 3:
      words = 'If you\'d like, you can pop the bubbles by clicking on them.';
      i++;
      break;
  }

  if (i == 4) {
    i = 0;
  }


  if (fade == 255) {
    show = true
  }
  else if (fade == 0) {
    show = false
  }
}

function draw() {
  createCanvas(window.innerWidth - 20, window.innerHeight - 60);
  background(0)
  for (let i = 0; i < n; i++) {
    fill(bubble[i].color.r, bubble[i].color.g, bubble[i].color.b);
    circle(bubble[i].x, bubble[i].y, bubble[i].size);
    bubble[i].dx = Math.cos(bubble[i].angle)
    bubble[i].dy = Math.sin(bubble[i].angle)
    bubble[i].x += bubble[i].dx / 10 * s
    bubble[i].y += bubble[i].dy / 10 * s
    bubble[i].angle += random(-.1, .1)
    
    if (bubble[i].x >= window.innerWidth) {
        bubble[i].angle = 180
    }
    else if (bubble[i].x <= 0){
        bubble[i].angle = 0
    }
    else if (bubble[i].y >= window.innerHeight){
        bubble[i].angle = 270
    }
    else if (bubble[i].y <= 0){
        bubble[i].angle = 90
    }
  }

  let input = document.querySelector("#nBalls").value
  if (input > 2000) {
    input = 2000
    document.querySelector("#nBalls").value = 2000
  }
  n = input

  let input2 = document.querySelector("#sBalls").value
  if (input2 > 100) {
    input2 = 100
    document.querySelector("#sBalls").value = 100
  }
  if (input2 < 0) {
    input2 = 0
    document.querySelector("#sBalls").value = 0
  }
  s = input2

  for (let i = 0; i < bubble.length; i++) {
    bubble[i].x = constrain(bubble[i].x, 0, window.innerWidth)
    bubble[i].y = constrain(bubble[i].y, 0, window.innerHeight)
  }

  textSize(30)
  fill(255, 255, 255, fade)
  textAlign(CENTER);
  text(words, window.innerWidth / 2, window.innerHeight / 2,);

  if (show == true) {
    fade -= fadeAmount
  }
  else if (show == false) {
    fade += fadeAmount
  }

  if (fade < 0) {
    fade = 0
  }
  else if (fade > 255) {
    fade = 255
  }
  
}

function mousePressed() {
  for (let i = 0; i < n; i++){
    let x = abs(mouseX - bubble[i].x)
    let y = abs(mouseY - bubble[i].y)
    let d = sqrt(pow(x, 2) + pow(y, 2))

    if (d < bubble[i].size) {
      bubble.splice(i, 1)

      n -= 1
      document.querySelector("#nBalls").value = n
    }
  }
  
}

setInterval(function myFunction(){
  switch (i) {
    case 0:
      words = 'Sometimes it is helpful to let your mind rest and focus on something else.';
      i++;
      break;
    case 1:
      words = 'Focus on here and now.';
      i++;
      break;
    case 2:
      words = 'Watch the bubbles as they float across the screen.';
      i++;
      break;
    case 3:
      words = 'If you\'d like, you can pop the bubbles by clicking on them.';
      i++;
      break;
  }

  if (i == 4) {
    i = 0;
  }
}, 12000)

setInterval(function myFunction(){
  if (fade == 255) {
    show = true
  }
  else if (fade == 0) {
    show = false
  }
}, 6000)