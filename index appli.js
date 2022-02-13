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
});
