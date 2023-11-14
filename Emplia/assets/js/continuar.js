document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.continuarBtn').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'D:/Documents/grupo_07_Emplia/Emplia/pages/curriculum.html';
    });

    document.querySelector('.continuarBtn1').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../pages/ingresar.html';
    });
});
//comento para que guarde los cambios, tengo un prblema con el repo
