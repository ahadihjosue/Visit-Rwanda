/**********************   HOME SLIDER  ****************************/ 

var slideIndex, slides, dots, captionText;

function initGallery() {
    slideIndex = 0;
    slides = document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity = 1;

    //Here we are going to accesss all tthe caption texts
    //We are retriving thee caption text element from the html document and store it in this variable
    captionText = document.querySelector(".captionHolder .captionText");
    captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

    dots = [];
    var dotsContainer = document.getElementById("dotsContainer");

    for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onClick", "moveSlide(" + i + ")"); //This script will help us to switch on the image represented by that dot
        dotsContainer.append(dot);
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
//Then, we call the function
initGallery();

function plusSlides(n) {
    moveSlide(slideIndex + n);
}

//n will behave as a slide index in the following function when the user clicks a button
function moveSlide(n) {
    var i, current, next;
    var moveSlideAnimClass = {
        forCurrent: "",
        forNext: ""
    }

    var slideTextAnimClass; //For holding the css animation class for the captionText

    if (n > slideIndex) {
        if (n >= slides.length) { n = 0 } //Such that it will loop through the imageHolder continuously without terminating
        moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlideAnimClass.forNext = "moveLeftNextSlide";
        slideTextAnimClass = "slideTextFromTop";

        //The else if will be executed whenthe user clicks Next Button
    } else if (n < slideIndex) {
        if (n < 0) { n = slides.length - 1 }
        moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
        moveSlideAnimClass.forNext = "moveRightNextSlide";
        slideTextAnimClass = "slideTextFromBottom";

    }
    if (n != slideIndex) {
        next = slides[n];
        current = slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity = 0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex = n;
    }
    captionText.style.display = "none";
    captionText.className = "captionText" + slideTextAnimClass;
    captionText.innerText = slides[n].querySelector(".captionText").innerText;
    captionText.style.display = "block";
}

var timer = null;

function setTimer() {
    timer = setInterval(function() {
        plusSlides(1);
    }, 8000)
}

setTimer();

function playPauseSlides() {
    var playPauseBtn = document.getElementById("playPauseBtn");
    if (timer == null) {
        setTimer();
        playPauseBtn.style.backgroundPositionX = "0px";
    } else {
        clearInterval(timer);
        timer = null;
        playPauseBtn.style.backgroundPositionX = "-33px";
    }
}