/**********************   PRELOADER  ****************************/ 


$(window).on("load", function(){
    $("#loader-wrapper").fadeOut("slow");
});

//Without using jquery here is my custom javascript, if you don't like plugins, this javascript is at work

//var preloader = document.getElementById('loader-wrapper');

//function load() {
///   preloader.style.display = 'none';
//}

/**********************   ANIMATE ON SCROLL  ***************************/ 


AOS.init({
    offset: 200,
    duration: 1000
});