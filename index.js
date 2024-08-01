document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = link.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
});
