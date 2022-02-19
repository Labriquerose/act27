const code = 246;
const h2 = document.getElementById("titre");
let chiffre1 = 1;
h2.innerHTML = "Dans quel pays veux tu aller?";

precedent.addEventListener("click", () => {
  if (chiffre1 > 1) {
    chiffre1 -= 1;
    display();
    supressionImageSuivante();
  }
});

suivant.addEventListener("click", () => {
  if (chiffre1 < 11) {
    chiffre1 += 1;
    display();
    supressionImgagePrecedente();
  }
});

// fonction apparition  image
const display = () => {
  // console.log(chiffre1);
  if (chiffre1 < 12 && chiffre1 > 0) {
    imgchiffre1 = "img" + chiffre1;
    ajoutimg();
  }
};

let ajoutimg = () => {
  document.querySelector("body > div > div > div:nth-child(4)").innerHTML +=
    `
    
    <img class="img" id="img` +
    chiffre1 +
    `" src="./img` +
    chiffre1 +
    `.png"  />
    
    `;
};

const supressionImgagePrecedente = () => {
  const prec = "img" + (chiffre1 - 1);
  // console.log(prec);
  let el1 = document.getElementById(`` + prec);
  el1.remove();
};

const supressionImageSuivante = () => {
  const suiv = "img" + (chiffre1 + 1);
  let el2 = document.getElementById(`` + suiv);
  el2.remove();
};

// btn verif code
btn7.addEventListener("click", () => {
  let propo = [chiffre1, 2, 3];
  console.log(propo);
});

const propositionCode = () => {
  console.log(chiffre1);
  console.log(code);
  if (chiffre1 === code) {
    console.log("Bien");
  } else {
    console.log("non");
  }
};
propositionCode();
