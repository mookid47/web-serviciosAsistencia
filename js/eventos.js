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
            // Buscar la card correspondiente en la grilla por el nombre del centro
            const nombreCentro = elemento.centro.nombre;
            const cards = document.querySelectorAll('.card-content h2');
            for (let h2 of cards) {
                if (h2.textContent.trim().toLowerCase() === nombreCentro.trim().toLowerCase()) {
                    const card = h2.closest('.card');
                    if (card) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.classList.add('resaltado-centro');
                        setTimeout(() => card.classList.remove('resaltado-centro'), 1800);
                    }
                    break;
                }
            }
        });
    }
}
