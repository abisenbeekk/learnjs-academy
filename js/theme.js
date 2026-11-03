$(document).ready(function () {
    const $themeButton = $("#themeToggleBtn");

    if (!$themeButton.length) {
        return;
    }

    function applyTheme(theme) {
        const isDark = theme === "dark";

        // background.js қойған фон түсін тазалап, режимді қосу
        $("body")
            .css("background-color", "")
            .toggleClass("dark-theme", isDark);

        $themeButton
            .text(isDark ? "☀️ Light Mode" : "🌙 Dark Mode")
            .attr("aria-pressed", String(isDark));
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    $themeButton.on("click", function () {
        const isDark = $("body").hasClass("dark-theme");
        const newTheme = isDark ? "light" : "dark";

        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
});