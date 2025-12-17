const btnnavbar = document.getElementById("navbar-toggle")
const navitems = document.querySelector('.navbar-mobile')
btnnavbar.addEventListener('click', () => {
    navitems.classList.toggle('active');
});