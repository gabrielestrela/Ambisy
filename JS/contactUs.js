$(document).ready(function(){
   
    function adjustHeight(){
        var cHeight = $('#contactUs').height();
        cHeight = cHeight + 100;
        
        $('#contactUs').css('height', cHeight);
    }
    
    adjustHeight();
    
    //$(window).resize(adjustHeight);
});