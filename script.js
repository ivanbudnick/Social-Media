var outerBoxa = document.getElementById("outer-boxa");
var switchText = document.getElementById("switch-text");
var circle = document.getElementById("circle");
var switcha = document.getElementById("switcha");
var outerBox = document.getElementById("outer-box");
var followersSquare = document.getElementsByClassName("followers__square");
var overviewSquare = document.getElementsByClassName("overview__square");
var clickCounter = 0;
switcha.addEventListener("click", darkMode);


function darkMode(e) {
    clickCounter++;
    if (clickCounter%2 == 1) {
    circle.style.left = "5%";
    outerBoxa.style.backgroundColor = "black";
    outerBox.style.backgroundColor = "black";
    outerBoxa.style.color = "white";
    for (var i=0; i<followersSquare.length; i++) {
        followersSquare[i].style.backgroundColor = "hsl(232, 19%, 15%)";
    };
    for (var j=0; j<overviewSquare.length; j++) {
        overviewSquare[j].style.backgroundColor = "hsl(232, 19%, 15%)";
    };
} else {
    circle.style.left = "50%";
    outerBoxa.style.backgroundColor = "white";
    outerBox.style.backgroundColor = "white";
    outerBoxa.style.color = "black";    
}
}

