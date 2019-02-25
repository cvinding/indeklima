$(document).ready(function () {

    /**
     * checkLogin() is used for checking if the cookies set is correct and the token is valid
     */

    checkLogin();

    setInterval(function () {
        console.log("checking login status...");
        checkLogin();
    }, 600000);

    function checkLogin() {
        const username = getCookie("username");
        const token = getCookie("token");
        const login_status = getCookie("login_status");

        // Check if login_status is not true and log them out
        if(login_status !== "true") {
            logout();
        }

        // Check if token is set, else logout
        if(token === undefined || token === ""){
            logout();
        }

        // Check if username is set
        if(username === undefined || username === ""){
            logout();
        }

        // Check if token is valid
        $.ajax({
            type: "POST",
            url: apiURL() + "/api/auth/validate",
            data: "token=" + token,
            success: function(result){
                if(result.valid === false) {
                    logout();
                }
            },
            error: function (result) {
                console.log(result);
            }
        })

    }

    $("#username").ready(function () {
        $("#username").html(getCookie("username"));
    })


    /**
     * If logout is clicked, log the user out
     */
    $("#link-logout").click(function (e) {
        e.preventDefault();
        logout();
    });

    /**
     * logout() is a simple logout function
      */
    function logout() {
        // Delete cookies
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "login_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Redirect user
        window.location = webURL() + "/";
    }

});