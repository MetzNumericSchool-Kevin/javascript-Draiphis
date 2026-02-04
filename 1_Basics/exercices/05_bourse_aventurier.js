// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 10;
let prix_potion_soin = 50;

let bourse_aventurier = 400
let as_enough_money = true
let as_enough_potion = true

let nombre_potions_souhaite = parseInt(prompt("Combien de potions voulez vous ? "))

if (stock_potion_soin<nombre_potions_souhaite){
    as_enough_potion=false
}

let prix_total = nombre_potions_souhaite*prix_potion_soin

if (bourse_aventurier<prix_total){
    as_enough_money=false
}
if (!as_enough_potion){
    console.log("Nous n'avons pas assez de potions. En stock : " + stock_potion_soin)
}
else{
    if(!as_enough_money){
        console.log("T'es trop pauvre, casse toi connard")
    }
    else{
        console.log("Vous avez acheté " + nombre_potions_souhaite + " potions, pour un prix total de " + prix_total)
    }
}