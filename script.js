let portfolioData = null;

const githubState = {
    username: null,
    repos: [],
    status: "idle"
};

const supportedLangs = ["en", "de", "fr"];
const observedElements = new WeakSet();
const observedProgressBars = new WeakSet();

let currentLang =
    localStorage.getItem("portfolioLang") ||
    (navigator.language || "en").slice(0, 2);

if (!supportedLangs.includes(currentLang)) currentLang = "en";

const setText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element && text != null) element.textContent = text;
};

const setHTML = (selector, html) => {
    const element = document.querySelector(selector);
    if (element && html != null) element.innerHTML = html;
};

const setMetaContent = (selector, content) => {
    const meta = document.querySelector(selector);
    if (meta && content != null) meta.setAttribute("content", content);
};

function gradientize(title) {
    if (!title) return "";

    const parts = title.trim().split(" ");
    if (parts.length === 1) return `<span class="text-gradient">${parts[0]}</span>`;

    const lastWord = parts.pop();
    return `${parts.join(" ")} <span class="text-gradient">${lastWord}</span>`;
}

function getGithubUsername(githubUrl) {
    try {
        const url = new URL(githubUrl);
        return url.pathname.replace(/^\/|\/$/g, "").split("/")[0] || null;
    } catch {
        return null;
    }
}

function formatRepoDate(dateString) {
    return new Intl.DateTimeFormat(currentLang, {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(new Date(dateString));
}

function createProjectMetaItem(text) {
    const item = document.createElement("span");
    item.className = "project-meta-item";
    item.textContent = text;
    return item;
}

function createProjectLink(href, text, variant = "secondary") {
    const link = document.createElement("a");
    link.className = `project-link ${variant === "primary" ? "project-link-primary" : ""}`.trim();
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = text;
    return link;
}

function createProjectCard(repo, ui) {
    const card = document.createElement("article");
    card.className = "project-card card";

    const header = document.createElement("div");
    header.className = "project-header";

    const title = document.createElement("h3");
    title.className = "project-title";

    const titleLink = document.createElement("a");
    titleLink.className = "project-title-link";
    titleLink.href = repo.html_url;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.textContent = repo.name;
    title.appendChild(titleLink);
    header.appendChild(title);

    if (repo.language) {
        const language = document.createElement("span");
        language.className = "project-language";
        language.textContent = repo.language;
        header.appendChild(language);
    }

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = repo.description || ui.fallbackDescription;

    const meta = document.createElement("div");
    meta.className = "project-meta";
    meta.appendChild(createProjectMetaItem(`${ui.updated}: ${formatRepoDate(repo.pushed_at)}`));
    meta.appendChild(createProjectMetaItem(`${ui.stars}: ${repo.stargazers_count}`));
    meta.appendChild(createProjectMetaItem(`${ui.forks}: ${repo.forks_count}`));

    const links = document.createElement("div");
    links.className = "project-links";
    links.appendChild(createProjectLink(repo.html_url, ui.code));

    const homepage = repo.homepage && repo.homepage.trim();
    if (homepage) {
        links.appendChild(createProjectLink(homepage, ui.live, "primary"));
    }

    card.append(header, description, meta, links);
    return card;
}

function renderGithubProjects() {
    const data = portfolioData;
    if (!data) return;

    const grid = document.querySelector(".projects-grid");
    const summary = document.querySelector(".projects-summary");
    const status = document.querySelector(".projects-status");

    if (!grid || !summary || !status) return;

    const ui = data.ui.projects;
    grid.innerHTML = "";
    summary.textContent = "";
    status.textContent = "";
    grid.setAttribute("aria-busy", githubState.status === "loading" ? "true" : "false");

    if (githubState.status === "loading") {
        status.textContent = ui.loading;
        return;
    }

    if (githubState.status === "error") {
        status.textContent = ui.error;
        return;
    }

    if (githubState.status !== "loaded") {
        return;
    }

    if (!githubState.repos.length) {
        status.textContent = ui.empty;
        return;
    }

    summary.textContent = ui.summary.replace("{count}", githubState.repos.length);
    githubState.repos.forEach(repo => {
        grid.appendChild(createProjectCard(repo, ui));
    });

    observeAnimatedElements(grid.querySelectorAll(".project-card"));
}

async function syncGithubProjects() {
    const username = getGithubUsername(portfolioData?.personal?.githubUrl);

    if (!username) {
        githubState.username = null;
        githubState.repos = [];
        githubState.status = "error";
        renderGithubProjects();
        return;
    }

    if (githubState.username === username && githubState.status === "loaded") {
        renderGithubProjects();
        return;
    }

    if (githubState.username === username && githubState.status === "loading") {
        renderGithubProjects();
        return;
    }

    githubState.username = username;
    githubState.repos = [];
    githubState.status = "loading";
    renderGithubProjects();

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&direction=desc`,
            { headers: { Accept: "application/vnd.github+json" } }
        );

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const repos = await response.json();
        githubState.repos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        githubState.status = "loaded";
    } catch (error) {
        console.error("Failed to load GitHub repositories:", error);
        githubState.status = "error";
    }

    renderGithubProjects();
}

function populatePortfolio() {
    const data = portfolioData;
    if (!data) return;

    setText('.nav-link[href="#home"]', data.ui.nav.home);
    setText('.nav-link[href="#about"]', data.ui.nav.about);
    setText('.nav-link[href="#projects"]', data.ui.nav.projects);
    setText('.nav-link[href="#experience"]', data.ui.nav.experience);
    setText('.nav-link[href="#education"]', data.ui.nav.education);
    setText('.nav-link[href="#skills"]', data.ui.nav.skills);
    setText('.nav-link[href="#contact"]', data.ui.nav.contact);

    const logo = document.querySelector(".logo");
    if (logo) logo.textContent = data.personal.name[0] + data.personal.surname[0];

    setHTML(
        ".hero-title",
        `${data.personal.name} <span class="text-gradient">${data.personal.surname}</span>`
    );
    setText(".hero-subtitle", data.personal.title);
    setText(".hero-description", data.personal.description);
    setText(".hero-buttons .btn-primary", data.ui.heroButtons.contact);
    setText(".hero-buttons .btn-outline", data.ui.heroButtons.work);

    const socialLinks = document.querySelectorAll(".social-icon");
    if (socialLinks[0]) socialLinks[0].href = `mailto:${data.personal.email}`;
    if (socialLinks[1]) socialLinks[1].href = data.personal.githubUrl;
    if (socialLinks[2]) socialLinks[2].href = data.personal.linkedinUrl;

    setHTML("#about .section-title", gradientize(data.ui.sections.aboutTitle));
    setText("#about .section-subtitle", data.aboutSubtitle);

    setHTML("#projects .section-title", gradientize(data.ui.sections.projectsTitle));
    setText("#projects .section-subtitle", data.ui.sections.projectsSubtitle);

    const githubProfileLink = document.querySelector(".github-profile-link");
    if (githubProfileLink) {
        githubProfileLink.href = data.personal.githubUrl;
        githubProfileLink.textContent = data.ui.projects.profile;
    }

    setHTML("#experience .section-title", gradientize(data.ui.sections.experienceTitle));
    setText("#experience .section-subtitle", data.ui.sections.experienceSubtitle);

    setHTML("#education .section-title", gradientize(data.ui.sections.educationTitle));
    setText("#education .section-subtitle", data.ui.sections.educationSubtitle);

    setHTML("#skills .section-title", gradientize(data.ui.sections.skillsTitle));
    setText("#skills .section-subtitle", data.ui.sections.skillsSubtitle);

    setHTML("#languages .section-title", gradientize(data.ui.sections.languagesTitle));
    setText("#languages .section-subtitle", data.ui.sections.languagesSubtitle);

    setHTML("#contact .section-title", gradientize(data.ui.sections.contactTitle));
    setText("#contact .section-subtitle", data.ui.sections.contactSubtitle);

    const aboutGrid = document.querySelector(".about-grid");
    if (aboutGrid) {
        aboutGrid.innerHTML = "";
        data.about.forEach((item, index) => {
            const card = `
        <div class="card card-hover">
          <svg class="card-icon ${index % 2 === 0 ? "icon-primary" : "icon-accent"}"
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

    const experienceList = document.querySelector(".experience-list");
    if (experienceList) {
        experienceList.innerHTML = "";
        data.experience.forEach(exp => {
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
              ${exp.description.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <div class="tags">
              ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
        </div>`;
            experienceList.insertAdjacentHTML("beforeend", card);
        });
    }

    const educationGrid = document.querySelector(".education-grid");
    if (educationGrid) {
        educationGrid.innerHTML = "";
        data.education.forEach(item => {
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
            <h3 class="education-title">${item.degree}</h3>
            <p class="education-institution">${item.institution}</p>
            <p class="education-meta">${item.period}</p>
            <p class="education-meta">${item.location}</p>
          </div>
        </div>`;
            educationGrid.insertAdjacentHTML("beforeend", card);
        });
    }

    const skillsGrid = document.querySelector(".skills-grid");
    if (skillsGrid) {
        skillsGrid.innerHTML = "";
        data.skills.forEach(skill => {
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
            <h3 class="skill-title">${skill.category}</h3>
          </div>
          <div class="skill-tags">
            ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
          </div>
        </div>`;
            skillsGrid.insertAdjacentHTML("beforeend", card);
        });
    }

    const languagesGrid = document.querySelector(".languages-grid");
    if (languagesGrid) {
        languagesGrid.innerHTML = "";
        data.languages.forEach(language => {
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
              <h3 class="language-name">${language.name}</h3>
              <p class="language-level">${language.level}</p>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" data-width="${language.proficiency}%"></div>
          </div>
          <ul class="language-skills">
            ${language.skills.map(skill => `<li>${skill}</li>`).join("")}
          </ul>
        </div>`;
            languagesGrid.insertAdjacentHTML("beforeend", card);
        });
    }

    const labels = document.querySelectorAll(".contact-item .contact-label");
    if (labels[0]) labels[0].textContent = data.ui.contactLabels.email;
    if (labels[1]) labels[1].textContent = data.ui.contactLabels.phone;
    if (labels[2]) labels[2].textContent = data.ui.contactLabels.location;

    const emailLink = document.querySelectorAll(".contact-link")[0];
    const phoneLink = document.querySelectorAll(".contact-link")[1];
    const phoneHref = `tel:${data.personal.phone.replace(/\s+/g, "")}`;

    if (emailLink) {
        emailLink.textContent = data.personal.email;
        emailLink.href = `mailto:${data.personal.email}`;
    }

    if (phoneLink) {
        phoneLink.textContent = data.personal.phone;
        phoneLink.href = phoneHref;
    }

    setHTML(
        ".contact-text",
        `${data.personal.location.street}<br>${data.personal.location.city}<br>${data.personal.location.country}`
    );

    setText(".contact-cta .contact-heading", data.contact.heading);
    setText(".contact-cta .contact-description", data.contact.description);

    const emailButton = document.querySelector(".btn-primary.btn-full");
    const downloadButton = document.querySelector(".btn-outline.btn-full");

    if (emailButton) {
        const icon = emailButton.querySelector("svg");
        emailButton.innerHTML = (icon ? `${icon.outerHTML} ` : "") + data.ui.contactButtons.email;
        emailButton.href = `mailto:${data.personal.email}`;
    }

    if (downloadButton) {
        const icon = downloadButton.querySelector("svg");
        downloadButton.innerHTML = (icon ? `${icon.outerHTML} ` : "") + data.ui.contactButtons.download;
    }

    const year = new Date().getFullYear();
    const footerMain = document.querySelector(".footer p");
    const footerSub = document.querySelector(".footer-sub");

    if (footerMain) {
        footerMain.textContent = data.ui.footer.copyright
            .replace("{year}", year)
            .replace("{name}", data.personal.fullName);
    }

    if (footerSub) {
        footerSub.textContent =
            `${data.ui.footer.nationality}: ${data.personal.nationality} | ` +
            `${data.ui.footer.dob}: ${data.personal.dateOfBirth}`;
    }

    const pageTitle = `${data.personal.fullName} - ${data.personal.title}`;
    document.title = pageTitle;
    setMetaContent('meta[name="description"]', data.personal.description);
    setMetaContent('meta[name="author"]', data.personal.fullName);
    setMetaContent('meta[property="og:title"]', pageTitle);
    setMetaContent('meta[property="og:description"]', data.personal.description);

    renderGithubProjects();
    observeAnimatedElements();
    observeProgressBars();
}

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    });
});

const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
    });
}, observerOptions);

const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.style.width = entry.target.dataset.width || "0%";
        progressObserver.unobserve(entry.target);
    });
}, observerOptions);

function observeAnimatedElements(
    elements = document.querySelectorAll(".card, .section-title, .section-subtitle, .projects-summary, .projects-actions")
) {
    elements.forEach(element => {
        if (!element || observedElements.has(element)) return;

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(element);
        observedElements.add(element);
    });
}

function observeProgressBars() {
    document.querySelectorAll(".progress-fill").forEach(bar => {
        if (observedProgressBars.has(bar)) return;

        bar.style.width = "0%";
        progressObserver.observe(bar);
        observedProgressBars.add(bar);
    });
}

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentSection = "";

    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
    });
});

document.addEventListener("DOMContentLoaded", async () => {
    await loadLanguage(currentLang);

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", async () => {
            const nextLang = button.dataset.lang;
            if (nextLang === currentLang) return;

            currentLang = nextLang;
            await loadLanguage(nextLang);
        });
    });
});

async function loadLanguage(lang) {
    try {
        const module = await import(`./lang/data-${lang}.js`);
        portfolioData = module.default;
        localStorage.setItem("portfolioLang", lang);
        document.documentElement.setAttribute("lang", lang);

        document.querySelectorAll(".lang-btn").forEach(button => {
            button.classList.toggle("active", button.dataset.lang === lang);
        });

        populatePortfolio();
        void syncGithubProjects();
    } catch (error) {
        console.error("Failed to load language file:", error);
    }
}
