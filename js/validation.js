document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("regForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name     = document.getElementById("username").value.trim();
        const email    = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirm  = document.getElementById("confirmPassword").value;

        const nameError     = document.getElementById("nameError");
        const emailError    = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const confirmError  = document.getElementById("confirmError");
        const successMsg    = document.getElementById("successMsg");

        nameError.textContent     = "";
        emailError.textContent    = "";
        passwordError.textContent = "";
        confirmError.textContent  = "";
        successMsg.textContent    = "";

        document.querySelectorAll(".form-group input").forEach(inp => {
            inp.classList.remove("input-error");
        });

        let isValid = true;

        if (name === "") {
            nameError.textContent = "⚠ Name is required.";
            document.getElementById("username").classList.add("input-error");
            isValid = false;
        } else if (name.length < 2) {
            nameError.textContent = "⚠ Name must be at least 2 characters.";
            document.getElementById("username").classList.add("input-error");
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            emailError.textContent = "⚠ Email is required.";
            document.getElementById("email").classList.add("input-error");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "⚠ Please enter a valid email (example@mail.com).";
            document.getElementById("email").classList.add("input-error");
            isValid = false;
        }

        if (password === "") {
            passwordError.textContent = "⚠ Password is required.";
            document.getElementById("password").classList.add("input-error");
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = "⚠ Password must be at least 8 characters.";
            document.getElementById("password").classList.add("input-error");
            isValid = false;
        }

        if (confirm === "") {
            confirmError.textContent = "⚠ Please confirm your password.";
            document.getElementById("confirmPassword").classList.add("input-error");
            isValid = false;
        } else if (confirm !== password) {
            confirmError.textContent = "⚠ Passwords do not match.";
            document.getElementById("confirmPassword").classList.add("input-error");
            isValid = false;
        }

        if (isValid) {
            successMsg.textContent = "✅ Registration successful! Welcome to LearnJS Academy!";
            form.reset();
        }
    });
});