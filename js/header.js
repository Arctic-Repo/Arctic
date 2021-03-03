$( "#snow" ).hide();
$( "#snow" ).fadeIn(2000);
$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
        $( ".header #background" ).fadeIn();
        $( "#snow" ).fadeOut();
    } else {
        $( ".header #background" ).fadeOut();
        
    }
});