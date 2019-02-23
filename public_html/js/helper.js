$(document).ready(function () {

    // The API url
    apiURL = function () {
        return "http://api.indeklima.local:8080";
    };

    // The web app url
    webURL = function () {
        return "http://indeklima.local:8080";
    };

    /**
     * createMessage() is used for creating a simple bootstrap message
     * @param type
     * @param strongMsg
     * @param message
     * @returns {HTMLElement}
     */
    createMessage = function (type, strongMsg, message) {
        // Create the strong part of the message
        let strong = document.createElement("strong");
        strong.append(strongMsg);

        // Create the div part of the message
        let div = document.createElement("div");
        div.className = "alert alert-" + type + " alert-dismissible fade show";
        div.role = "alert";
        div.append(strong);
        div.append(" " + message + "\n");

        // Return all elements appended to the div
        return div;

    };

    /**
     * createDismissibleMessage() is used for creating a dismissible bootstrap message
     * @param type
     * @param strongMsg
     * @param message
     * @returns {HTMLElement}
     */
    createDismissibleMessage = function (type, strongMsg, message) {
        // Create the strong part of the message
        let strong = document.createElement("strong");
        strong.append(strongMsg);

        // Create the span part of the message
        let span = document.createElement("span");
        span.setAttribute("aria-hidden", true);
        span.innerHTML = "&times;";

        // Create the button part of the message
        let button = document.createElement("button");
        button.type = "button";
        button.className = "close";
        button.setAttribute("data-dismiss", "alert");
        button.setAttribute("aria-label","Close");
        button.append(span);

        // Create the div part of the message
        let div = document.createElement("div");
        div.className = "alert alert-" + type + " alert-dismissible fade show";
        div.role = "alert";
        div.append(button);
        div.append(strong);
        div.append(" " + message + "\n");

        // Return all elements appended to the div
        return div;
    };


    getCookie = function(cookieName) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

});