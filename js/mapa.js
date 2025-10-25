function crearMapa() {
    var map = L.map('map').setView([-34.543032, -58.711943], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
}

function agregarMarcadores() {
    for (let centro of centrosAsistencia) {
        let marcador = L.marker([centro.coordenadas.latitud, centro.coordenadas.longitud])
            .addTo(map)
        // Guardamos los marcadores y su centro asociado.
        marcadores.push({
            marcador: marcador,
            centro: centro
        });
    }
}

