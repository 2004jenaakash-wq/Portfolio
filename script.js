document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile Navigation Menu
    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.textContent = isOpen ? "×" : "☰";

        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";

            });

        });

    }


    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        ".reveal, .skill-card, .practice-card, .certificate-card"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // 3. Automatically Update Copyright Year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // 4. Active Navigation Highlight
    const sections = document.querySelectorAll("main section[id]");

    const navigationLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        navigationLinks.forEach(function (link) {

                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === "#" + entry.target.id
                            );

                        });

                    }

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });

    }

});