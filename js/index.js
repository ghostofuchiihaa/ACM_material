$('body').materialScrollTop();

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 2000,
        autoHeight: true
    });
});

$(window).load(function () {

    // window.sr = ScrollReveal({reset: false});
    // sr.reveal('#owl-carousel', {duration: 1100});

});