gridContainer = document.querySelector(".grid-container");

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

for (i = 0; i < 16; i ++) {
    gridSemiContainer = document.createElement("div");
    gridSemiContainer.className = "grid-semi-container";
    gridSemiContainer.style.height = "35px";
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
    for (i = 0; i < 16; i ++) {
    gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
    gridSquare.style.width = "35px";
    gridSquare.style.height = "35px";
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



