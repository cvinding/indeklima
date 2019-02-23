$(document).ready(function () {

    /**
     * This document is for creating the room overview logic
     */

    $("#btn-grid").ready(function(){

        $.ajax({
            type: "POST",
            url: apiURL() + "/api/location/getRooms",
            headers: {"Authorization" : "Bearer " + getCookie("token")},
            success: function(result){
                populateBtnGrid($("#btn-grid"), result.rooms);
            },
            error: function (result) {
                console.log(result);
            }
        });

        function populateBtnGrid(grid, rooms) {
            const maxEntries = 3;
            const maxRows = Math.ceil(rooms.length / maxEntries);

            const roomData = [];

            const degreeChars = {celsius: "&#8451;", fahrenheit: "&#8457;", kelvin: "&#8490;"};

            for(let i = 0; i < maxRows; i++){

                let row = document.createElement("div");
                row.className = "row";

                for(let y = (maxEntries * i); y < (maxEntries * (i + 1)); y++){

                    if(rooms[y] === undefined) {
                        break;
                    }

                    let anchor = document.createElement("a");
                    anchor.className = "btn btn-primary show-room-data";
                    anchor.backgroundColor = "#e9ecef";
                    anchor.href = "#" + rooms[y];
                    anchor.innerHTML = rooms[y];
                    anchor.setAttribute("data-toggle", "false");

                    let column = document.createElement("div");
                    column.className = "col-sm-4";
                    column.append(anchor);

                    row.append(column);
                }

                grid.append(row);

                if(i !== maxRows - 1){
                    grid.append("<hr>");
                }

            }

            $(".show-room-data").click(function (e) {
                e.preventDefault();

                const room = this.href.split("#")[1];

                $("#room-information-modal > div > div > div > h5 > .room-number").html(room);

                const temperatureOut = $("#room-information-modal > div > div > .modal-body > ul > .temperature");
                const humidityOut = $("#room-information-modal > div > div > .modal-body > ul > .humidity");

                if(roomData[room] === undefined || roomData[room].ttl < (new Date()).getTime()) {
                    getRoomData(room, function (callback) {
                        roomData[room] = {data : null, ttl : null};
                        roomData[room].data = callback.room;
                        roomData[room].ttl = (new Date()).getTime() + 60000;

                        const temp = (roomData[room].data.temperature !== "No data") ? "Temperatur: " + roomData[room].data.temperature + " " + degreeChars[roomData[room].data.format] : "Temperatur: No data";
                        const humid = (roomData[room].data.humidity !== "No data") ? "Luftfugtighed: " + roomData[room].data.humidity + " %" : "Luftfugtighed: No data";

                        temperatureOut.html(temp);
                        humidityOut.html(humid);
                    });
                }

                $("#room-information-modal").modal("show");

                if(roomData[room] !== undefined) {

                    const temp = (roomData[room].data.temperature !== "No data") ? "Temperatur: " + roomData[room].data.temperature + " " + degreeChars[roomData[room].data.format] : "Temperatur: No data";
                    const humid = (roomData[room].data.humidity !== "No data") ? "Luftfugtighed: " + roomData[room].data.humidity + " %" : "Luftfugtighed: No data";

                    temperatureOut.html(temp);
                    humidityOut.html(humid);
                }

            });

            function getRoomData(room, output) {
                $.ajax({
                    type: "POST",
                    url: apiURL() + "/api/temperature/getRoomTemperature",
                    data: "data=" + room,
                    headers: {"Authorization" : "Bearer " + getCookie("token")},
                    success: function(result){
                        output(result);
                    },
                    error: function (result) {
                        console.log(result);
                    }
                });
            }

        }

    });

});