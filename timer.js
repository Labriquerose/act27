//anime
var el = document.querySelector("#domNode .el");

var domNode = anime({
  targets: el,
  translateX: 50,
});

var lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});

////////////////////////
//timer

const departMinutes = 60;
let temps = departMinutes * 60;

const timerElement = document.getElementById("timer");
const commencer = document.getElementById("commencer");
commencer.addEventListener("click", () => {
  document.querySelector(
    "#sub "
  ).innerHTML = `Vous avez 60 minutes, votre score final dépendra du temps restant!
`;

  let commencer = document.getElementById("commencer");
  commencer.style.visibility = "hidden";
  let tuto = document.getElementById("tuto");
  tuto.style.visibility = "hidden";

  let next = document.getElementById("next");
  next.style.visibility = "visible";
  let nextFond = document.getElementById("nextFond");
  nextFond.style.visibility = "visible";

  setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    timerElement.innerText = `${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
  }, 1000);
});
