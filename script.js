const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro");
const scene = document.querySelector(".scene");

startBtn.onclick = () => {
  intro.style.display = "none";
  scene.classList.remove("hidden");
};

/* Flame loop */
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
}, 180);

