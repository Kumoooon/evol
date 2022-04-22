function on() {
  document.getElementById("typing").style.zIndex = 10;
}
function hover() {
  setTimeout(() => {
    document.getElementById("img").style.opacity = 1;
  }, 1100);
}
function unhover() {
  setTimeout(() => {
    document.getElementById("img").style.opacity = 0;
  }, 800);
}
