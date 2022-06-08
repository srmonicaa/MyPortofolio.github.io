const nav = document.getElementById ('nav');

window.addEventListener('scroll' , function() {
    scrollposition = windo.scrollY;
    if ( scrollposition >=60) {
        nav.classList.add('nav-dark')

    }
})
