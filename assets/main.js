function stars() {
  const count = 200;
  const section = document.querySelector(".parallax");
  var i = 0;

  while (i < count) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const size = Math.random() * 4;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    const duration = Math.random() * 3;
    star.style.animationDuration = 2 + duration + "s";

    section.appendChild(star);
    i++;
  }
}
stars();

let text = document.getElementById("main-header");
let leaf = document.getElementById("leaf");
let moon = document.getElementById("moon");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginRight = value * .5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 0.5 + "px";
  moon.style.top = value * .1 + "px";
});