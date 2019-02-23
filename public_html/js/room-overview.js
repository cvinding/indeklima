$(document).ready(function () {

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

            for(let i = 0; i < maxRows; i++){

                let row = document.createElement("div");
                row.className = "row";

                for(let y = (maxEntries * i); y < (maxEntries * (i + 1)); y++){

                    if(rooms[y] === undefined) {
                        break;
                    }

                    let anchor = document.createElement("a");
                    anchor.className = "btn btn-secondary show-room-data";
                    anchor.href = "#" + rooms[y];
                    anchor.innerHTML = rooms[y];

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

                console.log(this.href.split("#")[1]);
            })

        }

    });


});