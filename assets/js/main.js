var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/
  //GetAllBus
  //GetBusByRoute
  
  var queryURL = "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });


    
  function MartaApi (apiKey) {
    if (!(this instanceof MartaApi)) {
      return new MartaApi(apiKey)
    }
    this.apiKey = apiKey
  }
  MartaApi.prototype.getAllRealtimeBusArrivals = function (callback) {
    return handleCallbacksOrPromises(callback, function (resolve, reject) {
      request(REALTIME_BUS_ALL_ENDPOINT, function (error, response, body) {
        if (error) {
          return reject(error)
        }
        var arrivals = JSON.parse(body).map(convertBusArrival)
        resolve(arrivals)
      })
    })
  }
  
  MartaApi.prototype.getRealtimeBusArrivalsByRoute = function (route, callback) {
    return handleCallbacksOrPromises(callback, function (resolve, reject) {
      if (route == null) {
        return reject(new Error('No route supplied'))
      }
      request(REALTIME_BUS_ROUTE_ENDPOINT + '/' + route, function (error, response, body) {
        if (error) {
          return reject(error)
        }
        var arrivals = JSON.parse(body).map(convertBusArrival)
        resolve(arrivals)
      })
    })
  }






  