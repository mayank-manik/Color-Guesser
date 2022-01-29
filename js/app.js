var audio = new Audio("error.mp3");

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

let colorCode = document.getElementById("colorCode");
colorCode.innerText = `RGB (${r},${g},${b})`;

const LEN = 9;
let arr = new Array(LEN);

let colors = document.getElementsByClassName("colors");
for (let i = 0; i < 9; i++) {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  arr[i] = [a, b, c];
}

for (let i = 0; i < 9; i++) {
  colors[
    i
  ].style.backgroundColor = `rgb(${arr[i][0]},${arr[i][1]},${arr[i][2]})`;
}

let block = Math.floor(Math.random() * 8);
arr[block] = [r, g, b];
colors[block].style.backgroundColor = `rgb(${r},${g},${b})`;

let count = 1;
const onClick = function () {
  console.log(this.id);
  if (
    arr[this.id - 1][0] == r &&
    arr[this.id - 1][1] == g &&
    arr[this.id - 1][2] == b
  ) {
    alert("HURRAHHH :)");
    location.reload();
  } else {
    audio.play();
    if (count == 3) {
      alert("you lose :(");
      location.reload();
    } else count++;
  }
};

alert(
  "You will get three chances to guess the color based on the given RGB values."
);
for (let i = 0; i < 9; i++) {
  colors[i].onclick = onClick;
}
