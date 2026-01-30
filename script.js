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
        "experience.details.responsibilities.text": "As a Software & DevOps Engineer at Webasto Convertibles Slovakia, I focused on developing and maintaining scalable software solutions while implementing DevOps best practices. My responsibilities included infrastructure management, CI/CD pipeline optimization, and collaborating with cross-functional teams to deliver high-quality products."
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
        "experience.details.responsibilities.text": "Ako Software & DevOps Engineer v spoločnosti Webasto Convertibles Slovakia som sa zameriava na vývoj a údržbu škálovateľných softvérových riešení a zavádzanie DevOps best practices. Moje povinnosti zahŕňali správu infraštruktúry, optimalizáciu CI/CD potrubí a spoluprácu s medziodborovými tímami na dodaní vysokokvalitných produktov."
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