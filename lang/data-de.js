export default {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Softwareentwickler & Informatikstudent",
        description:
            "Leidenschaftlich im Aufbau robuster Backendsysteme und in der Entwicklung innovativer Lösungen mit modernen Technologien.",
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
            projectsTitle: "GitHub-Projekte",
            projectsSubtitle: "Öffentliche Repositories direkt von GitHub synchronisiert",
            experienceTitle: "Berufserfahrung",
            experienceSubtitle: "Mein beruflicher Werdegang und wichtigste Erfolge",
            educationTitle: "Ausbildung & Zertifikate",
            educationSubtitle: "Mein akademischer Hintergrund und Qualifikationen",
            skillsTitle: "Technische Fähigkeiten",
            skillsSubtitle: "Technologien und Tools, mit denen ich arbeite",
            languagesTitle: "Sprachkenntnisse",
            languagesSubtitle: "Mehrsprachige Kommunikationsfähigkeiten",
            contactTitle: "Kontakt aufnehmen",
            contactSubtitle: "Gerne bei Möglichkeiten oder Kooperationen melden"
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
            summary: "{count} öffentliche Repositories von GitHub, sortiert nach letzter Aktivität.",
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
        "Engagierter Informatikstudent mit praktischer Erfahrung in Webentwicklung, Backendsystemen, Datenbanken und Softwareentwicklungsprojekten.",
    about: [
        {
            title: "Aktuelles Webentwicklungspraktikum",
            description:
                "Derzeit arbeite ich vor Ort bei ReiseFreudig in Mannheim und unterstütze die Modernisierung mehrsprachiger Websites sowie interner digitaler Arbeitsabläufe."
        },
        {
            title: "Backend-Entwicklung",
            description:
                "Erfahrung im Aufbau von Backend-Services und APIs mit Python, FastAPI, PostgreSQL, Docker und modernen Entwicklungsworkflows."
        },
        {
            title: "Web- & Automatisierungsfähigkeiten",
            description:
                "Kenntnisse in HTML, CSS, JavaScript und Python-Automatisierung für die Wartung von Websites, Verbesserung von Seitenstrukturen und Optimierung wiederkehrender Aufgaben."
        }
    ],

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
        {
            category: "Programmiersprachen",
            items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "PHP", "SQL", "R"]
        },
        {
            category: "Frameworks & Bibliotheken",
            items: ["FastAPI", "React", "Qt", "Pytest", "Tavern"]
        },
        {
            category: "Webentwicklung",
            items: ["HTML", "CSS", "JavaScript", "Mobirise", "Responsive Design", "REST-APIs"]
        },
        {
            category: "Datenbanken & Tools",
            items: ["PostgreSQL", "MariaDB", "Git", "GitHub", "GitLab", "Docker"]
        },
        {
            category: "DevOps & Monitoring",
            items: ["CI/CD", "Kubernetes", "SonarQube", "Graylog", "VS Code", "PyCharm"]
        }
    ],

    languages: [
        { name: "Englisch", level: "Muttersprache", proficiency: 100, skills: ["Sprechen", "Lesen", "Schreiben", "Hören"] },
        { name: "Deutsch", level: "C1 - Fortgeschritten", proficiency: 90, skills: ["Hören: C1", "Lesen: C1", "Schreiben: B2", "Sprechen: C1"] },
        { name: "Französisch", level: "B2 - Selbstständig", proficiency: 70, skills: ["Hören: B2", "Lesen: B2", "Schreiben: B2", "Sprechen: B2"] }
    ],

    contact: {
        heading: "Lass uns vernetzen",
        description:
            "Ich absolviere derzeit meinen Bachelor in Informatik und sammle praktische Erfahrung als Webentwicklungspraktikant bei ReiseFreudig. Ich interessiere mich für Backend-Entwicklung, Webanwendungen, Automatisierung und skalierbare Softwarelösungen."
    }
};
