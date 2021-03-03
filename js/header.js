$( "#snow" ).hide();
$( "#snow" ).fadeIn(2000);
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $( ".header #background" ).fadeIn();
        $( "#snow" ).fadeOut();
    } else {
        $( ".header #background" ).fadeOut();
        
    }
});