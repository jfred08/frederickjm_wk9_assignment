var map;
function initMap() {
  var myLatLng = {lat: 41.3994607, lng: -73.4602667}

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 8
  });

  var image = 'images/hospital_icon.jpg'
  var hospitalMarker = new google.maps.Marker({
    position: {lat: 41.3994607, lng: -73.4602667},
    map: map,
    icon: image
  });
}
