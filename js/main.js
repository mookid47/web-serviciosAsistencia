document.addEventListener("DOMContentLoaded", mainFunction);
var map;
var marcadores = []; 

function mainFunction() {
    console.log("Documento cargado y listo.");
    map = crearMapa();

    agregarMarcadores(map, centrosAsistencia, marcadores);
    popularListaCentros(centrosAsistencia);

    agregarEventos(map, marcadores);

    initFiltrosYBusqueda();
}

function popularListaCentros(centros) {
    const lista = document.getElementById('listaCentros');
    lista.innerHTML = '';
    for (let c of centros) {
        let li = document.createElement('li');
        li.textContent = c.nombre + ' — ' + (c.tipo || 'N/A');
        li.addEventListener('click', () => {
            centrarEnCentro(marcadores, c.nombre);
        });
        lista.appendChild(li);
    }
}

function initFiltrosYBusqueda() {
    const search = document.getElementById('searchCentro');
    search.addEventListener('input', function () {
        const q = this.value.toLowerCase();
        const filtered = centrosAsistencia.filter(c => c.nombre.toLowerCase().includes(q) || (c.direccion||'').toLowerCase().includes(q));
        popularListaCentros(filtered);
        agregarMarcadores(map, filtered, marcadores);
        agregarEventos(map, marcadores);
    });

    const filters = document.querySelectorAll('.filter');
    filters.forEach(f => f.addEventListener('click', () => {
        const tipo = f.getAttribute('data-filter');
        let filtered = centrosAsistencia;
        if (tipo !== 'all') filtered = centrosAsistencia.filter(c => c.tipo === tipo);
        popularListaCentros(filtered);
        agregarMarcadores(map, filtered, marcadores);
        agregarEventos(map, marcadores);
    }));
}