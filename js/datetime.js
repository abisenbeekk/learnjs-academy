$(document).ready(function () {
    const $dateTimeBox = $("#datetimeBox");

    if (!$dateTimeBox.length) {
        return;
    }

    function updateDateTime() {
        const now = new Date();

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        };

        $dateTimeBox.text(
            "🕒 " + now.toLocaleString("en-US", options)
        );
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});