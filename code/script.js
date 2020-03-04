/* MENU */
    
/* toggle when clicked */
function menuToggle() {
  var x = document.getElementById("pagelinks");
  var y = document.getElementById("hamburger");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.classList.toggle("change", true);
  } else {
    x.style.display = "none";
    y.classList.toggle("change", false);
  }
  
}

/*hamburger to x on click*/
function hamburger() {
  
  y.classList.toggle("change");
}

/* RELOAD HOME IMAGE FUNCTION */
let dripGif = document.getElementById("dripgif");
let heartsGif = document.getElementById("heartsgif");
let smokeGif = document.getElementById("smokegif");

window.addEventListener("load", themeFunction());
function themeFunction () {
  /* return random variable from 1-3 (third img set as default else) */
  
  let randInt = Math.floor(Math.random() * 3) + 1;
  if (randInt == 1) {
    dripGif.style.display = "block";
  } else if (randInt == 2) {
    heartsGif.style.display = "block";
  } else {
    smokeGif.style.display = "block";
  }
}


