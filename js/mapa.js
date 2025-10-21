var map = crearMapa();

//Se agrega un marcador y un evento al clickearlo
var marker = L.marker([-34.543032, -58.711943]).addTo(map);
marker.addEventListener('click', function() {
    alert("Centro de Asistencia")
});

function crearMapa() {
    var map = L.map('map').setView([-34.543032, -58.711943], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
}
