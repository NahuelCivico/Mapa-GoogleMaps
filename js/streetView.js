streetViewModulo = (function() {
  var paronama // 'Visor' de StreetView

  function inicializar() {
    google.maps.event.addListener(mapa, "click", function(event) {
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      paronama = new google.maps.LatLng(lat, lng);
      showPanorama(paronama);
    });
  };

  // Actualiza la ubicación del Panorama
  function fijarStreetView(ubicacion) {
    var mapCenter = mapa.getCenter();
    showPanorama(mapCenter);
    mapa.setStreetView(paronama);
  };

  function showPanorama(posicion) {
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: posicion,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  };

  function createPanorama(coordenadas) {
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: coordenadas,
        pov: {
          heading: 34,
          pitch: 10
        }
      }
    )
  };

  return {
    inicializar,
    fijarStreetView
  }
})()
