// const track = document.querySelector('#food-carousel');

$(document).ready(function() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidetoshow: 1,
        slidestoscroll: 1,
        mobilefirst: true,
        adaptiveheight: true,
        responsive: [
            {
                breakpoint: 1200,
            },

            {
                breakpoint: 992,
                settings: {
                    slidetoshow: 1,
                    slidestoscroll: 1
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidetoshow: 1,
                    slidestoscroll: 1
                }
            }
        ]
    });
});
