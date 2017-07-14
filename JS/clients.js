$(document).ready(function () {
//    $('.owl-carousel').owlCarousel({
//        loop: true,
//        margin: 10,
//        nav: true,
//        responsiveClass: true,
//        items: 6,
//        itemsDesktop: [1200, 6],
//        itemsTablet: [992, 3],
//        itemsMobile: [600, 1]
//    })
    //830
    if($(window).scrollTop() > 830){
        $('#clientsAnimation').hierarchicalDisplay();
    }
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 830){
            $('#clientsAnimation').hierarchicalDisplay();
        }
    })
});
