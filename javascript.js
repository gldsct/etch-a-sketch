let gridSize;

// while (true) {
//     size = prompt("Enter a size between 1 and 100.");
//     if (size <= 100 && size > 0) {
//         break;
//     }
// }

gridHeader = document.querySelector(".grid-header");

gridContainer = document.querySelector(".grid-container");

gridSizeInput = document.querySelector("#grid-size-input");
gridSizeButton = document.querySelector(".grid-size-button");

gridHeader.innerText = `Square Grid`;

gridSizeButton.addEventListener("click", (event) => {
    if (gridContainer.hasChildNodes()) {
        gridSemiContainers.forEach(item => {
            gridContainer.removeChild(item);
        });
    }
   gridSize = gridSizeInput.value;
    gridHeader.innerText = `${gridSize} x ${gridSize} Square Grid`;

    for (i = 0; i <gridSize; i ++) {
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
        for (i = 0; i <gridSize; i ++) {
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
            event.currentTarget.style.backgroundColor = "orange";
        });
    });

});

// gridSquare = document.createElement("div");
// gridSquare.style.width = "35px";
// gridSquare.style.height = "35px";
// gridSquare.style.backgroundColor = "#CFCFCD";
// gridSquare.style.border = "1px solid #563440";

// gridContainer.appendChild(gridSquare);

// for (i = 0; i < 16; i ++) {
//     gridSquare = document.createElement("div");
//     gridSquare.style.width = "35px";
//     gridSquare.style.height = "35px";
//     gridSquare.style.backgroundColor = "#CFCFCD";
//     gridSquare.style.border = "1px solid #563440";
//     gridContainer.appendChild(gridSquare);
// }





