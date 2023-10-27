
// al click
const gridElem = document.querySelector(".grid")

start.addEventListener("click", function(event) {
    event.preventDefault();
    
    let gridString = "";    
    let numbers = "";

    for (let i = 1; i <= 100; i++) {
        numbers = i ;
        console.log (i)
        gridString += `<div class="cell">${numbers}</div>`    
    }

    

    gridElem.innerHTML = gridString;

})




