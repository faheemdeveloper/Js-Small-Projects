let pbtm = document.querySelector(".pbtm");
let timerVal = document.getElementById("timerVal");
let hitVal = document.getElementById("hitVal");
let scoreVal = document.getElementById("scoreVal");
let newBtn = document.querySelector(".new");
let h4 = document.querySelector("h4");


let timer = 2;
let score = 0;
let hitrn = 0;

const increaseScore = () => {
    score += 10;
    scoreVal.innerHTML = score;
}

pbtm.addEventListener("click", (detail) => {
    let value = Number(detail.target.textContent);
    if (hitrn === value) {
        increaseScore();
        getNewHit();
        makeBubble()
    }
})


let getNewHit = () => {
    hitrn = Math.floor(Math.random() * 10 + 1);
    hitVal.innerHTML = hitrn
}

let makeBubble = () => {

    let clutter = "";
    for (let i = 1; i <= 90; i++) {
        let rdm = Math.floor(Math.random() * 10 + 1)
        clutter += `
                <div class="bubble">${rdm}</div>
                `
    }

    pbtm.innerHTML = clutter;
}


let runTimer = () => {  
    let timeInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerVal.innerHTML = timer;
        } else {
            clearInterval(timeInterval)
            pbtm.innerHTML = `<h1>Game over</h1>`
            h4.style.display = 'block'
        }
    }, 1000)

}




makeBubble();
runTimer();
getNewHit();

