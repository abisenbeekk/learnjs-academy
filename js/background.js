$(document).ready(function () {
    const $colorBtn = $("#colorBtn");

    if (!$colorBtn.length) {
        return;
    }

    const colors = [
        "#d9dce5", // Muted grey
        "#e0c2c2", // Dusty pink
        "#c5d8ca", // Muted green
        "#bfd2e2", // Muted blue
        "#e2d5b5", // Beige
        "#d1c1d9", // Lavender
        "#b8d5d6", // Teal
        "#c7ccd8", // steel grey
        "#d3b5b5", // muted rose
        "#bcd1c3", // Sage green
        "#b6cbe0", // Soft blue
        "#d4c59d", // Warm beige
        "#c5b4d1", // Muted lavender
        "#afd0d2", // Muted teal
        "#d2aeba"  // Dusty pink
    ];

    let colorIndex = -1;

    $colorBtn.on("click", function () {
        colorIndex = (colorIndex + 1) % colors.length;
        $("body").css("background-color", colors[colorIndex]);
    });
});