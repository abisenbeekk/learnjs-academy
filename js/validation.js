$(document).ready(function () {
    const $form = $("#regForm");

    $form.on("submit", function (event) {
        event.preventDefault();

        const form = this;
        const name = $("#username").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        const $nameError = $("#nameError");
        const $emailError = $("#emailError");
        const $passwordError = $("#passwordError");
        const $confirmError = $("#confirmError");
        const $successMsg = $("#successMsg");

        const $nameInput = $("#username");
        const $emailInput = $("#email");
        const $passwordInput = $("#password");
        const $confirmInput = $("#confirmPassword");

        $nameError.text("");
        $emailError.text("");
        $passwordError.text("");
        $confirmError.text("");
        $successMsg.text("");

        $(".form-group input").removeClass("input-error");

        let isValid = true;

        if (name === "") {
            $nameError.text("⚠ Name is required.");
            $nameInput.addClass("input-error");
            isValid = false;
        } else if (name.length < 2) {
            $nameError.text("⚠ Name must be at least 2 characters.");
            $nameInput.addClass("input-error");
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $emailError.text("⚠ Email is required.");
            $emailInput.addClass("input-error");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $emailError.text("⚠ Please enter a valid email (example@mail.com).");
            $emailInput.addClass("input-error");
            isValid = false;
        }

        if (password === "") {
            $passwordError.text("⚠ Password is required.");
            $passwordInput.addClass("input-error");
            isValid = false;
        } else if (password.length < 8) {
            $passwordError.text("⚠ Password must be at least 8 characters.");
            $passwordInput.addClass("input-error");
            isValid = false;
        }

        if (confirmPassword === "") {
            $confirmError.text("⚠ Please confirm your password.");
            $confirmInput.addClass("input-error");
            isValid = false;
        } else if (confirmPassword !== password) {
            $confirmError.text("⚠ Passwords do not match.");
            $confirmInput.addClass("input-error");
            isValid = false;
        }

        if (isValid) {
            const $button = $form.find('button[type="submit"]');
            const originalButtonText = $button.text();

            $button
                .prop("disabled", true)
                .html('<span class="spinner"></span>Please wait...');

            setTimeout(function () {
                form.reset();

                $button
                    .prop("disabled", false)
                    .text(originalButtonText);

                $successMsg.text(
                    "✅ Registration successful! Welcome to LearnJS Academy!"
                );

                $("#toast")
                    .stop(true, true)
                    .text("Form submitted successfully!")
                    .fadeIn(200);

                setTimeout(function () {
                    $("#toast").fadeOut(300);
                }, 3000);
            }, 1500);
        }
    });
});