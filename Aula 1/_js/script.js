/**
 * Created by User on 3/28/2018.
 */

function initMap() {
    var element = document.getElementById('mapa');

    //options
    var options = {
        center : {
            lat: -18.84291426212238,
            lng: 35.80602505000002
        },
        zoom : 6

    }

    //
    var map = new google.maps.Map(element,options);
}

