export default {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Étudiant en informatique · Développeur Python & Full-Stack",
        description:
            "Je développe principalement des applications backend et web avec Python, FastAPI, PostgreSQL et Docker.",
        email: "afanyiblasius4@gmail.com",
        phone: "+49 176 75281993",
        location: {
            street: "Adlergasse Straße 15",
            city: "64372 Ober-Ramstadt",
            country: "Allemagne"
        },
        nationality: "Camerounais",
        dateOfBirth: "1 août 2002",
        githubUrl: "https://github.com/Afanyi",
        linkedinUrl: "https://www.linkedin.com/in/afanyi-blasius-fornge-7595a5226"
    },

    ui: {
        nav: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            experience: "Expérience",
            education: "Formation",
            skills: "Compétences",
            contact: "Contact"
        },
        heroButtons: {
            contact: "Me contacter",
            work: "Voir les projets"
        },
        sections: {
            aboutTitle: "À propos",
            projectsTitle: "Projets",
            projectsSubtitle: "",
            experienceTitle: "Expérience",
            experienceSubtitle: "",
            educationTitle: "Formation",
            educationSubtitle: "",
            skillsTitle: "Compétences",
            skillsSubtitle: "",
            languagesTitle: "Langues",
            languagesSubtitle: "",
            contactTitle: "Contact",
            contactSubtitle: ""
        },
        contactLabels: {
            email: "E-mail",
            phone: "Téléphone",
            location: "Localisation"
        },
        contactButtons: {
            email: "Envoyer un e-mail",
            download: "Télécharger le CV"
        },
        footer: {
            copyright: "© {year} {name}. Tous droits réservés.",
            nationality: "Nationalité",
            dob: "Date de naissance"
        },
        projects: {
            profile: "Ouvrir le profil GitHub",
            summary: "{shown} dépôts affichés sur {count}, triés par activité récente.",
            loading: "Chargement des dépôts GitHub...",
            empty: "Aucun dépôt public n’est disponible pour le moment.",
            error: "Les dépôts GitHub n’ont pas pu être chargés pour le moment.",
            fallbackDescription: "Dépôt public synchronisé depuis mon profil GitHub.",
            updated: "Mis à jour",
            stars: "Stars",
            forks: "Forks",
            code: "Voir le code",
            live: "Démo en ligne"
        }
    },

    aboutSubtitle:
        "Je suis étudiant en informatique à la Hochschule Darmstadt et je m'intéresse particulièrement au développement backend. Je travaille principalement avec Python, FastAPI, PostgreSQL, Docker et Kubernetes. Mon expérience vient surtout de projets universitaires, de stages et de projets personnels.",
    about: [],

    experience: [
        {
            title: "Stage en développement web",
            company: "ReiseFreudig",
            location: "Mannheim, Allemagne · Sur place",
            period: "Avril 2026 - présent",
            description: [
                "Modernisation de sites web multilingues avec Mobirise, HTML, CSS et JavaScript",
                "Amélioration des structures de pages, de la navigation, des formulaires et des mises en page responsives",
                "Maintenance et adaptation de contenu web multilingue dans différentes versions linguistiques",
                "Automatisation de tâches répétitives de maintenance de sites avec des scripts Python",
                "Soutien au développement d'un tableau de bord interne pour les employés avec Python, FastAPI, PostgreSQL et Docker",
                "Gestion des flux de travail pour les demandes des clients et les processus internes"
            ],
            tags: ["Mobirise", "HTML", "CSS", "JavaScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Développement web"]
        },
        {
            title: "Werkstudent (emploi de vacances) – Data Science",
            company: "Sanofi – TMU PMX (DMPK)",
            location: "Francfort, Allemagne",
            period: "Août 2025 - Octobre 2025",
            description: [
                "Soutien à la modélisation PBPK en mettant à jour des modèles de médicaments (Alfentanil, Itraconazole, Omeprazole, Verapamil) avec de nouveaux profils d’expression",
                "Identification de paramètres et ajustement de modèles pour améliorer la précision des prédictions",
                "Analyse des paramètres PK (Cmax, AUC) en comparant ancien, nouveau, PI et données observées",
                "Automatisation des traitements et visualisations de données en R (RStudio, VS Code)",
                "Simulations avec PK-Sim et MoBi ; gestion de version avec Git"
            ],
            tags: ["R", "RStudio", "VS Code", "PK-Sim", "MoBi", "Git", "Data Science", "PBPK Modeling"]
        },
        {
            title: "Génie logiciel - Pizza Backend Service",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Allemagne",
            period: "Octobre 2024 - présent",
            description: [
                "Gestion de bases de données avec PostgreSQL",
                "Docker, Kubernetes, CI/CD avec Git/GitLab",
                "Analyse statique avec SonarQube et tests d’intégration",
                "Journalisation centralisée avec Graylog",
                "Système de gestion des commandes avec Python et FastAPI"
            ],
            tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"]
        },
        {
            title: "Développement de jeu - DungeonCrawler",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Allemagne",
            period: "Avril 2024 - Juillet 2024",
            description: [
                "Développement d’un dungeon-crawler 2D avec C++ et Qt",
                "Mécaniques de jeu : déplacement, combat, collecte d’objets",
                "Architecture modulaire avec POO",
                "Interface interactive avec Qt Widgets"
            ],
            tags: ["C++", "Qt", "Développement de jeux", "POO", "GUI"]
        },
        {
            title: "Professeur de maths",
            company: "Privé",
            location: "Douala, Cameroun",
            period: "Mai 2022 - Août 2022",
            description: ["Cours particuliers de mathématiques"],
            tags: ["Enseignement", "Mathématiques"]
        }
    ],

    education: [
        {
            degree: "Licence (B.Sc.) en informatique",
            institution: "Hochschule Darmstadt",
            period: "Octobre 2023 - présent",
            location: "Darmstadt, Allemagne"
        },
        {
            degree: "DSH – Certificat de langue C1",
            institution: "Mariaspring",
            period: "Février 2023 - Avril 2023",
            location: "Clausthal-Zellerfeld, Allemagne"
        },
        {
            degree: "Certificats B1 et B2",
            institution: "ÖSD Cameroun",
            period: "Septembre 2020 - Avril 2022",
            location: "Douala, Cameroun"
        },
        {
            degree: "GCE A Level (équivalent bac)",
            institution: "College Saint Laurent",
            period: "Septembre 2018 - Juin 2020",
            location: "Douala, Cameroun"
        },
        {
            degree: "GCE Ordinary Level",
            institution: "Staff College",
            period: "Septembre 2013 - Juin 2018",
            location: "Douala, Cameroun"
        }
    ],

    skills: [
        { category: "Principales", items: ["Python", "FastAPI", "PostgreSQL", "Docker"] },
        {
            category: "Langages & Web",
            items: ["C / C++", "Java", "JavaScript", "TypeScript", "PHP", "Dart", "Rust", "SQL", "HTML", "CSS", "Bash", "R"]
        },
        {
            category: "Frameworks & API",
            items: ["Next.js", "React", "Flutter", "Prisma", "API REST", "OpenAPI / Swagger", "Fetch API", "JSON", "Qt"]
        },
        {
            category: "Données & Messaging",
            items: ["pgvector", "MariaDB", "Redis", "Kafka", "MinIO"]
        },
        {
            category: "DevOps",
            items: ["Kubernetes", "GitLab CI/CD", "Docker Compose", "SonarQube", "Graylog"]
        },
        {
            category: "Génie logiciel",
            items: ["Développement backend", "Conception d’API", "Conception de bases de données", "Tests d’intégration", "Journalisation", "Clean Code", "POO", "UI responsive", "Communication client-serveur"]
        },
        {
            category: "Outils & Systèmes",
            items: ["Git", "GitHub", "GitLab", "pgAdmin 4", "VS Code", "PyCharm", "CLion", "Qt Creator", "Android Studio", "Apache", "Debian", "Ubuntu", "Windows 10 / 11"]
        }
    ],

    languages: [
        { name: "Anglais", level: "Natif", proficiency: 100, skills: ["Expression orale", "Lecture", "Écriture", "Compréhension orale"] },
        { name: "Allemand", level: "C1 - Avancé", proficiency: 90, skills: ["Compréhension orale : C1", "Lecture : C1", "Écriture : B2", "Expression orale : C1"] },
        { name: "Français", level: "B2 - Indépendant", proficiency: 70, skills: ["Compréhension orale : B2", "Lecture : B2", "Écriture : B2", "Expression orale : B2"] }
    ],

    contact: {
        heading: "Contact",
        description:
            "Le meilleur moyen de me joindre est par e-mail. Vous pouvez aussi consulter mes projets sur GitHub et me retrouver sur LinkedIn."
    }
};
