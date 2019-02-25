$(document).ready(function () {

    getDefaultTemperature($("#temperature-input"));

    $("#save-new-default-temperature").click(function (e) {
        e.preventDefault();

        const form = $($($($(this).parent()).parent()).parent());

        setDefaultTemperature(form.serialize() + "&format=1", function (response) {
            const output = $("#ui-box");

            if(response.status) {
                output.html(createDismissibleMessage("success", "Succes!", "Standard temperaturen er nu blevet sat for alle rum"));
                getDefaultTemperature($("#temperature-input"));
            }else {
                output.html(createDismissibleMessage("danger", "Fejl!", "Du kan ikke sætte den samme standard temperatur igen!"));
            }

        });

    });

    function setDefaultTemperature(values, callback) {
        $.ajax({
            type: "POST",
            url: apiURL() + "/api/temperature/setDefaultTemperature",
            data: values,
            headers: {"Authorization" : "Bearer " + getCookie("token")},
            success: function(result){
                callback(result);
            },
            error: function (result) {
                callback(result);
            }
        });
    }

    function getDefaultTemperature(target) {
        $.ajax({
            type: "POST",
            url: apiURL() + "/api/temperature/getDefaultTemperature",
            data: "",
            headers: {"Authorization" : "Bearer " + getCookie("token")},
            success: function(result){
                target.val(result.temperature);
            },
            error: function (result) {
                console.log(result);
            }
        });
    }

});