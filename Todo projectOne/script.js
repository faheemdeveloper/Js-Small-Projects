let input = document.getElementById("inputfield");
let btn = document.querySelector(".btn");
let todoElem = document.querySelector(".todoListsElem")

const createValue = () => {
    const para = document.createElement("p");
    para.innerText = input.value
    todoElem.append(para)

    input.value = " "
}


btn.addEventListener("click", createValue)

todoElem.addEventListener("click", (event) => {
    let elem = event.target
    elem.remove()
})


