/* RELOAD HOME BACKGROUND SWITCH FUNCTION */
let dripGif = document.getElementById("dripgif");
let heartsGif = document.getElementById("heartsgif");
let smokeGif = document.getElementById("smokegif");

window.addEventListener("load", themeFunction());
function themeFunction () {
  /* return random variable from 1-3 (third img set as default else) */
  
  let randInt = Math.floor(Math.random() * 3) + 1;
  if (randInt == 1) {
    dripGif.style.display = "block";
    document.body.style.backgroundColor = "#1E1E1E";
  } else if (randInt == 2) {
    heartsGif.style.display = "block";
  } else {
    smokeGif.style.display = "block";
    
  }
}