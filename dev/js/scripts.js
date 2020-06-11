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

var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;
function mouseClick(){
    // console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
}
$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on( "click", mouseClick);