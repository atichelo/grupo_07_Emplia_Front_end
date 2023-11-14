var hamburger = document.querySelector('.hamburger');
var menuDesplegable = document.querySelector('.menu-desplegable');

hamburger.addEventListener('click', function() {
    if (menuDesplegable.style.display === 'none') {
        menuDesplegable.style.display = 'block';
    } else {
        menuDesplegable.style.display = 'none';
    }
});
//comento para que guarde los cambios, tengo un prblema con el repo