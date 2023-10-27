
// al click start
const gridElem = document.querySelector(".grid")

start.addEventListener("click", function(event) {
    event.preventDefault();
    
    let gridString = "";    
    let numbers = "";

    for (let i = 1; i <= 100; i++) {
        numbers = i ;
        console.log (i)
        gridString += `<div id="cell">${numbers}</div>`    
    }    

    gridElem.innerHTML = gridString;

})


// cambia colore al click
const cell = document.querySelectorAll(".cell");


cell.addEventListener("click", function (event) {
    event.preventDefault()
    this.classList.add("active");
    
})
