function guardarDatos(event) {
  // Evita que el formulario se envíe al servidor
  event.preventDefault();

  // Crea un objeto vacío para almacenar los datos
  var datos = {};

  // Obtiene los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  var direccion = document.getElementById("direccion").value;
  var resumen = document.getElementById("resumen").value;
  var empresa1 = document.getElementById("empresa1").value;
  var puesto1 = document.getElementById("puesto2").value;
  var fechas1 = document.getElementById("fechas2").value;
  var descripcion1 = document.getElementById("descripcion2").value;
  var empresa2 = document.getElementById("empresa1").value;
  var puesto2 = document.getElementById("puesto2").value;
  var fechas2 = document.getElementById("fechas2").value;
  var descripcion2 = document.getElementById("descripcion2").value;
  var empresa3 = document.getElementById("empresa3").value;
  var puesto3 = document.getElementById("puesto3").value;
  var fechas3 = document.getElementById("fechas3").value;
  var descripcion3 = document.getElementById("descripcion3").value;
  var titulo2 = document.getElementById("titulo2").value;
  var institucion2 = document.getElementById("institucion2").value;
  var inicio2 = document.getElementById("inicio2").value;
  var fin2 = document.getElementById("fin2").value;
  var titulo3 = document.getElementById("titulo3").value;
  var institucion3 = document.getElementById("institucion3").value;
  var inicio3 = document.getElementById("inicio3").value;
  var fin3 = document.getElementById("fin3").value;
  var titulo4 = document.getElementById("titulo4").value;
  var institucion4 = document.getElementById("institucion4").value;
  var inicio4 = document.getElementById("inicio4").value;
  var fin4 = document.getElementById("fin4").value;
  var habilidades = document.getElementById("habilidades").value;
  var idiomas = document.getElementById("idiomas").value;
  var logros = document.getElementById("logros").value;
  var referencias = document.getElementById("referencias").value;

 // Asignar los valores al objeto datos
 datos

  // Asignar los valores al objeto datos
  datos.nombre = nombre;
  datos.apellido = apellido;
  datos.correo = correo;
  datos.telefono = telefono;
  datos.direccion = direccion;
  datos.resumen = resumen;
  datos.empresa1 = empresa1;
  datos.puesto1= puesto2; 
  datos.fechas1= fechas2; 
  datos.descripcion1= descripcion2; 
  datos.empresa2 = empresa2;
  datos.puesto2= puesto2; 
  datos.fechas2= fechas2; 
  datos.descripcion2= descripcion2; 
  datos.empresa3= empresa3; 
  datos.puesto3= puesto3; 
  datos.fechas3= fechas3; 
  datos.descripcion3= descripcion3;
  datos.titulo2 = titulo2;
  datos.institucion2 = institucion2;
  datos.inicio2 = inicio2;
  datos.fin2 = fin2;
  datos.titulo3 = titulo3;
  datos.institucion3 = institucion3;
  datos.inicio3 = inicio3;
  datos.fin3 = fin3;
  datos.titulo4 = titulo4;
  datos.institucion4 = institucion4;
  datos.inicio4 = inicio4;
  datos.fin4 = fin4;
  datos.habilidades = habilidades;
  datos.idiomas = idiomas;
  datos.logros = logros;
  datos.referencias = referencias;
  
 // Muestra el objeto datos en la consola (opcional)
 console.log(datos);
}
