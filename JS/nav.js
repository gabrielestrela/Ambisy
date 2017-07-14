$(document).ready(function () {
    //    $('.brand-logo img').css("margin-top", "20px");
    if ($(window).scrollTop() == 0) {
        $('.button-collapse i').css({
            "height": "128px",
            "line-height": "128px"
        });
    }

    if ($(window).scrollTop() != 0 && $(window).scrollTop() > 22) {
        $('.button-collapse i').css({
            "height": "64px",
            "line-height": "64px"
        });
    }

    function fixBar() {
        $('.button-collapse i').css({
            "height": "64px",
            "line-height": "64px"
        });
        $('nav').css({
            "height": "64px",
            "line-height": "64px",
            "top": "0"
        }, 300);
        $('#STICKY').addClass('navbar-fixed');
        $('#STICKY nav').removeClass('FLOAT');
        $('.brand-logo img').attr("src", "IMAGES/logos/logo128.png");
        $('.brand-logo img').css("margin-top", "6px");
    }

    function floatBar() {
        $('.button-collapse i').css({
            "height": "128px",
            "line-height": "128px"
        });
        $('nav').css({
            "height": "128px",
            "line-height": "128px",
            "top": "25px"
        }, 300);
        $('#STICKY nav').addClass('FLOAT');
        $('#STICKY').removeClass('navbar-fixed');
        $('.brand-logo img').attr("src", "IMAGES/logos/logo256.png");
        $('.brand-logo img').css("margin-top", "20px");
    }

    function sizeCheck() {
//        var carWidth = $(".carousel-intro").width();
//        $("nav").css({
//            width: carWidth
//        })
        if ($("#sizeCheck").css("padding") != "4px") {
//            console.log("Tela Maior");
            $(window).scroll(function () {
//                console.log('Window-ScrollTop: ' + $(window).scrollTop() + "\r");

                if ($(window).scrollTop() > 22) {
                    fixBar();
                }
                if ($(window).scrollTop() <= 22 && $("#sizeCheck").css("padding") != "4px") {
                    floatBar();
                }

            });
        } else {
//            console.log("Tela Menor");
            fixBar();
        }
    }

    sizeCheck();

    $(window).resize(sizeCheck);

});
