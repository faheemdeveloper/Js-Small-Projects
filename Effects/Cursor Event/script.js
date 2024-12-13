let elem = document.querySelectorAll(".elem");

elem.forEach((elem) => {
    let nodeValue = elem.childNodes[3];

    elem.addEventListener("mouseenter", () => {
        nodeValue.style.opacity = 1;
    })

    elem.addEventListener("mouseleave", () => {
        nodeValue.style.opacity = 0;
    })

    elem.addEventListener("mousemove", (e) => {
        nodeValue.style.left = `${e.x}px`;

    })
})