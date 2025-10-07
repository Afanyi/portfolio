export default {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Software Developer & Computer Science Student",
        description:
            "Passionate about building robust backend systems and creating innovative solutions with modern technologies.",
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

    // UI Labels & captions
    ui: {
        nav: {
            home: "Home",
            about: "About",
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
            aboutTitle: "About Me",
            experienceTitle: "Work Experience",
            experienceSubtitle: "My professional journey and key achievements",
            educationTitle: "Education & Certifications",
            educationSubtitle: "My academic background and qualifications",
            skillsTitle: "Technical Skills",
            skillsSubtitle: "Technologies and tools I work with",
            languagesTitle: "Language Proficiency",
            languagesSubtitle: "Multilingual communication skills",
            contactTitle: "Get In Touch",
            contactSubtitle: "Feel free to reach out for opportunities or collaborations"
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
        }
    },

    aboutSubtitle:
        "A dedicated Computer Science student with hands-on experience in software development, backend systems, and game development.",
    about: [
        {
            title: "Backend Development",
            description:
                "Experienced in building scalable backend services with Python, FastAPI, PostgreSQL, and modern DevOps tools."
        },
        {
            title: "Full-Stack Skills",
            description:
                "Proficient in C++, Java, Python, JavaScript with React, and database management systems."
        },
        {
            title: "Problem Solver",
            description:
                "Strong analytical skills with experience in debugging, optimization, and implementing efficient solutions."
        }
    ],

    experience: [
        {
            title: "Werkstudent (Holiday Job) – Data Science",
            company: "Sanofi – TMU PMX (DMPK)",
            location: "Frankfurt, Germany",
            period: "August 2025 - October 2025",
            description: [
                "Supported PBPK modeling by updating drug models (Alfentanil, Itraconazole, Omeprazole, Verapamil) with new expression profiles",
                "Performed Parameter Identification and model fitting to improve prediction accuracy",
                "Plotted and analyzed PK parameters (Cmax, AUC) comparing old, new, PI, and observed data",
                "Automated data processing and visualization workflows in R (RStudio, VS Code)",
                "Applied PK-Sim and MoBi for model simulations and used Git for version control"
            ],
            tags: ["R", "RStudio", "VS Code", "PK-Sim", "MoBi", "Git", "Data Science", "PBPK Modeling"]
        },
        {
            title: "Software Engineering - Pizza Backend Service",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Germany",
            period: "October 2024 - Present",
            description: [
                "Database management with PostgreSQL",
                "Docker, Kubernetes, CI/CD with Git/GitLab",
                "Static analysis with SonarQube and integration testing",
                "Centralized logging with Graylog",
                "Order Management System with Python and FastAPI"
            ],
            tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Game Development - DungeonCrawler",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Germany",
            period: "April 2024 - July 2024",
            description: [
                "Developed a 2D dungeon-crawler with C++ and Qt",
                "Implemented player movement, combat, and item collection",
                "Applied OOP for modular architecture",
                "Used Qt Widgets for interactive UI"
            ],
            tags: ["C++", "Qt", "Game Development", "OOP", "GUI"]
        },
        {
            title: "Math Tutor",
            company: "Private",
            location: "Douala, Cameroon",
            period: "May 2022 - August 2022",
            description: ["Provided private mathematics tutoring to students"],
            tags: ["Teaching", "Mathematics"]
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
            period: "September 2018 - June 2022",
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
        { category: "Programming Languages", items: ["Python (Advanced)", "C++", "Java", "JavaScript", "TypeScript"] },
        { category: "Frameworks & Libraries", items: ["FastAPI", "React", "Qt", "Pytest", "Tavern"] },
        { category: "Databases & Tools", items: ["PostgreSQL", "Git/GitHub/GitLab", "Docker", "Kubernetes"] },
        { category: "DevOps & Monitoring", items: ["CI/CD", "SonarQube", "Graylog", "Microsoft/MS Office"] }
    ],

    languages: [
        { name: "English", level: "Native", proficiency: 100, skills: ["Speaking", "Reading", "Writing", "Listening"] },
        { name: "German", level: "C1 - Proficient", proficiency: 90, skills: ["Listening: C1", "Reading: C1", "Writing: B2", "Speaking: C1"] },
        { name: "French", level: "B2 - Independent", proficiency: 70, skills: ["Listening: B2", "Reading: B2", "Writing: B2", "Speaking: B2"] }
    ],

    contact: {
        heading: "Let's Connect",
        description:
            "I'm currently pursuing my Bachelor's in Computer Science and actively seeking internship and job opportunities. I'm passionate about backend development, DevOps, and building scalable systems."
    }
};
