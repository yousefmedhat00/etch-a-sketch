const container = document.querySelector(".container");
const userInput = document.querySelector("#size");
const resetBtn = document.querySelector("#reset");
const rainbowBtn = document.querySelector('#rainbow');
const eraserBtn = document.querySelector("#eraser");
const gridBtn = document.querySelector("#grid");
const sliderLabel = document.querySelector("label");

let rainbowToggle = false;
let gridToggle = false;

let gridSquare = 16;

function makeGrid(){
    gridSize = gridSquare * gridSquare;
    for(i = 0; i < gridSize; i++){
        const square = document.createElement("div");
 
        container.appendChild(square);
        if (gridToggle == false){
        square.classList.add("square");
        } else {
        square.classList.add("square", "grid");
        }
        square.style.height = `${600 / gridSquare}px`;
        square.style.width = `${600 / gridSquare}px`;
    };
};
console.log(gridSquare)

document.addEventListener("DOMContentLoaded", makeGrid())

let box = document.querySelectorAll(".square");

box.forEach(function(box) {
   box.addEventListener("mouseover", () => {
    if(rainbowToggle == false){
        box.style.backgroundColor = 'black';
    } else { 
        box.style.backgroundColor = getRandomColor();
    }
   })
});

function deleteGrid() {
container.innerHTML = '';
}

userInput.addEventListener("input", () => {
    deleteGrid();
    gridSquare = userInput.value;
    makeGrid();
    sliderLabel.textContent = `Size: ${gridSquare}px`;
    console.log(gridSquare)
    for(i=0; i < gridSize; i++) {
        document.getElementsByClassName("square")[i].addEventListener("mouseover", function(event) {
            if(rainbowToggle == false) {
            event.target.style.backgroundColor = 'black';
            } else {
                event.target.style.backgroundColor = getRandomColor();
            }
        });
    }});

resetBtn.addEventListener("click", () => {
    for(i=0; i < gridSize; i++) {
        document.getElementsByClassName("square")[i].style.backgroundColor = null;
    };
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.toggle("toggled");
    rainbowToggle = !rainbowToggle;
    console.log(rainbowToggle)
})

gridBtn.addEventListener("click", () => {
    gridBtn.classList.toggle("toggled");
    gridToggle = !gridToggle;
    for(i = 0; i < gridSize; i++) {
        document.getElementsByClassName("square")[i].classList.toggle("grid");
    }
}
)

console.log(getRandomColor());