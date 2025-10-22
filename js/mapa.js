var map = crearMapa();
var centros = [];

fetch('centrosDeAsistencia.json')
    .then(response => response.json()) // convierte la respuesta a formato JSON
    .then(data => {
        centros = data;
        agregarMarcador();
    })
    .catch(error => console.error('Error al leer el JSON:', error));


function crearMapa() {
    var map = L.map('map').setView([-34.543032, -58.711943], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
}

function agregarMarcador() {
    for (let centro of centros) {
        let marcador = L.marker([centro.coordenadas.latitud, centro.coordenadas.longitud]).addTo(map);;
    }
}

