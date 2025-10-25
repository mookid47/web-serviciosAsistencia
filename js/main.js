document.addEventListener("DOMContentLoaded", mainFunction);
var map = crearMapa();
var marcadores = []; // Marcadores leaflet asociados a los centros de asistencia

function mainFunction() {
    console.log("Documento cargado y listo.");
    
    agregarMarcadores();
    agregarEventos();

}