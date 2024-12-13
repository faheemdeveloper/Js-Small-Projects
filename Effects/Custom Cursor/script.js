let body = document.querySelector("body")
let cursor = document.querySelector(".cursor");


body.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + "px"
    cursor.style.top = e.y + "px"
})