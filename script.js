// script.js - Basic functionality for the portfolio

// Reveal animations
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        element.classList.add('active');
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon between menu and x
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', navLinks.classList.contains('active') ? 'x' : 'menu');
                // Re-render lucide icon
                if (window.lucide) {
                    lucide.createIcons();
                }
            }
        });
    }
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-status');

    if (form && status) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.name || !data.email || !data.message) {
                status.textContent = 'Please fill in all fields.';
                status.style.color = '#ff6b6b';
                return;
            }

            // For now, just show a success message since we don't have backend
            status.textContent = 'Message sent successfully! (This is a demo - email functionality not implemented yet)';
            status.style.color = '#b5c18e';
            form.reset();
        });
    }
}

// Typing effect for hero subtitle
function initTypingEffect() {
    const element = document.getElementById('hero-subtitle');
    const text = element.getAttribute('data-typing');

    if (element && text) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
    initMobileMenu();
    initContactForm();
    initTypingEffect();

    // Re-render lucide icons after dynamic changes
    if (window.lucide) {
        lucide.createIcons();
    }
});