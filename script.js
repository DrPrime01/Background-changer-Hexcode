const body = document.body;
const button = document.querySelector("button");
const hex = document.getElementById("hex");

const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

button.addEventListener("click", changeBg);

function changeBg() {
    let color = "#";
    for(i=0; i<6; i++) {
        const randomPicker = Math.floor(Math.random() * hexCode.length);
        color += hexCode[randomPicker]
    }
    console.log(color);
    body.style.backgroundColor = color;
    hex.textContent = color;
}