//Mobile carousel
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    // Calculate the new index
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Apply transform based on the new index
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}


//Desktop carousel
const textElements = document.querySelectorAll('.hover-text');
const imageElement = document.getElementById('carousel-image');

textElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    const newImage = element.getAttribute('data-img');
    imageElement.src = newImage;
  });
});

function openPopup() {
    document.querySelector('.popup').style.display = 'block'; 
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
}

// window.addEventListener('scroll', function() {
//     if (!popupOpened && window.scrollY >= 1200) {
//         openPopup();
//         popupOpened = true;
//     }
// });