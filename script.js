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
    circle.style.transition ="0.5s";
    outerBoxa.style.backgroundColor = "black";
    outerBox.style.backgroundColor = "black";
    outerBoxa.style.color = "white";
    outerBox.style.transition ="0.2s";
    outerBoxa.style.transition ="0.2s";
    switcha.style.backgroundImage = "linear-gradient(60deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
    circle.style.backgroundColor = "hsl(232, 19%, 15%)"
    for (var i=0; i<followersSquare.length; i++) {
        followersSquare[i].style.backgroundColor = "hsl(232, 19%, 15%)";
        followersSquare[i].style.transition ="0.1s";

    };
    for (var j=0; j<overviewSquare.length; j++) {
        overviewSquare[j].style.backgroundColor = "hsl(232, 19%, 15%)";
        overviewSquare[i].style.transition ="0.1s";
    };
} else {
    circle.style.left = "50%";
    circle.style.backgroundColor = "hsl(227, 47%, 96%)";
    outerBoxa.style.backgroundColor = "white";
    outerBox.style.backgroundColor = "white";
    outerBoxa.style.color = "black";
    switcha.style.backgroundImage = "none"
    for (var i=0; i<followersSquare.length; i++) {
        followersSquare[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    };
    for (var j=0; j<overviewSquare.length; j++) {
        overviewSquare[j].style.backgroundColor = "hsl(227, 47%, 96%)";
    };
}
}

