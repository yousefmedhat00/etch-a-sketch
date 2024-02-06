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

userInput.addEventListener("input", () => {
    square.remove();
    gridSquare = userInput.value;
    console.log(gridSquare)
});









