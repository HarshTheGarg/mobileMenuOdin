const button = document.querySelector(".menuButton")
const menu = document.querySelector(".menu")
const container = document.querySelector(".container")

button.addEventListener("click", () => {
    makeVisible()
}, true)

function makeVisible() {
    menu.classList.add("visible")
    
}

container.addEventListener("click", () => {
    button.removeEventListener("click", vanish)
    vanish()
}, true)


function vanish() {

    if(menu.classList.contains("visible")) {
        menu.classList.remove("visible")
    }
}