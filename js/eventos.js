document.addEventListener("DOMContentLoaded", mainFunction);

function mainFunction(){
    console.log("Documento cargado y listo.");

    // Cargamos el mapa y le agregamos un evento de click
    let map = document.getElementById("map");
    map.addEventListener("click", function(){
        
        console.log("Mapa clickeado.");
    });

    let marcador = document.getElementById("marcador");
    marcador.addEventListener("click", function(){
        
        alert("Marcador clickeado.");
    });
}


