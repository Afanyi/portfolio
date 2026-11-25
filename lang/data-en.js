export default {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Junior Software Developer · Full-Stack with Backend Focus",
        description:
            "I build backend and web applications mainly with Python, FastAPI, PostgreSQL and Docker.",
        email: "afanyiblasius4@gmail.com",
        location: {
            city: "Ober-Ramstadt",
            country: "Germany"
        },
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
            location: "Location"
        },
        contactButtons: {
            email: "Send Email",
            download: "Download CV"
        },
        footer: {
            copyright: "© {year} {name}. All rights reserved.",
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
            title: "Bachelor Thesis – Web App for Technical Assessment Interviews",
            company: "HCI Group, Hochschule Darmstadt",
            location: "Remote",
            period: "August 2026 – Present",
            description: [
                "Designed and prototyped a web app that analyzes students’ GitLab project contributions",
                "Automated infrastructure with OpenStack, Terraform and Ansible; CI/CD with GitLab and Docker",
                "Backend with Python, FastAPI, PostgreSQL and Redis; GitLab API integration",
                "Interactive dashboards to visualize and compare project activity"
            ],
            tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "GitLab API", "OpenStack", "Terraform", "Ansible", "GitLab CI/CD", "Docker"]
        },
        {
            title: "Web Development Intern",
            company: "ReiseFreudig",
            location: "Mannheim, Germany · On-site",
            period: "April 2026 – August 2026",
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
            title: "Backend Developer – Juno E-Commerce & Delivery Platform",
            company: "Group Project",
            location: "Remote / Darmstadt",
            period: "February 2026 – Present",
            description: [
                "Backend for an e-commerce platform with an integrated delivery system",
                "REST APIs with TypeScript, Prisma and OpenAPI/Swagger",
                "PostgreSQL/pgvector, Redis, Kafka, MinIO and Docker Compose",
                "Integrated Python AI services and worker processes"
            ],
            tags: ["TypeScript", "Prisma", "OpenAPI/Swagger", "PostgreSQL/pgvector", "Redis", "Kafka", "MinIO", "Docker Compose", "Python"]
        },
        {
            title: "Student Assistant (Summer Job) – Data Science",
            company: "Sanofi TMU PMX (DMPK)",
            location: "Frankfurt, Germany",
            period: "August 2025 – October 2025",
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
            title: "Software Engineering Project Lab – Order Management System",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Germany",
            period: "October 2024 – March 2025",
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
            title: "Game Development Project Lab – 2D Dungeon Crawler (C++/Qt)",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Germany",
            period: "April 2024 – August 2024",
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
            period: "January 2022 – October 2022",
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
            degree: "B.Sc. Computer Science",
            institution: "Hochschule Darmstadt",
            period: "2023 – Present",
            location: "Darmstadt, Germany"
        },
        {
            degree: "GCE A Level",
            institution: "College Saint Laurent",
            period: "September 2018 – July 2020",
            location: "Douala, Cameroon"
        },
        {
            degree: "DSH C1",
            institution: "Mariaspring",
            period: "February 2023 – April 2023",
            location: "Clausthal-Zellerfeld, Germany"
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
