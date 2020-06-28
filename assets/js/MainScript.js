$(document).ready(function(){

    //Smooth Scrolling
    let scrollButton = $('#smoothScroll');
    scrollButton.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000)
    })
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

if(windowWidth > 1024){
    //Fullpage Scroll
    FastClick.attach(document.body);
    $('#fullpage').fullpage();
}
