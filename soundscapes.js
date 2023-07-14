let height = window.innerHeight / 10
let width = window.innerWidth
let d = 1
let timeout
let i = 0
let words = ''
let fade = 0
let fadeAmount = 2
let show = false


function setup() {
    createCanvas(width, height);
    background(0);

    switch (i) {
        case 0:
          words = 'Find a comfortable place and sit down';
          i++;
          break;
        case 1:
          words = 'Take slow, deep breaths';
          i++;
          break;
        case 2:
          words = 'Now imagine a place where you feel calm';
          i++;
          break;
        case 3:
            words = 'Imagine what you see, hear and smell';
            i++;
            break;
        case 4:
            words = 'Allow your body to feel calm';
            i++;
            break;
        case 5:
            words = 'Breathe in calmness, breathe out worry';
            i++;
            break;
        case 6:
            words = 'Look around and explore';
            i++;
            break;
        case 7:
            words = 'You are here';
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
    textSize(30)
    fill(255, 255, 255, fade)
    textAlign(CENTER);
    text(words, width / 2, height / 2,);
  
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