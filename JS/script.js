window.addEventListener("scroll", function () {
    const homeSection = document.getElementById('home');
    let navbar = document.querySelector(".navbar");
    let navlinks = document.querySelectorAll(".nav-link");
    let logo = document.querySelector(".logo");
    let container = document.querySelector(".navbar .container");
    const endOfHome = homeSection.offsetTop + homeSection.offsetHeight;

    if (window.scrollY > endOfHome) {
        navbar.classList.add("scrolled");
        navlinks.forEach(link => {
            link.classList.add("scrolled-link");
        });
        logo.classList.add("scrolled-logo");
        if (container) {
            container.classList.add("scrolled-container");
        }
    } else {
        navbar.classList.remove("scrolled");
        navlinks.forEach(link => {
            link.classList.remove("scrolled-link");
        });
        if (container) {
            container.classList.remove("scrolled-container");
        }
    }
});
