// Personal Information Data
const portfolioData = {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Software Developer & Computer Science Student",
        description: "Passionate about building robust backend systems and creating innovative solutions with modern technologies.",
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

    about: [
        {
            title: "Backend Development",
            description: "Experienced in building scalable backend services with Python, FastAPI, PostgreSQL, and modern DevOps tools."
        },
        {
            title: "Full-Stack Skills",
            description: "Proficient in C++, Java, Python, JavaScript with React, and database management systems."
        },
        {
            title: "Problem Solver",
            description: "Strong analytical skills with experience in debugging, optimization, and implementing efficient solutions."
        }
    ],

    experience: [
        {
            title: "Werkstudent (Ferienjob) – Data Science",
            company: "Sanofi – TMU PMX (DMPK)",
            location: "Frankfurt, Germany",
            period: "August 2025 - October 2025",
            description: [
                "Supported PBPK modeling by updating drug models (Alfentanil, Itraconazole, Omeprazole, Verapamil) with new expression profiles",
                "Performed Parameter Identification and model fitting, adjusting parameters for improved prediction accuracy",
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
                "Database Management: Utilized PostgreSQL for relational database management",
                "Integrated Modern DevOps Tools: Docker, Kubernetes, CI/CD pipelines with Git and Gitlab",
                "Enhanced Code Quality: Static analysis with SonarQube and integration testing",
                "Centralized Logging: Configured Graylog for monitoring",
                "Maintained Order Management System with Python and FastAPI"
            ],
            tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Game Development - DungeonCrawler",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Germany",
            period: "April 2024 - July 2024",
            description: [
                "Developed 2D Dungeon-Crawler game with C++ and Qt",
                "Designed game mechanics: player movement, combat systems, item collections",
                "Applied OOP for modular and reusable code architecture",
                "Integrated Qt Widgets for interactive user interface",
                "Completed fully functional game demonstrating C++ and GUI development skills"
            ],
            tags: ["C++", "Qt", "Game Development", "OOP", "GUI"]
        },
        {
            title: "Math Tutor",
            company: "Private",
            location: "Douala, Cameroon",
            period: "May 2022 - August 2022",
            description: [
                "Provided private mathematics tutoring to students"
            ],
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
        {
            category: "Programming Languages",
            items: ["Python (Advanced)", "C++", "Java", "JavaScript", "TypeScript"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["FastAPI", "React", "Qt", "Pytest", "Tavern"]
        },
        {
            category: "Databases & Tools",
            items: ["PostgreSQL", "Git/GitHub/GitLab", "Docker", "Kubernetes"]
        },
        {
            category: "DevOps & Monitoring",
            items: ["CI/CD", "SonarQube", "Graylog", "Microsoft/MS Office"]
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
        heading: "Let's Connect",
        description: "I'm currently pursuing my Bachelor's in Computer Science and actively seeking internship and job opportunities. I'm passionate about backend development, DevOps, and building scalable systems."
    }
};
