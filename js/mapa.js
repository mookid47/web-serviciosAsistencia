var map = crearMapa();
let marcadores = []; // Tengo que ver si va

agregarMarcadores();

// Funciones

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
            .on('click', () => {
                // Mostrar información del centro al hacer clic (temporalmente con alert)
                alert(
                    `📍 ${centro.nombre}\n` +
                    `🏠 Dirección: ${centro.direccion}\n` +
                    `🕐 Horario: ${centro.horario}`
                );
            });
        
        // Guardar el marcador junto con el centro en el arreglo
        marcadores.push(centro,marcador); // Tengo que ver si va
    }
}

