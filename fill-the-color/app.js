
// DOM elemenets
let spotterContainer = document.querySelector(".color-spotter-container");
let colorContainer = document.querySelector(".color-container");

// Global Variables
let colorToFill = 'white';
let SQUARE = 14;
let gridColor = 'white';
const COLORS = ['#f77b9c', '#3f6ab5', '#88d8b0', '#ea5486', '#854442', '#f37735', '#0f0f0f','#570384','#bc863a','#e8ba17','#fe4a49', '#eec9d2', '#451e3e', '#4a4e4d'];
let isDragging = false;
var totalWidth = window.innerWidth < 500 ? window.innerWidth - 20: 500;


// Setting up container dimensions
(function() {
  spotterContainer.style.width = totalWidth + 'px';
  spotterContainer.style.height = totalWidth + 'px';
})();


// Mocking drag event for onhover coloring
spotterContainer.addEventListener('mousedown', () => {
  isDragging = true;
});


spotterContainer.addEventListener('mouseup', () => {
  isDragging = false;
});


// genrate color grid
function generateColorGrid(SQUARE, container) {
  container.innerHTML = null;
  var outer = createElement('div', 'outer flex');
  for(let j = 0; j < SQUARE; j++) {
      inner = createElement('div', 'inner color-square', true);
      inner.style.background = COLORS[j];
      inner.onclick = selectColor.bind(inner, j);
      outer.append(inner);
  }
  container.append(outer);
}


// Generates the empty Grid
function generateEmptyGrid(SQUARE, container, emptyBlock) {
  container.innerHTML = null;
  for(let i = 0; i < SQUARE; i++) {
      var outer = createElement('div', 'outer flex');
      for(let j = 0; j < SQUARE; j++) {
          var inner= createElement('div', 'inner square', true);
          inner.onclick = setColor.bind(inner, false);
          inner.onmouseover = setColor.bind(inner, true);
          outer.append(inner);
      }
      container.append(outer);
  }
}


function selectColor(index) {
  const outers = document.getElementsByClassName('color-square');
  for(let index = 0; index < outers.length; index++) {
    outers[index].classList.remove('active');
  }
  if(colorToFill === COLORS[index]) {
    colorToFill = 'white';
  } else {
      colorToFill = COLORS[index];
      this.classList.add("active");
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
    outer.style.backgroundColor = gridColor;
    return outer;
}

function setColor(onhover) {
  if((onhover && isDragging) || !onhover) {
    this.style.background = colorToFill;
  }
}

generateEmptyGrid(SQUARE, spotterContainer, true);
generateColorGrid(SQUARE, colorContainer);

