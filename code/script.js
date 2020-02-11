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

