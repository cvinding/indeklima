$(document).ready(function () {

    const baseURL = "http://api.indeklima.local:8080";

    $("#main-navbar > div > .scrollspy-enabled > li > a[href^='#'], #main-navbar > a[href^='#']").on('click', function(e) {
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

    $("#submit-login").click(function (e) {
        e.preventDefault();

        const form = $($($(this).parent()).parent("form"));


        $.ajax({

            type: "POST",

            url: baseURL + "/api/auth/authorize",

            data: form.serialize(),

            success: function(result){
                console.log(result.token);

            }

        })



    });

});