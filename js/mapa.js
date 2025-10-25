function crearMapa() {
    var map = L.map('map').setView([-34.543032, -58.711943], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return map;
}

function agregarMarcadores(map, centros, marcadores) {
    // Limpia marcadores previos
    if (marcadores && marcadores.length) {
        for (let m of marcadores) {
            try { map.removeLayer(m.marcador); } catch (e) { }
        }
        marcadores.length = 0;
    }

    for (let centro of centros) {
        let lat = centro.coordenadas.latitud;
        let lon = centro.coordenadas.longitud;
        let icon = L.icon({
            iconUrl: centro.tipo === 'móvil' ? 'img/marker-blue.png' : 'img/marker-green.png',
            iconSize: [28, 36],
            iconAnchor: [14, 36]
        });

        let marcador = L.marker([lat, lon]/*, { icon: icon }*/).addTo(map);
        let popupHtml = `<strong>${centro.nombre}</strong><br>${centro.direccion || ''}<br><small>Horario: ${centro.horario || 'N/A'}</small>`;
        marcador.bindPopup(popupHtml);

        marcadores.push({ marcador: marcador, centro: centro });
    }
}

function centrarEnCentro(marcadores, centroNombre) {
    for (let m of marcadores) {
        if (m.centro.nombre === centroNombre) {
            m.marcador.openPopup();
            m.marcador._map.setView(m.marcador.getLatLng(), 15, { animate: true });
            return;
        }
    }
}

