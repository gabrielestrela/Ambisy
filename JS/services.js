$(document).ready(function () {
    $('.parallax').parallax();

    function removeLines(){
        if($("#sizeCheck").css("padding") == "4px" || $("#sizeCheck").css("padding") == "6px"){
            $("#servicesTitle").removeClass("lines");
        }else{
            $("#servicesTitle").addClass("lines");
        }
    }
    
    $(window).resize(removeLines);
});
