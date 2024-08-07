// Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const name = document.querySelector("input[name='name']").value;
        const email = document.querySelector("input[name='email']").value;
        const phone = document.querySelector("input[name='phone']").value;
        const date = document.querySelector("input[name='date']").value;
        const time = document.querySelector("input[name='time']").value;

        if (name && email && phone && date && time) {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    }
});

// Smooth Scrolling
const links = document.querySelectorAll("nav ul li a, .hero-text .button, .footer-links ul li a");
for (const link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    });
}

// Mobile Menu Toggle
const nav = document.querySelector("nav ul");
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", function() {
    nav.classList.toggle("active");
});
