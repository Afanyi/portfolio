export default {
    personal: {
        name: "Blasius Fornge",
        surname: "Afanyi",
        fullName: "Blasius Fornge Afanyi",
        title: "Développeur logiciel junior · Full-Stack à dominante backend",
        description:
            "Je développe principalement des applications backend et web avec Python, FastAPI, PostgreSQL et Docker.",
        email: "afanyiblasius4@gmail.com",
        location: {
            city: "Ober-Ramstadt",
            country: "Allemagne"
        },
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
            location: "Localisation"
        },
        contactButtons: {
            email: "Envoyer un e-mail",
            download: "Télécharger le CV"
        },
        footer: {
            copyright: "© {year} {name}. Tous droits réservés.",
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
            title: "Mémoire de bachelor – Application web pour les entretiens d’évaluation technique",
            company: "Groupe HCI, Hochschule Darmstadt",
            location: "À distance",
            period: "Août 2026 – Présent",
            description: [
                "Conception et prototypage d’une application web analysant les contributions étudiantes aux projets GitLab",
                "Automatisation de l’infrastructure avec OpenStack, Terraform et Ansible ; CI/CD avec GitLab et Docker",
                "Backend avec Python, FastAPI, PostgreSQL et Redis ; intégration de l’API GitLab",
                "Tableaux de bord interactifs pour visualiser et comparer l’activité des projets"
            ],
            tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "GitLab API", "OpenStack", "Terraform", "Ansible", "GitLab CI/CD", "Docker"]
        },
        {
            title: "Stagiaire en développement web",
            company: "ReiseFreudig",
            location: "Mannheim, Allemagne · Sur place",
            period: "Avril 2026 – Août 2026",
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
            title: "Développeur backend – Plateforme Juno de commerce et de livraison",
            company: "Projet de groupe",
            location: "À distance / Darmstadt",
            period: "Février 2026 – Présent",
            description: [
                "Backend d’une plateforme de commerce avec un système de livraison intégré",
                "API REST avec TypeScript, Prisma et OpenAPI/Swagger",
                "PostgreSQL/pgvector, Redis, Kafka, MinIO et Docker Compose",
                "Intégration de services d’IA Python et de processus workers"
            ],
            tags: ["TypeScript", "Prisma", "OpenAPI/Swagger", "PostgreSQL/pgvector", "Redis", "Kafka", "MinIO", "Docker Compose", "Python"]
        },
        {
            title: "Assistant étudiant (emploi d’été) – Data Science",
            company: "Sanofi TMU PMX (DMPK)",
            location: "Francfort, Allemagne",
            period: "Août 2025 – Octobre 2025",
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
            title: "Laboratoire de génie logiciel – Système de gestion des commandes",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Allemagne",
            period: "Octobre 2024 – Mars 2025",
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
            title: "Laboratoire de développement de jeux – Dungeon Crawler 2D (C++/Qt)",
            company: "Hochschule Darmstadt",
            location: "Darmstadt, Allemagne",
            period: "Avril 2024 – Août 2024",
            description: [
                "Développement d’un dungeon-crawler 2D avec C++ et Qt",
                "Mécaniques de jeu : déplacement, combat, collecte d’objets",
                "Architecture modulaire avec POO",
                "Interface interactive avec Qt Widgets"
            ],
            tags: ["C++", "Qt", "Développement de jeux", "POO", "GUI"]
        },
        {
            title: "Professeur de mathématiques",
            company: "Privé",
            location: "Douala, Cameroun",
            period: "Janvier 2022 – Octobre 2022",
            description: ["Cours particuliers de mathématiques"],
            tags: ["Enseignement", "Mathématiques"]
        }
    ],

    education: [
        {
            degree: "B.Sc. en informatique",
            institution: "Hochschule Darmstadt",
            period: "2023 – Présent",
            location: "Darmstadt, Allemagne"
        },
        {
            degree: "GCE A Level",
            institution: "College Saint Laurent",
            period: "Septembre 2018 – Juillet 2020",
            location: "Douala, Cameroun"
        },
        {
            degree: "DSH C1",
            institution: "Mariaspring",
            period: "Février 2023 – Avril 2023",
            location: "Clausthal-Zellerfeld, Allemagne"
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
