//identite

fetch(
  "https://my-json-server.typicode.com/medivankembo/Portfolio.json/identite"
).then(function (identite) {
  return identite
    .json()

    .then(function (identiteTableau) {
      console.log("Data :", identiteTableau);
      const noms = document.querySelector("#grandTitre");
      const domaine = document.querySelector("#domaine");
      const nomsAuteur = document.querySelector("#nomsAuteur");
      const aproposAuteur = document.querySelector("#aproposAuteur");

      identiteTableau.forEach((element) => {
        noms.innerHTML = element;
        noms.innerText = `${element.prenom}  ${element.nom}`;
        domaine.innerText = `${element.domaine}`;
        nomsAuteur.innerText = `${element.prenom}  ${element.nom} ${element.postnom}`;
        aproposAuteur.innerText = `${element.apropos}`;
      });
    });
});
// Projets
fetch("https://my-json-server.typicode.com/medivankembo/Portfolio.json/projet")
  .then(function (Projets) {
    console.log(Projets.json());
    return Projets.json();
  })
  .then(function (projetsTableau) {
    projetsTableau.forEach((element) => {});
  });
