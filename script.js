// Création de la Function recupereUL en actionnant le bouton UN
let elemButton = document.getElementsByTagName("button");
let button1 = elemButton[0];
button1.addEventListener("click",recupereUL);

function recupereUL(){
    // le DOM va chercher la 2e balise ul du fichier HTML et donner les textes associés
    //let text = document.getElementsByTagName("ul")[1].innerHTML;
    //let text = document.querySelectorAll('ul#animals')[1];
   
    let myNodelist = document.querySelectorAll("ul#animals")[0].innerHTML;
    console.log(myNodelist);
    alert("Voici les animaux de la liste: \n "+ myNodelist);

    for (let i = 0; i < myNodelist.length; i++) {
      myNodelist[i].backgroundColor = "red";
    }
    // on va aller mettre la liste d'animaux à l'endroit de l'ID "nouvelleListe"
    document.getElementById("nouvelleListe").innerHTML = myNodelist;
    myNodelist.querySelector("#nouvelleListe").style.backgroundColor = "clear grey"
    myNodelist.querySelector("#newAnimals").border = "10px solid black"
    
    //const items = document.getElementsByClassName("item");
}
//--------------------------------------------------------------------

// Création de la Function recupereUL en actionnant le bouton DEUX et querySelector
let elemButtonbis = document.getElementsByTagName("button");
let button2 = elemButtonbis[1];
button2.addEventListener("click",recupereUL2);

function recupereUL2(){
    // Utilisation de querySelectorAll
    const nodeList= document.querySelectorAll("ul");
    for (let i = 0; i<nodeList.length;i++){
    nodeList[i].style.backgroundColor = 'red';
    };
    document.querySelector("h1").style.backgroundColor = "blue"
    document.querySelector("section > h1").style.backgroundColor = "blue"
    document.querySelector("div > p").style.backgroundColor = "green"

}


//----------------------------------------------------------------------

/** frigo pkst 9 10  evenementiel (old skill)
 * forme facile à comprendre , mais à ne plus utiliser 
 * function, isolation avec var locale, même nommage
 * 
// ------------------------------------ 9
alert("Hello");

function monAction() {
    let today = "29 aout "  ;
    let message = new Date();
    alert( "nous sommes le " + today + " \n " + message  ) ;
}

// ------------------------------------ 10
let today = "29/08/2022"  ;
let message = " à tous les DEVELOPPEURS" ;
alert("Hello ( " + today + " ) " + message  );

function monAction() {
    let today = "28 aout"  ;
    let message = new Date();
    alert( "nous sommes le " + today + " \n " + message  ) ;
}

*/


/** frigo pkst 11 11bis evenementiel (new skill)
 * utilisation du DOM + fonction
 *
// ------------------------------------ 11
alert("Hello 😄");

let elemBoutons = document.getElementsByTagName("button");
let bouton2 = elemBoutons[1] ; 
bouton2.addEventListener("click", monAction );

function monAction() {
    let today = "29 aout !!! "  ;
    let message = new Date();
    alert( "nous sommes le " + today + " \n " + message  ) ;
}

// ------------------------------------ 11bis
alert("Hello 😄 condensé");

document.getElementsByTagName("button")[1].addEventListener("click", monAction );

function monAction() {
    let today = "29 aout #@%! "  ;
    let message = new Date();
    alert( "nous sommes le " + today + " \n " + message  ) ;
}

*/

/** frigo pkst 12 evenementiel (new new skill)
 * utilisation du DOM + fonction anonyme
 *
// ------------------------------------ 12
alert("Hello 😄😄");

let elemBoutons = document.getElementsByTagName("button");
let bouton2 = elemBoutons[1] ; 
bouton2.addEventListener(
    "click",  
    function() {
        let today = "29 aout  "  ;
        let message = new Date();
        alert( "nous sommes le " + today + " \n " + message  ) ;
    }   
);

*/

/** frigo pkst 13 13bis evenementiel (new new new skill)
 * utilisation du DOM  + notation fléchée
 *
// ------------------------------------ 13
alert("Hello 😄😄😄");

let elemBoutons = document.getElementsByTagName("button");
let bouton2 = elemBoutons[1] ; 
bouton2.addEventListener(
    "click",  
    ()=> {
        let today = "29 aout  "  ;
        let message = new Date();
        alert( "nous sommes le " + today + " \n " + message  ) ;
    }   
);

// ------------------------------------ 13bis 
alert("Hello 😄😄😄 condensé");

document.getElementsByTagName("button")[1].addEventListener("click", 
    ()=> {
        let today = "29 aout  "  ;
        let message = new Date();
        alert( "nous sommes le " + today + " \n " + message  ) ;
    }   
);

*/

/** frigo pkst 14 evenementiel (new new new skill démo )
 * collection clickable = nouvelle instruction  for .. of  
 * voir https://www.zendevs.xyz/les-boucles-for-foreach-each-en-javascript/
 * 
 * 
// ------------------------------------ 14
alert("Hello 😄😄😄");
for (let e of document.getElementsByTagName("button") ) {
    // console.log(e.innerText);
    e.addEventListener("click", ()=> {
        let today = "29 aout  "  ;
        let message = new Date();
        alert( "nous sommes le " + today + " \n " + message  ) ;
    });
}   

*/


/** frigo pkst 15 dom
 * diverses manipulations du dom (en lecture, en ecriture)
 * 
 * 
// ------------------------------------ 15
// https://www.w3schools.com/jsref/dom_obj_all.asp 
alert("Hello DOM ");
// let e = document.getElementById("art1a1") ; 
// let e  = document.getElementById("art1a1").firstElementChild ; 
let e  = document.getElementsByTagName("button")[2] ; 
let message = "";
message += "e .....................(" + e  + ")\n"; 
//e.innerHTML = "T<br>ROIS";
message += "e.innerHTML ...........(" + e.innerHTML + ")\n"; 
//e.innerText = "THREE";
message += "e.innerText ...........(" + e.innerText + ")\n"; 

message += "e.style ...............(" + e.style     + ")\n"; 
//e.style.color = "orange";
message += "e.style.color .........(" + e.style.color       + ")\n"; 
//e.style.fontSize = "2em";
message += "e.style.fontSize ......(" + e.style.fontSize    + ")\n"; 

//console.log( message); 
//let e2  = document.getElementById("art1a2").children[1] ;
//e2.innerText = message ;

*/
