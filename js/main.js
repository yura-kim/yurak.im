/* PROJECTS */
var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

// travian tools
function travian1(){
    $('#travian').html("<h2>travian tools</h2><strong>A set of tools to help Travian players strategize.<br><br>Under development.</strong>");
    $('#travian').css("background-image","url('images/travian2.jpg')");
}
function travian2() {
    $('#travian').html("<h2>travian tools</h2>web app<br>game stratgy tools");
    $('#travian').css("background-image","url('images/travian1.jpg')");
}
if(isMobile) {
    var travian = false;
    $('#travian').click(function() {
        if(travian) {
            travian2();
            travian = false;
        } else {
            travian1();
            travian = true;
        }
    });
} else {
    $('#travian').hover(travian1,travian2);
}

// travlr
function travlr1(){
    $('#travlr').html("<h2>travlr</h2><strong>Travel journal meets social networking. Users can document and share their travels.<br><br>Under development.</strong>");
    $('#travlr').css("background-image","url('images/travlr2.jpg')");
}
function travlr2() {
    $('#travlr').html("<h2>travlr</h2>web app<br>travel & social networking");
    $('#travlr').css("background-image","url('images/travlr1.jpg')");
}
if(isMobile) {
    var travlr = false;
    $('#travlr').click(function() {
        if(travlr) {
            travlr2();
            travlr = false;
        } else {
            travlr1();
            travlr = true;
        }
    });
} else {
    $('#travlr').hover(travlr1,travlr2);
}

// lyf3
function lyf31(){
    $('#lyf3').html("<h2><a href='http://san-toki.github.io/lyf3/' target='_blank'>lyf3</a></h2><strong>Simple text-based life simulation game. Inspired by <a href='http://candies.aniwey.net/' target='_blank'>Candy Box</a> and <a href='http://adarkroom.doublespeakgames.com/' target='_blank'>A Dark Room</a>.</strong>");
    $('#lyf3').css("background-image","url('images/lyf32.jpg')");
}
function lyf32() {
    $('#lyf3').html("<h2>lyf3</h2>web app<br>casual");
    $('#lyf3').css("background-image","url('images/lyf31.jpg')");
}
if(isMobile) {
    var lyf3 = false;
    $('#lyf3').click(function() {
        if(lyf3) {
            lyf32();
            lyf3 = false;
        } else {
            lyf31();
            lyf3 = true;
        }
    });
} else {
    $('#lyf3').hover(lyf31,lyf32);
}

// motivate
function motivate1(){
    $('#motivate').html("<h2><a href='https://drive.google.com/file/d/0B9UHMmOfNXEwWXhZLVVWU2NES3M/view' target='_blank'>motivate</a></h2><strong>Diet and nutrition tracking application. Users motivate each other via a semi-anonymous filtered messaging system.</strong>");
    $('#motivate').css("background-image","url('images/motivate2.jpg')");
}
function motivate2() {
    $('#motivate').html("<h2>motivate</h2>android app<br>fitness & motivation");
    $('#motivate').css("background-image","url('images/motivate1.jpg')");
}
if(isMobile) {
    var motivate = false;
    $('#motivate').click(function() {
        if(motivate) {
            motivate2();
            motivate = false;
        } else {
            motivate1();
            motivate = true;
        }
    });
} else {
    $('#motivate').hover(motivate1,motivate2);
}

/* ABOUT SECTION TABS */

$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).fadeIn(300).siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

console.log("IM HERE")