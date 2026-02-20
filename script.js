const cover = document.getElementById("cover");
const experience = document.getElementById("experience");
const cakeBtn = document.querySelector(".cake-button");

const layers = document.querySelectorAll(".layer");
const frosting = document.querySelector(".frosting");
const enterText = document.getElementById("enter-text");
const topView = document.getElementById("top-view");

const flame = document.getElementById("flame");
const wishSection = document.getElementById("wish-section");
const cakeScene = document.getElementById("cake-scene");

const snoopy = document.getElementById("snoopy");
const finalText = document.getElementById("final-text");
const ending = document.getElementById("ending");

let flameFrames = [
  "assets/flame1.png",
  "assets/flame2.png",
  "assets/flame3.png"
];

let flameIndex = 0;
let flameLoop;

/* COVER */
cakeBtn.onclick = () => {
  cover.classList.remove("active");
  experience.classList.add("active");
  dropCake();
};

/* SLOWER DROP */
function dropCake(){
  layers.forEach((layer,i)=>{
    setTimeout(()=>{
      layer.style.animation="drop 1.2s ease forwards";
    }, i*1200);
  });

  setTimeout(()=>{
    frosting.style.animation="drop 1.2s ease forwards";
  }, 3600);

  setTimeout(()=>{
    enterText.style.opacity=0.6;
  },5000);

  startFlame();
}

/* FLAME LOOP */
function startFlame(){
  flameLoop = setInterval(()=>{
    flameIndex = (flameIndex+1)%flameFrames.length;
    flame.src = flameFrames[flameIndex];
  },200);
}

/* ENTER */
document.addEventListener("click", startCamera);
document.addEventListener("keydown", e=>{
  if(e.key==="Enter") startCamera();
});

let started=false;

function startCamera(){
  if(started) return;
  started=true;

  enterText.style.opacity=0;

  topView.style.display="block";
  topView.style.opacity=1;

  setTimeout(()=>{
    topView.style.opacity=0;
    setTimeout(()=>{
      topView.style.display="none";
      transformCake();
    },1000);
  },3000);
}

/* SHRINK CAKE + ENLARGE CANDLES */
function transformCake(){
  cakeScene.style.transition="transform 2s ease, opacity 2s ease";
  cakeScene.style.transform="scale(0.5)";
  cakeScene.style.opacity=0;

  setTimeout(()=>{
    cakeScene.style.display="none";
    wishSection.style.display="block";
    wishSection.style.opacity=1;
  },2000);
}

/* BLOW */
document.addEventListener("keydown", e=>{
  if(e.code==="Space") blow();
});
document.addEventListener("click", blow);

function blow(){
  clearInterval(flameLoop);
  flame.style.display="none";

  setTimeout(()=>{
    wishSection.style.display="none";
    ending.style.display="flex";

    setTimeout(()=>{
      snoopy.style.opacity=1;
      finalText.style.opacity=1;
    },500);

  },1000);
}
