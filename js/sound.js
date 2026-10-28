document.addEventListener("DOMContentLoaded", function () {
    function playClickSound() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); 
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.1); 
        } catch (e) {
            console.log("AudioContext blocked or not supported");
        }
    }

    document.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
            playClickSound();
        }
    });
});