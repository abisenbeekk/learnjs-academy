$(document).ready(function () {
    // 0. jQuery ажиллаж байгааг шалгах
    console.log("jQuery is ready!");

    // 1–2. Жедел іздеу және автотолтыру
    const suggestions = [
        "JavaScript Fundamentals",
        "Advanced DOM Manipulation",
        "Web Audio API Essentials",
        "React & Single Page Applications"
    ];

    $("#searchInput").on("input", function () {
        const value = $(this).val().trim().toLowerCase();

        // Іздеу сұрауына сәйкес элементтерді көрсету
        $(".search-item").each(function () {
            const itemText = $(this).text().toLowerCase();
            $(this).toggle(itemText.includes(value));
        });

        // Сәйкес ұсыныстарды көрсету
        const matches = value
            ? suggestions.filter(function (item) {
                  return item.toLowerCase().includes(value);
              })
            : [];

        const $list = $("#suggestionsList").empty();

        matches.forEach(function (item) {
            $("<li>")
                .addClass("s-item")
                .text(item)
                .appendTo($list);
        });

        $list.toggle(matches.length > 0);
    });

    // Ұсынысты таңдағанда оны іздеу өрісіне жазу
    $(document).on("click", ".s-item", function () {
        $("#searchInput").val($(this).text()).trigger("input");
        $("#suggestionsList").hide();
    });

    // 3. FAQ ішіндегі ізделген сөздерді белгілеу
    $("#highlightSearch").on("input", function () {
        const query = $(this).val().trim();

        $(".highlightable").each(function () {
            const $item = $(this);

            if ($item.data("originalText") === undefined) {
                $item.data("originalText", $item.text());
            }

            const originalText = $item.data("originalText");

            if (!query) {
                $item.text(originalText);
                return;
            }

            const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp("(" + safeQuery + ")", "gi");

            const safeText = originalText.replace(/[&<>"']/g, function (character) {
                return {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                }[character];
            });

            $item.html(safeText.replace(regex, "<mark>$1</mark>"));
        });
    });

    // 4. Бетті айналдыру прогресс жолағы
    function updateScrollProgress() {
        const scrollTop = $(window).scrollTop();
        const maxScroll = $(document).height() - $(window).height();
        const percentage = maxScroll > 0
            ? (scrollTop / maxScroll) * 100
            : 0;

        $("#scroll-progress").css("width", percentage + "%");
    }

    // 5. Көрінген кезде санды анимациялап санау
    let counterStarted = false;

    function animateCounter() {
        const $counter = $(".counter:visible").first();

        if (!$counter.length || counterStarted) {
            return;
        }

        const counterTop = $counter.offset().top;
        const screenBottom = $(window).scrollTop() + $(window).height();

        if (screenBottom >= counterTop) {
            counterStarted = true;

            $(".counter:visible").each(function () {
                const $number = $(this);
                const target = parseInt($number.text(), 10);

                if (Number.isNaN(target)) {
                    return;
                }

                $({ count: 0 }).animate(
                    { count: target },
                    {
                        duration: 1800,
                        easing: "swing",
                        step: function () {
                            $number.text(Math.floor(this.count).toLocaleString());
                        },
                        complete: function () {
                            $number.text(target.toLocaleString());
                        }
                    }
                );
            });
        }
    }

    // Toast хабарламасын көрсету
    let toastTimer;

    function showToast(message) {
        const $toast = $("#toast");

        if (!$toast.length) {
            return;
        }

        clearTimeout(toastTimer);

        $toast
            .stop(true, true)
            .text(message)
            .fadeIn(200);

        toastTimer = setTimeout(function () {
            $toast.fadeOut(300);
        }, 3000);
    }

    // 6. Форма жіберілгенде жүктеу индикаторын көрсету
    $("#submitForm").on("submit", function (event) {
        event.preventDefault();

        const form = this;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const $button = $("#submitBtn");
        const originalText = $button.text().trim() || "Submit";

        $button
            .prop("disabled", true)
            .html('<span class="spinner"></span>Please wait...');

        setTimeout(function () {
            form.reset();
            $button.prop("disabled", false).text(originalText);
            showToast("Form submitted successfully!");
        }, 1500);
    });

    // 7. Уведомлениены көрсету батырмасы
    $("#toastBtn").on("click", function () {
        showToast("Action confirmed!");
    });

    // 8. Мәтінді алмасу буферіне көшіру
    $("#copyBtn").on("click", async function () {
        const $copyText = $("#copyText");

        const text = $copyText.is("input, textarea")
            ? $copyText.val()
            : $copyText.text();

        if (!text) {
            showToast("There is no text to copy.");
            return;
        }

        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            const $temporaryField = $("<textarea>")
                .val(text)
                .appendTo("body");

            $temporaryField[0].select();
            document.execCommand("copy");
            $temporaryField.remove();
        }

        const $button = $(this);
        $button.text("✓ Copied!");
        showToast("Copied to clipboard!");

        setTimeout(function () {
            $button.text("Copy");
        }, 2000);
    });

    // 9. Load images only when they are visible or close to the viewport
    function loadVisibleImages() {
        const screenBottom = $(window).scrollTop() + $(window).height();

        $("img[data-src]:visible").each(function () {
            const $image = $(this);
            const imageTop = $image.offset().top;

            if (imageTop < screenBottom + 100) {
                $image.attr("src", $image.attr("data-src"));
                $image.removeAttr("data-src");
            }
        });
    }

    // Бетті айналдырғанда функцияларды жаңарту
    $(window).on("scroll", function () {
        updateScrollProgress();
        animateCounter();
        loadVisibleImages();
    });

    // Recheck counters and images after their sections are opened
    $(document).on(
        "click",
        'header nav a[href="#jquery-features"], header nav a[href="#lazy-gallery"]',
        function () {
            setTimeout(function () {
                animateCounter();
                loadVisibleImages();
                updateScrollProgress();
            }, 50);
        }
    );

    // Бет алғаш ашылғанда тексеру
    updateScrollProgress();
    animateCounter();
    loadVisibleImages();
});