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