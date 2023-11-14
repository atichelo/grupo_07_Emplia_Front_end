document.getElementById('location-input').addEventListener('input', function(e) {
    let nombre = e.target.value;
    if (nombre.length > 0) {
        obtenerLocalidades(nombre);
    }
});

function obtenerLocalidades(nombre) {
    fetch(`http://localhost:5000/localidades/${nombre}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(localidades => {
            let datalist = document.getElementById('location-list');
            datalist.innerHTML = '';
            localidades.forEach(localidad => {
                let option = document.createElement('option');
                option.value = localidad;
                datalist.appendChild(option);
            });
        })
        .then(localidades => {
            console.log('Localidades devueltas por la API:', localidades);
        })
        .catch(e => {
            console.log('Hubo un problema con la petición Fetch:' + e.message);
        });
}