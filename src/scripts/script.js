 // Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

mobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileNav.classList.add('hidden');
        }
    });
});

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Skills Animation Observer
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                    
                    // Animate progress bar
                    const progressBar = card.querySelector('.progress-bar');
                    const progress = parseInt(progressBar.getAttribute('data-progress'));
                    const circumference = 2 * Math.PI * 50; // radius = 50
                    const strokeDasharray = (progress / 100) * circumference;
                    
                    setTimeout(() => {
                        progressBar.style.strokeDasharray = `${strokeDasharray} ${circumference}`;
                    }, 200);
                    
                }, index * 100);
            });
        }
    });
}, { threshold: 0.3 });

// Observe skills section
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Form Submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation and submission simulation
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = 'var(--border-color)';
        }
    });
    
    if (isValid) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Initialize animations on page load
window.addEventListener('load', () => {
    updateActiveNavLink();
});

// Projects Page Navigation
const viewAllProjectsBtn = document.getElementById('view-all-projects');
const mainPage = document.querySelector('body');

viewAllProjectsBtn.addEventListener('click', () => {
    window.location.href = 'projects.html';
});