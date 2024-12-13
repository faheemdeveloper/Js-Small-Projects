let body = document.querySelector(".mobile-body")
let icon = document.querySelector(".mobile-body i");

body.addEventListener("dblclick", (e) => {
    icon.style.opacity = 1
    icon.style.scale = 4;

    setTimeout(() => {
        icon.style.opacity = 0;
    }, 1000)

    setTimeout(() => {
        icon.style.scale = 0;
        icon.style.opacity = 0;
    }, 2000)
})
