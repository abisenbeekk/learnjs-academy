$(document).ready(function () {
    const $overlay = $("#popupOverlay");
    const $subscribeForm = $("#subscribeForm");

    if (!$overlay.length) return;

    function openPopup() {
        $overlay.addClass("active");
        $("#subName").trigger("focus");
    }

    function closePopup() {
        $overlay.removeClass("active");
    }

    function showPopupMessage(message) {
        const $toast = $("#toast");

        if (!$toast.length) {
            alert(message);
            return;
        }

        $toast
            .stop(true, true)
            .text(message)
            .fadeIn(200);

        setTimeout(function () {
            $toast.fadeOut(300);
        }, 3000);
    }

    $("#openPopup, #heroBtn").on("click", openPopup);

    $("#closePopup").on("click", closePopup);

    $overlay.on("click", function (event) {
        if (event.target === this) {
            closePopup();
        }
    });

    $(document).on("keydown", function (event) {
        if (event.key === "Escape" && $overlay.hasClass("active")) {
            closePopup();
        }
    });

    $subscribeForm.on("submit", function (event) {
        event.preventDefault();

        const name = $("#subName").val().trim();
        const email = $("#subEmail").val().trim();

        if (!name || !email) {
            showPopupMessage("Please enter your name and email.");
            return;
        }

        this.reset();
        closePopup();
        showPopupMessage("Thank you, " + name + "! You are subscribed.");
    });
});