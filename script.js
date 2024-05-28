// select input 
let enteredText = ""

// select elements 

let container = document.querySelector("div")
let elements = container.querySelectorAll("h1")
console.log(elements);

function check(event) {
    enteredText = event.target.value;
    for (i = 0; i <= elements.length; i++) {
        if (elements[i].textContent.indexOf(enteredText) < 0) {
            elements[i].style.display = "none"
        }
        else {
        elements[i].style.display = "block"
        }
    }
}
