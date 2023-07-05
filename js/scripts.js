document.addEventListener("DOMContentLoaded", function() {
  const innerCarousels = document.querySelectorAll(".inner-carousel");
  const prevButtons = document.querySelectorAll(".prev-button");
  const nextButtons = document.querySelectorAll(".next-button");
  let currentCarouselIndex = 0;
  const contactForm = document.getElementById('contact-form');

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

  // Create the Contact form
  function createContactForm() {
    // Create Name Elements
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.innerHTML = 'Name: ';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;

    // Create Email Elements
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerHTML = 'Email: ';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;

    // Create TextArea elements
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.innerHTML = 'Message: ';

    const messageTextArea = document.createElement('textarea');
    messageTextArea.id = 'message';
    messageTextArea.name = 'message';
    messageTextArea.rows = '6';
    messageTextArea.required = true;

    // Create Submit input
    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.className = 'submit-btn';
    submitInput.value = 'Contact';

    // Append the Elements to the Form
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(document.createElement('br'));
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(document.createElement('br'));
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageTextArea);
    contactForm.appendChild(document.createElement('br'));
    contactForm.appendChild(submitInput);
  }

  createContactForm();
});