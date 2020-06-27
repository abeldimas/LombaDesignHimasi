//Responsive Design
var windowWidth = $(window).width();
if(windowWidth <= 768){
    $('.respontext1').insertBefore('.respontext');
    $('.box-upacara-1').insertBefore('.red-bordr');
    $('.upacara2-2').insertBefore('.upacara2-1');
}
if(windowWidth < 1024){
    $('.upacara2-2').insertBefore('.upacara2-1');
}
