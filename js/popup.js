document.addEventListener("DOMContentLoaded", function () {
    const openBtn       = document.getElementById("openPopup");
    const heroBtn       = document.getElementById("heroBtn");
    const closeBtn      = document.getElementById("closePopup");
    const overlay       = document.getElementById("popupOverlay");
    const subscribeForm = document.getElementById("subscribeForm");

    
    function openPopup() {
        overlay.classList.add("active");
    }

    function closePopup() {
        overlay.classList.remove("active");
    }

    openBtn.addEventListener("click", openPopup);

    heroBtn.addEventListener("click", openPopup);

    closeBtn.addEventListener("click", closePopup);

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            closePopup();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay.classList.contains("active")) {
            closePopup();
        }
    });

    subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name  = document.getElementById("subName").value.trim();
        const email = document.getElementById("subEmail").value.trim();

        if (name && email) {
            alert("🎉 Thank you, " + name + "! You are subscribed.");
            subscribeForm.reset();
            closePopup();
        }
    });
});