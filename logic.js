let isRolling = false;
const initialImage = document.getElementById('img0');
const gameImages = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3')
];
const button = document.getElementById('rollButton');

function rollDice() {
    if (isRolling) return;
    isRolling = true;
    button.disabled = true;

    // Nascondi l'immagine iniziale
    initialImage.classList.remove('active');

    let currentIndex = 0;
    const rollInterval = setInterval(() => {
        // Nascondi tutte le immagini
        gameImages.forEach(img => img.classList.remove('active'));
        // Mostra solo l'immagine corrente
        gameImages[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % gameImages.length;
    }, 200);

    setTimeout(() => {
        clearInterval(rollInterval);
        // Seleziona casualmente una delle tre immagini
        const randomIndex = Math.floor(Math.random() * gameImages.length);
        gameImages.forEach(img => img.classList.remove('active'));
        gameImages[randomIndex].classList.add('active');
        isRolling = false;
        button.disabled = false;
    }, 3000);
}
