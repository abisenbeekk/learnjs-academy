document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("datetimeBox");

    function updateDateTime() {
        const now = new Date();

        const options = {
            year:   "numeric",
            month:  "long",
            day:    "numeric",
            hour:   "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        };

        box.textContent = "🕒 " + now.toLocaleString("en-US", options);
    }

    updateDateTime();

    setInterval(updateDateTime, 1000);
});