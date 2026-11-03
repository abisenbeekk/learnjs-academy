$(document).ready(function () {
    const $readMoreBtn = $("#readMoreBtn");
    const $moreText = $("#moreText");

    if ($readMoreBtn.length && $moreText.length) {
        $readMoreBtn.on("click", function () {
            $moreText.stop(true, true).slideToggle(250, function () {
                const isVisible = $moreText.is(":visible");

                $readMoreBtn.text(isVisible ? "Read Less" : "Read More");
            });
        });
    }

    const $factBtn = $("#factBtn");
    const $factBox = $("#factBox");

    const jsFacts = [
        "JavaScript was created by Brendan Eich in 1995 in just 10 days!",
        "Initially, JavaScript was named LiveScript before being renamed.",
        "Node.js allows developers to run JavaScript on the server side.",
        "Arrays in JavaScript are a special type of objects.",
        "JavaScript is one of the core technologies of the World Wide Web."
    ];

    if ($factBtn.length && $factBox.length) {
        $factBtn.on("click", function () {
            const randomIndex = Math.floor(Math.random() * jsFacts.length);

            $factBox
                .stop(true, true)
                .fadeOut(120, function () {
                    $factBox
                        .text(jsFacts[randomIndex])
                        .fadeIn(200);
                });
        });
    }
});