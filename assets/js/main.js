var userPos = [];
var latlngRoutes = [];
var latlngDestination = [];
var allBusStops = [];
$.getJSON("routes.json", function (data1) {
    var routesData = { data1 };
    for (var j = 0; j < routesData.data1.length; j++) {
        if (routesData.data1[j].shape_id === 110851) {
            var newRoutePoint = {
                lat: parseFloat(routesData.data1[j].shape_pt_lat),
                lng: parseFloat(routesData.data1[j].shape_pt_lon),
            };
            latlngRoutes.push(newRoutePoint);
            var flightPlanCoordinates = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes = new google.maps.Polyline({
        path: latlngRoutes,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes.setMap(map);
});
var latlngRoutes1 = [];
$.getJSON("routes.json", function (data1) {
    var routesData1 = { data1 };
    for (var j = 0; j < routesData1.data1.length; j++) {
        if (routesData1.data1[j].shape_id === 111145) {
            var newRoutePoint1 = {
                lat: parseFloat(routesData1.data1[j].shape_pt_lat),
                lng: parseFloat(routesData1.data1[j].shape_pt_lon),
            };
            latlngRoutes1.push(newRoutePoint1);
            var flightPlanCoordinates1 = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes1 = new google.maps.Polyline({
        path: latlngRoutes1,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes1.setMap(map);
});
var latlngRoutes2 = [];
$.getJSON("routes.json", function (data2) {
    var routesData2 = { data2 };
    for (var j = 0; j < routesData2.data2.length; j++) {
        if (routesData2.data2[j].shape_id === 111136) {
            var newRoutePoint2 = {
                lat: parseFloat(routesData2.data2[j].shape_pt_lat),
                lng: parseFloat(routesData2.data2[j].shape_pt_lon),
            };
            latlngRoutes2.push(newRoutePoint2);
            var flightPlanCoordinates2 = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes2 = new google.maps.Polyline({
        path: latlngRoutes2,
        geodesic: true,
        strokeColor: '#ffa500',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes2.setMap(map);
});
var latlngRoutes3 = [];
$.getJSON("routes.json", function (data3) {
    var routesData3 = { data3 };
    for (var j = 0; j < routesData3.data3.length; j++) {
        if (routesData3.data3[j].shape_id === 111049) {
            var newRoutePoint3 = {
                lat: parseFloat(routesData3.data3[j].shape_pt_lat),
                lng: parseFloat(routesData3.data3[j].shape_pt_lon),
            };
            latlngRoutes3.push(newRoutePoint3);
            var flightPlanCoordinates3 = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes3 = new google.maps.Polyline({
        path: latlngRoutes3,
        geodesic: true,
        strokeColor: '#800080',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes3.setMap(map);
});
var latlngRoutes4 = [];
$.getJSON("routes.json", function (data4) {
    var routesData4 = { data4 };
    for (var j = 0; j < routesData4.data4.length; j++) {
        if (routesData4.data4[j].shape_id === 111060) {
            var newRoutePoint4 = {
                lat: parseFloat(routesData4.data4[j].shape_pt_lat),
                lng: parseFloat(routesData4.data4[j].shape_pt_lon),
            };
            latlngRoutes4.push(newRoutePoint4);
            var flightPlanCoordinates4 = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes4 = new google.maps.Polyline({
        path: latlngRoutes4,
        geodesic: true,
        strokeColor: '#008000',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes4.setMap(map);
});
var latlngRoutes5 = [];
$.getJSON("routes.json", function (data5) {
    var routesData5 = { data5 };
    for (var j = 0; j < routesData5.data5.length; j++) {
        if (routesData5.data5[j].shape_id === 111151) {
            var newRoutePoint5 = {
                lat: parseFloat(routesData5.data5[j].shape_pt_lat),
                lng: parseFloat(routesData5.data5[j].shape_pt_lon),
            };
            latlngRoutes5.push(newRoutePoint5);
            var flightPlanCoordinates5 = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes5 = new google.maps.Polyline({
        path: latlngRoutes5,
        geodesic: true,
        strokeColor: '#808080',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes5.setMap(map);
});
var latlngRoutes6 = [];
$.getJSON("routes.json", function (data6) {
    var routesData6 = { data6 };
    for (var j = 0; j < routesData6.data6.length; j++) {
        if (routesData6.data6[j].shape_id === 111170) {
            var newRoutePoint6 = {
                lat: parseFloat(routesData6.data6[j].shape_pt_lat),
                lng: parseFloat(routesData6.data6[j].shape_pt_lon),
            };
            latlngRoutes6.push(newRoutePoint6);
            var flightPlanCoordinates1 = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes6 = new google.maps.Polyline({
        path: latlngRoutes6,
        geodesic: true,
        strokeColor: '#000000',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes6.setMap(map);
});
var latlngRoutes7 = [];
$.getJSON("routes.json", function (data7) {
    var routesData7 = { data7 };
    for (var j = 0; j < routesData7.data7.length; j++) {
        if (routesData7.data7[j].shape_id === 110838) {
            var newRoutePoint7 = {
                lat: parseFloat(routesData7.data7[j].shape_pt_lat),
                lng: parseFloat(routesData7.data7[j].shape_pt_lon),
            };
            latlngRoutes7.push(newRoutePoint7);
            var flightPlanCoordinates1 = [
                { lat: 33.6892, lng: -84.27269 }
            ];
        }
    }
    var routes7 = new google.maps.Polyline({
        path: latlngRoutes7,
        geodesic: true,
        strokeColor: '#0000ff',
        strokeOpacity: .6,
        strokeWeight: 6
    });
    routes7.setMap(map);
});
// Show current time //
$(document).ready(function () {
    var datetime = null,
        date = null;
    var update = function () {
        date = moment(new Date())
        datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    };
    datetime = $('#currentStatus')
    update();
    setInterval(update, 1000);
});
var map, infoWindow;
var latLng;
var queryURL = "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    for (var i = 0; i < response.length; i++) {

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(response[i].LATITUDE, response[i].LONGITUDE),
            map: map
        });
        var adherence = response[i].ADHERENCE;
        var vehicle = response[i].VEHICLE;
        var route = response[i].ROUTE;
        // $("#section1B").append("Bus Number: " + vehicle + " and Route Number: " + route + " is " + adherence + " Minutes on Schedule.<br><hr>");
        latLng = (parseFloat(response[i].LATITUDE) + "," + parseFloat(response[i].LONGITUDE));
        var marker = new google.maps.Marker({
            coords: latLng,
            map: map
        });
    }
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(33.7763658, -84.3899218),
        zoom: 15.5
    })
    map2 = new google.maps.Map(document.getElementById('section2B'), {
        center: new google.maps.LatLng(33.7763658, -84.3899218),
        zoom: 15.5
    });
    // Gets map boundries
    google.maps.event.addListener(map, 'bounds_changed', function () {
        var bounds = map.getBounds();
        var ne = bounds.getNorthEast();
        var sw = bounds.getSouthWest();

        var markers = [];

        //Creates array of data for all the Marta stops that we can use 
        $.getJSON("busStops.json", function (data) {
            var icons = {
                info: {
                    icon: 'assets/Images/little-blue-bus.png'
                }
            };
            var stopsData = { data };
            for (var i = 0; i < stopsData.data.length; i++) {

                var busStops = {
                    lat: parseFloat(stopsData.data[i].stop_lat),
                    lng: parseFloat(stopsData.data[i].stop_lon),
                }
                allBusStops.push(busStops);
                var stopDistance = distance(stopsData.data[i].stop_lat, stopsData.data[i].stop_lon, userPos[0].lat, userPos[0].lng);
                var closeStops = {
                    lat: parseFloat(stopsData.data[i].stop_lat),
                    lng: parseFloat(stopsData.data[i].stop_lon),
                    dis: stopDistance
                }
                if (stopDistance < 1.0) {
                    latlngDestination.push(closeStops);
                }
                if (stopDistance < 0.499582) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(stopsData.data[i].stop_lat, stopsData.data[i].stop_lon),
                        icon: icons.info.icon,
                        map: map
                    });
                    latlngDestination.sort(function (a, b) {
                        return a.dis - b.dis
                    })
                    var min = latlngDestination[0],
                        max = latlngDestination[latlngDestination.length - 1]
                }
                markers.push(marker);
            };
            function displayRoute() {
                var start = new google.maps.LatLng(userPos[0].lat, userPos[0].lng);
                var end = new google.maps.LatLng(latlngDestination[0].lat, latlngDestination[0].lng);
                var directionsDisplay = new google.maps.DirectionsRenderer(); // also, constructor can get "DirectionsRendererOptions" object
                directionsDisplay.setMap(map2); // map should be already initialized.
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.WALKING
                };
                var startLocation = null;
                var endLocation = null;
                var directionsService = new google.maps.DirectionsService();
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                        console.log(response);
                        var route = response.routes[0]
                        console.log(route.legs[0].start_address);
                        $("#section1B").prepend("Starting Address: " + route.legs[0].start_address + "<br>");
                        console.log(route.legs[0].distance.text);
                        $("#section1B").append("Distance: " + route.legs[0].distance.text + "<br>");
                        console.log(route.legs[0].duration.text);
                        $("#section1B").append("Duration: " + route.legs[0].duration.text + "<br>");
                        console.log(route.legs[0].end_address);
                        $("#section1B").append("Ending Address: " + route.legs[0].end_address + "<br>");
                        $("#section1B").append("<br>");
                        $("#section1B").append("Directions: " + "<br>");
                    }
                    var path = response.routes[0].overview_path;
                    var legs = response.routes[0].legs;
                    for (i = 0; i < legs.length; i++) {
                        if (i == 0) {
                        }
                        var steps = legs[i].steps;
                        for (j = 0; j < steps.length; j++) {
                            var nextSegment = steps[j].path;
                            section1B.innerHTML += "<li>" + steps[j].instructions;
                            var dist_dur = "";

                            if (dist_dur != "") {
                                section1B.innerHTML += "(" + dist_dur + ")<br /></li>";
                            } else {
                                section1B.innerHTML += "</li>";
                            }
                        }
                    }
                });

            }
            displayRoute(console.log());
            console.log(latlngDestination[0]);
            var lat1 = allBusStops[0].lat
            var lon1 = allBusStops[0].lng
        })
        var lat2 = userPos[0].lat
        var lon2 = userPos[0].lng
        function distance(lat1, lon1, lat2, lon2) {
            if ((lat1 == lat2) && (lon1 == lon2)) {
                return 0;
            } else {
                var radlat1 = Math.PI * lat1 / 180;
                var radlat2 = Math.PI * lat2 / 180;
                var theta = lon1 - lon2;
                var radtheta = Math.PI * theta / 180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180 / Math.PI;
                dist = dist * 60 * 1.1515;
                return dist;
            }
        }
    });
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            userPos.push(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
            var circle = new google.maps.Circle({
                center: pos,
                map: map,
                radius: 402, // in meters
                fillColor: '#FF6600',
                fillOpacity: 0.3,
                strokeColor: "#FFF",
                strokeWeight: 0 // No border
            });
            var filteredCircle = new google.maps.Circle({
                center: pos,
                map: map,
                radius: 804, // in meters
                // fillColor: '#33CAFF',
                fillOpacity: 0.0,
                strokeColor: "#33CAFF",
                strokeWeight: 6 // No border
            });

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

// This is our API key
var APIKey = "APIKEY";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Atlanta,Georgia&units=imperial&appid=" + APIKey;
// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);

        $(".temp").text("Temperature (F): " + response.main.temp);

        $(".condition").text("Current Conditions: " + response.weather[0].main);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response[0].main.temp);
    });
