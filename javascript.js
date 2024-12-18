let gridSize;

gridHeader = document.querySelector(".grid-header");

gridContainer = document.querySelector(".grid-container");

gridSizeInput = document.querySelector("#grid-size-input");
gridSizeButton = document.querySelector(".grid-size-button");

gridHeader.innerText = `Square Grid`;

gridSizeButton.addEventListener("click", (event) => {
    if (checkLimit(gridSizeInput.value)) {
        if (gridContainer.hasChildNodes()) {
            gridSemiContainers.forEach(item => {
                gridContainer.removeChild(item);
            });
        }

        gridSize = gridSizeInput.value;
        gridHeader.innerText = `${gridSize} x ${gridSize} Square Grid`;

        for (i = 0; i < gridSize; i ++) {
            gridSemiContainer = document.createElement("div");
            gridSemiContainer.className = "grid-semi-container";
            gridSemiContainer.style.height = `${560/gridSize}px`;
            gridSemiContainer.style.width = "560px";
            gridSemiContainer.style.backgroundColor = "#CFCFCD";
            gridSemiContainer.style.border = "1px solid #563440";
            gridContainer.appendChild(gridSemiContainer);
        }
        
        gridSemiContainers = document.querySelectorAll(".grid-semi-container");
        gridSemiContainers.forEach(item => {
            item.style.display = "flex";
        });
        
        gridSemiContainers.forEach(item => {
            for (i = 0; i < gridSize; i ++) {
            gridSquare = document.createElement("div");
            gridSquare.className = "grid-square";
            gridSquare.style.width = `${560/gridSize}px`;
            gridSquare.style.height = `${560/gridSize}px`;
            gridSquare.style.backgroundColor = "#CFCFCD";
            gridSquare.style.border = "1px solid #563440";
            item.appendChild(gridSquare);  
            }
        });
        
        gridSquares = document.querySelectorAll(".grid-square");
        gridSquares.forEach(item => {
            item.addEventListener("mouseenter", (event) => {
                event.currentTarget.style.backgroundColor = randomizeColor();
            });
        });
    }
    else {
        alert("Select a number between 1 and 100!");
    }
});

function checkLimit(size) {
    return (size > 0 && size <= 100);
}

function randomizeColor() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${blue}, ${green})`;
}