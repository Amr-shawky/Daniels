window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let navlinks = document.querySelectorAll(".nav-link");
    
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        navlinks.forEach(link => {
            link.classList.add("scrolled-link");
        });
    } else {
        navbar.classList.remove("scrolled");
        navlinks.forEach(link => {
            link.classList.remove("scrolled-link");
        });
    }
});
