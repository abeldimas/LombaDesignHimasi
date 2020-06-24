//Responsive Design
var windowWidth = $(window).width();
if(windowWidth <= 768){
    $('.respontext1').insertBefore('.respontext');
    $('.upacara2-2').insertBefore('.upacara2-1');
}
if(windowWidth < 1024){
    $('.upacara2-2').insertBefore('.upacara2-1');
}
