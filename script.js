//Mobile carousel
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
  



  window.addEventListener("scroll", () => {
    console.log("Hello");
  });
  