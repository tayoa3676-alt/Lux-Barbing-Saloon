document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(
        "body > section, body > footer"
    );

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
});