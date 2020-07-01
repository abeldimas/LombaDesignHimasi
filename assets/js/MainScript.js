//Pre-Loader
$(window).on("load", function(){
    $(".loader-container1").fadeOut(1000);
    $(".loader-container2").fadeOut(1000);
});

//Parallax Effect
VanillaTilt.init(document.querySelectorAll(".parallax3d"), {
    reverse: true,
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

// //Animation
// let faders = document.querySelectorAll('.fade-in');
// let sliders = document.querySelectorAll('.slide-up-1');

// let appearOptions = {
//     threshold: 0.4,
// };

// let appearOnScroll = new  IntersectionObserver 
// (function(entries, appearOnScroll) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         } else {
//             entry.target.classList.add('appear');
//             appearOnScroll.unobserve(entry.target);
//         }
//     })
// }, appearOptions);

// // faders.forEach(fader => {
// //     appearOnScroll.observe(fader);
// // });

// sliders.forEach(slider => {
//     appearOnScroll.observe(slider);
// });

