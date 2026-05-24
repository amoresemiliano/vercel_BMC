function flipCard(cardElement) {
    // Solo girar si no se hizo clic en el enlace de +info
    if (!event.target.classList.contains('btn-info')) {
        cardElement.classList.toggle('is-flipped');
    }
}