document.addEventListener("DOMContentLoaded", function() {
  const innerCarousels = document.querySelectorAll(".inner-carousel");
  const prevButtons = document.querySelectorAll(".prev-button");
  const nextButtons = document.querySelectorAll(".next-button");
  let currentCarouselIndex = 0;

  function showCurrentCarousel() {
    innerCarousels.forEach(function(carousel, index) {
      if (index === currentCarouselIndex) {
        carousel.style.display = "block";
      } else {
        carousel.style.display = "none";
      }
    });
  }

  function showNextCarousel() {
    currentCarouselIndex++;
    if (currentCarouselIndex >= innerCarousels.length) {
      currentCarouselIndex = 0;
    }
    showCurrentCarousel();
  }

  function showPreviousCarousel() {
    currentCarouselIndex--;
    if (currentCarouselIndex < 0) {
      currentCarouselIndex = innerCarousels.length - 1;
    }
    showCurrentCarousel();
  }

  // Show the first carousel initially
  showCurrentCarousel();

  // Add event listeners to navigation buttons
  prevButtons.forEach(function(button) {
    button.addEventListener("click", showPreviousCarousel);
  });

  nextButtons.forEach(function(button) {
    button.addEventListener("click", showNextCarousel);
  });

  innerCarousels.forEach(function(carousel) {
    const images = carousel.querySelectorAll(".carousel-images img");
    let currentImageIndex = 0;

    function showCurrentImage() {
      images.forEach(function(image) {
        image.style.display = "none";
      });

      images[currentImageIndex].style.display = "block";
    }

    function showNextImage() {
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      showCurrentImage();
    }

    // Show the first image initially
    showCurrentImage();

    // Start the carousel
    setInterval(showNextImage, 4000);
  });
});