//Pre-Loader
$(window).on("load", function(){
    $(".loader-container1").fadeOut(1000);
    $(".loader-container2").fadeOut(1000);
});

//Smooth Scrolling
let scrollButton = $('#smoothScroll');
scrollButton.click(function(e){
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 2000)
})

//Responsive Design
function responsiveDesign() {
    if($(window).width() <= 768){
        $('.respontext1').insertBefore('.respontext');
        $('.box-upacara-1').insertBefore('.red-bordr');
        $('.upacara2-2').insertBefore('.upacara2-1');
    }
    else if($(window).width() <= 1024){
        $('.upacara2-2').insertBefore('.upacara2-1');
        $('.respontext').insertBefore('.respontext1');
        $('.box-upacara-1').insertBefore('footer');
    } 
    else{
        $('.upacara2-1').insertBefore('.upacara2-2');
        $('.respontext').insertBefore('.respontext1');
        $('.box-upacara-1').insertBefore('footer');
    }
};

$(window).resize(function(){
    responsiveDesign();
});

responsiveDesign();

//Slide Animation
fullpageSec = document.querySelector("section#fullpage");
startBut = document.querySelector("a#button1");
aboutBut = document.querySelector("a[href^='about.html']");
nav = document.getElementsByTagName('nav')[0];
lastLine = document.querySelectorAll("div.col-md-1")[2];

startBut.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.style.backgroundColor = '#113E5A';
    nav.style.animationName = 'fadeNav';
    fullpageSec.style.animationName = 'slideToLeft';
    setTimeout(function() {
        window.location.href = "mainpage.html";
    }, 1500);
});

aboutBut.onclick = function(e) {
    e.preventDefault();
    document.body.style.backgroundColor = '#FF0464';
    lastLine.style.animationName = 'changeColor';
    setTimeout(function() {
        nav.style.animationName = 'fadeNav';
        fullpageSec.style.animationName = 'slideToLeft';
    }, 500);
    setTimeout(function() {
        window.location.href = "about.html";
    }, 2000);
}
