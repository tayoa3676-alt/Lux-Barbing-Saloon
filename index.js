document.addEventListener("DOMContentLoaded", function () {

    // HAMBURGER MENU

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    function closeMenu() {
        if (!menuToggle || !mainNav) return;

        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        // Close menu after clicking a link

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        // Close menu when clicking outside

        document.addEventListener("click", function (event) {

            if (
                mainNav.classList.contains("open") &&
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Close menu with Escape key

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }
        });

        // Close menu when returning to desktop layout

        window.addEventListener("resize", function () {

            if (window.innerWidth > 900) {
                closeMenu();
            }
        });
    }


    // SCROLL REVEAL ANIMATION

    const sections = document.querySelectorAll(
        "body > section, body > footer"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        sections.forEach(function (section) {

            section.classList.add("scroll-reveal");

            observer.observe(section);
        });

    } else {

        sections.forEach(function (section) {
            section.classList.add("visible");
        });
    }

});