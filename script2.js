/*ALGO 02 - VOYELLES ET CONSONNES
/** Méthode en utilisant avec une entré de valeur depuis un champ texte (input) du HTML
    Création d'une fonction Voyelle et Consonne
*/

//Entrée de la valeur dans le champ texte et déclenchement de la fonction en appuyant Enter
const alg02 = document.getElementById('ALG02');
alg02.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        analyser(event);
    }
});

//La fonction va analyser pour chaque lettre si c'est voyelle ou consonne
    function analyser(event) {
        const mot = event.target.value
        let lettre;
        let nbV = 0;
        let pos;
        let nbC = 0;

        for (pos = 0; pos < mot.length; pos++){
            lettre = mot[pos];
            if (estVoyelle(lettre) == true) {
                nbV += 1;
                console.log("voyelle " + lettre + " en position " + pos);
            } else if (estConsonne(lettre)== true) {
                nbC += 1;
            }
        }
        console.log("texte de "+ mot.length + " caractères");
        console.log(nbV + " voyelles et " + nbC + " consonnes"); 
    }

//Cette fonction va vérifier si un string est une voyelle
function estVoyelle(string){
    let voyelle = ["a", "e", "i", "o", "u"];
    for (let i=0;i<voyelle.length;i++){
        if (string == voyelle[i]){ //si le string est une voyelle alors retourne vrai
            return true
            }
    }
}

//Cette fonction va vérifier si un string est une consonne
function estConsonne(string){
    let consonne = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
    for (let i=0;i<consonne.length;i++){
        if (string == consonne[i]){ //si le string est une consonne alors retourne vrai
            return true
            }
    }
}