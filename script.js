const flame = document.querySelector(".flame");

const frames = [
  "flame1.png",
  "flame2.png",
  "flame3.png"
];

let i = 0;

setInterval(() => {
  flame.src = frames[i];
  i = (i + 1) % frames.length;
}, 200);
