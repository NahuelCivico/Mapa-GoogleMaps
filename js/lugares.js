lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
    var direction = document.getElementById('direccion');
    var since = document.getElementById('desde');
    var until = document.getElementById('hasta');
    var add = document.getElementById('agregar');

    autoCompleteDirection = new google.maps.places.Autocomplete(direction);
    autoCompleteSince = new google.maps.places.Autocomplete(since);
    autoCompleteUntil = new google.maps.places.Autocomplete(until);
    autoCompleteAdd = new google.maps.places.Autocomplete(add);

    function limite(autocomplete) {
      var circle = new google.maps.Circle({
        radius: 20000
      });
      autocomplete.setBounds(circle.getBounds());
    }

    limite(autoCompleteDirection);
    limite(autoCompleteSince);
    limite(autoCompleteUntil);
    limite(autoCompleteAdd);
  }

  // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
    var tipoDeLugar = document.getElementById('tipoDeLugar').value;
    var radio = document.getElementById('radio').value;
    var buscarCerca = {
      location: posicion,
      radius: radio,
      type: [tipoDeLugar]
    };
    servicioLugares.nearbySearch(buscarCerca, marcadorModulo.marcarLugares)
  }
  return {
    inicializar,
    buscarCerca
  }
})()
