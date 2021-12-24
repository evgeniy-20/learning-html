$(function(){
    tabInit ();
    sliderInit ();
    menuOpen ();
});

function tabInit () {
    $(".tabs").tabs();
}

function sliderInit () {
    $('.slik-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    });
}

function menuOpen() {
    $('.js-menu-opener').on('click', function(){
        if($('#header').hasClass('active')) {
            $('#header').removeClass('active');
        } else {
            $('#header').addClass('active');
        }
    });
}