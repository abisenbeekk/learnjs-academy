$(document).ready(function () {
    $(document).on("click", ".accordion-header", function () {
        const $header = $(this);
        const $content = $header.next(".accordion-content");
        const isAlreadyOpen = $header.hasClass("active");

        // Басқа ашық жауаптарды жабу
        $(".accordion-header").not($header)
            .removeClass("active")
            .attr("aria-expanded", "false");

        $(".accordion-content").not($content)
            .removeClass("active");

        // Таңдалған жауапты ашу немесе жабу
        $header
            .toggleClass("active", !isAlreadyOpen)
            .attr("aria-expanded", String(!isAlreadyOpen));

        $content.toggleClass("active", !isAlreadyOpen);
    });
});