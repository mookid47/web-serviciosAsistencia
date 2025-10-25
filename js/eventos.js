document.addEventListener("DOMContentLoaded", mainFunction);

function mainFunction() {
    console.log("Documento cargado y listo.");

    // Cargamos el mapa y le agregamos un evento de click (ejemplo para agregar eventos)
    let map = document.getElementById("map");
    map.addEventListener("click", function () {

        console.log("Mapa clickeado.");
    });

    // Agregamos evento de click a cada marcador leaflet
    for (let elemento of marcadores) {
        elemento.marcador.on("click", function () {
            alert(`Hiciste clic en: ${elemento.centro.nombre}`);
        });
    }
}
