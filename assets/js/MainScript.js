//Pre-Loader
$(window).on("load", function(){
    $(".loader-container1").fadeOut(1000);
    $(".loader-container2").fadeOut(1000);
});

$(window).scroll( function(){
    $('.fade-out').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},1000); 
        }
    }); 

});

//Parallax Effect
VanillaTilt.init(document.querySelectorAll(".parallax3d"), {
    reverse: false,
    max: 25,
    speed: 400
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
let windowWidth = $(window).width();
if(windowWidth <= 768){
    $('.respontext1').insertBefore('.respontext');
    $('.box-upacara-1').insertBefore('.red-bordr');
    $('.upacara2-2').insertBefore('.upacara2-1');
}
if(windowWidth < 1024){
    $('.upacara2-2').insertBefore('.upacara2-1');
}