// Obtener referencias a los elementos del DOM
const jobTitleInput = document.querySelector('.job-search-form input[type="text"]:nth-child(1)');
const locationInput = document.querySelector('.job-search-form input[type="text"]:nth-child(2)');
const searchBtn = document.querySelector('.job-search-form button');
const jobResultsList = document.getElementById('jobResults');

// Evento de clic en el botón de búsqueda
searchBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  const jobTitle = jobTitleInput.value;
  const location = locationInput.value;

  // Lógica de búsqueda de empleo
  // implementar la lógica para realizar una solicitud a una API de empleo y obtener los resultados

  // Definir los empleos
  const job1 = { title: 'Desarrollador web', company: 'Empresa A', location: 'Buenos Aires' };
  const job2 = { title: 'Diseñador gráfico', company: 'Empresa B', location: 'Córdoba' };
  const job3 = { title: 'Analista de datos', company: 'Empresa C', location: 'Rosario' };
  const job4 = { title: 'Marketing digital', company: 'Empresa D', location: 'Mendoza' };
  const job5 = { title: 'Gerente de ventas', company: 'Empresa E', location: 'Salta' };

  // Obtener el elemento del DOM con el id jobResults
  const jobResultsElement = document.getElementById('jobResults');

  // Crear elementos de lista para los empleos y agregarlos al elemento de lista de resultados
  const job1Item = document.createElement('li');
  job1Item.textContent = `${job1.title} - ${job1.company} (${job1.location})`;
  jobResultsElement.appendChild(job1Item);

  const job2Item = document.createElement('li');
  job2Item.textContent = `${job2.title} - ${job2.company} (${job2.location})`;
  jobResultsElement.appendChild(job2Item);

  const job3Item = document.createElement('li');
  job3Item.textContent = `${job3.title} - ${job3.company} (${job3.location})`;
  jobResultsElement.appendChild(job3Item);

  const job4Item = document.createElement('li');
  job4Item.textContent = `${job4.title} - ${job4.company} (${job4.location})`;
  jobResultsElement.appendChild(job4Item);

  const job5Item = document.createElement('li');
  job5Item.textContent = `${job5.title} - ${job5.company} (${job5.location})`;
  jobResultsElement.appendChild(job5Item);
});
//comento para que guarde los cambios, tengo un prblema con el repo