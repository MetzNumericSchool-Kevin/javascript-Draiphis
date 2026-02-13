/**
 * Code de base, ne pas modifier
 */

// Définition
const boutonVoyageHTML = document.querySelector(".btn-voyage");
const localisationEpoqueHTML = document.querySelector(".localisation_epoque");
const listeArtefactHTML = document.querySelector(".liste_artefacts");
const formChoixEpoqueHtml = document.querySelector(".form__choix_epoque");
const formRechercheArtefact = document.querySelector(
  ".form__recherche_artefact",
);

const creerLesChoixEpoque = (epoques) => {
  const selectHtml = formChoixEpoqueHtml.querySelector("select");
  Object.entries(epoques).forEach(([id_epoque, nom_epoque]) => {
    const option = document.createElement("option");
    option.value = id_epoque;
    option.text = nom_epoque;
    selectHtml.appendChild(option);
  });
};

function generationNombreAleatoireEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Permet d'afficher l'époque de destination du voyage
const afficherDestination = (nomEpoque) =>
  (localisationEpoqueHTML.textContent = nomEpoque);

// Permet d'afficher un artefact trouvée, ou non, à une époque
const afficherRechercheArtefact = ({ artefact, epoque, success = true }) => {
  const li = document.createElement("li");
  li.textContent = `${success ? "✅" : "❌"} ${artefact} (Epoque ${epoque})`;
  listeArtefactHTML.appendChild(li);
};

// Execution

// Gestion envoi formulaire choix époque
formChoixEpoqueHtml.addEventListener("submit", (event) => {
  event.preventDefault();
  const epoque = new FormData(formChoixEpoqueHtml).get("epoque");

  if (!epoque) {
    alert("Choisie une époque de voyage temporel Chronos !");
    return;
  }

  quandEpoqueChoisie(epoque);
});

// Gestion envoi formulaire recherche artelefact
formRechercheArtefact.addEventListener("submit", (event) => {
  event.preventDefault();
  const artefact = new FormData(formRechercheArtefact).get("artefact");
  quandRechercheArtefact(artefact);
});

/**
 * Votre partie commence ici, la partie modifiable par vos soins
 */
function main() {
  // Sera modifié par le dernier exercice
  const epoques = {
    romaine: "Romaine",
    medievale: "Médievale",
    jurassique: "Jurassique",
  };

  // Création dynamique des époques de destination de la machine temporelle
  creerLesChoixEpoque(epoques);
}

main();

// Permet d'être réutilisé dans la fonction quandRechercheArtefact


// ============================================
// EXERCICE 1 : Le Téléporteur Temporel ⏰
// ============================================
// 🎯 Objectif : Comprendre les callbacks et setTimeout()
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI

function voyagerTemps(destination, callback){
  console.log("Voyage en cours vers : ", destination)
  setTimeout(()=>
    {
      callback()
      console.log("Arrivée à l'époque : ", destination)
    }
   ,generationNombreAleatoireEntre(1000,3000))
}



// Crée la fonction voyagerTemps(destination, callback)
// Utilise setTimeout() avec generationNombreAleatoireEntre(1000, 3000)

// Fonction appelée quand le formulaire de voyage temporel est envoyé
function quandEpoqueChoisie(epoqueDestination) {
  // localisationEpoqueHTML.setAttribute("style", "display:none")
  nomEpoqueActuelle = epoqueDestination
  localisationEpoqueHTML.style.display = "none"
  document.querySelector(".voyage_en_cours").style.display = "flex"
  
  voyagerTemps(epoqueDestination,()=>{
    afficherDestination(epoqueDestination)
    document.querySelector(".voyage_en_cours").style.display = "None"
    localisationEpoqueHTML.style.display = "flex"
  })

  // ✍️ TON CODE ICI
  // Utilise voyagerTemps() ici
  // Avant le voyage : cache .localisation_epoque et affiche .voyage_en_cours
  // Après le voyage (callback) : cache le loader et appelle afficherDestination()
}

// ============================================
// EXERCICE 2 : La Collecte d'Artefact Mystère 🏺
// ============================================
// 🎯 Objectif : Callback avec paramètre (succès/échec)
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI

function collecterArtefact(nomArtefact, callback){
  
  setTimeout(()=>{
    let chance_succes = Math.random() * 100
    if (chance_succes<50){
      callback(false)

    }
    else{
  
      callback(true)
    }
    
  },
  generationNombreAleatoireEntre(1000,3000)
  )
}
// Crée la fonction collecterArtefact(nomArtefact, callback)
// Le callback reçoit true ou false selon le succès

// Fonction appelée quand le formulaire de recherche d'artefact est envoyé
function quandRechercheArtefact(artefact) {
  console.log(artefact);
  document.querySelector(".recherche_en_cours").style.display= "flex",
  collecterArtefact(artefact,function (success){
    document.querySelector(".recherche_en_cours").style.display ="None"
    afficherRechercheArtefact({ artefact, epoque: nomEpoqueActuelle, success })
    
  })
  }

  // ✍️ TON CODE ICI
  // Utilise collecterArtefact() ici
  // Avant : affiche .recherche_en_cours
  // Après (callback) : cache le loader et appelle afficherRechercheArtefact()


// ============================================
// EXERCICE 3 : La Mission Temporelle Complexe 🔗
// ============================================
// 🎯 Objectif : Comprendre le "callback hell"
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée la fonction missionTemporelleComplexe()
// Exécute la séquence : medievale → épée chevalier → romaine → bouclier romain → épée romaine

// ============================================
// EXERCICE 4 : Je te promets des voyages sans tracas ! 🤝
// ============================================
// 🎯 Objectif : Transformer les callbacks en Promesses
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Réécris voyagerTemps() pour retourner une Promesse
// Réécris collecterArtefact() pour retourner une Promesse (resolve/reject)
// Réécris missionTemporelleComplexe() avec .then() et .catch()

// ============================================
// EXERCICE 5 : La Mission Finale Asynchrone ⚡
// ============================================
// 🎯 Objectif : Utiliser async/await
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Rends missionTemporelleComplexe() asynchrone avec async
// Remplace les .then() par await
// Utilise try/catch pour gérer les erreurs

// ============================================
// EXERCICE 6 : Chargement Asynchrone des Époques 🌐
// ============================================
// 🎯 Objectif : Utiliser fetch() pour charger des données JSON
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Modifie la fonction main() pour charger les époques depuis data/epoques.json
// Utilise fetch() et await
