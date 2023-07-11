// Function to create an HTML element with attributes
function createElement(tagName, attributes) {
  const element = document.createElement(tagName);
  for (let attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }
  return element;
}

// Function to create an image element
function createImage(src, alt, className) {
  const image = createElement('img', {
    src: src,
    alt: alt,
    class: className
  });
  return image;
}

// Function to create a link element
function createLink(href, text) {
  const link = createElement('a', {
    href: href
  });
  link.textContent = text;
  return link;
}

// Function to create a list item with an image link
function createLinkItem(href, src, alt, className, id) {
  const listItem = createElement('li', {
    class: 'link-item'
  });
  const link = createLink(href, '');
  const image = createImage(src, alt, className);
  image.setAttribute('id', id);
  link.appendChild(image);
  listItem.appendChild(link);
  return listItem;
}

// Function to create a card element
function createCard(id, headerText, bodyText) {
  const card = createElement('div', {
    class: 'card',
    id: id
  });
  const header = createElement('div', {
    class: 'card-header'
  });
  header.textContent = headerText;
  const body = createElement('div', {
    class: 'card-body'
  });
  body.textContent = bodyText;
  card.appendChild(header);
  card.appendChild(body);
  return card;
}

// Function to create an inner carousel
function createInnerCarousel(title, images, siteLink, codeLink) {
  const innerCarousel = createElement('div', {
    class: 'inner-carousel'
  });
  const carouselTitle = createElement('h1', {
    class: 'carousel-title heading-md'
  });
  carouselTitle.textContent = title;
  const carouselImages = createElement('div', {
    class: 'carousel-images'
  });
  for (let i = 0; i < images.length; i++) {
    const image = createImage(images[i].src, images[i].alt, '');
    carouselImages.appendChild(image);
  }
  const carouselLinks = createElement('div', {
    class: 'carousel-links'
  });
  const visitLink = createLink(siteLink, 'Visit Site');
  const codeLinkElement = createLink(codeLink, 'View Code');
  carouselLinks.appendChild(visitLink);
  carouselLinks.appendChild(codeLinkElement);
  innerCarousel.appendChild(carouselTitle);
  innerCarousel.appendChild(carouselImages);
  innerCarousel.appendChild(carouselLinks);
  return innerCarousel;
}

// Get the container element
const container = document.querySelector('.content-container');

// Create the ring pattern image
const ringPatternImage = createImage('./assets/images/pattern-rings.svg', 'ring pattern', 'ring-pattern');

// Create the header content
const headerContent = createElement('div', {
  class: 'header-content'
});
const introContent = createElement('div', {
  class: 'intro-content'
});
const greeting = createElement('div', {
  class: 'greeting heading-lg'
});
greeting.textContent = 'Hey There!';
const name = createElement('span', {
  class: 'name'
});
name.textContent = 'Elijah.';
const headingMd = createElement('div', {
  class: 'heading-md'
});
headingMd.textContent = "I'm ";
headingMd.appendChild(name);
const introduction = createElement('p', {
  class: 'introduction'
});
introduction.textContent ="I'm a junior frontend developer and military veteran, based in the United States. My military background instilled discipline, attention to detail, and a strong work ethic that complements my passion for creating visually appealing sites. I use these qualities to build high-quality digital experiences that meet modern web standards. I'm committed to ongoing learning and growth in the ever-changing world of web development, and I'm excited about the opportunity to contribute to meaningful projects.";
const btnContent = createElement('div', {
  class: 'btn-content'
});
const contactBtn = createLink('#contact-form', 'Contact');
contactBtn.setAttribute('class', 'contact-btn');
btnContent.appendChild(contactBtn);
introContent.appendChild(greeting);
introContent.appendChild(headingMd);
introContent.appendChild(introduction);
introContent.appendChild(btnContent);
const profileImage = createImage('./assets/images/self.png', 'Image of Elijah', 'profile-image');
const externalLinks = createElement('ul', {
  class: 'external-links'
});
const linkItem1 = createLinkItem('https://github.com/Elijah80', './assets/icons/github-logo.png', 'github logo', 'link-image', 'github-logo');
const linkItem2 = createLinkItem('https://www.upwork.com/freelancers/~01cf71e76e68d74c20', './assets/icons/upwork-logo.png', 'upwork logo', 'link-image', 'upwork-logo');
const linkItem3 = createLinkItem('https://www.facebook.com/elijah.w.cravens/', './assets/icons/facebook-logo.png', 'facebook logo', 'link-image', 'facebook-logo');
externalLinks.appendChild(linkItem1);
externalLinks.appendChild(linkItem2);
externalLinks.appendChild(linkItem3);
headerContent.appendChild(introContent);
headerContent.appendChild(profileImage);
headerContent.appendChild(externalLinks);

// Create the experience content
const experienceContent = createElement('div', {
  class: 'experience-content'
});
const experienceHeading = createElement('div', {
  class: 'heading-md'
});
experienceHeading.textContent = 'Experience';
const htmlCard = createCard('html-card', 'HTML', '2 Years');
const cssCard = createCard('css-card', 'CSS', '2 Years');
const jsCard = createCard('js-card', 'Javascript', '1 Year');
const reactCard = createCard('react-card', 'React', '6 Months');
experienceContent.appendChild(experienceHeading);
experienceContent.appendChild(htmlCard);
experienceContent.appendChild(cssCard);
experienceContent.appendChild(jsCard);
experienceContent.appendChild(reactCard);

// Create the project content
const projectContent = createElement('div', {
  class: 'project-content'
});
const projectHeader = createElement('h1', {
  class: 'project-header heading-md'
});
projectHeader.textContent = 'Javascript Projects';
const outerCarousel = createElement('div', {
  class: 'outer-carousel'
});
const carouselInner = createElement('div', {
  class: 'carousel-inner'
});
const innerCarousel1 = createInnerCarousel(
  'Todo Project',
  [
    { src: './assets/images/todo-app/start.PNG', alt: 'Todo Project Image 1' },
    { src: './assets/images/todo-app/with-tasks.PNG', alt: 'Todo Project Image 2' },
    { src: './assets/images/todo-app/completed-tasks.PNG', alt: 'Todo Project Image 3' },
    { src: './assets/images/todo-app/before-task-edit.PNG', alt: 'Todo Project Image 4' },
    { src: './assets/images/todo-app/edited-task.PNG', alt: 'Todo Project Image 5' },
    { src: './assets/images/todo-app/filtered-completed.PNG', alt: 'Todo Project Image 6' },
    { src:'./assets/images/todo-app/filtered-incompleted.PNG', alt: 'Todo Project Image 7' }
  ],
  'https://elijah80.github.io/vanilla-todo/',
  'https://github.com/Elijah80/vanilla-todo'
);
const innerCarousel2 = createInnerCarousel(
  'Project 2',
  [
    { src: 'https://placehold.co/600x400.png', alt: 'Project 2 Image 1' },
    { src: 'https://placehold.co/600x400.png', alt: 'Project 2 Image 2' },
    { src: 'https://placehold.co/600x400.png', alt: 'Project 2 Image 3' }
  ],
  'project2-site',
  'project2-github'
);
const innerCarousel3 = createInnerCarousel(
  'Project 3',
  [
    { src: 'https://placehold.co/600x400.png', alt: 'Project 3 Image 1' },
    { src: 'https://placehold.co/600x400.png', alt: 'Project 3 Image 2' },
    { src: 'https://placehold.co/600x400.png', alt: 'Project 3 Image 3' }
  ],
  'project3-site',
  'project3-github'
);
carouselInner.appendChild(innerCarousel1);
carouselInner.appendChild(innerCarousel2);
carouselInner.appendChild(innerCarousel3);
const carouselNavigation = createElement('div', {
  class: 'carousel-navigation'
});
const prevButton = createElement('button', {
  class: 'prev-button'
});
const prevIcon = createElement('i', {
  class: 'fa-solid fa-circle-left fa-2xl'
});
prevButton.appendChild(prevIcon);
const nextButton = createElement('button', {
  class: 'next-button'
});
const nextIcon = createElement('i', {
  class: 'fa-solid fa-circle-right fa-2xl'
});
nextButton.appendChild(nextIcon);
carouselNavigation.appendChild(prevButton);
carouselNavigation.appendChild(nextButton);
outerCarousel.appendChild(carouselInner);
outerCarousel.appendChild(carouselNavigation);
projectContent.appendChild(projectHeader);
projectContent.appendChild(outerCarousel);

// Create the contact form
const contactForm = createElement('div', {
  class: 'contact-form'
});
const contactHeader = createElement('div', {
  class: 'heading-md'
});
contactHeader.textContent = 'Contact Me';
const contactFormElement = createElement('form', {
  id: 'contact-form'
});

// Create form elements
const nameLabel = createElement('label', {
  for: 'name',
  id: 'name-lbl'
});
nameLabel.textContent = 'Name: ';
const nameInput = createElement('input', {
  type: 'text',
  id: 'name',
  name: 'name'
});

const emailLabel = createElement('label', {
  for: 'email',
  id: 'email-lbl'
});
emailLabel.textContent = 'Email: ';
const emailInput = createElement('input', {
  type: 'email',
  id: 'email',
  name: 'email'
});

const messageLabel = createElement('label', {
  for: 'message',
  id: 'msg-lbl'
});
messageLabel.textContent = 'Message: ';
const messageTextArea = createElement('textarea', {
  id: 'message',
  name: 'message',
  rows: '5'
});

const submitInput = createElement('input', {
  type: 'submit',
  id: 'submit-btn',
  value: 'Contact'
});

// Append form elements to contact form
contactFormElement.appendChild(nameLabel);
contactFormElement.appendChild(nameInput);
contactFormElement.appendChild(emailLabel);
contactFormElement.appendChild(emailInput);
contactFormElement.appendChild(messageLabel);
contactFormElement.appendChild(messageTextArea);
contactFormElement.appendChild(submitInput);
contactForm.appendChild(contactHeader);
contactForm.appendChild(contactFormElement);

// Form submission handling
contactFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageTextArea.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all the fields.');
    return;
  }

  const formData = {
    name: name,
    email: email,
    message: message,
  };

  // Send the form data to elijahcravens46@gmail.com
  const emailService = 'mailto:elijahcravens46@gmail.com';
  const encodedData = Object.entries(formData)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}\n\n`);
  const emailLink = `${emailService}?subject=Contact%20Form%20Submission&body=%0A%0A${emailBody}`;
  window.open(emailLink, '_blank');

  // Reset the form
  contactFormElement.reset();
});

// Append all the elements to the container
container.appendChild(ringPatternImage);
container.appendChild(headerContent);
container.appendChild(createElement('div', { class: 'content-divider' }));
container.appendChild(experienceContent);
container.appendChild(createElement('div', { class: 'content-divider2' }));
container.appendChild(projectContent);
container.appendChild(createElement('div', { class: 'content-divider3' }));
container.appendChild(contactForm);

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

      images[currentImageIndex].style.display = 'block';
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
