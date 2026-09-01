export default {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Computer Science Student · Python & Full-Stack Developer",
        description:
            "I build backend and web applications mainly with Python, FastAPI, PostgreSQL and Docker.",
        email: "afanyiblasius4@gmail.com",
        phone: "+49 176 75281993",
        location: {
            street: "Adlergasse Straße 15",
            city: "64372 Ober-Ramstadt",
            country: "Germany"
        },
        nationality: "Cameroonian",
        dateOfBirth: "August 1, 2002",
        githubUrl: "https://github.com/Afanyi",
        linkedinUrl: "https://www.linkedin.com/in/afanyi-blasius-fornge-7595a5226"
    },

    ui: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            contact: "Contact"
        },
        heroButtons: {
            contact: "Get In Touch",
            work: "View Work"
        },
        sections: {
            aboutTitle: "About",
            projectsTitle: "Projects",
            projectsSubtitle: "",
            experienceTitle: "Experience",
            experienceSubtitle: "",
            educationTitle: "Education",
            educationSubtitle: "",
            skillsTitle: "Skills",
            skillsSubtitle: "",
            languagesTitle: "Languages",
            languagesSubtitle: "",
            contactTitle: "Contact",
            contactSubtitle: ""
        },
        contactLabels: {
            email: "Email",
            phone: "Phone",
            location: "Location"
        },
        contactButtons: {
            email: "Send Email",
            download: "Download CV"
        },
        footer: {
            copyright: "© {year} {name}. All rights reserved.",
            nationality: "Nationality",
            dob: "Date of Birth"
        },
        projects: {
            profile: "Open GitHub Profile",
            summary: "Showing {shown} of {count} public repositories, sorted by recent activity.",
            loading: "Loading GitHub repositories...",
            empty: "No public repositories are available yet.",
            error: "GitHub repositories could not be loaded right now.",
            fallbackDescription: "Public repository synced from my GitHub profile.",
            updated: "Updated",
            stars: "Stars",
            forks: "Forks",
            code: "View Code",
            live: "Live Demo"
        }
    },

    aboutSubtitle:
        "I'm a Computer Science student at Hochschule Darmstadt with a strong interest in backend development. I mainly work with Python, FastAPI, PostgreSQL, Docker and Kubernetes. Most of my experience comes from university projects, internships and personal projects.",

    about: [],

    experience: [
        {
            title: "Web Development Intern",
            company: "ReiseFreudig",
            location: "Mannheim, Germany · On-site",
            period: "April 2026 - Present",
            description: [
                "Modernizing multilingual websites using Mobirise, HTML, CSS and JavaScript",
                "Improving page structures, navigation, forms and responsive layouts",
                "Maintaining and adapting multilingual website content across different language versions",
                "Automating repetitive website maintenance tasks with Python scripts",
                "Supporting the development of an internal employee dashboard with Python, FastAPI, PostgreSQL and Docker",
                "Working on request management workflows for customer inquiries and internal processes"
            ],
            tags: ["Mobirise", "HTML", "CSS", "JavaScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Web Development"]
        },
        {
            title: "Werkstudent / Holiday Job – Data Science",
            company: "Sanofi – TMU PMX (DMPK)",
            location: "Frankfurt, Germany",
            period: "August 2025 - October 2025",
            description: [
                "Supported PBPK modeling by updating drug models with new expression profiles",
                "Performed parameter identification and model fitting to improve prediction accuracy",
                "Plotted and analyzed PK parameters such as Cmax and AUC",
                "Automated data processing and visualization workflows in R",
                "Used PK-Sim, MoBi, RStudio, VS Code and Git for model simulation and workflow management"
            ],
            tags: ["R", "RStudio", "VS Code", "PK-Sim", "MoBi", "Git", "Data Science", "PBPK Modeling"]
        },
        {
            title: "Software Engineering - Pizza Backend Service",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Germany",
            period: "October 2024 - Present",
            description: [
                "Built an order management backend using Python and FastAPI",
                "Designed and tested REST API endpoints for pizza orders and related resources",
                "Managed database structures with PostgreSQL",
                "Worked with Docker, Kubernetes and GitLab CI/CD",
                "Used SonarQube for static analysis and Graylog for centralized logging"
            ],
            tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "CI/CD", "GitLab"]
        },
        {
            title: "Game Development - DungeonCrawler",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Germany",
            period: "April 2024 - July 2024",
            description: [
                "Developed a 2D dungeon-crawler game with C++ and Qt",
                "Implemented player movement, combat, item collection and basic game logic",
                "Applied object-oriented programming for a modular architecture",
                "Used Qt Widgets to build an interactive graphical user interface"
            ],
            tags: ["C++", "Qt", "Game Development", "OOP", "GUI"]
        },
        {
            title: "Math Tutor",
            company: "Private",
            location: "Douala, Cameroon",
            period: "May 2022 - August 2022",
            description: [
                "Provided private mathematics tutoring to students",
                "Explained mathematical concepts in a simple and structured way",
                "Helped students prepare exercises and improve problem-solving skills"
            ],
            tags: ["Teaching", "Mathematics", "Communication"]
        }
    ],

    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Hochschule Darmstadt",
            period: "October 2023 - Present",
            location: "Darmstadt, Germany"
        },
        {
            degree: "DSH - Language Certificate C1",
            institution: "Mariaspring",
            period: "February 2023 - April 2023",
            location: "Clausthal-Zellerfeld, Germany"
        },
        {
            degree: "Certificate B1 and B2",
            institution: "ÖSD Cameroon",
            period: "September 2020 - April 2022",
            location: "Douala, Cameroon"
        },
        {
            degree: "GCE A Level Certificate (Abitur)",
            institution: "College Saint Laurent",
            period: "September 2018 - June 2020",
            location: "Douala, Cameroon"
        },
        {
            degree: "GCE Ordinary Level Certificate",
            institution: "Staff College",
            period: "September 2013 - June 2018",
            location: "Douala, Cameroon"
        }
    ],

    skills: [
        { category: "Main", items: ["Python", "FastAPI", "PostgreSQL", "Docker"] },
        {
            category: "Languages & Web",
            items: ["C / C++", "Java", "JavaScript", "TypeScript", "PHP", "Dart", "Rust", "SQL", "HTML", "CSS", "Bash", "R"]
        },
        {
            category: "Frameworks & APIs",
            items: ["Next.js", "React", "Flutter", "Prisma", "REST APIs", "OpenAPI / Swagger", "Fetch API", "JSON", "Qt"]
        },
        {
            category: "Data & Messaging",
            items: ["pgvector", "MariaDB", "Redis", "Kafka", "MinIO"]
        },
        {
            category: "DevOps",
            items: ["Kubernetes", "GitLab CI/CD", "Docker Compose", "SonarQube", "Graylog"]
        },
        {
            category: "Engineering",
            items: ["Backend Development", "API Design", "Database Design", "Integration Testing", "Logging", "Clean Code", "OOP", "Responsive UI", "Client-Server Communication"]
        },
        {
            category: "Tools & Systems",
            items: ["Git", "GitHub", "GitLab", "pgAdmin 4", "VS Code", "PyCharm", "CLion", "Qt Creator", "Android Studio", "Apache", "Debian", "Ubuntu", "Windows 10 / 11"]
        }
    ],

    languages: [
        {
            name: "English",
            level: "Native",
            proficiency: 100,
            skills: ["Speaking", "Reading", "Writing", "Listening"]
        },
        {
            name: "German",
            level: "C1 - Proficient",
            proficiency: 90,
            skills: ["Listening: C1", "Reading: C1", "Writing: B2", "Speaking: C1"]
        },
        {
            name: "French",
            level: "B2 - Independent",
            proficiency: 70,
            skills: ["Listening: B2", "Reading: B2", "Writing: B2", "Speaking: B2"]
        }
    ],

    contact: {
        heading: "Contact",
        description:
            "The best way to reach me is by email. You can also find my work on GitHub and connect with me on LinkedIn."
    }
};
