//identite
let noms = document.querySelector("#grandTitre");
let domaine = document.querySelector("#domaine");
fetch("http://localhost:3000/identite")
.then(function(identite){
//    console.log(identite.json())
return identite.json()
})
.then(function(identiteTableau){
    identiteTableau.forEach(element => {
        noms.innerHTML= element
        noms.innerText = `${element.prenom}  ${element.nom}`;
        domaine.innerText = `${element.domaine}`;

    });
})

// Projets
fetch("http://localhost:3000/projet")
.then(function(Projets){
//    console.log(Projets.json())
return Projets.json()
})
.then(function(projetsTableau){
    projetsTableau.forEach(element => {
        
    });
})