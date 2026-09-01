export default {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Informatikstudent · Python- & Full-Stack-Entwickler",
        description:
            "Ich entwickle Backend- und Webanwendungen hauptsächlich mit Python, FastAPI, PostgreSQL und Docker.",
        email: "afanyiblasius4@gmail.com",
        phone: "+49 176 75281993",
        location: {
            street: "Adlergasse Straße 15",
            city: "64372 Ober-Ramstadt",
            country: "Deutschland"
        },
        nationality: "Kameruner",
        dateOfBirth: "1. August 2002",
        githubUrl: "https://github.com/Afanyi",
        linkedinUrl: "https://www.linkedin.com/in/afanyi-blasius-fornge-7595a5226"
    },

    ui: {
        nav: {
            home: "Start",
            about: "Über mich",
            projects: "Projekte",
            experience: "Erfahrung",
            education: "Ausbildung",
            skills: "Fähigkeiten",
            contact: "Kontakt"
        },
        heroButtons: {
            contact: "Kontakt aufnehmen",
            work: "Projekte ansehen"
        },
        sections: {
            aboutTitle: "Über mich",
            projectsTitle: "Projekte",
            projectsSubtitle: "",
            experienceTitle: "Berufserfahrung",
            experienceSubtitle: "",
            educationTitle: "Ausbildung",
            educationSubtitle: "",
            skillsTitle: "Fähigkeiten",
            skillsSubtitle: "",
            languagesTitle: "Sprachkenntnisse",
            languagesSubtitle: "",
            contactTitle: "Kontakt",
            contactSubtitle: ""
        },
        contactLabels: {
            email: "E-Mail",
            phone: "Telefon",
            location: "Standort"
        },
        contactButtons: {
            email: "E-Mail senden",
            download: "Lebenslauf herunterladen"
        },
        footer: {
            copyright: "© {year} {name}. Alle Rechte vorbehalten.",
            nationality: "Nationalität",
            dob: "Geburtsdatum"
        },
        projects: {
            profile: "GitHub-Profil öffnen",
            summary: "{shown} von {count} öffentlichen Repositories, sortiert nach letzter Aktivität.",
            loading: "GitHub-Repositories werden geladen...",
            empty: "Derzeit sind keine öffentlichen Repositories verfügbar.",
            error: "GitHub-Repositories konnten gerade nicht geladen werden.",
            fallbackDescription: "Öffentliches Repository, direkt aus meinem GitHub-Profil synchronisiert.",
            updated: "Aktualisiert",
            stars: "Stars",
            forks: "Forks",
            code: "Code ansehen",
            live: "Live-Demo"
        }
    },

    aboutSubtitle:
        "Ich studiere Informatik an der Hochschule Darmstadt und interessiere mich besonders für Backend-Entwicklung. Ich arbeite hauptsächlich mit Python, FastAPI, PostgreSQL, Docker und Kubernetes. Meine praktische Erfahrung stammt vor allem aus Hochschulprojekten, Praktika und eigenen Projekten.",
    about: [],

    experience: [
        {
            title: "Webentwicklungspraktikum",
            company: "ReiseFreudig",
            location: "Mannheim, Deutschland · Vor Ort",
            period: "April 2026 - heute",
            description: [
                "Modernisierung mehrsprachiger Websites mit Mobirise, HTML, CSS und JavaScript",
                "Verbesserung von Seitenstrukturen, Navigation, Formularen und responsiven Layouts",
                "Pflege und Anpassung mehrsprachiger Website-Inhalte in verschiedenen Sprachversionen",
                "Automatisierung wiederkehrender Website-Wartungsaufgaben mit Python-Skripten",
                "Unterstützung der Entwicklung eines internen Mitarbeiter-Dashboards mit Python, FastAPI, PostgreSQL und Docker",
                "Bearbeitung von Anfrage-Workflows für Kundenanfragen und interne Prozesse"
            ],
            tags: ["Mobirise", "HTML", "CSS", "JavaScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Webentwicklung"]
        },
        {
            title: "Werkstudent (Ferienjob) – Data Science",
            company: "Sanofi – TMU PMX (DMPK)",
            location: "Frankfurt, Deutschland",
            period: "August 2025 - Oktober 2025",
            description: [
                "Unterstützung des PBPK-Modellierens durch Aktualisierung von Arzneimittelmodellen (Alfentanil, Itraconazol, Omeprazol, Verapamil) mit neuen Expressionsprofilen",
                "Durchführung von Parameteridentifikation und Modellanpassung zur Verbesserung der Vorhersagegenauigkeit",
                "Auswertung von PK-Parametern (Cmax, AUC) im Vergleich alt/neu/PI/Beobachtung",
                "Automatisierte Datenaufbereitung und Visualisierung in R (RStudio, VS Code)",
                "Simulationen mit PK-Sim und MoBi; Versionsverwaltung mit Git"
            ],
            tags: ["R", "RStudio", "VS Code", "PK-Sim", "MoBi", "Git", "Data Science", "PBPK Modeling"]
        },
        {
            title: "Software Engineering - Pizza Backend Service",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Deutschland",
            period: "Oktober 2024 - heute",
            description: [
                "Datenbankverwaltung mit PostgreSQL",
                "Docker, Kubernetes, CI/CD mit Git/GitLab",
                "Statische Analyse mit SonarQube und Integrationstests",
                "Zentrales Logging mit Graylog",
                "Order-Management-System mit Python und FastAPI"
            ],
            tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Game Development - DungeonCrawler",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Deutschland",
            period: "April 2024 - Juli 2024",
            description: [
                "Entwicklung eines 2D-Dungeon-Crawlers mit C++ und Qt",
                "Spielmechaniken: Bewegung, Kampf, Item-Sammeln",
                "OOP-Architektur für Modularität",
                "Interaktive Oberfläche mit Qt Widgets"
            ],
            tags: ["C++", "Qt", "Game Development", "OOP", "GUI"]
        },
        {
            title: "Nachhilfelehrer (Mathematik)",
            company: "Privat",
            location: "Douala, Kamerun",
            period: "Mai 2022 - August 2022",
            description: ["Private Mathematiknachhilfe für Schüler:innen"],
            tags: ["Lehren", "Mathematik"]
        }
    ],

    education: [
        {
            degree: "Bachelor of Science (Informatik)",
            institution: "Hochschule Darmstadt",
            period: "Oktober 2023 - heute",
            location: "Darmstadt, Deutschland"
        },
        {
            degree: "DSH – Sprachzertifikat C1",
            institution: "Mariaspring",
            period: "Februar 2023 - April 2023",
            location: "Clausthal-Zellerfeld, Deutschland"
        },
        {
            degree: "Zertifikate B1 und B2",
            institution: "ÖSD Kamerun",
            period: "September 2020 - April 2022",
            location: "Douala, Kamerun"
        },
        {
            degree: "GCE A Level (Abitur-äquivalent)",
            institution: "College Saint Laurent",
            period: "September 2018 - Juni 2020",
            location: "Douala, Kamerun"
        },
        {
            degree: "GCE Ordinary Level",
            institution: "Staff College",
            period: "September 2013 - Juni 2018",
            location: "Douala, Kamerun"
        }
    ],

    skills: [
        { category: "Schwerpunkt", items: ["Python", "FastAPI", "PostgreSQL", "Docker"] },
        {
            category: "Sprachen & Web",
            items: ["C / C++", "Java", "JavaScript", "TypeScript", "PHP", "Dart", "Rust", "SQL", "HTML", "CSS", "Bash", "R"]
        },
        {
            category: "Frameworks & APIs",
            items: ["Next.js", "React", "Flutter", "Prisma", "REST APIs", "OpenAPI / Swagger", "Fetch API", "JSON", "Qt"]
        },
        {
            category: "Daten & Messaging",
            items: ["pgvector", "MariaDB", "Redis", "Kafka", "MinIO"]
        },
        {
            category: "DevOps",
            items: ["Kubernetes", "GitLab CI/CD", "Docker Compose", "SonarQube", "Graylog"]
        },
        {
            category: "Software Engineering",
            items: ["Backend-Entwicklung", "API-Design", "Datenbankdesign", "Integrationstests", "Logging", "Clean Code", "OOP", "Responsive UI", "Client-Server-Kommunikation"]
        },
        {
            category: "Werkzeuge & Systeme",
            items: ["Git", "GitHub", "GitLab", "pgAdmin 4", "VS Code", "PyCharm", "CLion", "Qt Creator", "Android Studio", "Apache", "Debian", "Ubuntu", "Windows 10 / 11"]
        }
    ],

    languages: [
        { name: "Englisch", level: "Muttersprache", proficiency: 100, skills: ["Sprechen", "Lesen", "Schreiben", "Hören"] },
        { name: "Deutsch", level: "C1 - Fortgeschritten", proficiency: 90, skills: ["Hören: C1", "Lesen: C1", "Schreiben: B2", "Sprechen: C1"] },
        { name: "Französisch", level: "B2 - Selbstständig", proficiency: 70, skills: ["Hören: B2", "Lesen: B2", "Schreiben: B2", "Sprechen: B2"] }
    ],

    contact: {
        heading: "Kontakt",
        description:
            "Am besten erreichst du mich per E-Mail. Meine Projekte findest du auf GitHub; auf LinkedIn können wir uns ebenfalls vernetzen."
    }
};
