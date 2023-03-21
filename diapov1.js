//EXERCICE 2 :
//appel des element html dont on a  besoin//
const id = document.getElementById('diapo');
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")

//creation de la variable globale indiceImage
let indiceImage = 0;

const setupListeners = function(){
    button1.addEventListener('click',imagePrecedante);
    button2.addEventListener('click',imageSuivante);
}

const afficheImage = function() {
    id.innerHTML(src,tabImages[indiceImage]);
}
const imageSuivante = function(){
    if (indiceImage < tabImages.length-1){
        indiceImage ++;
    } 
    else {
        indiceImage=0
    }
    return afficheImage()
}

const imagePrecedante = function(){
    if (indiceImage > tabImages[0]){
        indiceImage = indiceImage - 1;
    } 
    else {
        indiceImage=tabImages.length()-1;
    }
    return afficheImage()
}
setupListeners();
window.addEventListener("load",setupListeners);

//EXERCICE 3 :

let monTimer = window.setInterval(afficheImage,3);
window.clearInterval(monTimer);

