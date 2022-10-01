// nav sound
var totalNavLinks = document.querySelectorAll(".nav-item").length;
for (var i = 0; i < totalNavLinks; i++) {
    document.querySelectorAll("li.nav-item")[i].addEventListener("mouseover", function() {
        var audio = new Audio("audio/nave-sound.wav");
        audio.play();
    });
    document.querySelectorAll("li.nav-item")[i].addEventListener("click", function() {
        var audio = new Audio("audio/sword.mp3");
        audio.play();
    });
}

// nav-button

var totalYoutubeBtn = document.querySelectorAll("button.youtube-link").length;
for (var i = 0; i < totalYoutubeBtn; i++) {
    document.getElementsByClassName("youtube-link")[i].addEventListener("click", function() {
        open("https://youtu.be/2eQR-XSc-94");
    });
}

document.querySelector(".reg-link").addEventListener("click", function() {
    open("./contactus.html");
});

// nav-link


function delay(URL) {
    setTimeout(function() { location = URL }, 750);
}