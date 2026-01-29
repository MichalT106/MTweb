// Language management
const translations = {
    en: {
        "hero.title": "Welcome to My Portfolio",
        "hero.subtitle": "Showcasing my work experience and school projects",
        "hero.projects": "View Projects",
        "hero.experience": "Work Experience",
        "projects.title": "Featured Projects",
        "school.title": "School Projects",
        "experience.title": "Work Experience",
        "footer.copyright": "© 2023 My Portfolio. All rights reserved.",
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.school": "School Projects",
        "nav.experience": "Work Experience",
        "footer.about": "About Me",
        "footer.aboutText": "Student with passion for technology and learning.",
        "footer.links": "Quick Links",
        "footer.contact": "Contact"
    },
    sk: {
        "hero.title": "Vitajte v mojom portfóliu",
        "hero.subtitle": "Prezentácia mojej pracovnej praxe a školských projektov",
        "hero.projects": "Zobraziť projekty",
        "hero.experience": "Pracovné skúsenosti",
        "projects.title": "Vybrané projekty",
        "school.title": "Školské projekty",
        "experience.title": "Pracovné skúsenosti",
        "footer.copyright": "© 2023 Moje portfólio. Všetky práva vyhradené.",
        "nav.home": "Domov",
        "nav.projects": "Projekty",
        "nav.school": "Školské projekty",
        "nav.experience": "Pracovné skúsenosti",
        "footer.about": "O mne",
        "footer.aboutText": "Študent so záujmom o technológie a učenie.",
        "footer.links": "Rýchle odkazy",
        "footer.contact": "Kontakt"
}
};

// expose translations for components
window.translations = translations;

let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
    
    // Update active button state
    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Store preference
    localStorage.setItem('preferredLanguage', lang);
    // expose current language for components
    window.currentLanguage = currentLanguage;
    // notify other parts (shadow DOMs) that language changed
    document.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
}
// expose setter for components
window.setLanguage = setLanguage;
// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Theme management (light / dark)
function applyTheme(theme) {
    const t = (theme === 'dark') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: t } }));
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Expose for web components
window.applyTheme = applyTheme;
window.toggleTheme = toggleTheme;

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));
});
