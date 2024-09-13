// Asignamos los sonidos a cada tecla
const sounds = {
    'Q': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox) (Freeze) (Freeze) (Freeze).wav',
    'W': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox) (Freeze)-1.wav',
    'E': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-1.wav',
    'R': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-2.wav',
    'T': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-3.wav',
    'Y': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-5.wav',
    'U': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-6.wav',
    'I': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-8.wav',
    'O': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-9.wav',
    'P': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-11.wav',

    'A': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-12.wav',
    'S': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-15.wav',
    'D': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-16.wav',
    'F': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-17.wav',
    'G': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-18.wav',
    'H': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-2.wav',
    'J': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-1.wav',
    'K': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-2.wav',
    'L': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-1.wav',
    ';': '../sounds/First-of-the-Year/Consolidate/01 First of the Year (Equinox)-2.wav',

    'Z': '../sounds/First-of-the-Year/Consolidate/1 Record-1.wav',
    'X': '../sounds/First-of-the-Year/Consolidate/1 Record-2.wav',
    'C': '../sounds/First-of-the-Year/Consolidate/1 Record-3-1.wav',
    'V': '../sounds/First-of-the-Year/Consolidate/1 Record-6.wav',
    'B': '../sounds/First-of-the-Year/Consolidate/1 Record-7.wav',
    'N': '../sounds/First-of-the-Year/Consolidate/1 Record-8.wav',
    'M': '../sounds/First-of-the-Year/Consolidate/1 Record-9.wav',
    ',': '../sounds/First-of-the-Year/Consolidate/1 Record-10.wav',
    '.': '../sounds/First-of-the-Year/Consolidate/1 Record-11.wav',
    '/': '../sounds/First-of-the-Year/Consolidate/1 Record-12.wav',
};
// Escuchar cuando se presiona una tecla
document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    const padButton = document.querySelector(`.pad-button[data-key="${key}"]`);

    if (padButton) {
        padButton.classList.add('active');
        // Verifica si hay un sonido asociado con la tecla presionada
        if (sounds[key]) {
            const sound = new Audio(sounds[key]);
            sound.play();
        }
    }
});

// Escuchar cuando se suelta la tecla
document.addEventListener('keyup', function(event) {
    const key = event.key.toUpperCase();
    const padButton = document.querySelector(`.pad-button[data-key="${key}"]`);

    if (padButton) {
        padButton.classList.remove('active');
    }
});
