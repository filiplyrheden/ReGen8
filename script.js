let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    // Uppdatera index beroende på riktningen
    currentIndex += direction;
    
    // Om man bläddrar vidare bakåt från första eller framåt från sista bilden, gå tillbaka till första/sista
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    
    // Flytta bilderna
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
