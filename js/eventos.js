function agregarEventos(map, marcadores) {
    // Evento al hacer click en el contenedor del mapa (ejemplo)
    let mapDiv = document.getElementById("map");
    mapDiv.addEventListener("click", function () {
        console.log("Mapa clickeado.");
    });

    // Agregamos evento de click a cada marcador leaflet
    for (let elemento of marcadores) {
        elemento.marcador.off && elemento.marcador.off("click");
        elemento.marcador.on("click", function () {
            // Mostrar información en sidebar o popup ya configurado
            console.log(`Hiciste clic en: ${elemento.centro.nombre}`);
        });
    }
}
