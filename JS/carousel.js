$(document).ready(function () {
    var slider = $('.carousel-intro').unslider({
        autoplay: true,
        nav: false,
        arrows: false,
        speed: 750,
        delay: 7000,
        animation: 'fade'
    });

    var windowHeight = $(window).height();
    var liHeight = $(".carousel-inner li").height();
//    console.log('Window Height: ' + windowHeight);
    if (windowHeight > liHeight) {
            $('.carousel-inner').css({
                height: liHeight
            });
        } else {
            $('.carousel-inner').css({
                height: windowHeight
            });
        }
    //    $('.carousel-intro').css({
    //        height: windowHeight
    //    });

    $(window).resize(function () {
        var windowHeight = $(window).height();
        var liHeight = $(".carousel-inner li").height();
//        console.log("Resize: " + windowHeight);
        //        $('.carousel-intro').css({
        //            height: windowHeight
        //        });
        if (windowHeight > liHeight) {
            $('.carousel-inner').css({
                height: liHeight
            });
        } else {
            $('.carousel-inner').css({
                height: windowHeight
            });
        }
    });
    //    var pPos = $('.my-slider').offset();
    //    var wHeight = $(window).height();
    //    var wWidth = $(window).width();
    //    var top = pPos.top + 770;
    //    var left = pPos.left + 1140;
    //
    //    slider.on('unslider.change', function (event, index, slide) {
    //        if (index == 0) {
    //            console.log("Slide has been changed to: " + 0);
    //            $('.corner').css({
    //                top: top,
    //                left: left
    //            });
    //            $('$title1').addClass('show').removeClass('hide');
    //            $('$title2').addClass('hide').removeClass('show');
    //        }
    //        if (index == 1) {
    //            console.log("Slide has been changed to: " + 1);
    //            $('.corner').css({
    //                top: top,
    //                left: left
    //            });
    //            $('$title1').addClass('hide').removeClass('hide');
    //            $('$title2').addClass('hide').removeClass('show');
    //        }
    //    });
});
