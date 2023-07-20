// Show or Hide Password
const togglePasswordVisibility = () => {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.parentNode.classList.add("password-visible");
  } else {
    passwordInput.type = "password";
    toggleIcon.parentNode.classList.remove("password-visible");
  }
};
// End of Show or Hide Password

// Scroll Down Animation
function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Home Page
// Header
window.addEventListener("scroll", animateOnScroll);

function animateOnScroll() {
  let textBoxesHeader = document.querySelectorAll(".headerHomepage-textBox");
  for (let i = 0; i < textBoxesHeader.length; i++) {
    let textBox = textBoxesHeader[i];
    if (isElementInViewport(textBox)) {
      textBox.classList.add("animate");
    }
  }
}

// Section 1 - We Are Happy
let textBoxesSection1 = document.querySelectorAll(".section1Homepage-text-container h2, .section1Homepage-text-container img, .section1Homepage-text-container p, .section1Homepage-rightBox");

window.addEventListener("scroll", animateOnScroll2);

function animateOnScroll2() {
  textBoxesSection1.forEach(function (textBox) {
    if (textBox.matches(".section1Homepage-rightBox")) {
      textBox.classList.add("slightSlideLeft");
    }
    if (isElementInViewport(textBox)) {
      if (textBox.tagName === "IMG") {
        textBox.classList.add("slideLeft");
      } else {
        textBox.classList.add("slideRight");
      }
    }
  });
}

// Section 2 - Customer Satisfactory
let textBoxesSection2 = document.querySelectorAll(
  ".visiMisi-shortLine, .section2Homepage-container h1, .misi-textList, .section2Homepage-container h5, .section2Homepage-container h6, .our-team-heading-2-homepage img, .people img, .fullname h6, .ourServices-heading h2, .ourServices-heading-1 img, .the-package img, .the-package h5, .the-package p, .ourServices-box img, .ourServices-box h6, .ourServices-box p"
);

window.addEventListener("scroll", animateTextOnScroll3);

function animateTextOnScroll3() {
  textBoxesSection2.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".our-team-heading-2-homepage img, .fullname h6, .ourServices-heading-1 img")) {
        textBox.classList.add("slideLeft");
      }
      if (textBox.matches(".visiMisi-shortLine")) {
        textBox.classList.add("slideDown");
      } else {
        textBox.classList.add("slideUp");
      }
    }
  });
}

// Section 3 - Meet Our Client
let textBoxesSection3 = document.querySelectorAll(".section3Homepage-heading-container h1, .section3Homepage-heading-1 img, .section3Homepage-logo img");

window.addEventListener("scroll", animateTextOnScroll4);

function animateTextOnScroll4() {
  textBoxesSection3.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section3Homepage-heading-1 img")) {
        textBox.classList.add("slideLeft");
      }
      if (textBox.matches(".section3Homepage-heading-container h1")) {
        textBox.classList.add("slideUp");
      } else {
        textBox.classList.add("slideDown");
      }
    }
  });
}

// Section 4 -  Our Client Map
let textBoxesSection4 = document.querySelectorAll(".section4Homepage-map-image img, .section4Homepage-container h1, .section4Homepage-heading-2 img ");

window.addEventListener("scroll", animateTextOnScroll5);

function animateTextOnScroll5() {
  textBoxesSection4.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section4Homepage-heading-2 img")) {
        textBox.classList.add("slideLeft");
      } else {
        textBox.classList.add("slideUp");
      }
    }
  });
}

// Section 5- Pricing
let textBoxesSection5 = document.querySelectorAll(".section5-heading, .section5-heading h6, .pricingBox img, .pricingBox h5, .pricingBox h6, .pricingBox ul li, .pricing-button");

window.addEventListener("scroll", animateTextOnScroll6);

function animateTextOnScroll6() {
  textBoxesSection5.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section5-heading, .section5-heading h6, .pricing-button")) {
        textBox.classList.add("slideUp");
      }
      if (textBox.matches(".pricingBox img, .pricingBox h5, .pricingBox h6")) {
        textBox.classList.add("slideDown");
      } else {
        textBox.classList.add("slideLeft");
      }
    }
  });
}

// Section 6 -  Testimoni
let textBoxesSection6 = document.querySelectorAll(".section6-heading h1, .section6-heading img, .mySlides, .carousel-box, .prev, .next, .testi-container, .testi-indicator ");

window.addEventListener("scroll", animateTextOnScroll7);

function animateTextOnScroll7() {
  textBoxesSection6.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section6-heading h1")) {
        textBox.classList.add("slideUp");
      }
      if (textBox.matches(".section6-heading img, .prev")) {
        textBox.classList.add("slideLeft");
      }
      if (textBox.matches(".next")) {
        textBox.classList.add("slideRight");
      } else {
        textBox.classList.add("slideDown");
      }
    }
  });
}

// Section 7 - Inquiry
let textBoxesSection7 = document.querySelectorAll(".section7-content-container h1, .section7-content-container button");

window.addEventListener("scroll", animateTextOnScroll8);

function animateTextOnScroll8() {
  textBoxesSection7.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      textBox.classList.add("slideDown");
    }
  });
}

// About Us Page
// Header
let textBoxesSection8 = document.querySelectorAll(".headerAboutUs-container h4");

window.addEventListener("scroll", animateTextOnScroll9);

function animateTextOnScroll9() {
  textBoxesSection8.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      textBox.classList.add("slideUp");
    }
  });
}

// Section 1 - RK Consulting About
let textBoxesSection9 = document.querySelectorAll(".section1AboutUs-bottom-image, .section1AboutUs-top-image-container img,  .section1AboutUs-container p");

window.addEventListener("scroll", animateTextOnScroll10);

function animateTextOnScroll10() {
  textBoxesSection9.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section1AboutUs-bottom-image")) {
        textBox.classList.add("scaleUp");
      } else {
        textBox.classList.add("slideDown");
      }
    }
  });
}

// Section 2 - Meet Our Team
let textBoxesSection10 = document.querySelectorAll(".our-team-heading h1, .our-team-heading-2 img, .people img, .fullname h6, .the-title h6 ");

window.addEventListener("scroll", animateTextOnScroll11);

function animateTextOnScroll11() {
  textBoxesSection10.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".our-team-heading-2 img, .fullname h6")) {
        textBox.classList.add("slideLeft");
      } else {
        textBox.classList.add("slideUp");
      }
    }
  });
}

//  Section 3 - Meet Our Client
let textBoxesSection11 = document.querySelectorAll(".section3AboutUs-heading-container h1, .section3AboutUs-heading-container img, .section3AboutUs-logo img");

window.addEventListener("scroll", animateTextOnScroll12);

function animateTextOnScroll12() {
  textBoxesSection11.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section3AboutUs-heading-container h1")) {
        textBox.classList.add("slideUp");
      }

      if (textBox.matches(".section3AboutUs-heading-1 img")) {
        textBox.classList.add("slideLeft");
      } else {
        textBox.classList.add("slideDown");
      }
    }
  });
}

// Section 4 - Ready to Start?
let textBoxesSection12 = document.querySelectorAll(".section4AboutUs-container h1, .section4AboutUs-container p, .section4AboutUs-container button");

window.addEventListener("scroll", animateTextOnScroll13);

function animateTextOnScroll13() {
  textBoxesSection12.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      textBox.classList.add("slideDown");
    }
  });
}

// Our Services Page
// Section 1 - The Packages
let textBoxesSection13 = document.querySelectorAll(".section1OurServices-package, .section1OurServices-package img, .section1OurServices-package-text-container h3, .section1OurServices-package-text-container p");

window.addEventListener("scroll", animateTextOnScroll14);

function animateTextOnScroll14() {
  textBoxesSection13.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      textBox.classList.add("slideUp");
      // textBox.classList.add("slideLeft");
    }
  });
}

// Section 2 - Our Services
let textBoxesSection14 = document.querySelectorAll(
  ".section2OurServices-left-content, .section2OurServices-right-content-card img, .section2OurServices-right-content-card img, .section2OurServices-right-content-card-text h3, .section2OurServices-right-content-card-text p"
);

window.addEventListener("scroll", animateTextOnScroll15);

function animateTextOnScroll15() {
  textBoxesSection14.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section2OurServices-left-content")) {
        textBox.classList.add("scaleUp");
      }
      textBox.classList.add("slideLeft");
    }
  });
}

// Section 3 - Pricing
let textBoxesSection15 = document.querySelectorAll(".section3OurServices-heading, .section3OurServices-heading h6, .pricingBox img, .pricingBox h5, .pricingBox h6, .pricingBox ul li, .pricing-button");

window.addEventListener("scroll", animateTextOnScroll16);

function animateTextOnScroll16() {
  textBoxesSection15.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section3OurServices-heading, .section3OurServices-heading h6, .pricing-button")) {
        textBox.classList.add("slideUp");
      }
      if (textBox.matches(".pricingBox img, .pricingBox h5, .pricingBox h6")) {
        textBox.classList.add("slideDown");
      } else {
        textBox.classList.add("slideLeft");
      }
    }
  });
}

// Section 4 - Testimoni
let textBoxesSection16 = document.querySelectorAll(".section4OurServices-heading h1, .section4OurServices-heading img, .mySlides, .carousel-box, .prev, .next, .testi-container, .testi-indicator ");

window.addEventListener("scroll", animateTextOnScroll17);

function animateTextOnScroll17() {
  textBoxesSection16.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section4OurServices-heading h1")) {
        textBox.classList.add("slideUp");
      }
      if (textBox.matches(".section4OurServices-heading img, .prev")) {
        textBox.classList.add("slideLeft");
      }
      if (textBox.matches(".next")) {
        textBox.classList.add("slideRight");
      } else {
        textBox.classList.add("slideDown");
      }
    }
  });
}

// Contact Page
// Header
let textBoxesSection17 = document.querySelectorAll(".headerContact-textBox");

window.addEventListener("scroll", animateTextOnScroll18);

function animateTextOnScroll18() {
  textBoxesSection17.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      textBox.classList.add("slideUp");
    }
  });
}

// Section 1 - Contact Us
let textBoxesSection18 = document.querySelectorAll(
  ".section1Contact-left-content-heading h2, .section1Contact-left-content-heading p, .section1Contact-left-content-contact img, .section1Contact-left-content-contact h4, .section1Contact-left-content-contact p, .section1Contact-right-content-form-heading h4, .section1Contact-right-content-form-heading p, .section1Contact-right-content-form input, .section1Contact-right-content-form textarea, .section1Contact-right-content-form button"
);

window.addEventListener("scroll", animateTextOnScroll19);

function animateTextOnScroll19() {
  textBoxesSection18.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      if (textBox.matches(".section1Contact-right-content-form button")) {
        textBox.classList.add("slideUp");
      }
      if (textBox.matches(".section1Contact-left-content-contact img, .section1Contact-left-content-contact h4, .section1Contact-left-content-contact p")) {
        textBox.classList.add("slideLeft");
      } else {
        textBox.classList.add("slideDown");
      }
    }
  });
}

// Section 2 - Our Location
let textBoxesSection19 = document.querySelectorAll(".section2Contact-container ");

window.addEventListener("scroll", animateTextOnScroll20);

function animateTextOnScroll20() {
  textBoxesSection19.forEach(function (textBox) {
    if (isElementInViewport(textBox)) {
      textBox.classList.add("scaleUp");
    }
  });
}
// End of Scroll Down Animation
