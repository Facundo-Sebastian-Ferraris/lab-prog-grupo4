document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    const padButton = document.querySelector(`.pad-button[data-key="${key}"]`);
    
    if (padButton) {
        padButton.classList.add('active');
        // Reproducir sonido .wav
        const sound = new Audio('../sounds/sonido.wav');
        sound.play();
    }
});

document.addEventListener('keyup', function(event) {
    const key = event.key.toUpperCase();
    const padButton = document.querySelector(`.pad-button[data-key="${key}"]`);
    
    if (padButton) {
        padButton.classList.remove('active');
    }
});
