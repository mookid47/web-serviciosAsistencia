// Manejo simple de incidentes: guardar en localStorage y presentar en el panel del coordinador

function initIncidentModal() {
    const modal = document.getElementById('incidentModal');
    const close = document.getElementById('closeModal');
    const cancel = document.getElementById('cancelModal');
    const form = document.getElementById('incidentForm');

    if (close) close.addEventListener('click', () => { modal.setAttribute('aria-hidden', 'true'); });
    if (cancel) cancel.addEventListener('click', () => { modal.setAttribute('aria-hidden', 'true'); });

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const lugar = document.getElementById('incLugar').value;
            const fecha = document.getElementById('incFecha').value;
            const detalle = document.getElementById('incDetalle').value;
            const nombre = document.getElementById('incNombre').value;
            const email = document.getElementById('incEmail').value;

            const incidente = {
                id: 'inc_' + Date.now(),
                lugar, fecha, detalle, nombre, email,
                estado: 'pendiente',
                creado: new Date().toISOString()
            };

            guardarIncidente(incidente);
            modal.setAttribute('aria-hidden', 'true');
            form.reset();
            alert('Gracias, tu reporte fue enviado.');
            renderIncidentesPanel();
        });
    }

    renderIncidentesPanel();
}

function guardarIncidente(inc) {
    const arr = JSON.parse(localStorage.getItem('incidentes') || '[]');
    arr.push(inc);
    localStorage.setItem('incidentes', JSON.stringify(arr));
}

function obtenerIncidentes() {
    return JSON.parse(localStorage.getItem('incidentes') || '[]');
}

function renderIncidentesPanel() {
    const cont = document.getElementById('incidentesList');
    const items = obtenerIncidentes();
    if (!cont) return;
    if (!items.length) { cont.innerHTML = 'No hay incidentes cargados.'; return; }

    cont.innerHTML = '';
    for (let it of items) {
        const div = document.createElement('div');
        div.className = 'incident-row';
        div.innerHTML = `<div><strong>${it.lugar}</strong><br><small>${it.fecha} — ${it.estado}</small></div>`;

        const actions = document.createElement('div');
        const resolverBtn = document.createElement('button');
        resolverBtn.className = 'btn';
        resolverBtn.textContent = 'Resolver';
        resolverBtn.addEventListener('click', () => { resolverIncidente(it.id); });

        const descartarBtn = document.createElement('button');
        descartarBtn.className = 'btn';
        descartarBtn.textContent = 'Descartar';
        descartarBtn.addEventListener('click', () => { descartarIncidente(it.id); });

        actions.appendChild(resolverBtn);
        actions.appendChild(descartarBtn);
        div.appendChild(actions);
        cont.appendChild(div);
    }
}

function resolverIncidente(id) {
    const arr = obtenerIncidentes();
    const idx = arr.findIndex(i => i.id === id);
    if (idx === -1) return alert('Incidente no encontrado');

    const resolution = prompt('Ingrese detalle de resolución que se enviará por mail (simulado):');
    if (resolution === null) return; // cancelado

    arr[idx].estado = 'resuelto';
    arr[idx].resolucion = resolution;
    arr[idx].resueltoEn = new Date().toISOString();
    localStorage.setItem('incidentes', JSON.stringify(arr));
    renderIncidentesPanel();
    alert('Se registró la resolución (simulado envío de mail).');
}

function descartarIncidente(id) {
    let arr = obtenerIncidentes();
    arr = arr.filter(i => i.id !== id);
    localStorage.setItem('incidentes', JSON.stringify(arr));
    renderIncidentesPanel();
}

// ...existing code...
