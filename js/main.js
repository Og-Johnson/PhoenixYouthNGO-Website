// ========== SMOOTH SCROLLING FOR NAV LINKS ==========
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// CONTACT FORM SUBMISSION WITH ANIMATION
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Here, normally we would send to Firebase

    // Show animated thank you message
    showThankYouMessage("Thank you! Your message has been sent.");

    // Reset form
    contactForm.reset();
});

// FUNCTION TO SHOW ANIMATED THANK YOU
function showThankYouMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'thank-you-message';
    msg.innerText = text;
    document.getElementById('contact').appendChild(msg);

    // Animate in
    setTimeout(() => {
        msg.classList.add('visible');
    }, 10);

    // Remove after 4 seconds
    setTimeout(() => {
        msg.classList.remove('visible');
        setTimeout(() => msg.remove(), 500);
    }, 4000);
}


// FADE-IN ON SCROLL
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});


