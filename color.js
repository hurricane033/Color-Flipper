const colors = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5];
const btn = document.getElementById('button');


btn.addEventListener("click", function () {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += colors[getRandomNumber()];
    }
    document.body.style.backgroundColor = hex;
    btn.textContent = hex;
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}