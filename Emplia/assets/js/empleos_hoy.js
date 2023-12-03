fetch('http://localhost:5000/empleoshoy')
    .then(response => response.json())
    .then(data => {
        const selectArea = document.getElementById('area');
        data.areas.forEach(area => {
            const option = document.createElement('option');
            option.value = area;
            option.text = area;
            selectArea.appendChild(option);
        });

        const selectModalidad = document.getElementById('modalidad-de-trabajo');
        data.modalidades.forEach(modalidad => {
            const option = document.createElement('option');
            option.value = modalidad;
            option.text = modalidad;
            selectModalidad.appendChild(option);
        });

        const selectFechaPublicacion = document.getElementById('fecha-de-publicacion');
        data.fechas_publicacion.forEach(fecha_publicacion => {
            const option = document.createElement('option');
            option.value = fecha_publicacion;
            option.text = fecha_publicacion;
            selectFechaPublicacion.appendChild(option);
        });
        
    });
