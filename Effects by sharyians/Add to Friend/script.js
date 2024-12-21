const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
let value = 0;


btn.addEventListener("click", () => {
    if (value === 0) {
        title.innerHTML = "Friende";
        title.style.color = "green";
        value = 1;
    } else {
        title.innerHTML = 'Strange';
        title.style.color = "red"
        value = 0;
    }
})

