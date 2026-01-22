document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a')

    links.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            link.classList.add('active')
        }
    })

})