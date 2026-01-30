// Language management
const translations = {
    en: {
        "hero.title": "Welcome to My Portfolio",
        "hero.subtitle": "Showcasing my work experience and school projects",
        "hero.projects": "School Projects",
        "hero.experience": "Work Experience",
        "projects.title": "Featured Projects",
        "school.title": "School Projects",
        "experience.title": "Work Experience",
        "footer.copyright": "© 2023 My Portfolio. All rights reserved.",
        "nav.home": "Home",
        "nav.school": "School Projects",
        "nav.experience": "Work Experience",
        "nav.cv": "CV",
        "footer.about": "About Me",
        "footer.aboutText": "Student with passion for technology and learning.",
        "footer.links": "Quick Links",
        "footer.contact": "Contact",
        "experience.job1.title": "Software & DevOps Engineer",
        "experience.job1.company": "Webasto Convertibles Slovakia s.r.o.",
        "experience.job1.location": "Košice, Slovak Republic",
        "experience.back": "Back to Experience",
        "experience.details.title": "Experience Details",
        "experience.details.period": "Period",
        "experience.details.company": "Company",
        "experience.details.location": "Location",
        "experience.details.responsibilities": "Responsibilities",
        "experience.details.responsibilities.text": "As a Software & DevOps Engineer at Webasto Convertibles Slovakia, I focused on developing and maintaining scalable software solutions while implementing DevOps best practices. My responsibilities included infrastructure management, CI/CD pipeline optimization, and collaborating with cross-functional teams to deliver high-quality products.",
        "school.project1.title": "Game Jam Košice — Game Days",
        "school.project1.subtitle": "48-hour game jam (journalism theme) — Call For Justice",
        "school.project1.tag1": "Unity",
        "school.project1.tag2": "2D Story Game",
        "school.project1.tag3": "Game Jam",
        "school.project1.cta": "View details",
        "project1.title": "Call For Justice",
        "project1.subtitle": "2D story-driven game created during GameDays (48-hour game jam)",
        "project1.back": "Back to Projects",
        "project1.meta.eventLabel": "Event",
        "project1.meta.roleLabel": "My role",
        "project1.meta.stackLabel": "Technologies",
        "project1.eventPrefix": "Created during ",
        "project1.eventLink": "GameDays (Game Jam Košice)",
        "project1.eventSuffix": ", a 48-hour challenge with the theme of journalism.",
        "project1.overview.h": "Project overview",
        "project1.overview.p1": "Call For Justice is a 2D narrative game where the player follows a journalist uncovering corruption.",
        "project1.overview.p2": "Progression is driven by exploration, character movement on the map, interactions with NPCs, and simple mini-games.",
        "project1.contribution.h": "My contribution",
        "project1.contribution.li1": "Implemented several mini-games used throughout the story progression.",
        "project1.contribution.li2": "Built the character movement system for navigating the map.",
        "project1.contribution.li3": "Helped with quick iteration and integration under strict time limits.",
        "project1.learned.h": "What I gained",
        "project1.learned.li1": "Collaboration under time pressure and fast decision-making.",
        "project1.learned.li2": "Effective task division and prioritization in a small team.",
        "project1.learned.li3": "Hands-on experience with a full development cycle in a very short timeframe.",
        "project1.links.h": "Links",
        "project1.links.itch": "Play / view on Itch.io",
        "project1.links.youtube": "Watch gameplay on YouTube",
        "project1.links.gamedays": "About the GameDays event",
        "project1.media.h": "Media",
        "project1.media.video": "Gameplay video",
        "project1.media.gallery": "Screenshots",

    },
    sk: {
        "hero.title": "Vitajte v mojom portfóliu",
        "hero.subtitle": "Prezentácia mojej pracovnej praxe a školských projektov",
        "hero.projects": " Školské projekty",
        "hero.experience": "Pracovné skúsenosti",
        "projects.title": "Vybrané projekty",
        "school.title": "Školské projekty",
        "experience.title": "Pracovné skúsenosti",
        "footer.copyright": "© 2023 Moje portfólio. Všetky práva vyhradené.",
        "nav.home": "Domov",
        "nav.school": "Školské projekty",
        "nav.experience": "Pracovné skúsenosti",
        "nav.cv": "Životopis",
        "footer.about": "O mne",
        "footer.aboutText": "Študent so záujmom o technológie a učenie.",
        "footer.links": "Rýchle odkazy",
        "footer.contact": "Kontakt",
        "experience.job1.title": "Software & DevOps Engineer",
        "experience.job1.company": "Webasto Convertibles Slovakia s.r.o.",
        "experience.job1.location": "Košice, Slovenská republika",
        "experience.back": "Späť na pracovné skúsenosti",
        "experience.details.title": "Detaily pracovnej skúsenosti",
        "experience.details.period": "Obdobie",
        "experience.details.company": "Spoločnosť",
        "experience.details.location": "Miesto",
        "experience.details.responsibilities": "Povinnosti",
        "experience.details.responsibilities.text": "Ako Software & DevOps Engineer v spoločnosti Webasto Convertibles Slovakia som sa zameriava na vývoj a údržbu škálovateľných softvérových riešení a zavádzanie DevOps best practices. Moje povinnosti zahŕňali správu infraštruktúry, optimalizáciu CI/CD potrubí a spoluprácu s medziodborovými tímami na dodaní vysokokvalitných produktov.",
        "school.project1.title": "Game Jam Košice — Game Days",
        "school.project1.subtitle": "48-hodinová herná výzva (téma žurnalistika) — Call For Justice",
        "school.project1.tag1": "Unity",
        "school.project1.tag2": "2D príbehová hra",
        "school.project1.tag3": "Game Jam",
        "school.project1.cta": "Zobraziť detail",
        "project1.title": "Call For Justice",
        "project1.subtitle": "2D príbehová hra vytvorená počas GameDays (48-hodinový game jam)",
        "project1.back": "Späť na projekty",
        "project1.meta.eventLabel": "Udalosť",
        "project1.meta.roleLabel": "Môj prínos",
        "project1.meta.stackLabel": "Technológie",
        "project1.eventPrefix": "Vytvorené počas ",
        "project1.eventLink": "GameDays (Game Jam Košice)",
        "project1.eventSuffix": ", 48-hodinovej výzvy s témou žurnalistika.",
        "project1.overview.h": "Prehľad projektu",
        "project1.overview.p1": "Call For Justice je 2D príbehová hra, v ktorej hráč sleduje novinára odhaľujúceho korupciu.",
        "project1.overview.p2": "Postup v hre je založený na preskúmavaní, pohybe postavy po mape, interakciách a jednoduchých miniúlohách.",
        "project1.contribution.h": "Môj príspevok",
        "project1.contribution.li1": "Implementoval som viacero miniúloh, ktoré sa používajú počas príbehu.",
        "project1.contribution.li2": "Vytvoril som systém pohybu postavy pre navigáciu po mape.",
        "project1.contribution.li3": "Pomáhal som s rýchlym iterovaním a integráciou riešení pod časovým tlakom.",
        "project1.learned.h": "Čo mi to dalo",
        "project1.learned.li1": "Spoluprácu pod časovým tlakom a rýchle rozhodovanie.",
        "project1.learned.li2": "Rozdelenie úloh a prioritizáciu v malom tíme.",
        "project1.learned.li3": "Praktické zvládnutie celého vývojového cyklu v krátkom čase.",
        "project1.links.h": "Odkazy",
        "project1.links.itch": "Hra na Itch.io",
        "project1.links.youtube": "YouTube video",
        "project1.links.gamedays": "Informácie o udalosti GameDays",
        "project1.media.h": "Médiá",
        "project1.media.video": "Video z hry",
        "project1.media.gallery": "Screenshoty",

    }
};

// expose translations for components
window.translations = translations;

let currentLanguage = 'en';

// Apply translations for non-shadow DOM elements
function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // update any language-toggle buttons state (if present on page)
    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active'); else btn.classList.remove('active');
    });
}

// Initialize translations on load using the global language (set by globals.js)
document.addEventListener('DOMContentLoaded', () => {
    const lang = (window.AppState && window.AppState.getLanguage && window.AppState.getLanguage()) || (window.getLanguage && window.getLanguage && window.getLanguage()) || window.currentLanguage || 'en';
    console.log('[script] initial language', lang);
    applyTranslations(lang);

    // Re-apply translations whenever language changes (triggered by the language switcher / AppState)
    if (window.AppState && window.AppState.addEventListener) {
        window.AppState.addEventListener('languageChange', (e) => {
            const next = (e && e.detail && e.detail.language) ? e.detail.language : ((window.AppState.getLanguage && window.AppState.getLanguage()) || 'en');
            console.log('[script] languageChange', next);
            applyTranslations(next);
        });
    }
    document.addEventListener('languageChange', (e) => {
        const next = (e && e.detail && e.detail.language) ? e.detail.language : ((window.AppState && window.AppState.getLanguage && window.AppState.getLanguage()) || 'en');
        console.log('[script] document languageChange', next);
        applyTranslations(next);
    });
    // expose for debugging
    window.translations = translations;
    window.applyTranslations = applyTranslations;
    // Attach smooth-scroll handlers after DOM ready
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Listen for global language changes (AppState emits this)
if (window.AppState && window.AppState.on) {
    window.AppState.on('languageChange', (e) => { console.log('[script] languageChange received', e.detail.language); applyTranslations(e.detail.language); }, { immediate: true });
}
document.addEventListener('languageChange', (e) => { console.log('[script] document languageChange', e.detail.language); applyTranslations(e.detail.language); });
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Theme management is handled globally by globals.js. Components can listen to
// the 'themeChange' event or call window.setTheme / window.toggleTheme (exposed by globals.js).