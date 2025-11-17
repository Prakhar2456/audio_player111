const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");

// Play / Pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸️ Pause";
    } else {
        audio.pause();
        playBtn.textContent = "▶️ Play";
    }
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;

    // Time formatting
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
});

// Change progress using slider
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value * audio.duration) / 100;
});

// Volume control
volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}
