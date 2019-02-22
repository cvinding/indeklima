$(document).ready(function () {

    $("#main-navbar > div > ul > li > a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        const hash = this.hash;

        // animate
        $('html, body').animate({scrollTop: $(hash).offset().top}, 400, function(){
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });

});