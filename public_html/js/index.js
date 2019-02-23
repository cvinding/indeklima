$(document).ready(function () {

    // Reset the cookies if the user navigates from a "logged in" page to this index
    resetCookies();
    function resetCookies() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "login_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    /**
     * This is used for having a smooth animation on the scrollspy
     */
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

    /**
     * if #submit-login is clicked send the password to the api
     */
    $("#submit-login").click(function (e) {
        e.preventDefault();

        const form = $($($(this).parent()).parent("form"));

        const uiBox = $(form.children(".ui-message"));

        $.ajax({
            type: "POST",
            url: apiURL() + "/api/auth/authorize",
            data: form.serialize(),
            success: function(result){
                login(form.find("input[name=username-input]")[0].value, result, function (callback, type) {
                    uiBox.html(createDismissibleMessage((type) ? "success" : "danger", (type) ? "Succes!" : "Fejl!", callback));
                });
            },
            error: function (result) {
                console.log(result);
            }
        });
    });

    /**
     * login() is used for sending the user to the admin part of this front page webapp
     * @param username
     * @param JSONResult
     * @param output
     * @returns {boolean}
     */
    function login(username, JSONResult, output) {

        const token = JSONResult.token;
        const status = JSONResult.status;

        if(!status) {
            output("Forkert brugernavn eller kodeord", false);
            return false;
        }

        if(token === "" && token === null && token === undefined) {
            //window.location = webURL + "/";
            output("Forkert brugernavn eller kodeord", false);
            return false;
        }

        document.cookie = "token=" + token;
        document.cookie = "login_status=true";
        document.cookie = "username=" + username;

        setTimeout(function () {
            window.location = webURL() + "/admin";
        }, 1500);

        output("Du er ved at blive logged ind", true);
        return true;
    }

});