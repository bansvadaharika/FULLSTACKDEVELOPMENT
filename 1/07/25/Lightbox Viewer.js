const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

// Show lightbox on thumbnail click
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get full-size image URL by removing -thumbnail
    const fullSrc = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullSrc;
    lightbox.style.display = "flex";
  });
});

// Hide lightbox when clicking close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Hide lightbox when clicking the overlay
lightbox.addEventListener("click", (e) => {
  // Only close if clicking outside the image and button
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
