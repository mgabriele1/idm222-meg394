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

