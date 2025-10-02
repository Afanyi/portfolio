// Load and populate data from data.js
function populatePortfolio() {
    // Logo
    const logo = document.querySelector('.logo');
    if (logo) {
        const initials = portfolioData.personal.name.charAt(0) + portfolioData.personal.surname.charAt(0);
        logo.textContent = initials;
    }

    // Hero Section
    document.querySelector('.hero-title').innerHTML = `${portfolioData.personal.name} <span class="text-gradient">${portfolioData.personal.surname}</span>`;
    document.querySelector('.hero-subtitle').textContent = portfolioData.personal.title;
    document.querySelector('.hero-description').textContent = portfolioData.personal.description;

    // Update social links
    document.querySelectorAll('.social-icon')[0].href = `mailto:${portfolioData.personal.email}`;
    document.querySelectorAll('.social-icon')[1].href = portfolioData.personal.githubUrl;
    document.querySelectorAll('.social-icon')[2].href = portfolioData.personal.linkedinUrl;

    // About Section
    const aboutSubtitle = document.querySelector('#about .section-subtitle');
    if (aboutSubtitle) {
        aboutSubtitle.textContent = 'A dedicated Computer Science student with hands-on experience in software development, backend systems, and game development.';
    }
    const aboutCards = document.querySelectorAll('.about-grid .card');
    const aboutGrid = document.querySelector('.about-grid');
    aboutGrid.innerHTML = '';
    portfolioData.about.forEach((item, index) => {
        const aboutCard = `
            <div class="card card-hover">
                <svg class="card-icon ${index % 2 === 0 ? 'icon-primary' : 'icon-accent'}" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                </svg>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
            </div>
        `;
        aboutGrid.insertAdjacentHTML('beforeend', aboutCard);
    });

    // Experience Section
    const experienceList = document.querySelector('.experience-list');
    experienceList.innerHTML = '';
    portfolioData.experience.forEach(exp => {
        const expCard = `
            <div class="experience-card card">
                <div class="experience-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        <rect width="20" height="14" x="2" y="6" rx="2"/>
                    </svg>
                </div>
                <div class="experience-content">
                    <h3 class="experience-title">${exp.title}</h3>
                    <p class="experience-company">${exp.company}</p>
                    <div class="experience-meta">
                        <span class="meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                <line x1="16" x2="16" y1="2" y2="6"/>
                                <line x1="8" x2="8" y1="2" y2="6"/>
                                <line x1="3" x2="21" y1="10" y2="10"/>
                            </svg>
                            ${exp.period}
                        </span>
                        <span class="meta-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            ${exp.location}
                        </span>
                    </div>
                    <ul class="experience-description">
                        ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                    <div class="tags">
                        ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        experienceList.insertAdjacentHTML('beforeend', expCard);
    });

    // Education Section
    const educationGrid = document.querySelector('.education-grid');
    educationGrid.innerHTML = '';
    portfolioData.education.forEach(edu => {
        const eduCard = `
            <div class="education-card card">
                <div class="education-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                </div>
                <div>
                    <h3 class="education-title">${edu.degree}</h3>
                    <p class="education-institution">${edu.institution}</p>
                    <p class="education-meta">${edu.period}</p>
                    <p class="education-meta">${edu.location}</p>
                </div>
            </div>
        `;
        educationGrid.insertAdjacentHTML('beforeend', eduCard);
    });

    // Skills Section
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';
    portfolioData.skills.forEach(skillCategory => {
        const skillCard = `
            <div class="skill-card card">
                <div class="skill-header">
                    <div class="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="16 18 22 12 16 6"/>
                            <polyline points="8 6 2 12 8 18"/>
                        </svg>
                    </div>
                    <h3 class="skill-title">${skillCategory.category}</h3>
                </div>
                <div class="skill-tags">
                    ${skillCategory.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
                </div>
            </div>
        `;
        skillsGrid.insertAdjacentHTML('beforeend', skillCard);
    });

    // Languages Section
    const languagesGrid = document.querySelector('.languages-grid');
    languagesGrid.innerHTML = '';
    portfolioData.languages.forEach(lang => {
        const langCard = `
            <div class="language-card card">
                <div class="language-header">
                    <svg class="language-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                        <path d="M2 12h20"/>
                    </svg>
                    <div>
                        <h3 class="language-name">${lang.name}</h3>
                        <p class="language-level">${lang.level}</p>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${lang.proficiency}%"></div>
                </div>
                <ul class="language-skills">
                    ${lang.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        `;
        languagesGrid.insertAdjacentHTML('beforeend', langCard);
    });

    // Contact Section
    document.querySelectorAll('.contact-link')[0].textContent = portfolioData.personal.email;
    document.querySelectorAll('.contact-link')[0].href = `mailto:${portfolioData.personal.email}`;
    document.querySelectorAll('.contact-link')[1].textContent = portfolioData.personal.phone;
    document.querySelectorAll('.contact-link')[1].href = `tel:${portfolioData.personal.phone}`;
    document.querySelector('.contact-text').innerHTML = `${portfolioData.personal.location.street}<br>${portfolioData.personal.location.city}<br>${portfolioData.personal.location.country}`;
    document.querySelector('.contact-cta .contact-heading').textContent = portfolioData.contact.heading;
    document.querySelector('.contact-description').textContent = portfolioData.contact.description;
    document.querySelectorAll('.contact-buttons .btn-primary')[0].href = `mailto:${portfolioData.personal.email}`;

    // Footer
    document.querySelector('.footer p').textContent = `© 2025 ${portfolioData.personal.fullName}. All rights reserved.`;
    document.querySelector('.footer-sub').textContent = `Nationality: ${portfolioData.personal.nationality} | Date of Birth: ${portfolioData.personal.dateOfBirth}`;

    // Update page title and meta tags
    document.title = `${portfolioData.personal.fullName} - Software Developer Portfolio`;
    document.querySelector('meta[name="author"]').content = portfolioData.personal.fullName;
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize portfolio on page load
document.addEventListener('DOMContentLoaded', function() {
    // Populate data first
    populatePortfolio();

    // Then set up animations
    const animatedElements = document.querySelectorAll('.card, .section-title, .section-subtitle');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                progressObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add active class style
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: hsl(var(--primary));
    }
`;
document.head.appendChild(style);
