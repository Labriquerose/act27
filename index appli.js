// next

next.addEventListener("click", () => {
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
      // let next = document.getElementById("next");
      // next.style.visibility = "visible";
      // let nextFond = document.getElementById("nextFond");
      // nextFond.style.visibility = "visible";

  let fond = document.getElementById("body");
  fond.style.background = `top / contain no-repeat url("./imgfond/fondintro.jpg")`;

  let next = document.getElementById("next");
  next.parentNode.removeChild(next);

  document.querySelector("#footer").innerHTML += `
<div class=fleche id="btnetape1" >></div>
`;

  // Etape1----------------------------------------
  let etape1 = document.getElementById("btnetape1");
  etape1.addEventListener("click", () => {
    // Verif code
    const codeintro = 254;
    const propositionCode = () => {
      let chiffre1 = document.getElementById("in").value;

      if (chiffre1 == codeintro) {
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
          //Etape2--------------------------------------------------------
          let fond = document.getElementById("body");
          fond.style.background = `center / contain no-repeat url("./imgfond/hieroglyphe.jpg")`;

          document.querySelector(
            "body > div.container > div.introContent"
          ).innerHTML = `
          
          
          // 
          // 
          // 
          // 
          // 
          // 
          // 
          // 
          // 
          // 
          // 
          // 
          
          `;
        });
      } else {
        document.querySelector("#introContent > div.cont4 > div").innerHTML = `
        <p>
        <img id="tuto" src="./icone/tuto.png" alt="" />Non il vous faut observé un chiffre sur une carte papier précédé d'un "#"
        </p>
        `;
      }
    };
    propositionCode();
  });
  // ---------------------------------
});

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
