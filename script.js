// Language management
const translations = {
    en: {
        "hero.title": "Welcome to My Professional Journey",
        "hero.subtitle": "Showcasing my achievements, projects, and experiences",
        "hero.projects": "View Projects",
        "hero.experience": "My Experience",
        "projects.title": "Featured Projects",
        "experience.title": "Professional Experience",
        "skills.title": "Technical Skills",
        "skills.web": "Web Development",
        "skills.backend": "Backend",
        "skills.mobile": "Mobile",
        "skills.cloud": "Cloud",
        "footer.copyright": "© 2023 My Portfolio. All rights reserved."
    },
    sk: {
        "hero.title": "Vitajte na mojej profesionálnej ceste",
        "hero.subtitle": "Prezentácia mojich úspechov, projektov a skúseností",
        "hero.projects": "Zobraziť projekty",
        "hero.experience": "Moje skúsenosti",
        "projects.title": "Vybrané projekty",
        "experience.title": "Profesionálne skúsenosti",
        "skills.title": "Technické zručnosti",
        "skills.web": "Webový vývoj",
        "skills.backend": "Backend",
        "skills.mobile": "Mobilné aplikácie",
        "skills.cloud": "Cloud",
        "footer.copyright": "© 2023 Moje portfólio. Všetky práva vyhradené."
    }
};

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
}

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