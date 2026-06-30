const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactStatus.textContent =
      "Thank you. Your message has been prepared for Fesshaye Limousine Services.";
    contactForm.reset();
  });
}
