const cover = document.getElementById("cover");
const experience = document.getElementById("experience");
const cakeBtn = document.querySelector(".cake-button");

const layers = document.querySelectorAll(".layer");
const frosting = document.querySelector(".frosting");
const enterText = document.getElementById("enter-text");
const cake = document.getElementById("cake");
const topView = document.getElementById("top-view");
const ageNumber = document.getElementById("age-number");

const candleFocus = document.getElementById("candle-focus");
const candleVideo = document.getElementById("candle-video");
const candleUnlit = document.getElementById("candle-unlit");
const wishText = document.getElementById("wish-text");
const glitterContainer = document.getElementById("glitter-container");

const ending = document.getElementById("ending");
const snoopy = document.getElementById("snoopy-img");
const finalText = document.getElementById("final-text");

let interactionReady = false;

/* COVER */
cakeBtn.onclick = () => {
  cover.classList.remove("active");
  experience.classList.add("active");
  buildCake();
};

/* BUILD CAKE WITH BOUNCE */
function buildCake() {
  const order = [...layers, frosting];

  order.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "transform 0.8s cubic-bezier(.34,1.56,.64,1), opacity 0.8s";
    }, i * 800);
  });

  setTimeout(() => enterText.style.opacity = 0.6, 4000);
}

/* ENTER */
document.addEventListener("click", startCamera);
document.addEventListener("keydown", e => {
  if(e.key==="Enter") startCamera();
});

let cameraStarted=false;

function startCamera(){
  if(cameraStarted) return;
  cameraStarted=true;

  enterText.style.opacity=0;
  cake.style.transform="rotateX(60deg)";
  topView.style.opacity=1;

  setTimeout(()=>{
    cake.style.transform="rotateX(0)";
    topView.style.opacity=0;
    setTimeout(showCandles,2000);
  },3000);
}

/* TRANSFORMATION */
function showCandles(){
  ageNumber.style.opacity=1;

  setTimeout(()=>{
    cake.style.transform="scale(0.5)";
    cake.style.opacity=0;
    ageNumber.style.transform="translateX(-50%) scale(2)";

    setTimeout(()=>{
      document.getElementById("cake-scene").style.display="none";
      candleFocus.style.display="flex";
      candleVideo.style.display="block";
      candleVideo.play();

      candleVideo.onended=()=>{
        setTimeout(()=>{
          wishText.style.opacity=1;
          interactionReady=true;
        },800);
      };
    },2000);
  },1000);
}

/* BLOW */
document.addEventListener("keydown", e=>{
  if(e.code==="Space" && interactionReady) blow();
});
document.addEventListener("click", ()=>{
  if(interactionReady) blow();
});

function blow(){
  interactionReady=false;
  candleVideo.style.display="none";
  candleUnlit.style.display="block";
  wishText.style.opacity=0;
  createGlitter();

  setTimeout(showEnding,3000);
}

/* GLITTER */
function createGlitter(){
  for(let i=0;i<50;i++){
    const dot=document.createElement("div");
    dot.classList.add("glitter");
    dot.style.left=Math.random()*100+"vw";
    dot.style.top="-10px";
    dot.style.animationDelay=Math.random()*2+"s";
    glitterContainer.appendChild(dot);
  }
}

/* ENDING */
function showEnding(){
  candleFocus.style.display="none";
  ending.style.display="flex";

  setTimeout(()=>{
    snoopy.style.opacity=1;
    finalText.style.opacity=1;
  },500);
}
