var toggle_menu = document.querySelector('.responsive-menu');
var menu = document.querySelector('.navbar');
toggle_menu.onclick = function () {
    toggle_menu.classList.toggle('focus');
    menu.classList.toggle('respon');
}