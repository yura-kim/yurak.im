$('ul#nav li a').hover(
    function() {
        console.log("OVER");
        // do this on hover
        $(this).animate({
            'color': '#2E9ECE'
        }, 'slow');
    }, 
    function() {
        console.log("OUT");
        // do this on hover out
        $(this).animate({
            'color': '#FEFEFE'
        }, 'slow');
    }
);