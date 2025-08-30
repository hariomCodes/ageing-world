// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');
        
        // Close all other accordion items
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                const otherContent = otherHeader.nextElementSibling;
                const otherIcon = otherHeader.querySelector('.accordion-icon');
                otherContent.classList.remove('active');
                otherHeader.classList.remove('active');
                otherIcon.textContent = '+';
            }
        });
        
        // Toggle current accordion item
        content.classList.toggle('active');
        header.classList.toggle('active');
        icon.textContent = content.classList.contains('active') ? '−' : '+';
    });
});

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call function when page loads
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Add loading animation for page transitions
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .nav-card, .stat-item, .region-card, .factor-card, .implication-card, .component-card, .lifestyle-card, .prevention-card, .problem-card, .risk-factor-card, .strategy-card, .guideline-card, .safety-card, .benefit-card, .resource-card').forEach(el => {
    observer.observe(el);
});

// Add fade-in class to CSS
const style = document.createElement('style');
style.textContent = `
    .card, .nav-card, .stat-item, .region-card, .factor-card, .implication-card, .component-card, .lifestyle-card, .prevention-card, .problem-card, .risk-factor-card, .strategy-card, .guideline-card, .safety-card, .benefit-card, .resource-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded .card, .loaded .nav-card, .loaded .stat-item, .loaded .region-card, .loaded .factor-card, .loaded .implication-card, .loaded .component-card, .loaded .lifestyle-card, .loaded .prevention-card, .loaded .problem-card, .loaded .risk-factor-card, .loaded .strategy-card, .loaded .guideline-card, .loaded .safety-card, .loaded .benefit-card, .loaded .resource-card {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
