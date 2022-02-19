//Intro
const etape = 1;

document.body.style.backgroundImage = "url('./imgfond/hieroglyphe.jpg')";

//

// etapePrecedent.addEventListener("click", () => {
//   if (etape > 1) {
//     etape -= 1;
//     affichageEtapePrecedente();
//     supressionEtapeSuivante();
//   }
// });

// etapeSuivante.addEventListener("click", () => {
//   if (etape > 1) {
//     etape -= 1;
//     affichageEtapeSuivante();
//     supressionEtapePrecedente();
//   }
// });

// ---------------------------------
// Choix hiéroglyphe
//----------------------------------
const hieroglyphe = () => {
  document.querySelector("body").innerHTML += ` 
 
  
  
  <div id=titreVerif>
  <h2 id="titre"></h2>
  <div class="container">
  <input class=btnhaut type="button" id="precedent" value="^" />
  <input class=btnhaut type="button" id="btn3" value="^" />
  <input class=btnhaut type="button" id="btn5" value="^" />
  <div class="div1"  id=case1>
  
  </div>
  <div class="div1" id=case2>
  
  </div>
  <div class="div1"  id=case3>
  
  </div>
  <input class=btnbas type="button" id="suivant" value="^" />
  <input class=btnbas type="button" id="btn4" value="^" />
  <input class=btnbas type="button" id="btn6" value="^" />
  </div>
   <input type="button" id="btn7" value="parler" />
  <p id=reponse></p>
 
  </div>
  </div>   
  </div>
  <div id="foot">
  <button type="etapePrecedente"><<<</button>
  <button type="etapesuivante">>>></button>
</div>
  `;

  const code = [2, 4, 6];
  const h2 = document.getElementById("titre");
  let chiffre1 = 1;
  let chiffre2 = 1;
  let chiffre3 = 1;
  const reponse = document.getElementById("reponse");

  document.querySelector("#case1").innerHTML +=
    `
  <img class="img" id="img` +
    chiffre1 +
    `" src="img` +
    chiffre1 +
    `.png"  />
  `;

  document.querySelector("#case2").innerHTML +=
    `
  <img class="img" id="img2` +
    chiffre2 +
    `" src="img` +
    chiffre2 +
    `.png"  />
  `;

  document.querySelector("#case3").innerHTML +=
    `
  <img class="img" id="img3` +
    chiffre3 +
    `" src="img` +
    chiffre3 +
    `.png"  />
  
  `;

  h2.innerHTML = "Je voudrai aller en";

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
    document.querySelector("#case1").innerHTML +=
      `
    
    <img class="img" id="img` +
      chiffre1 +
      `" src="img` +
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

  //----------------------------------------
  // deuxieme choix
  //----------------------------------------
  btn3.addEventListener("click", () => {
    if (chiffre2 > 1) {
      chiffre2--;
      display2();
      supressionImageSuivante2();
    }
  });
  btn4.addEventListener("click", () => {
    if (chiffre2 < 11) {
      chiffre2++;
      display2();
      supressionImgagePrecedente2();
    }
  });

  // fonction apparition  image
  const display2 = () => {
    // console.log(chiffre1);
    if (chiffre2 < 12 && chiffre2 > 0) {
      imgchiffre2 = "img" + chiffre2;
      ajoutimg2();
    }
  };

  let ajoutimg2 = () => {
    document.querySelector("#case2").innerHTML +=
      `
    
    <img class="img" id="img2` +
      chiffre2 +
      `" src="img` +
      chiffre2 +
      `.png"  />
    
    `;
  };
  const supressionImgagePrecedente2 = () => {
    const prec2 = "img2" + (chiffre2 - 1);
    // console.log(prec2);
    let el3 = document.getElementById(`` + prec2);
    // console.log(el3);
    el3.remove();
  };
  const supressionImageSuivante2 = () => {
    const suiv2 = "img2" + (chiffre2 + 1);
    let el4 = document.getElementById(`` + suiv2);
    el4.remove();
  };

  //----------------------------------------
  // troisieme choix
  //----------------------------------------
  btn5.addEventListener("click", () => {
    if (chiffre3 > 1) {
      chiffre3--;
      display3();
      supressionImageSuivante3();
    }
  });
  btn6.addEventListener("click", () => {
    if (chiffre3 < 11) {
      chiffre3++;
      display3();
      supressionImgagePrecedente3();
    }
  });

  // fonction apparition  image
  const display3 = () => {
    // console.log(chiffre1);
    if (chiffre2 < 12 && chiffre2 > 0) {
      imgchiffre3 = "img" + chiffre3;
      ajoutimg3();
    }
  };
  let ajoutimg3 = () => {
    document.querySelector("#case3").innerHTML +=
      `
    
    <img class="img" id="img3` +
      chiffre3 +
      `" src="img` +
      chiffre3 +
      `.png"  />
    
    `;
  };
  const supressionImgagePrecedente3 = () => {
    const prec3 = "img3" + (chiffre3 - 1);
    // console.log(prec3);
    let el5 = document.getElementById(`` + prec3);
    // console.log(el5);
    el5.remove();
  };
  const supressionImageSuivante3 = () => {
    const suiv3 = "img3" + (chiffre3 + 1);
    let el6 = document.getElementById(`` + suiv3);
    el6.remove();
  };

  // btn verif code
  btn7.addEventListener("click", () => {
    let propo = [chiffre1, chiffre2, chiffre3];
    console.log(propo);
    console.log(code);
    const propositionCode = () => {
      if (JSON.stringify(propo) == JSON.stringify(code)) {
        reponse.innerHTML = `Bien, nous partons donc pour l'Italie!
       

    <audio id=myaudio
        autoplay
        
        
        >
       <source src="./son/italie.mp3">`;
      } else {
        reponse.innerHTML =
          "On ne se comprend pas, un problème d'accent peut être?";
      }
    };
    propositionCode();
  });
};

hieroglyphe();

//-----------------------------------
//Gestion son

// document.querySelector("body").innerHTML += `

// <audio id=myaudio

//       control
//       loop

//       >
//       <source src="./son/port1.mp3">
//       Your browser does not support the
//       <code>audio</code> element.

//       </audio>
//       <audio id=myaudio2

//       >
//       <source src="./son/transition1.mp3">
//       Your browser does not support the
//       <code>audio</code> element.
//       </audio>

// `;

// function toggleMute() {
//   var audio = document.getElementById("myaudio");

//   if (audio.muted) {
//     audio.muted = false;
//   } else {
//     audio.muted = true;
//   }
// }

// mutted.addEventListener("click", () => {
//   toggleMute();
// });

//timer
const departMinutes = 5;
let temps = departMinutes * 60;

const timerElement = document.getElementById("timer");

setInterval(() => {
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `${minutes}:${secondes}`;
  temps = temps <= 0 ? 0 : temps - 1;
}, 1000);
