const cover = document.getElementById("cover");
const experience = document.getElementById("experience");
const cakeButton = document.querySelector(".cake-button");

const layers = document.querySelectorAll(".layer");
const enterText = document.getElementById("enter-text");
const cake = document.getElementById("cake");
const topView = document.getElementById("top-view");
const ageNumber = document.getElementById("age-number");

const candleFocus = document.getElementById("candle-focus");
const candleVideo = document.getElementById("candle-video");
const candleUnlit = document.getElementById("candle-unlit");
const wishText = document.getElementById("wish-text");

const ending = document.getElementById("ending");

let interactionEnabled = false;

/* COVER CLICK */
cakeButton.addEventListener("click", () => {
  cover.classList.remove("active");
  experience.classList.add("active");
  startCakeBuild();
});

/* CAKE BUILD */
function startCakeBuild() {
  layers.forEach((layer, index) => {
    setTimeout(() => {
      layer.style.opacity = "1";
      layer.style.transform = "translateY(0)";
      layer.style.transition = "all 0.8s ease";
    }, index * 800);
  });

  setTimeout(() => {
    enterText.style.opacity = "0.6";
  }, 3500);
}

/* ENTER */
document.addEventListener("click", startCameraPan);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") startCameraPan();
});

let cameraStarted = false;

function startCameraPan() {
  if (cameraStarted) return;
  cameraStarted = true;

  enterText.style.opacity = "0";

  cake.style.transform = "rotateX(60deg)";
  topView.style.opacity = "1";

  setTimeout(() => {
    cake.style.transform = "rotateX(0deg)";
    topView.style.opacity = "0";

    setTimeout(showCandles, 2000);
  }, 3000);
}

/* SHOW CANDLES */
function showCandles() {
  ageNumber.style.opacity = "1";

  setTimeout(() => {
    document.getElementById("cake-scene").style.display = "none";
    candleFocus.style.display = "flex";

    candleVideo.style.display = "block";
    candleVideo.play();

    candleVideo.onended = () => {
      setTimeout(() => {
        wishText.style.opacity = "1";
        interactionEnabled = true;
      }, 800);
    };
  }, 2000);
}

/* BLOW / SPACE */
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && interactionEnabled) blowOut();
});

document.addEventListener("click", () => {
  if (interactionEnabled) blowOut();
});

function blowOut() {
  interactionEnabled = false;

  candleVideo.style.display = "none";
  candleUnlit.style.display = "block";
  wishText.style.opacity = "0";

  setTimeout(showEnding, 3000);
}

/* ENDING */
function showEnding() {
  candleFocus.style.display = "none";
  ending.style.display = "flex";

  setTimeout(() => {
    ending.querySelector("img").style.opacity = "1";
  }, 100);
}
