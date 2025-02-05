document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
