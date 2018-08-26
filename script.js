function important() {
    $('.panel-end__share').css({
        'visibility': "visible",
        'position': 'fixed',
        "opacity": '1'
    });}

$(window).ready(function () {
    important();

    setInterval(function () {
        important();
    },6000)
});
$(window).scroll(function () {
    important();
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

