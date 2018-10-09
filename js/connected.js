
var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function() {
    bannerLoop();
}

var startBannerLoop = setInterval(function() {
    bannerLoop();
}, bannerTimer);

// Mouse in and out
document.getElementById("main-banner").onmouseenter = function() {
    clearInterval(startBannerLoop);
}

document.getElementById("main-banner").onmouseleave = function() {
    startBannerLoop = setInterval(function() {
        bannerLoop();
    },  bannerTimer);
}

// Click on the next and prev btn
document.getElementById("imgbanbtn-prev").onclick = function() {
    if (bannerStatus === 1) {
        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {
        bannerStatus = 1;
    }
    bannerLoop();

}

document.getElementById("imgbanbtn-next").onclick = function() {
    bannerLoop();
}

function bannerLoop() {
    if (bannerStatus === 1) {

        document.getElementById("imgban2").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.right.zIndex = "1000";

            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.right.zIndex = "1500";

            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.right.zIndex = "500";
        }, 500);
        setTimeout(function() {

             document.getElementById("imgban2").style.opacity = "1";
        }, 1000);
        bannerStatus = 2;

    }

    else if (bannerStatus === 2) {

        document.getElementById("imgban3").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.right.zIndex = "1000";

            document.getElementById("imgban3").style.right = "-1200px";
            document.getElementById("imgban3").style.right.zIndex = "1500";

            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.right.zIndex = "500";
        }, 500);
        setTimeout(function() {

             document.getElementById("imgban3").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;

    }

    else if (bannerStatus === 3) {

        document.getElementById("imgban1").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.right.zIndex = "1000";

            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.right.zIndex = "1500";

            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.right.zIndex = "500";
        }, 500);
        setTimeout(function() {

             document.getElementById("imgban1").style.opacity = "1";
        }, 1000);
        bannerStatus = 1;

    }
}

/* Scroll on buttons */
$(document).ready(function(){

    $('.js--scroll-to-connected').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-2').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-3').offset().top}, 1000);
    });
    
/* Navigation scroll */
    $('.js--scroll-about').click(function() {
    $('html, body').animate({scrollTop: $('.section-1').offset().top}, 1000);
    });

    $('.js--scroll-coming').click(function() {
        $('html, body').animate({scrollTop: $('.section-2').offset().top}, 1000);
    });

        $('.js--scroll-contact').click(function() {
            $('html, body').animate({scrollTop: $('.section-3').offset().top}, 1000);
        });

    $('.js--section-1').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    },{
        offset: '60px;'
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');

        }
    });
        
});



