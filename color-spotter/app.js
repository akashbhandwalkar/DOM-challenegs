let spotterContainer = document.querySelector(".color-spotter-container");
let SQUARE = 4;
var randomColor = getRandomColor();
let score = 0;

var totalWidth = 400;
spotterContainer.style.width = totalWidth + 'px';
spotterContainer.style.height = totalWidth + 'px';

let differentColor = [0, 0];

function getRandomIndexes() {
    const i = Math.floor((Math.random() * 100) % SQUARE);
    const j = Math.floor((Math.random() * 100) % SQUARE);
    return [i, j];
}

    
function generateGrid(SQUARE) {
    spotterContainer.innerHTML = null;
    differentColor = getRandomIndexes();

    for(let i = 0; i < SQUARE; i++) {
        var outer = createElement('div', 'outer flex');
        for(let j = 0; j < SQUARE; j++) {
            var inner = createElement('div', 'inner square', true);
            if(i === differentColor[0] && j === differentColor[1]) {
                inner.style.opacity = '0.8';
            }
            inner.onclick = setAnswer.bind(this, i, j);

            outer.append(inner);
        }
        spotterContainer.append(outer);
    }
}


function createElement(element, classNames, setDimension, background) {
    var outer = document.createElement(element);
    outer.className = classNames;
    if(setDimension) {
        outer = setSquareDimension(outer);
    }
    return outer;
}


function setSquareDimension(outer) {
    const dimension = (totalWidth / SQUARE) -  2;
    outer.style.width = `${dimension}px`;
    outer.style.height = `${dimension}px`;
    outer.style.backgroundColor = randomColor;
    return outer;
}

function setAnswer(i, j) {
    if(i === differentColor[0] && j === differentColor[1]) {
        score++;
        SQUARE++;
       
    } else {
        SQUARE = 4; score = 0;
        shakeThecolorSpotter();
    }
    randomColor = getRandomColor();
    generateGrid(SQUARE);
    updateScore();
   
}


// COPIED CODE FROM TAKEN FROM: https://codepen.io/aminbe/pen/bGrGPar?editors=0010
function shakeThecolorSpotter() {
    spotterContainer.animate([
        { transform: "translateX(2px)" },
        { transform: "translateX(-2px)", offset: 0.5 },
        { transform: "translateX(0px)" }
      ],
      {
        duration: 100,
        iterations: 8,
        easing: "linear"
      });
}


function updateScore() {
    const scoreDOM = document.getElementById('score');
    scoreDOM.innerHTML = score;
}


// COPIED CODE: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

generateGrid(SQUARE, randomColor);

