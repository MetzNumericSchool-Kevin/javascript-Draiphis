// Affichage conditionnel avec switch

// Variables des exercices précédents (modifie selon tes valeurs)
const nom_boutique = "La Potion Enchantée";
const nom_sorcier = "Archibald";
let stock_potion_soin = 10;
let prix_potion_soin = 50;

console.log("Bienvenue dans mon humble boutique Aventurier. \n- 1. Le nom de la boutique`\n- 2. Le nom du Sorcier\n- 3. Le prix d'un potion de soin\n- 4. La quantité d'une potion de soin")

let choix=prompt("Que veux-tu savoir ? 🤔")
switch (choix){
    case "1":
        console.log(nom_boutique)
        break
    case "2":
        console.log(nom_sorcier)
        break
    case "3":
        console.log(stock_potion_soin)
        break
    case "4":
        console.log(prix_potion_soin)
        break
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕")
        break


}
