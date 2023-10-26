var temporizadorDebounce;

function cargarCiudadesDebounced() {
    var temporizadorAnterior = temporizadorDebounce;
    temporizadorDebounce = setTimeout(cargarCiudades, 300);
    if (temporizadorAnterior) {
        clearTimeout(temporizadorAnterior);
    }
}

function cargarProvincias() {
    var selectProvincia = document.getElementById("location-select");
    const apiUrl = "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";
    fetch(apiUrl)
        .then(respuesta => respuesta.json())
        .then(data => {
            if (data && data.provincias) {
                data.provincias.forEach(function (provincia) {
                    var opcion = document.createElement("option");
                    opcion.value = provincia.id;
                    opcion.textContent = provincia.nombre;
                    selectProvincia.appendChild(opcion);
                });
            }
        })
        .catch(error => console.error("Error al cargar provincias: ", error));
}

document.getElementById("location-select").addEventListener("change", cargarCiudadesDebounced);
cargarProvincias();
