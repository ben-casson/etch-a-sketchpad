const bodyContainer = document.querySelector(".container-body");
const clearButtonContainer = document.querySelector(".container-clear-button");
const gridContainer = document.querySelector(".container-grid");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.querySelector(".hamburger-button");
const xHamburgerIcon = document.querySelector(".x-hamburger-button");
const menuOptionsContainer = document.querySelector(".container-menu-options");
const colorInputColorWheel = document.querySelector("#input-color");
const colorInputRainbowButton = document.querySelector("#rainbow-button");
const gridLinesButton = document.querySelector(".grid-lines-button");
const gridPieces = document.querySelector(".grid-pieces");
const gridBoxesInput = document.querySelector("#grid-boxes-input");
const clearButton = document.querySelector(".clear-button");
const toggleSwitch = document.querySelector("#toggle-switch");

window.addEventListener("load", makeGrid(16));
let colorChoiceColorWheel = "on";
let colorChoiceRainbow = "off";

colorInputColorWheel.value = "rgb(0,0,0)";
colorInputColorWheel.style.backgroundColor = colorInputColorWheel.value + "";



function selectColorWheel() {
    colorInputRainbowButton.style.boxShadow = "none";
    colorInputRainbowButton.style.border = "3px solid black";
    colorInputRainbowButton.style.color = "black";
    colorInputColorWheel.style.boxShadow = "0 0 6px 3px white";
    colorInputColorWheel.style.border = "3px solid white";
    colorInputColorWheel.style.backgroundColor = colorInputColorWheel.value + "";
    colorChoiceColorWheel = "on";
    colorChoiceRainbow = "off";
}
function selectRainbowButton() {
    colorInputColorWheel.style.boxShadow = "none";
    colorInputColorWheel.style.border = "3px solid black";
    colorInputRainbowButton.style.boxShadow = "0 0 6px 3px white";
    colorInputRainbowButton.style.border = "3px solid white";
    colorInputRainbowButton.style.color = "white";
    colorChoiceColorWheel = "off";
    colorChoiceRainbow = "on";
}


menu.style.height = window.innerHeight + "px"; 
menuOptionsContainer.style.height = ((window.innerHeight) - (0.1 * window.innerWidth) - (0.165 * window.innerHeight)) + "px";



function colorPixel() {
    if (colorChoiceRainbow === "on") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        console.log(this.style.backgroundColor);
    }
    else {
        this.style.backgroundColor = colorInputColorWheel.value + "";
        console.log(this.style.backgroundColor);
    }
}

function resetGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeGrid(gridSize) {
    resetGrid(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const newGridDiv = document.createElement("div");
        newGridDiv.classList = "grid-pieces";
        gridContainer.appendChild(newGridDiv);
        newGridDiv.style.backgroundColor = "white";
    }
}



function changeGridSize() {
    let userBoxesNumber = parseInt(gridBoxesInput.value);
    if (userBoxesNumber > 100) {
        userBoxesNumber = 100;
    }
    else if (userBoxesNumber < 1) {
        userBoxesNumber = 1;
    }
    makeGrid(userBoxesNumber);
    let gridPixels = gridContainer.querySelectorAll('div');
    if (toggleSwitch.checked) {
        // gridPixels.forEach(gridPixel => gridPixel.removeEventListener('mouseover', colorPixel));
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('click', colorPixel));
    }
    else {
        // gridPixels.forEach(gridPixel => gridPixel.removeEventListener('click', colorPixel));
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorPixel));
    }
    
    if (gridLinesButton.classList.contains("grid-lines-on")) {
        for (let i = 0; i < gridContainer.children.length; i++) {
            gridContainer.children[i].style.border = "1px solid rgba(85, 85, 85, 0.685)";
            }
    }
    else {
        for (let i = 0; i < gridContainer.children.length; i++) {
            gridContainer.children[i].style.border = "none";
            }
    }
}

function selectGridLines() {
    let userBoxesNumber = parseInt(gridBoxesInput.value);
    if (userBoxesNumber > 100) {
        userBoxesNumber = 100;
        gridBoxesInput.value = "100";
    }
    else if (userBoxesNumber < 1) {
        userBoxesNumber = 1;
        gridBoxesInput.value = "1";
    }
    if (gridLinesButton.classList.contains("grid-lines-on")) {
        gridLinesButton.classList.remove("grid-lines-on");
        gridLinesButton.style.color = "black";
        gridLinesButton.style.border = "3px solid black";
        gridLinesButton.style.boxShadow = "none";
    }
    else {
        gridLinesButton.classList.add("grid-lines-on");
        gridLinesButton.style.color = "white";
        gridLinesButton.style.border = "3px solid white";
        gridLinesButton.style.boxShadow = "0 0 6px 3px white";
    }
    if (gridLinesButton.classList.contains("grid-lines-on")) {
        for (let i = 0; i < gridContainer.children.length; i++) {
            gridContainer.children[i].style.border = "1px solid rgba(85, 85, 85, 0.685)";
          }
    }
    else {
        for (let i = 0; i < gridContainer.children.length; i++) {
            gridContainer.children[i].style.border = "none";
          }
    }
}

gridBoxesInput.addEventListener("change", changeGridSize);
gridLinesButton.addEventListener("click", selectGridLines);


// window.addEventListener("load", makeGrid(16));


function displayMenu() {
        menu.classList.add("showMenu");
        menu.classList.remove("hideMenu");
        return;
}

function closeMenu() {
    menu.classList.add("hideMenu");
    menu.classList.remove("showMenu");
    bodyContainer.style.filter = "none";
    return;
}

function clearGrid() {
    let gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "white");
}


colorInputColorWheel.addEventListener("input", selectColorWheel);
colorInputRainbowButton.addEventListener("click", selectRainbowButton);
let gridPixels = gridContainer.querySelectorAll('div');
gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorPixel));
function hoverToggle() {
    let gridPixels2 = gridContainer.querySelectorAll('div');
    if (toggleSwitch.checked) {
        gridPixels2.forEach(gridPixels2 => gridPixels2.removeEventListener('mouseover', colorPixel));
        gridPixels2.forEach(gridPixels2 => gridPixels2.addEventListener('click', colorPixel));
    }
    else {
        gridPixels2.forEach(gridPixels2 => gridPixels2.removeEventListener('click', colorPixel));
        gridPixels2.forEach(gridPixels2 => gridPixels2.addEventListener('mouseover', colorPixel));
    }
}
toggleSwitch.addEventListener("change", hoverToggle);
clearButton.addEventListener("click", clearGrid);
hamburgerIcon.addEventListener("click", displayMenu);
xHamburgerIcon.addEventListener("click", closeMenu);