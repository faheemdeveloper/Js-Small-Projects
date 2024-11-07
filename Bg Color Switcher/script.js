let buttons = document.querySelectorAll(".button")
let body = document.querySelector("body");
let heading = document.querySelector("h1")



buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        switch (event.target.id) {
            case "grey":
                body.style.backgroundColor = event.target.id
                break;
            case "skyblue":
                body.style.backgroundColor = event.target.id
                break;
            case "blue":
                body.style.backgroundColor = event.target.id
                heading.style.color = "white"
                break;
            case "yellow":
                body.style.backgroundColor = event.target.id
                heading.style.color = "black"
                break;
            case "purple":
                body.style.backgroundColor = event.target.id
                heading.style.color = "white"
                break;
                case "chocolate":
                body.style.backgroundColor = event.target.id
                heading.style.color = "black"
                break;
        }
    })
})