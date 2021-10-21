let spotterContainer = document.querySelector(".color-spotter-container");
let colorContainer = document.querySelector(".color-container");
let colorToFill = 'white';
let SQUARE = 14;
let gridColor = 'white';

const COLORS = ['#f77b9c', '#3f6ab5', '#0a9b4e', '#ea5486', '#910004', '#8f79e0', '#0f0f0f','#570384','#bc863a','#e8ba17','#f77b9c', '#3f6ab5', '#0a9b4e', '#ea5486'];

var totalWidth = 400;
spotterContainer.style.width = totalWidth + 'px';
spotterContainer.style.height = totalWidth + 'px';

    
function generateGrid(SQUARE, container, flag) {
    container.innerHTML = null;
    let _SQUARE = flag ? SQUARE : 1;
    for(let i = 0; i < _SQUARE; i++) {
        var outer = createElement('div', 'outer flex');
        for(let j = 0; j < SQUARE; j++) {
            var inner= createElement('div', 'inner square', true);
            if(!flag) {
              inner = createElement('div', 'inner color-square', true);
              inner.style.background = COLORS[j];
              inner.onclick = selectColor.bind(inner, j);
            } else {
               inner.onclick = setAnswer.bind(inner, i, j);
               inner.onmouseover = setAnswer.bind(inner, i, j);
            }
            outer.append(inner);
        }
        container.append(outer);
    }
}

function selectColor(index) {
  const outers = document.getElementsByClassName('color-square');
  for(let index = 0; index < outers.length; index++) {
    console.log(outers[index].classList);
    outers[index].classList.remove('active');
  }
  debugger;
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

function setAnswer(i) {
  this.style.background = colorToFill;
}

generateGrid(SQUARE, spotterContainer, true);
generateGrid(SQUARE, colorContainer);

