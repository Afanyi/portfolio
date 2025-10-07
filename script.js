// script.js (ES Module)
let portfolioData = null;

const supportedLangs = ["en", "de", "fr"];
let currentLang =
    localStorage.getItem("portfolioLang") ||
    (navigator.language || "en").slice(0, 2);
if (!supportedLangs.includes(currentLang)) currentLang = "en";

// Helper: set text / html safely
const setText = (sel, text) => {
    const el = document.querySelector(sel);
    if (el && text != null) el.textContent = text;
};
const setHTML = (sel, html) => {
    const el = document.querySelector(sel);
    if (el && html != null) el.innerHTML = html;
};

// Wrap the last word in gradient span (keeps your styling)
function gradientize(title) {
    if (!title) return "";
    const parts = title.trim().split(" ");
    if (parts.length === 1) return `<span class="text-gradient">${parts[0]}</span>`;
    const last = parts.pop();
    return `${parts.join(" ")} <span class="text-gradient">${last}</span>`;
}

// Dynamic import of the language data file
async function loadLanguage(lang) {
    try {
        const mod = await import(`./lang/data-${lang}.js`);
        portfolioData = mod.default; // data object
        localStorage.setItem("portfolioLang", lang);
        document.documentElement.setAttribute("lang", lang);

        // Visually mark active language button
        document.querySelectorAll(".lang-btn").forEach(b =>
            b.classList.toggle("active", b.dataset.lang === lang)
        );

        populatePortfolio();
    } catch (e) {
        console.error("Failed to load language file:", e);
    }
}

function populatePortfolio() {
    const d = portfolioData;
    if (!d) return;

    // ====== NAV ======
    setText('a[href="#home"]', d.ui.nav.home);
    setText('a[href="#about"]', d.ui.nav.about);
    setText('a[href="#experience"]', d.ui.nav.experience);
    setText('a[href="#education"]', d.ui.nav.education);
    setText('a[href="#skills"]', d.ui.nav.skills);
    setText('a[href="#contact"]', d.ui.nav.contact);

    // Logo
    const logo = document.querySelector(".logo");
    if (logo) logo.textContent = d.personal.name[0] + d.personal.surname[0];

    // ====== HERO ======
    setHTML(
        ".hero-title",
        `${d.personal.name} <span class="text-gradient">${d.personal.surname}</span>`
    );
    setText(".hero-subtitle", d.personal.title);
    setText(".hero-description", d.personal.description);
    setText(".hero-buttons .btn-primary", d.ui.heroButtons.contact);
    setText(".hero-buttons .btn-outline", d.ui.heroButtons.work);

    // Socials
    const social = document.querySelectorAll(".social-icon");
    if (social[0]) social[0].href = `mailto:${d.personal.email}`;
    if (social[1]) social[1].href = d.personal.githubUrl;
    if (social[2]) social[2].href = d.personal.linkedinUrl;

    // ====== SECTIONS: TITLES + SUBTITLES ======
    setHTML("#about .section-title", gradientize(d.ui.sections.aboutTitle));
    setText("#about .section-subtitle", d.aboutSubtitle);

    setHTML("#experience .section-title", gradientize(d.ui.sections.experienceTitle));
    setText("#experience .section-subtitle", d.ui.sections.experienceSubtitle);

    setHTML("#education .section-title", gradientize(d.ui.sections.educationTitle));
    setText("#education .section-subtitle", d.ui.sections.educationSubtitle);

    setHTML("#skills .section-title", gradientize(d.ui.sections.skillsTitle));
    setText("#skills .section-subtitle", d.ui.sections.skillsSubtitle);

    setHTML("#languages .section-title", gradientize(d.ui.sections.languagesTitle));
    setText("#languages .section-subtitle", d.ui.sections.languagesSubtitle);

    setHTML("#contact .section-title", gradientize(d.ui.sections.contactTitle));
    setText("#contact .section-subtitle", d.ui.sections.contactSubtitle);

    // ====== ABOUT CARDS ======
    const aboutGrid = document.querySelector(".about-grid");
    if (aboutGrid) {
        aboutGrid.innerHTML = "";
        d.about.forEach((item, idx) => {
            const card = `
        <div class="card card-hover">
          <svg class="card-icon ${idx % 2 === 0 ? "icon-primary" : "icon-accent"}"
               xmlns="http://www.w3.org/2000/svg" width="48" height="48"
               viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.description}</p>
        </div>`;
            aboutGrid.insertAdjacentHTML("beforeend", card);
        });
    }

    // ====== EXPERIENCE ======
    const expList = document.querySelector(".experience-list");
    if (expList) {
        expList.innerHTML = "";
        d.experience.forEach(exp => {
            const card = `
        <div class="experience-card card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              <rect width="20" height="14" x="2" y="6" rx="2"/>
            </svg>
          </div>
          <div class="experience-content">
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-company">${exp.company}</p>
            <div class="experience-meta">
              <span class="meta-item">${exp.period}</span>
              <span class="meta-item">${exp.location}</span>
            </div>
            <ul class="experience-description">
              ${exp.description.map(x => `<li>${x}</li>`).join("")}
            </ul>
            <div class="tags">
              ${exp.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
        </div>`;
            expList.insertAdjacentHTML("beforeend", card);
        });
    }

    // ====== EDUCATION ======
    const eduGrid = document.querySelector(".education-grid");
    if (eduGrid) {
        eduGrid.innerHTML = "";
        d.education.forEach(e => {
            const card = `
        <div class="education-card card">
          <div class="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div>
            <h3 class="education-title">${e.degree}</h3>
            <p class="education-institution">${e.institution}</p>
            <p class="education-meta">${e.period}</p>
            <p class="education-meta">${e.location}</p>
          </div>
        </div>`;
            eduGrid.insertAdjacentHTML("beforeend", card);
        });
    }

    // ====== SKILLS ======
    const skillsGrid = document.querySelector(".skills-grid");
    if (skillsGrid) {
        skillsGrid.innerHTML = "";
        d.skills.forEach(s => {
            const card = `
        <div class="skill-card card">
          <div class="skill-header">
            <div class="skill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3 class="skill-title">${s.category}</h3>
          </div>
          <div class="skill-tags">
            ${s.items.map(i => `<span class="skill-tag">${i}</span>`).join("")}
          </div>
        </div>`;
            skillsGrid.insertAdjacentHTML("beforeend", card);
        });
    }

    // ====== LANGUAGES (human) ======
    const langsGrid = document.querySelector(".languages-grid");
    if (langsGrid) {
        langsGrid.innerHTML = "";
        d.languages.forEach(l => {
            const card = `
        <div class="language-card card">
          <div class="language-header">
            <svg class="language-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            <div>
              <h3 class="language-name">${l.name}</h3>
              <p class="language-level">${l.level}</p>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${l.proficiency}%"></div>
          </div>
          <ul class="language-skills">
            ${l.skills.map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>`;
            langsGrid.insertAdjacentHTML("beforeend", card);
        });
    }

    // ====== CONTACT PANEL ======
    // Left labels
    const labels = document.querySelectorAll(".contact-item .contact-label");
    if (labels[0]) labels[0].textContent = d.ui.contactLabels.email;
    if (labels[1]) labels[1].textContent = d.ui.contactLabels.phone;
    if (labels[2]) labels[2].textContent = d.ui.contactLabels.location;

    // Contact Info values
    const emailEl = document.querySelectorAll(".contact-link")[0];
    const phoneEl = document.querySelectorAll(".contact-link")[1];
    if (emailEl) { emailEl.textContent = d.personal.email; emailEl.href = `mailto:${d.personal.email}`; }
    if (phoneEl) { phoneEl.textContent = d.personal.phone; phoneEl.href = `tel:${d.personal.phone}`; }
    setHTML(".contact-text", `${d.personal.location.street}<br>${d.personal.location.city}<br>${d.personal.location.country}`);

    // Right CTA: custom heading/desc from data
    setText(".contact-cta .contact-heading", d.contact.heading);
    setText(".contact-cta .contact-description", d.contact.description);

    // CTA buttons (preserve SVG + replace label)
    const emailBtn = document.querySelector(".btn-primary.btn-full");
    const dlBtn = document.querySelector(".btn-outline.btn-full");
    if (emailBtn) {
        const svg = emailBtn.querySelector("svg");
        emailBtn.innerHTML = (svg ? svg.outerHTML + " " : "") + d.ui.contactButtons.email;
        emailBtn.href = `mailto:${d.personal.email}`;
    }
    if (dlBtn) {
        const svg = dlBtn.querySelector("svg");
        dlBtn.innerHTML = (svg ? svg.outerHTML + " " : "") + d.ui.contactButtons.download;
    }

    // ====== FOOTER ======
    const year = new Date().getFullYear();
    const main = document.querySelector(".footer p");
    const sub = document.querySelector(".footer-sub");
    if (main) main.textContent = d.ui.footer.copyright
        .replace("{year}", year)
        .replace("{name}", d.personal.fullName);
    if (sub) sub.textContent = `${d.ui.footer.nationality}: ${d.personal.nationality} | ${d.ui.footer.dob}: ${d.personal.dateOfBirth}`;

    // ====== META ======
    document.title = `${d.personal.fullName} - Software Developer Portfolio`;
    const authorMeta = document.querySelector('meta[name="author"]');
    if (authorMeta) authorMeta.content = d.personal.fullName;
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        const target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    });
});

// Fade-in animations
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Active link highlight
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "";
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) current = section.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
});

// Init
document.addEventListener("DOMContentLoaded", async () => {
    await loadLanguage(currentLang);

    // Observe elements
    const animated = document.querySelectorAll(".card, .section-title, .section-subtitle");
    animated.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });

    // Progress bars animate on view
    const bars = document.querySelectorAll(".progress-fill");
    const pObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = "0%";
                setTimeout(() => (entry.target.style.width = width), 100);
                pObs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    bars.forEach(b => pObs.observe(b));

    // Language switcher
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                currentLang = lang;
                await loadLanguage(lang);
            }
        });
    });
});

// Small style for active nav & lang button
const style = document.createElement("style");
style.textContent = `
  .nav-link.active { color: hsl(var(--primary)); }
  .language-switcher { display: flex; gap: .5rem; }
  .lang-btn { border: 1px solid hsl(var(--primary)); border-radius: .5rem; padding: .25rem .6rem; background: transparent; color: inherit; cursor: pointer; }
  .lang-btn.active, .lang-btn:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); }
`;
document.head.appendChild(style);
