const button = document.querySelector(".menuButton")
const menu = document.querySelector(".menu")
const container = document.querySelector(".container")

button.addEventListener("click", () => {
    makeVisible()
})

function makeVisible() {
    menu.classList.add("visible")
    
    setTimeout(3)
    container.addEventListener("click", () => {
        button.removeEventListener("click", vanish)
        vanish()
    })
}



function vanish() {
    console.log(menu.classList.contains("visible"));
    if(menu.classList.contains("visible")) {
        menu.classList.remove("visible")
        console.log("HI");
    }
}