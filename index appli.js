// next
const supIndex = () => {
  let h2Title = document.getElementById("h2Title");
  h2Title.parentNode.removeChild(h2Title);

  document.querySelector(
    "body > div > div.header > div.introTitle "
  ).innerHTML += `
<h3>Le port de Césaré</h3>`;

  let sub = document.getElementById("sub");
  sub.parentNode.removeChild(sub);

  let title = document.getElementById("header");
  title.style.gridTemplateAreas = "introTitle";
  title.style.gridTemplateRows = "1fr";

  let header = document.getElementById("container");
  header.style.gridTemplateRows = "0.8fr 1fr 1fr 1fr 0.5fr";

  let introtuto1 = document.getElementById("introtuto1");
  introtuto1.parentNode.removeChild(introtuto1);
  let introtuto2 = document.getElementById("introtuto2");
  introtuto2.parentNode.removeChild(introtuto2);
  let introtuto3 = document.getElementById("introtuto3");
  introtuto3.parentNode.removeChild(introtuto3);

  let introContent = document.getElementById("introContent");
  introContent.style.gridTemplateAreas = ` "cont1"
"cont2"
"cont3"
"cont4"
"cont5"`;
};

const ajoutIntro = () => {
  introContent.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr";
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `

  
  <div class="cont1">
    <div class="instructions">
      <p>
        <img id="tuto" src="./icone/tuto.png" alt="" /> Retournez la
        première carte et deployez le planisphère.
      </p>
    </div>
  </div>
  <div class="cont2">
    <div class="instructions">
      <p>
        <img id="tuto" src="./icone/tuto.png" alt="" /> Dès que vous
        observez un numéro, retournez la carte corespondante.
      </p>
    </div>
  </div>
  <div class="cont3">
    <div class="instructions">
      <p>
        <img id="tuto" src="./icone/tuto.png" alt="" /> Vous pouvez
        additioner les cartes dont l’entète est rouge avec celle dont
        l’entète est bleu.<br />
        <i style="font-family: Inter;
        font-style: italic;
        font-weight: 300;
        font-size: 0.9em;
        line-height: 120%;
        display: flex;
        align-items: center;
        text-align: center;""

          >Ex: la carte rouge 3 avec la carte bleu 2, vous pouvez
          retourner la carte 5</i
        >
      </p>
    </div>
  </div>
  <div class="cont4">
    <div class="instructions">
    
    </div>
  </div>
  <div class="cont5">
    <div class="containerreponse">
      <p class="code" id=code>
        #
      </p>
      <input type="text" name="code" id="in" class="code"placeholder="3 chiffres">
    </div>
  </div>
    `;
};
const ajoutFond = () => {
  let fond = document.getElementById("body");
  fond.style.background = `top / contain no-repeat url("./imgfond/fondintro.jpg")`;

  let next = document.getElementById("next");
  next.parentNode.removeChild(next);

  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape1" >></div>
`;
};
const mauvaiseReponseIntro = () => {
  document.querySelector("#introContent > div.cont4 > div").innerHTML = `
  <p>
  <img id="tuto" src="./icone/tuto.png" alt="" />Non il vous faut observé un chiffre sur une carte papier précédé d'un "#"
  </p>
  `;
};
const validationIntro = () => {
  document.querySelector("#introContent > div.cont4 > div").innerHTML = `
  <p>
  <img id="tuto" src="./icone/tuto.png" alt="" />Super, vous pouvez prendre
   la carte ** et suprimer les carte **, ** et appuyer sur suivant dans l'application!
  </p>
  `;

  let next = document.getElementById("btnetape1");
  next.parentNode.removeChild(next);

  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape2" >></div>
`;

  let etape2 = document.getElementById("btnetape2");
  etape2.addEventListener("click", () => {
    //--------------------------------------------------------------
    //Etape2--------------------------------------------------------
    // -------------------------------------------------------------
    ajoutEtape2();
  });
};

const choixImageHiero = () => {
  const code = [2, 4, 6];

  let chiffre1 = 2;
  let chiffre2 = 4;
  let chiffre3 = 6;
  const reponse = document.getElementById("reponse");

  document.querySelector("#case1").innerHTML +=
    `
  <img class="img" id="img` +
    chiffre1 +
    `" src="./imgappli/hiero/img` +
    chiffre1 +
    `.png"  />
  `;

  document.querySelector("#case2").innerHTML +=
    `
  <img class="img" id="img2` +
    chiffre2 +
    `" src="./imgappli/hiero/img` +
    chiffre2 +
    `.png"  />
  `;

  document.querySelector("#case3").innerHTML +=
    `
  <img class="img" id="img3` +
    chiffre3 +
    `" src="./imgappli/hiero/img` +
    chiffre3 +
    `.png"  />
  
  `;

  fleche1.addEventListener("click", () => {
    if (chiffre1 > 1) {
      chiffre1 -= 1;
      display();
      supressionImageSuivante();
    }
  });

  fleche4.addEventListener("click", () => {
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
      `" src="./imgappli/hiero/img` +
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
  fleche2.addEventListener("click", () => {
    if (chiffre2 > 1) {
      chiffre2--;
      display2();
      supressionImageSuivante2();
    }
  });
  fleche5.addEventListener("click", () => {
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
      `" src="./imgappli/hiero/img` +
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
  fleche3.addEventListener("click", () => {
    if (chiffre3 > 1) {
      chiffre3--;
      display3();
      supressionImageSuivante3();
    }
  });
  fleche6.addEventListener("click", () => {
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
      `" src="./imgappli/hiero/img` +
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
  btnetape3.addEventListener("click", () => {
    let propo = [chiffre1, chiffre2, chiffre3];
    const propositionCode = () => {
      if (JSON.stringify(propo) == JSON.stringify(code)) {
        reponse.innerHTML = `Bien, nous partons donc pour l'Italie!
      <audio id=myaudio
        autoplay
        >
       <source src="./son/italie.mp3">`;
        // mise en place btnetape4
        let nextetape3 = document.getElementById("btnetape3");
        nextetape3.parentNode.removeChild(nextetape3);
        document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape4" >></div>
`;
        //supression etape3
        btnetape4.addEventListener("click", () => {
          document.querySelector(
            "body > div.container > div.introContent"
          ).innerHTML = ``;
          //rajout etape4-------------------------------------
          //--------------------------------------------------------
          // sup hiero
          let rmvfond2 = document.querySelector("#introContent");
          rmvfond2.style.background = "";
          //ajout bateau
          let fond3 = document.getElementById("body");
          fond3.style.background = `center top / contain no-repeat url("./imgfond/bateau.jpg")`;
          //modif titre
          document.querySelector("#header > div > h3").innerHTML = `
         En route vers l'Italie
         `;
          // modif grid

          let introContent = document.getElementById("introContent");
          introContent.style.gridTemplateAreas = ` "cont1"
"cont5"
"cont4"
`;
          introContent.style.gridTemplateRows = "1fr 1fr 1fr ";

          //ajout content

          document.querySelector(
            "body > div.container > div.introContent"
          ).innerHTML = `
          
            
  <div class="cont1">
  <div class="instructions">
    <p>
      <img id="tuto" src="./icone/dialogue.png" alt="" /> Nous partons donc pour l'Italie, prenez la carte 28 et supprimez la 33 et 1.
    </p>
  </div>
</div>

<div class="cont5">
  <div class="containerreponse">
    <p class="code" id=code>
           #
    </p>
    <input type="text" name="code" id="in" class="code"placeholder="3 chiffres">
  </div>
</div>


<div class="cont4">
<div class="instructions">
<p>
  <img id="tuto" src="./icone/question.png" alt="" />Trouvez un numéro<br />
  <i style="font-family: Inter;
  font-style: italic;
  font-weight: 300;
  font-size: 0.9em;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;""

    >qui commence par #</i
  >
</p>
</div>
</div>
  
          `;
          // modif btn next
          let nextetape4 = document.getElementById("btnetape4");
          nextetape4.parentNode.removeChild(nextetape4);
          document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape5" >></div>
`;
          // validation code de l'etape bateau etape5
          let etape1 = document.getElementById("btnetape5");
          etape1.addEventListener("click", () => {
            // Verif code
            const codeintro = 475;
            const propositionCode = () => {
              let chiffre1 = document.getElementById("in").value;

              if (chiffre1 == codeintro) {
                //intégration etape5 etape vent
                //sup bateau
                let fond4 = document.getElementById("body");
                fond4.style.background = ``;

                //int contentIntro en 3 parties
                let fond5 = document.getElementById("introContent");
                fond5.style.background = `./imgappli/vent.jpg`;
                // affichage vent en 7 images

                document.querySelector(
                  "body > div.container > div.introContent"
                ).innerHTML = `
  
  <div class="cont1">
  <div class="instructions"> <h4> <img id="question" src="./icone/question.png" alt="" />Prenons les bons vents</h4>
    <p>     
      <i style="font-family: Inter;
      font-style: italic;
      font-weight: 300;
      font-size: 0.9em;
      line-height: 120%;
      display: flex;
      align-items: center;
      text-align: center;""
        >Ordre des vents pour rejoindre Beaux ports</i>
    </p>
  </div>
</div>

<div class="choixImg">
<div class="fleche1">
  <button class="flecheHaut" id="fleche1" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche2">
  <button class="flecheHaut" id="fleche2" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche3">
  <button class="flecheHaut" id="fleche3" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche7">
  <button class="flecheHaut" id="fleche7" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche8">
  <button class="flecheHaut" id="fleche8" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche9">
  <button class="flecheHaut" id="fleche9" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche10">
  <button class="flecheHaut" id="fleche10" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="img1" id="case1" ></div>
<div class="img2"  id="case2" ></div>
<div class="img3" id="case3"></div>
<div class="img4" id="case4"></div>
<div class="img5" id="case5"></div>
<div class="img6" id="case6"></div>
<div class="img7" id="case7"></div>
<div class="fleche4">
  <button class="flecheBas" id="fleche4" type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche5">
  <button class="flecheBas" id=fleche5 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche6">
  <button class="flecheBas"  id=fleche6 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche11">
  <button class="flecheBas"  id=fleche11 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche12">
  <button class="flecheBas"  id=fleche12 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche13">
  <button class="flecheBas"  id=fleche13 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche14">
  <button class="flecheBas"  id=fleche14 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
</div>

<div class="cont5">  
    <div class="instructions" id="reponse">
    </div> 
</div>
  
  `;

                ///cgt btn next------------------

                let nextetape6 = document.getElementById("btnetape5");
                nextetape6.parentNode.removeChild(nextetape6);
                document.querySelector("#footer").innerHTML += `
        <div class=fleche id="btnetape6" >></div>
        `;

                //mise en forme

                let introContent = document.getElementById("introContent");
                introContent.style.gridTemplateAreas = ` 
"cont1"
"choixImg"
"choixImg"
"choixImg"
"cont5"
`;
                let choixImg2 = document.querySelector(
                  "#introContent > div.choixImg"
                );

                choixImg2.style.gridTemplateColumns = ` 1fr 1fr 1fr 1fr 1fr 1fr 1fr`;
                choixImg2.style.gridTemplateAreas = ` 
"fleche1 fleche3 fleche5 fleche7 fleche8 fleche9 fleche10"
"case1 case2 case3 case4 case5 case6 case7"
"fleche2 fleche4 fleche6 fleche6 fleche11 fleche12 fleche13 fleche14"`;

                let fond = document.querySelector("#introContent");
                fond.style.background = `center   / contain no-repeat url("./imgfond/vent.jpg")`;

                //----------------------------------------------------------------
                //fct choix vent
                //---------------------------------------------------------------
                const choixImageVent = () => {
                  const code = [1, 2, 3, 4, 1, 2, 3];

                  let chiffre1 = 1;
                  let chiffre2 = 2;
                  let chiffre3 = 3;
                  let chiffre4 = 4;
                  let chiffre5 = 1;
                  let chiffre6 = 2;
                  let chiffre7 = 3;
                  const reponse = document.getElementById("reponse");

                  document.querySelector("#case1").innerHTML +=
                    `
  <img class="img" id="img` +
                    chiffre1 +
                    `" src="./imgappli/vent/img` +
                    chiffre1 +
                    `.png"  />
  `;

                  document.querySelector("#case2").innerHTML +=
                    `
  <img class="img" id="img2` +
                    chiffre2 +
                    `" src="./imgappli/vent/img` +
                    chiffre2 +
                    `.png"  />
  `;

                  document.querySelector("#case3").innerHTML +=
                    `
  <img class="img" id="img3` +
                    chiffre3 +
                    `" src="./imgappli/vent/img` +
                    chiffre3 +
                    `.png"  />
  
  `;

                  document.querySelector("#case4").innerHTML +=
                    `
  <img class="img" id="img4` +
                    chiffre4 +
                    `" src="./imgappli/vent/img` +
                    chiffre4 +
                    `.png"  />
  
  `;

                  document.querySelector("#case5").innerHTML +=
                    `
  <img class="img" id="img5` +
                    chiffre5 +
                    `" src="./imgappli/vent/img` +
                    chiffre5 +
                    `.png"  />
  
  `;

                  document.querySelector("#case6").innerHTML +=
                    `
  <img class="img" id="img6` +
                    chiffre6 +
                    `" src="./imgappli/vent/img` +
                    chiffre6 +
                    `.png"  />
  
  `;

                  document.querySelector("#case7").innerHTML +=
                    `
  <img class="img" id="img7` +
                    chiffre7 +
                    `" src="./imgappli/vent/img` +
                    chiffre7 +
                    `.png"  />
  
  `;

                  fleche1.addEventListener("click", () => {
                    if (chiffre1 > 1) {
                      chiffre1 -= 1;
                      display();
                      supressionImageSuivante();
                    }
                  });

                  fleche4.addEventListener("click", () => {
                    if (chiffre1 < 4) {
                      chiffre1 += 1;
                      display();
                      supressionImgagePrecedente();
                    }
                  });

                  // fonction apparition  image
                  const display = () => {
                    // console.log(chiffre1);
                    if (chiffre1 < 5 && chiffre1 > 0) {
                      imgchiffre1 = "img" + chiffre1;
                      ajoutimg();
                    }
                  };

                  let ajoutimg = () => {
                    document.querySelector("#case1").innerHTML +=
                      `
    
    <img class="img" id="img` +
                      chiffre1 +
                      `" src="./imgappli/vent/img` +
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
                  fleche2.addEventListener("click", () => {
                    if (chiffre2 > 1) {
                      chiffre2--;
                      display2();
                      supressionImageSuivante2();
                    }
                  });
                  fleche5.addEventListener("click", () => {
                    if (chiffre2 < 4) {
                      chiffre2++;
                      display2();
                      supressionImgagePrecedente2();
                    }
                  });

                  // fonction apparition  image
                  const display2 = () => {
                    // console.log(chiffre1);
                    if (chiffre2 < 5 && chiffre2 > 0) {
                      imgchiffre2 = "img" + chiffre2;
                      ajoutimg2();
                    }
                  };

                  let ajoutimg2 = () => {
                    document.querySelector("#case2").innerHTML +=
                      `
    
    <img class="img" id="img2` +
                      chiffre2 +
                      `" src="./imgappli/vent/img` +
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
                  fleche3.addEventListener("click", () => {
                    if (chiffre3 > 1) {
                      chiffre3--;
                      display3();
                      supressionImageSuivante3();
                    }
                  });
                  fleche6.addEventListener("click", () => {
                    if (chiffre3 < 4) {
                      chiffre3++;
                      display3();
                      supressionImgagePrecedente3();
                    }
                  });

                  // fonction apparition  image
                  const display3 = () => {
                    // console.log(chiffre1);
                    if (chiffre3 < 5 && chiffre3 > 0) {
                      imgchiffre3 = "img" + chiffre3;
                      ajoutimg3();
                    }
                  };
                  let ajoutimg3 = () => {
                    document.querySelector("#case3").innerHTML +=
                      `
    
    <img class="img" id="img3` +
                      chiffre3 +
                      `" src="./imgappli/vent/img` +
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
                  //4eme choix
                  //----------------------------------------

                  fleche7.addEventListener("click", () => {
                    if (chiffre4 > 1) {
                      chiffre4--;
                      display4();
                      supressionImageSuivante4();
                    }
                  });
                  fleche11.addEventListener("click", () => {
                    if (chiffre4 < 4) {
                      chiffre4++;
                      display4();
                      supressionImgagePrecedente4();
                    }
                  });

                  // fonction apparition  image
                  const display4 = () => {
                    // console.log(chiffre1);
                    if (chiffre4 < 5 && chiffre4 > 0) {
                      imgchiffre4 = "img" + chiffre4;
                      ajoutimg4();
                    }
                  };
                  let ajoutimg4 = () => {
                    document.querySelector("#case4").innerHTML +=
                      `
    
    <img class="img" id="img4` +
                      chiffre4 +
                      `" src="./imgappli/vent/img` +
                      chiffre4 +
                      `.png"  />
    
    `;
                  };
                  const supressionImgagePrecedente4 = () => {
                    const prec3 = "img4" + (chiffre4 - 1);
                    // console.log(prec3);
                    let el5 = document.getElementById(`` + prec3);
                    // console.log(el5);
                    el5.remove();
                  };
                  const supressionImageSuivante4 = () => {
                    const suiv3 = "img4" + (chiffre4 + 1);
                    let el6 = document.getElementById(`` + suiv3);
                    el6.remove();
                  };
                  //5eme choix
                  //----------------------------------------

                  fleche8.addEventListener("click", () => {
                    if (chiffre5 > 1) {
                      chiffre5--;
                      display5();
                      supressionImageSuivante5();
                    }
                  });
                  fleche12.addEventListener("click", () => {
                    if (chiffre5 < 4) {
                      chiffre5++;
                      display5();
                      supressionImgagePrecedente5();
                    }
                  });

                  // fonction apparition  image
                  const display5 = () => {
                    // console.log(chiffre1);
                    if (chiffre5 < 5 && chiffre5 > 0) {
                      imgchiffre5 = "img" + chiffre5;
                      ajoutimg5();
                    }
                  };
                  let ajoutimg5 = () => {
                    document.querySelector("#case5").innerHTML +=
                      `
    
    <img class="img" id="img5` +
                      chiffre5 +
                      `" src="./imgappli/vent/img` +
                      chiffre5 +
                      `.png"  />
    
    `;
                  };
                  const supressionImgagePrecedente5 = () => {
                    const prec3 = "img5" + (chiffre5 - 1);
                    // console.log(prec3);
                    let el5 = document.getElementById(`` + prec3);
                    // console.log(el5);
                    el5.remove();
                  };
                  const supressionImageSuivante5 = () => {
                    const suiv3 = "img5" + (chiffre5 + 1);
                    let el6 = document.getElementById(`` + suiv3);
                    el6.remove();
                  };
                  //6eme choix
                  //----------------------------------------

                  fleche9.addEventListener("click", () => {
                    if (chiffre6 > 1) {
                      chiffre6--;
                      display6();
                      supressionImageSuivante6();
                    }
                  });
                  fleche13.addEventListener("click", () => {
                    if (chiffre6 < 4) {
                      chiffre6++;
                      display6();
                      supressionImgagePrecedente6();
                    }
                  });

                  // fonction apparition  image
                  const display6 = () => {
                    // console.log(chiffre1);
                    if (chiffre6 < 5 && chiffre6 > 0) {
                      imgchiffre6 = "img" + chiffre6;
                      ajoutimg6();
                    }
                  };
                  let ajoutimg6 = () => {
                    document.querySelector("#case6").innerHTML +=
                      `
    
    <img class="img" id="img6` +
                      chiffre6 +
                      `" src="./imgappli/vent/img` +
                      chiffre6 +
                      `.png"  />
    
    `;
                  };
                  const supressionImgagePrecedente6 = () => {
                    const prec3 = "img6" + (chiffre6 - 1);
                    // console.log(prec3);
                    let el5 = document.getElementById(`` + prec3);
                    // console.log(el5);
                    el5.remove();
                  };
                  const supressionImageSuivante6 = () => {
                    const suiv3 = "img6" + (chiffre6 + 1);
                    let el6 = document.getElementById(`` + suiv3);
                    el6.remove();
                  };
                  //7eme choix
                  //----------------------------------------

                  fleche10.addEventListener("click", () => {
                    if (chiffre7 > 1) {
                      chiffre7--;
                      display7();
                      supressionImageSuivante7();
                    }
                  });
                  fleche14.addEventListener("click", () => {
                    if (chiffre7 < 4) {
                      chiffre7++;
                      display7();
                      supressionImgagePrecedente7();
                    }
                  });

                  // fonction apparition  image
                  const display7 = () => {
                    // console.log(chiffre1);
                    if (chiffre7 < 5 && chiffre7 > 0) {
                      imgchiffre7 = "img" + chiffre7;
                      ajoutimg7();
                    }
                  };
                  let ajoutimg7 = () => {
                    document.querySelector("#case7").innerHTML +=
                      `
    
    <img class="img" id="img7` +
                      chiffre7 +
                      `" src="./imgappli/vent/img` +
                      chiffre7 +
                      `.png"  />
    
    `;
                  };
                  const supressionImgagePrecedente7 = () => {
                    const prec3 = "img7" + (chiffre7 - 1);
                    // console.log(prec3);
                    let el5 = document.getElementById(`` + prec3);
                    // console.log(el5);
                    el5.remove();
                  };
                  const supressionImageSuivante7 = () => {
                    const suiv3 = "img7" + (chiffre7 + 1);
                    let el6 = document.getElementById(`` + suiv3);
                    el6.remove();
                  };

                  // btn verif code
                  btnetape6.addEventListener("click", () => {
                    let propo = [
                      chiffre1,
                      chiffre2,
                      chiffre3,
                      chiffre4,
                      chiffre5,
                      chiffre6,
                      chiffre7,
                    ];
                    const propositionCode2 = () => {
                      if (JSON.stringify(propo) == JSON.stringify(code)) {
                        //etape 6 apres les vent/////
                        //mise ne place fond
                        let fond = document.querySelector("#introContent");
                        fond.style.background = ``;
                        let fond6 = document.getElementById("body");
                        fond6.style.background = `center top / contain no-repeat url("./imgfond/beauxport.jpg")`;
                        let introContent =
                          document.getElementById("introContent");
                        introContent.style.gridTemplateAreas = ` "cont1"
"cont2"
"cont4"
`;
                        introContent.style.gridTemplateRows = "1fr 1fr 1fr ";
                        //mise en place #
                        document.querySelector(
                          "body > div.container > div.introContent"
                        ).innerHTML = `
                        
                          
                <div class="cont1">
                <div class="instructions">
                  <p>
                    <img id="tuto" src="./icone/dialogue.png" alt="" /> 
                    Vous prenez le bon vent et arrivez à Beaux ports,
                     prenez la carte 51 et supprimez les cartes 17 et 34.
                  </p>
                </div>
              </div>
              
              <div class="cont2">
                <div class="containerreponse">
                  <p class="code" id=code>
                         #
                  </p>
                  <input type="text" name="code" id="in6" class="code"placeholder="3 chiffres">
                </div>
              </div>
              
              
              <div class="cont4">
              <div class="instructions">
              <p>
                <img id="tuto" src="./icone/question.png" alt="" />Trouvez un numéro<br />
                <i style="font-family: Inter;
                font-style: italic;
                font-weight: 300;
                font-size: 0.9em;
                line-height: 120%;
                display: flex;
                align-items: center;
                text-align: center;""
              
                  >qui commence par #</i
                >
              </p>
              </div>
              </div>`;
                        let nextetape7 = document.getElementById("btnetape6");
                        nextetape7.parentNode.removeChild(nextetape7);
                        document.querySelector("#footer").innerHTML += `
              <div class=fleche id="btnetape7" >></div>
              `;

                        //validation #etape 6
                        let etape1 = document.getElementById("btnetape7");
                        etape1.addEventListener("click", () => {
                          propositionCode3();
                        });
                        //----------------------------------
                      } else {
                        reponse.innerHTML =
                          "Qui peut naviguer contre les vent?";
                      }
                    };
                    propositionCode2();
                  });
                };

                choixImageVent();

                //---------------------------------------------------------------
                //---------------------------------------------------------------
                //////////////////////////////////
              } else {
                mauvaiseReponseIntro();
              }
            };
            propositionCode();
          });
        });
      } else {
        reponse.innerHTML =
          "On ne se comprend pas, un problème d'accent peut être?";
      }
    };
    propositionCode();
  });
};

// Début appli----------------------------------------
next.addEventListener("click", () => {
  supIndex();
  ajoutIntro();
  ajoutFond();

  // Etape1----------------------------------------
  let etape1 = document.getElementById("btnetape1");
  etape1.addEventListener("click", () => {
    // Verif code
    const codeintro = 254;
    const propositionCode = () => {
      let chiffre1 = document.getElementById("in").value;

      if (chiffre1 == codeintro) {
        validationIntro();
      } else {
        mauvaiseReponseIntro();
      }
    };
    propositionCode();
  });
  // ---------------------------------
});
//etape 2 fct hieroglyphe
const ajoutEtape2 = () => {
  let fond = document.querySelector("#introContent");
  fond.style.background = `center / contain no-repeat url("./imgfond/hieroglyphe.png")`;
  let fond2 = document.getElementById("body");
  fond2.style.background = ``;

  //supression btnetape2 pour passer a btnetape3
  let nextetape2 = document.getElementById("btnetape2");
  nextetape2.parentNode.removeChild(nextetape2);
  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape3" >></div>
`;

  // reglage du content en 3 parties
  let introContent = document.getElementById("introContent");
  introContent.style.gridTemplateAreas = ` 
"cont1"
"choixImg"
"choixImg"
"choixImg"
"cont5"
 `;
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `
  
  <div class="cont1">
  <div class="instructions"> <h4> <img id="question" src="./icone/question.png" alt="" />Je veux aller en:</h4>
    <p>     
      <i style="font-family: Inter;
      font-style: italic;
      font-weight: 300;
      font-size: 0.9em;
      line-height: 120%;
      display: flex;
      align-items: center;
      text-align: center;""
        >Donner le nom du pays ou vous voulez aller</i>
    </p>
  </div>
</div>
<div class="choixImg">
<div class="fleche1">
  <button class="flecheHaut" id="fleche1" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche2">
  <button class="flecheHaut" id="fleche2" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche3">
  <button class="flecheHaut" id="fleche3" type="">
    <img class="flecheHaut" src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="img1" id="case1" ></div>
<div class="img2"  id="case2" ></div>
<div class="img3" id="case3"></div>
<div class="fleche4">
  <button class="flecheBas" id="fleche4" type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche5">
  <button class="flecheBas" id=fleche5 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
<div class="fleche6">
  <button class="flecheBas"  id=fleche6 type="">
    <img  src="./icone/flecheImg.png" alt="" />
  </button>
</div>
</div>
<div class="cont5">  
    <div class="instructions" id="reponse">
    </div> 
</div>
  
  `;
  //fct choix img
  choixImageHiero();
};
// etape 7------------------------------------------
const propositionCode3 = () => {
  const code6 = 111;
  let propoetape6 = document.querySelector("#in6").value;
  if (propoetape6 == code6) {
    //vider le fond
    let fond7 = document.getElementById("body");
    fond7.style.background = ``;
    // cgt btn
    let nextetape7 = document.getElementById("btnetape6");
    nextetape7.parentNode.removeChild(nextetape7);
    document.querySelector("#footer").innerHTML += `
        <div class=fleche id="btnetape7" >></div>
        `;
    // mise en page

    //ajouter img choix date
    let fond8 = document.querySelector("body");
    fond8.style.background = `center / contain no-repeat url("./imgfond/calendrier.jpg")`;
    // appelle fct click img
  } else {
    mauvaiseReponseIntro();
  }
};

// -----------------------------------
// Gestion son
function toggleMute() {
  var audio = document.getElementById("myaudio");

  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}
let muted = document.getElementById("muted");
muted.addEventListener("click", () => {
  console.log(muted);
  toggleMute();
});
