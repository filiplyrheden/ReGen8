//Mobile carousel
let currentIndex = 0;
let startX = 0;
let endX = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Update the index based on direction
    currentIndex += direction;

    // Loop back if reaching the first or last image
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Move the images
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Detect touch events for swipe functionality
const carousel = document.querySelector('.carousel-images');

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance in pixels to register as a swipe

    if (startX - endX > swipeThreshold) {
        // Swipe left
        moveSlide(1);
    } else if (endX - startX > swipeThreshold) {
        // Swipe right
        moveSlide(-1);
    }
}


//Desktop carousel
document.getElementById("regnjacka").addEventListener("mouseenter", function() {
    const imageDiv = document.getElementById("desktop-carousel-image");
    
    // Check if the image is already added, if not, create it
    if (!imageDiv.querySelector("img")) {
      const img = document.createElement("img");
      img.src = "/images/rickard.png"; 
      img.alt = "Rain Jacket";
      imageDiv.appendChild(img);
    }
  
    // Make sure the image is displayed
    imageDiv.querySelector("img").style.display = "block";
  });
  
  document.getElementById("regnjacka").addEventListener("mouseleave", function() {
    const imageDiv = document.getElementById("desktop-carousel-image");
    
    // Hide the image on mouse leave
    if (imageDiv.querySelector("img")) {
      imageDiv.querySelector("img").style.display = "none";
    }
  });  

  // Pop-up window
//   function openPopup() {
//     window.open("/", "popupWindow", "width=400,height=300");
// }

// let popupOpened = false;

// window.addEventListener('scroll', function() {
//     if (!popupOpened && window.scrollY >= 1200) {
//         openPopup();
//         popupOpened = true;
//     }
// });