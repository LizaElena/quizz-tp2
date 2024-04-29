localStorage.setItem("key", "value");

var value = localStorage.getItem("key");

var button = document.getElementById("abonnement");
var affichageAbonnement = document.getElementById("affichageAbonnement");

var body = document.getElementById("body");
var theme = document.getElementById("theme");

theme.onclick = function(){
    body.style.backgroundColor = "whitesmoke";
    body.style.color = "black";
    
}

button.onclick = function(){
    affichageAbonnement.style.display = "block"
}

