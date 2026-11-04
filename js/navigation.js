$(document).ready(function () {
    const $navLinks = $("header nav a");
    const $sections = $(".page-section");

    function showSection(targetId) {
        if (targetId === "courses") {
            targetId = "courses-section";
        }

        const $targetSection = $("#" + targetId);

        if (!$targetSection.length) {
            return;
        }

        $sections.removeClass("active");
        $targetSection.addClass("active");

        $navLinks.each(function () {
            const linkTarget = $(this).attr("href").replace("#", "");
            const matchesTarget =
                linkTarget === targetId ||
                (linkTarget === "courses-section" && targetId === "courses");

            $(this).toggleClass("active-link", matchesTarget);
        });

        $("html, body").stop().animate({ scrollTop: 0 }, 400);
    }

    $navLinks.on("click", function (event) {
        event.preventDefault();

        const targetId = $(this).attr("href").replace("#", "");
        showSection(targetId);
    });

    $("#heroBtn").on("click", function () {
        showSection("register");
    });
});