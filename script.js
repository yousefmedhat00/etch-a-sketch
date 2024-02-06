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
        container.style.width = `${600 + (gridSquare * 2)}px`;
        container.style.height = `${600 + (gridSquare * 2)}px`;
    };
};
console.log(gridSquare)

document.addEventListener("DOMContentLoaded", makeGrid())

function deleteGrid() {
container.innerHTML = '';
}

userInput.addEventListener("input", () => {
    deleteGrid();
    gridSquare = userInput.value;
    makeGrid();
    console.log(gridSquare)
});









