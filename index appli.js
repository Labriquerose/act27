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
      <input type="text" name="code" id="in" class="code" value=254 placeholder="3 chiffres">
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
<div class=flecheshine id="btnetape2" >></div>
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
<div class=flecheshine id="btnetape4" >></div>
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
    <input type="text" name="code" id="in" value=475 class="code"placeholder="3 chiffres">
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
                  <input type="text" name="code" id="in6" value=111 class="code"placeholder="3 chiffres">
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
    let nextetape7 = document.getElementById("btnetape7");
    nextetape7.parentNode.removeChild(nextetape7);

    document.querySelector("#footer").innerHTML += `
        <div class=fleche id="btnetape8" >></div>
        `;
    // mise en page------------------------------------
    document.querySelector(
      "body > div.container > div.introContent"
    ).innerHTML = `
    
      
<div class="cont1">
<div class="instructions">
<p>
<img id="tuto" src="./icone/dialogue.png" alt="" /> 
Quand pouvons nous partir au plus tôt ?
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

>cliquez sur la date de depart</i
>
</p>
</div>
</div>

<div class="cont2">
<map name="dateDeDepart" id="dateDeDepart">
<area href="#" shape="rect" coords="235,164,280,205" id="bonneDate"  />
<area href="#" shape="rect" coords="57,204,100,244" id="mauvaiseDate1" />
<area href="#" shape="rect" coords="280,165,330,205" id="mauvaiseDate3"/>
<area href="#" shape="rect" coords="0,0,382,399" id="mauvaiseDate2" />
</map>

<img src="./imgfond/calendrier.jpg" width="343" height="400 "
 usemap="#dateDeDepart" border="0">
 </div>

<div class="cont4">
<div class="instructions">
<p id=questionContainer>
<img id="tuto" src="./icone/question.png" alt="" />

</p>
</div>
</div>

`;

    //ajouter img choix date---------------------------
    clickdatecalendrier();

    //-------------------------------------------
    // appelle fct click img
  } else {
    mauvaiseReponseIntro();
  }
};

const clickdatecalendrier = () => {
  window.bonneDate.addEventListener("click", () => {
    document.querySelector("#questionContainer").innerHTML = `
    Nous partirons donc le 4, prenez la carte ... `;

    let nextetape8 = document.getElementById("btnetape8");
    nextetape8.parentNode.removeChild(nextetape8);

    document.querySelector("#footer").innerHTML += `
        <div class=flecheshine  id="btnetape9" >></div>
        `;
    clickbtnetape9();
  });
  window.mauvaiseDate1.addEventListener("click", () => {
    document.querySelector("#questionContainer").innerHTML = `
    oui mais on peut faire plus tôt...
    
    `;
  });
  window.mauvaiseDate2.addEventListener("click", () => {
    document.querySelector("#questionContainer").innerHTML = `
    Non, qui pourrai naviguer dans ces conditions!
    
  `;
  });
  window.mauvaiseDate3.addEventListener("click", () => {
    document.querySelector("#questionContainer").innerHTML = `
  oui mais on peut faire plus tôt...
  
  `;
  });
};
// click btnetape9
clickbtnetape9 = () => {
  let etape10 = document.getElementById("btnetape9");
  etape10.addEventListener("click", () => {
    //mise ne page video navigation celeste
    document.querySelector(
      "body > div.container > div.introContent"
    ).innerHTML = `

    
    <div class="cont1">
    <div class="instructions">
<p>
<img id="tuto" src="./icone/dialogue.png" alt="" /> 
Apprenez la navigation celeste
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

>Ecouter c’est apprendre</i
>
</p>
</div>
</div>

<div class="cont2">
<video src="./imgfond/navigationceleste.mp4" type="video/mp4"></video>
</div>


</div>

`;
    // cgt btn
    let nextetape10 = document.getElementById("btnetape9");
    nextetape10.parentNode.removeChild(nextetape10);

    document.querySelector("#footer").innerHTML += `
    <div class=fleche id="btnetape10" >></div>
    `;

    //lancement video

    let videoElem = document.querySelector("#introContent > div.cont2 > video");
    let playButton = document.getElementById("btnetape10");

    playButton.addEventListener("click", handlePlayButton, false);
    playVideo();

    async function playVideo() {
      try {
        await videoElem.play();
        playButton.classList.add("playing");
      } catch (err) {
        playButton.classList.remove("playing");
      }
    }

    function handlePlayButton() {
      if (videoElem.paused) {
        playVideo();
      } else {
        videoElem.pause();
        playButton.classList.remove("playing");
      }
    }

    //tempo btn chapitre II
    setTimeout(() => {
      let nextetape11 = document.getElementById("btnetape10");
      nextetape11.parentNode.removeChild(nextetape11);

      document.querySelector("#footer").innerHTML += `
      <div class=flecheshine id="btnetape11" >></div>
      `;
      clicketape10();
    }, 100);
    //a regler a 30 000

    //fin de chapite
  });
};

//CHAPITRE II------------------------------------
//Etape 11----------------------------------------

const clicketape10 = () => {
  //mise en page
  let etape11 = document.getElementById("btnetape11");
  etape11.addEventListener("click", () => {
    //chgt btn
    let nextetape12 = document.getElementById("btnetape11");
    nextetape12.parentNode.removeChild(nextetape12);
    document.querySelector("#footer").innerHTML += `
    <div class=fleche id="btnetape12" >></div>
    `;

    //cgt titre
    document.querySelector("#header > div > h3").innerHTML = `
    La tempête
    `;

    //tempete fond
    let fond12 = document.querySelector("#body");
    fond12.style.background = `center top / contain no-repeat url("./imgfond/mer.jpg")`;
    // tempete #
    document.querySelector(
      "body > div.container > div.introContent"
    ).innerHTML = `  
  <div class="cont2">
    <div class="containerreponse">
      <p class="code" id=code>
             #
      </p>
      <input type="text" name="code" id="in" value=111 class="code"placeholder="3 chiffres">
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
    // fonction verif code
    let etape12 = document.getElementById("btnetape12");
    etape12.addEventListener("click", () => {
      const code11 = 111;
      const codeetape11 = () => {
        let chiffre11 = document.getElementById("in").value;
        if (chiffre11 == code11) {
          etape13();
        } else {
          mauvaiseReponseIntro();
        }
      };
      codeetape11();
    });
  });
};

const etape13 = () => {
  //sup fond mer
  let fond13 = document.querySelector("#body");
  fond13.style.background = ``;
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `
  
    
<div class="cont1">
<div class="instructions">
<p>
<img id="tuto" src="./icone/dialogue.png" alt="" /> 
Sur quelle corde tirer pour descendre les voiles?
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

>cliquez sur la bonne corde</i
>
</p>
</div>
</div>

<div class="cont2" id="voile">
<map name="dateDeDepart" id="dateDeDepart">
<area href="#" shape="rect" coords="284,233,353,291" id="bonnevoile"  />
<area href="#" shape="rect" coords="1,1,333,352" id="mauvaisevoile" />

</map>

<img src="./imgfond/voile.jpg" width="349" height="370 "
usemap="#dateDeDepart" border="0">
</div>

<div class="cont4">
<div class="instructions">
<p id=questionContainer>


</p>
</div>
</div>
`;
  clickvoile();
};

const clickvoile = () => {
  window.bonnevoile.addEventListener("click", () => {
    document.querySelector("#questionContainer").innerHTML = `
    Super, c'etait la bonne, on peut passer à la suite! `;

    let nextetape14 = document.getElementById("btnetape12");
    nextetape14.parentNode.removeChild(nextetape14);

    document.querySelector("#footer").innerHTML += `
        <div class=flecheshine  id="btnetape14" >></div>
        `;
    clickbtnetape14();
  });
  window.mauvaisevoile.addEventListener("click", () => {
    document.querySelector("#questionContainer").innerHTML = `
    Non, essaie en une autre.
    
    `;
  });
};
//Etape 14 la carte 9
const clickbtnetape14 = () => {
  let etape15 = document.getElementById("btnetape14");
  etape15.addEventListener("click", () => {
    //cgt btn
    let nextetape15 = document.getElementById("btnetape14");
    nextetape15.parentNode.removeChild(nextetape15);
    document.querySelector("#footer").innerHTML += `
<div class=flecheshine id="btnetape15" >></div>
`;

    let fond14 = document.querySelector("#body");
    fond14.style.background = `center top / contain no-repeat url("./imgfond/9.jpg")`;

    //mise ne page 9
    document.querySelector(
      "body > div.container > div.introContent"
    ).innerHTML = `

    
    <div class="cont1">
    <div class="instructions">
<p>
<img id="tuto" src="./icone/dialogue.png" alt="" /> 
Prenez la carte 9 pour mieux voir!

</div>
</div>

<div class="cont2">
 
</div>


</div>

`;

    let etape16 = document.getElementById("btnetape15");
    etape16.addEventListener("click", () => {
      clicketape16();
    });
  });
};

//etape 15 -----------------------
const clicketape16 = () => {
  //cgt btn
  let nextetape16 = document.getElementById("btnetape15");
  nextetape16.parentNode.removeChild(nextetape16);
  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape16" >></div>
`;
  let fond162 = document.querySelector("#body");
  fond162.style.background =
    'top 50% right 50% / contain no-repeat url("./imgappli/cabine.jpg")';

  // cabine capitaine
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `  
<div class="cont1">

</div>




<div class="cont2">
    <div class="instructions2">
    <input type="text" name="code" id="in16" value=1492 class="code"placeholder="3 chiffres">
    </div>
  </div>




<div class="cont4">
<div class="instructions">
<p>
<img id="tuto" src="./icone/question.png" alt="" />Trouvez le code pour rentrer dans la cabine du capitaine<br />
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

  >en 4 chiffres</i
>
</p>
</div>
</div>
`;
  //validation code cabine
  validationcodecabine();
};

const validationcodecabine = () => {
  let etape17 = document.getElementById("btnetape16");
  etape17.addEventListener("click", () => {
    // Verif code
    const codecabine = 1492;
    const validationcodecabine2 = () => {
      let chiffre16 = document.getElementById("in16").value;

      if (chiffre16 == codecabine) {
        //intégration etape5 etape vent
        etape18();
      } else {
        document.querySelector("#introContent > div.cont4 > div").innerHTML = `
                  <p>
                  <img id="tuto" src="./icone/tuto.png" alt="" />
                  Non, vous devriez mieux regarder les cartes...
                  </p>
                  `;
      }
    };
    validationcodecabine2();
  });
};

const etape18 = () => {
  //chgt btn
  let nextetape18 = document.getElementById("btnetape16");
  nextetape18.parentNode.removeChild(nextetape18);
  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape18" >></div>`;
  //cgt back
  let fond3 = document.getElementById("body");
  fond3.style.background = `center top / contain no-repeat url("./imgfond/capitaine.jpg")`;
  //chgt content
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `  
<div class="cont1">

</div>




<div class="cont2">
    
  </div>




<div class="cont4">
<div class="instructions">
<p>
<img id="tuto" src="./icone/dialogue.png" alt="" />Supprimez les cartes 9, 20, 75 et 17.
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

  ></i
>
</p>
</div>
</div>
`;
  // sup btn le tps de voir le 87
  let nextetape20 = document.getElementById("btnetape18");
  nextetape20.parentNode.removeChild(nextetape20);
  // au bout de 15 sec ré-afficher le next
  setTimeout(() => {
    document.querySelector("#footer").innerHTML += `
<div class=flecheshine id="btnetape20" >></div>`;

    //on click etape 20
    let etape20 = document.getElementById("btnetape20");
    etape20.addEventListener("click", () => {
      etape21();
    });
  }, 1000);
};

const etape21 = () => {
  //chgt btn
  let nextetape21 = document.getElementById("btnetape20");
  nextetape21.parentNode.removeChild(nextetape21);
  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape21" >></div>
`;
  //chg titre
  let whitetitle = document.querySelector("#header > div > h3");
  whitetitle.style.color = "whitesmoke";
  //cgt image fond
  let fond20 = document.getElementById("body");
  fond20.style.background = `center top / contain no-repeat url("./imgfond/mer2.jpg")`;

  //mise en place #
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `

  
<div class="cont1">

</div>

<div class="cont2">
<div class="containerreponse">
<p class="code" id=code>
 #
</p>
<input type="text" name="code" id="in20" value=000 class="code"placeholder="3 chiffres">
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
  //on click 21
  let etape22 = document.getElementById("btnetape21");
  etape22.addEventListener("click", () => {
    etapeValide22();
  });
  //recup le in et valider
  const etapeValide22 = () => {
    const code22 = 000;
    const propositionCode = () => {
      let chiffre22 = document.getElementById("in20").value;

      if (chiffre22 == code22) {
        etape23();
      } else {
        mauvaiseReponseIntro();
      }
    };
    propositionCode();
  };
  //fin etape 20
};
const etape23 = () => {
  let nextetape23 = document.getElementById("btnetape21");
  nextetape23.parentNode.removeChild(nextetape23);
  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape23" >></div>
`;
  let fond23 = document.getElementById("body");
  fond23.style.background = `center top / contain no-repeat url("./imgfond/sonde20m.jpg")`;

  //mise en place #
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `

  
<div class="cont1">

</div>

<div class="cont2">
<div class="containerreponse">
<input type="text" name="code" id="in22" value=20 class="code"placeholder="2 chiffres">

</div><p class="metre" id=metre>
mètres
</p>
</div>


<div class="cont4">
<div class="instructions">
<p>
<img id="tuto" src="./icone/question.png" alt="" />Nous approchons de la terre,
combien reste t'il de fond avant de nous échouer ? </br>
Suprimez les cartes 55, 32.
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

></i
>
</p>
</div>
</div>`;
  //on click verif
  // fonction verif code
  let etape24 = document.getElementById("btnetape23");
  etape24.addEventListener("click", () => {
    const code24 = 20;
    const codeetape24 = () => {
      let chiffre24 = document.getElementById("in22").value;
      if (chiffre24 == code24) {
        etape25();
      } else {
        mauvaiseReponseIntro();
      }
    };
    codeetape24();
  });
};

const etape25 = () => {
  //chgt btn
  let nextetape22 = document.getElementById("btnetape23");
  nextetape22.parentNode.removeChild(nextetape22);
  document.querySelector("#footer").innerHTML += `
  <div class=fleche id="btnetape24" >></div>
  `;

  //cgt img fond
  let fond25 = document.getElementById("body");
  fond25.style.background = `center top / contain no-repeat url("./imgfond/sonde15m.jpg")`;
  // content
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `


<div class="cont1">

</div>

<div class="cont2">
<div class="containerreponse">
<input type="text" name="code" id="in22" value=15 class="code"placeholder="2 chiffres">

</div><p class="metre" id=metre>
mètres
</p>
</div>


<div class="cont4">
<div class="instructions">
<p>
<img id="tuto" src="./icone/question.png" alt="" />
Nous nous apronchons de la terre, et maintenant, 
la sonde est à quelle profondeur ? 

<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

></i
>
</p>
</div>
</div>`;

  //on click verif
  // fonction verif code
  let etape26 = document.getElementById("btnetape24");
  etape26.addEventListener("click", () => {
    const code26 = 15;
    const codeetape26 = () => {
      let chiffre26 = document.getElementById("in22").value;
      if (chiffre26 == code26) {
        etape27();
      } else {
        mauvaiseReponseIntro();
      }
    };
    codeetape26();
  });
};

//etape26

const etape27 = () => {
  //chgt btn
  let nextetape28 = document.getElementById("btnetape24");
  nextetape28.parentNode.removeChild(nextetape28);
  document.querySelector("#footer").innerHTML += `
<div class=flecheshine id="btnetape28" >></div>
`;
  //cgt img fond
  let fond = document.getElementById("body");
  fond.style.background = `center top / contain no-repeat url("./imgfond/cabine.jpg")`;
  // content
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `


<div class="cont1">

</div>

<div class="cont2">

</div>


<div class="cont4">
<div class="instructions">
<p>
<img id="tuto" src="./icone/dialogue.png" alt="" />
<h4>Paul: “Mangeons et reprenons des forces avant de débarquer!”</h4>

<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

></i
>
</p>
</div>
</div>`;

  //on click
  let etape28 = document.getElementById("btnetape28");
  etape28.addEventListener("click", () => {
    etape29();
  });
};

const etape29 = () => {
  //chgt btn
  let nextetape29 = document.getElementById("btnetape28");
  nextetape29.parentNode.removeChild(nextetape29);
  document.querySelector("#footer").innerHTML += `
  <div class=fleche id="btnetape29" >></div>
  `;
  //chg titre
  let whitetitle = document.querySelector("#header > div > h3");
  whitetitle.style.color = "#ff6a70";
  //cgt img fond
  let fond20 = document.getElementById("body");
  fond20.style.background = ``;

  //mise en place content
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `


<div class="cont1">
<div class="instructions">
<p>
<img id="tuto" src="./icone/question.png" alt="" />Combien sommes nous sur le bateau ?<br />
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

></i
>
</p>
</div>

</div>

<div class="cont2">

<img id="" src="./imgappli/nombre.jpg" alt="" />


</div>

<div class="cont4">
<div class="containerreponse2">
<p class="code" id=code>

</p>
<input type="text" name="code" id="in29" value=276 class="code"placeholder="3 chiffres">
</div>


</div>`;

  //on click verif
  // fonction verif code
  let etape24 = document.getElementById("btnetape29");
  etape24.addEventListener("click", () => {
    const code = 276;
    const codeetape = () => {
      let chiffre = document.getElementById("in29").value;
      if (chiffre == code) {
        etape30();
      } else {
        mauvaiseReponseIntro();
      }
    };
    codeetape();
  });

  //fin etape 29
};

const etape30 = () => {
  //content la tempete
  //chgt btn
  let nextetape30 = document.getElementById("btnetape29");
  nextetape30.parentNode.removeChild(nextetape30);
  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape30" >></div>
`;
  //chg titre
  let whitetitle = document.querySelector("#header > div > h3");
  whitetitle.style.color = "whitesmoke";
  //cgt image fond
  let fond20 = document.getElementById("body");
  fond20.style.background = `center top / contain no-repeat url("./imgfond/mer2.jpg")`;

  //mise en place #
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `

 
<div class="cont1">

</div>

<div class="cont2">
<div class="containerreponse">
<p class="code" id=code>
#
</p>
<input type="text" name="code" id="in20" value=682 class="code"placeholder="3 chiffres">
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
  //on click 21
  let etape30 = document.getElementById("btnetape30");
  etape30.addEventListener("click", () => {
    etapeValide30();
  });
  //recup le in et valider
  const etapeValide30 = () => {
    const code = 682;
    const propositionCode = () => {
      let chiffre = document.getElementById("in20").value;

      if (chiffre == code) {
        etape31();
      } else {
        mauvaiseReponseIntro();
      }
    };
    propositionCode();
  };

  //fin etape30
};

const etape31 = () => {
  //chgt btn
  let nextetape31 = document.getElementById("btnetape30");
  nextetape31.parentNode.removeChild(nextetape31);

  //chg titre
  let whitetitle = document.querySelector("#header > div > h3");
  whitetitle.style.color = "#ff6a70";
  //cgt img fond
  let fond20 = document.getElementById("body");
  fond20.style.background = `center top / contain no-repeat url("./imgfond/capitaineordre.jpg")`;

  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `


<div class="cont1">
<div class="instructions">
<p>
<img id="tuto" src="./icone/dialogue.png" alt="" />
Ecoutez bien les ordres!

<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

></i
>
</p>
</div>
</div>

<div class="cont2">
<img id="playaudio" class="flechshine" src="./icone/playordre.png" alt="" />
<audio src="./son/ordre.mp3" type="audio/mp3"></audio>
</div>


<div class="cont4">

</div>`;

  // play ordre

  //lancement audio

  let audioElem = document.querySelector("#introContent > div.cont2 > audio");
  let playButton = document.getElementById("playaudio");

  playButton.addEventListener("click", handlePlayButton, false);
  playAudio();

  async function playAudio() {
    try {
      await audioElem.play();
      playButton.classList.add("playing");
    } catch (err) {
      playButton.classList.remove("playing");
    }
  }

  function handlePlayButton() {
    if (audioElem.paused) {
      playAudio();
    } else {
      audioElem.pause();
      playButton.classList.remove("playing");
    }
  }
  // time out rep
  setTimeout(() => {
    document.querySelector(
      "#introContent > div.cont4"
    ).innerHTML = `<div class="containerreponse2">
<p class="code" id=code>

</p>
<input type="text" name="code" id="in29" value=7682 class="code"placeholder="4 chiffres">
</div>`;

    document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape31" >></div>
`;
    //on click verif
    // fonction verif code
    let etape32 = document.getElementById("btnetape31");
    etape32.addEventListener("click", () => {
      const code = 7682;
      const codeetape = () => {
        let chiffre = document.getElementById("in29").value;
        if (chiffre == code) {
          etape33();
        } else {
          document.querySelector(
            "#introContent > div.cont1 > div > p"
          ).innerHTML = `Ré-ecoutez </br> les ordres correctement!`;
        }
      };
      codeetape();
    });
  }, 300);

  // fin etape 31
};

//  CHAPITRE 3-------------------------------------------------------------------------------
//***************************************************************************************** */
//etape 33

const etape33 = () => {
  // cgt btn
  let nextetape33 = document.getElementById("btnetape31");
  nextetape33.parentNode.removeChild(nextetape33);

  document.querySelector("#footer").innerHTML += `
    <div class=flecheshine id="btnetape33" >></div>
    `;

  //cgt titre
  let whitetitle = document.querySelector("#header > div > h3");
  whitetitle.style.color = "whitesmoke";
  document.querySelector("#header > div > h3").innerHTML = `
    L'île de Malte
    `;

  //tempete fond
  let fond = document.querySelector("#body");
  fond.style.background = `center top / contain no-repeat url("./imgfond/malteechoue.jpg")`;
  // tempete #
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `  
  <div class="cont2">
   <audio src="./son/transition2.mp3" type="audio/mp3"></audio>
  </div>
  
  
  <div class="cont4">
  <div class="instructions">
  <p>
    <img id="tuto" src="./icone/question.png" alt="" />Ceux qui savaient nager ont sauté en premier , les autres se sont accrochés à ce qu'ils on pu, et tous sont arrivés saint et sauf sur une île nommée Malte.
    Prenez la carte 18. <br />
    <i style="font-family: Inter;
    font-style: italic;
    font-weight: 300;
    font-size: 0.9em;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;""
  
      >Supprimez les 57, 87, 28 et 81.</i
    >
  </p>
  </div>
  </div>
`;

  //son transition
  let audioElem = document.querySelector("#introContent > div.cont2 > audio");
  let playButton = document.getElementById("muted");

  playButton.addEventListener("click", handlePlayButton, false);
  playAudio();

  async function playAudio() {
    try {
      await audioElem.play();
      playButton.classList.add("playing");
    } catch (err) {
      playButton.classList.remove("playing");
    }
  }

  function handlePlayButton() {
    if (audioElem.paused) {
      playAudio();
    } else {
      audioElem.pause();
      playButton.classList.remove("playing");
    }
  }
  let etape34 = document.getElementById("btnetape33");
  etape34.addEventListener("click", () => {
    etape35();
  });
  //fin etape 33
};

//etape 35
const etape35 = () => {
  //content la tempete
  //chgt btn
  let nextetape35 = document.getElementById("btnetape33");
  nextetape35.parentNode.removeChild(nextetape35);
  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape36" >></div>
`;

  //cgt image fond
  let fond20 = document.getElementById("body");
  fond20.style.background = `center top / contain no-repeat url("./imgfond/malte2.jpg")`;

  //mise en place #
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `

 
<div class="cont1">

</div>

<div class="cont2">
<div class="containerreponse">
<p class="code" id=code>
#
</p>
<input type="text" name="code" id="in20" value=954 class="code"placeholder="3 chiffres">
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
  //on click 21
  let etape36 = document.getElementById("btnetape36");
  etape36.addEventListener("click", () => {
    etapeValide36();
  });
  //recup le in et valider
  const etapeValide36 = () => {
    const code = 954;
    const propositionCode = () => {
      let chiffre = document.getElementById("in20").value;

      if (chiffre == code) {
        etape37();
      } else {
        mauvaiseReponseIntro();
      }
    };
    propositionCode();
  };

  //fin etape 35
};

//etape 37

const etape37 = () => {
  //content
  //chgt btn
  let nextetape36 = document.getElementById("btnetape36");
  nextetape36.parentNode.removeChild(nextetape36);

  setTimeout(() => {
    document.querySelector("#footer").innerHTML += `
<div class=flecheshine id="btnetape37" >></div>
`;
    document.getElementById("viper").innerHTML = `
<audio src="./son/ding.mp3" type="audio/mp3"></audio>
`;
    //son viper fin
    let audioElem = document.querySelector("#viper > audio");
    let playButton = document.getElementById("muted");

    playButton.addEventListener("click", handlePlayButton, false);
    playAudio();

    async function playAudio() {
      try {
        await audioElem.play();
        playButton.classList.add("playing");
      } catch (err) {
        playButton.classList.remove("playing");
      }
    }

    function handlePlayButton() {
      if (audioElem.paused) {
        playAudio();
      } else {
        audioElem.pause();
        playButton.classList.remove("playing");
      }
    }
    let etape38 = document.getElementById("btnetape37");
    etape38.addEventListener("click", () => {
      etape39();
    });
    //fin son

    document.querySelector(
      "#introContent > div.cont1 > div > h4"
    ).innerHTML = `Oui il a survécu après avoir longtemps attendu il ne s'est rien passé! Prenez la carte 24 et 77`;
  }, 500);

  //chg titre
  let whitetitle = document.querySelector("#header > div > h3");
  whitetitle.style.color = "#ff6a70";
  //cgt image fond
  let fond20 = document.getElementById("body");
  fond20.style.background = ``;

  //mise en page
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `


<div class="cont1">
<div class="instructions">
<h4>Paul viens de se faire mordre par une vipere...Attendons de voir ce qui va se passer!</h4>
</div>
</div>

<div class="cont2">
<img src="./imgfond/serpent.jpg" alt="" />
</div>


<div class="cont4">
<div  id="viper">
<audio src="./son/tick.mp3" type="audio/mp3"></audio>
</div>
</div>`;

  //son viper
  let audioElem = document.querySelector("#viper > audio");
  let playButton = document.getElementById("muted");

  playButton.addEventListener("click", handlePlayButton, false);
  playAudio();

  async function playAudio() {
    try {
      await audioElem.play();
      playButton.classList.add("playing");
    } catch (err) {
      playButton.classList.remove("playing");
    }
  }

  function handlePlayButton() {
    if (audioElem.paused) {
      playAudio();
    } else {
      audioElem.pause();
      playButton.classList.remove("playing");
    }
  }
  //fin son

  //fin etape 37
};

const etape39 = () => {
  //chgt btn
  let nextetape39 = document.getElementById("btnetape37");
  nextetape39.parentNode.removeChild(nextetape39);
  document.querySelector("#footer").innerHTML += `
 <div class=flecheshine id="btnetape36" >></div>
 `;
  let whitetitle = document.querySelector("#header > div > h3");
  whitetitle.style.color = "whitesmoke";

  //cgt image fond
  let fond = document.getElementById("body");
  fond.style.background = `center top / contain no-repeat url("./imgfond/malte.jpg")`;

  //mise en place #
  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `

 
<div class="cont1">
<div class="instructions">
<p>
<img id="tuto" src="./icone/question.png" alt="" />Trouvez une séquence qui se repete<br />
<i style="font-family: Inter;
font-style: italic;
font-weight: 300;
font-size: 0.9em;
line-height: 120%;
display: flex;
align-items: center;
text-align: center;""

>des couleurs peut etre?</i
>
</p>
</div>
</div>

<div class="cont2">

</div>


<div class="cont4">

</div>`;

  etape40();

  //fin etape 39
};

const etape40 = () => {
  //replt btn
  let finEtape39 = document.getElementById("btnetape36");
  finEtape39.parentNode.removeChild(finEtape39);
  document.querySelector("#footer").innerHTML += `
  <div class=fleche id="btnetape40" >></div>`;

  // choix couleur

  document.querySelector(
    "body > div.container > div.introContent"
  ).innerHTML = `
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

</div>`;

  const choixCouleur = () => {
    const code = [3, 11, 2];

    let chiffre1 = 3;
    let chiffre2 = 11;
    let chiffre3 = 2;
    const reponse = document.getElementById("reponse");

    document.querySelector("#case1").innerHTML +=
      `
  <img class="img" id="img` +
      chiffre1 +
      `" src="./imgappli/couleur/img` +
      chiffre1 +
      `.png"  />
  `;

    document.querySelector("#case2").innerHTML +=
      `
  <img class="img" id="img2` +
      chiffre2 +
      `" src="./imgappli/couleur/img` +
      chiffre2 +
      `.png"  />
  `;

    document.querySelector("#case3").innerHTML +=
      `
  <img class="img" id="img3` +
      chiffre3 +
      `" src="./imgappli/couleur/img` +
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
        `" src="./imgappli/couleur/img` +
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
        `" src="./imgappli/couleur/img` +
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
        `" src="./imgappli/couleur/img` +
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


  };

  choixCouleur();
// verif btn
  // btn verif code
  btnetape6.addEventListener("click", () => {
    let propo = [
      chiffre1,
      chiffre2,
      chiffre3
    ];
    const propositionCode2 = () => {
      if (JSON.stringify(propo) == JSON.stringify(code)) {
        //etape 41
      }else{
//mauvaise reponse
      }


  //fin etape 40
};
