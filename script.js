/* MENU */
var x = document.getElementById("pagelinks");
var y = document.getElementById("hamburger");

/* toggle when clicked */
function menuToggle() {
  if (x.style.display === "none") {
    x.style.display = "grid";
    x.classList.add("menuopen");
    y.classList.toggle("change", true);
  } else {
    x.style.display = "none";
    y.classList.toggle("change", false);
  } 
}



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

