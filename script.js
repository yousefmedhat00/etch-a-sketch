const container = document.querySelector(".container");
const userInput = document.querySelector("#size");
const resetBtn = document.querySelector("#reset");
const rainbowBtn = document.querySelector('#rainbow');
const eraserBtn = document.querySelector("#eraser");
const gridBtn = document.querySelector("#grid");
const sliderLabel = document.querySelector("label");
const colorSelector = document.querySelector("#color-select");

let rainbowToggle = false;
let gridToggle = false;
let eraserToggle = false;

let gridSquare = 16;

/* Function to create grid */
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


document.addEventListener("DOMContentLoaded", makeGrid())

let box = document.querySelectorAll(".square");

/* Color in existing grid */
box.forEach(function(box) {
   box.addEventListener("mouseover", () => {
    if(rainbowToggle == false && eraserToggle == false){
        box.style.backgroundColor = colorSelector.value;
    } else if (eraserToggle == true){
        box.style.backgroundColor = null;
    } else { 
        box.style.backgroundColor = getRandomColor();
    }
   })
});

function deleteGrid() {
container.innerHTML = '';
}

/* Event listener to change grid size according to slider */
userInput.addEventListener("input", () => {
    deleteGrid();
    gridSquare = userInput.value;
    makeGrid();
    sliderLabel.textContent = `Size: ${gridSquare}px`;
    console.log(gridSquare)
    for(i=0; i < gridSize; i++) {
        document.getElementsByClassName("square")[i].addEventListener("mouseover", function(event) {
            if(rainbowToggle == false && eraserToggle == false) {
                event.target.style.backgroundColor = colorSelector.value;
            } else if (eraserToggle == true) {
                event.target.style.backgroundColor = null;
            } else {
                event.target.style.backgroundColor = getRandomColor();
            }
        });
    }});

/* Reset button to clear grid */
resetBtn.addEventListener("click", () => {
    for(i=0; i < gridSize; i++) {
        document.getElementsByClassName("square")[i].style.backgroundColor = null;
    };
});

/* Function to get a random hex color */
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

/* Rainbow color button toggle*/
rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.toggle("toggled");
    rainbowToggle = !rainbowToggle;
});

/* Show grid button toggle */
gridBtn.addEventListener("click", () => {
    gridBtn.classList.toggle("toggled");
    gridToggle = !gridToggle;
    for(i = 0; i < gridSize; i++) {
        document.getElementsByClassName("square")[i].classList.toggle("grid");
    };
});

/* Eraser button toggle */
eraserBtn.addEventListener("click", () => {
    eraserBtn.classList.toggle("toggled");
    eraserToggle = !eraserToggle;
});

