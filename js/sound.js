$(document).ready(function () {
    let audioContext;

    function playClickSound() {
        try {
            const AudioContextClass =
                window.AudioContext || window.webkitAudioContext;

            if (!AudioContextClass) return;

            if (!audioContext) {
                audioContext = new AudioContextClass();
            }

            if (audioContext.state === "suspended") {
                audioContext.resume();
            }

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(
                0.01,
                audioContext.currentTime + 0.1
            );

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (error) {
            console.log("Audio is unavailable in this browser.");
        }
    }

    $(document).on("click", "button", function () {
        playClickSound();
    });
});