const container = document.querySelector(".container");
const userInput = document.querySelector("#size");

let gridSquare = 16;

function makeGrid(){
    gridSize = gridSquare * gridSquare;
    for(i = 0; i < gridSize; i++){
        const square = document.createElement("div");
 
        container.appendChild(square);
        square.classList.add("square");
        square.style.height = `${600 / gridSquare}px`;
        square.style.width = `${600 / gridSquare}px`;
    };
};
console.log(gridSquare)

document.addEventListener("DOMContentLoaded", makeGrid())

let box = document.querySelectorAll(".square");

box.forEach(function(box) {
   box.addEventListener("mouseover", () => {
       box.style.backgroundColor = 'black';
   })
});

function deleteGrid() {
container.innerHTML = '';
}

userInput.addEventListener("input", () => {
    deleteGrid();
    gridSquare = userInput.value;
    makeGrid();
    console.log(gridSquare)
    for(i=0; i < gridSize; i++) {
        document.getElementsByClassName("square")[i].addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = 'black';
        });
    }  
});














