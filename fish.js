let fish = [];
let n = 5000;
let s = 5
let angle, dx, dy
let r, g, b
let img
let img2
let i = 0
let words = ''
let fade = 0
let fadeAmount = 2
let show = false

function preload() {
    img = loadImage("images/fish-cartoon-icon-vector-15753612-removebg-preview.png");
    img2 = loadImage('images/tank.jpg');
  }

function setup() {
    preload();
    createCanvas(window.innerWidth - 20, window.innerHeight - 60);
    for (let i = 0; i < n; i++) {
            fish[i] = {
                r: 1,
                g: 1,
                b: 1,
                x: 1,
                y: 1,
                dx: 1,
                dy: 1,
                angle: 1,
            };
        fish[i].x = window.innerWidth + 100
        fish[i].y = random(img.height, window.innerHeight - 456)
        fish[i].angle = (random(120, 240)) / 360 * 2 * Math.PI
        fish[i].dx = Math.cos(fish[i].angle)
        fish[i].dy = Math.sin(fish[i].angle)
        fish[i].r = random(255)
        fish[i].g = random(255)
        fish[i].b = random(25)
    }
    document.querySelector("#nFish").value = 10
    document.querySelector("#sFish").value = 10

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
          words = 'Watch the fish as they float across the screen.';
          i++;
          break;
      }
    
      if (i == 3) {
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
    background(0, 0, 75)
    image(img2, 0, 0, window.innerWidth - 20, window.innerHeight - 60)
    for (let i = 0; i < n; i++) {
        if (fish[i].dx > 0) {
            push();
            scale(1, -1)
            image(img, fish[i].x, fish[i].y)
            pop();
        }
        else {
            image(img, fish[i].x, fish[i].y)
        }
        fish[i].x += fish[i].dx / 5 * s
        fish[i].y += fish[i].dy / 5 * s
    
        if (fish[i].x >= window.innerWidth + img.width) {
            fish[i].dx = Math.cos(fish[i].angle)
        }
        else if (fish[i].x <= 0 - img.width) {
            fish[i].dx = 100
        }
        if (fish[i].y >= window.innerHeight - img.height || fish[i].y <= 0) {
            fish[i].dy = -fish[i].dy
        }
  }

    let input = document.querySelector("#nFish").value
    if (input > 5000) {
        input = 5000
        document.querySelector("#nFish").value = 5000
    }
    n = input

    let input2 = document.querySelector("#sFish").value
    if (input2 > 100) {
        input2 = 100
        document.querySelector("#sFish").value = 100
    }
    if (input2 < 0) {
        input2 = 0
        document.querySelector("#sFish").value = 0
    }
    s = input2

    textSize(18)
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
        words = 'Watch the fish as they swim across the screen.';
        i++;
        break;
    }
  
    if (i == 3) {
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