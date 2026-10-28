document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(function (header) {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;

            document.querySelectorAll(".accordion-content").forEach(function (item) {
                if (item !== content) {
                    item.classList.remove("active");
                }
            });
            document.querySelectorAll(".accordion-header").forEach(function (h) {
                if (h !== header) {
                    h.classList.remove("active");
                }
            });

            content.classList.toggle("active");
            header.classList.toggle("active");
        });
    });
});