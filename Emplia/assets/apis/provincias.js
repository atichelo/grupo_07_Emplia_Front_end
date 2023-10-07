var debounceTimer;

function debouncedCargarCiudades() {
    var previousTimer = debounceTimer;
    debounceTimer = setTimeout(cargarCiudades, 300);
    if (previousTimer) {
        clearTimeout(previousTimer);
    }
}

function cargarProvincias() {
    var provinciasList = document.getElementById("provincias-list");
    fetch("https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre")
        .then(response => response.json())
        .then(data => {
            if (data && data.provincias) {
                data.provincias.forEach(function (provincia) {
                    var listItem = document.createElement("li");
                    listItem.textContent = provincia.nombre;
                    provinciasList.appendChild(listItem);
                });
            }
        })
        .catch(error => console.error("Error al cargar provincias: ", error));
}

function cargarCiudades() {
    // Agrega aquí la lógica para cargar las ciudades correspondientes a la provincia seleccionada
}

document.getElementById("provincia-select").addEventListener("change", debouncedCargarCiudades);

cargarProvincias();