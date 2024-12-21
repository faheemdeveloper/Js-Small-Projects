let arr = [
    { dp: "https://images.unsplash.com/photo-1718209881006-f6e313e2e109?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1651050089406-1df57d4a627d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1642328159992-b1d6010e8b40?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1616703476229-4301ccef68b4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1660816610622-ce079fc9bfc2?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1724980886902-7a9571ff174a?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1724998711132-f5943b06121e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1723538494462-23f317794d7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1723538451864-d1169bcf4c50?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

let storyian = document.getElementById("storiyan");
let screen = document.getElementById("full-screen");

let clutter = ""

arr.forEach((elem, idx) => {
    clutter += `
    <div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>
    `
})
storyian.innerHTML = clutter;

storyian.addEventListener("click", (value) => {
    screen.style.display = "block";
    screen.style.backgroundImage = `url(${arr[value.target.id].story})`
    console.log(arr[value.target.id].story)

    setTimeout(() => {
    screen.style.display = "none";

    }, 3000)
})