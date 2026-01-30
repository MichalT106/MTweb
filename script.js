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

// Experience Detail Page Rendering
function loadExperienceDetailPage() {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    const isSK = lang === 'sk';
    
    const detailContent = document.getElementById('experience-detail-content');
    if (!detailContent) return;
    
    detailContent.innerHTML = `
        <style>
            .experience-detail-header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 2rem;
            }
            .experience-detail-header button {
                background-color: var(--primary);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 0.375rem;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            .experience-detail-header button:hover {
                background-color: #4338CA;
                transform: translateY(-2px);
            }
            .experience-detail-content {
                background-color: var(--surface);
                padding: 2rem;
                border-radius: 0.5rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                max-width: 900px;
                margin: 0 auto;
            }
            .detail-section {
                margin-bottom: 2rem;
            }
            .detail-section h3 {
                color: var(--primary);
                font-weight: 600;
                margin-bottom: 0.75rem;
                font-size: 1.25rem;
            }
            .detail-section p {
                color: var(--text);
                line-height: 1.6;
            }
            .detail-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                margin-bottom: 2rem;
            }
            @media (max-width: 768px) {
                .detail-grid {
                    grid-template-columns: 1fr;
                }
                .experience-detail-content {
                    padding: 1rem;
                }
                .experience-detail-header {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .experience-detail-header h1 {
                    flex: none !important;
                    margin-top: 0.5rem !important;
                }
            }
        </style>
        <div class="experience-detail-header">
            <button onclick="window.goHome('experience')" data-i18n="experience.back">${isSK ? 'Späť na pracovné skúsenosti' : 'Back to Experience'}</button>
            <h1 style="margin: 0; flex: 1;" data-i18n="experience.details.title">${isSK ? 'Detaily pracovnej skúsenosti' : 'Experience Details'}</h1>
        </div>
        
        <div class="experience-detail-content">
            <div class="detail-grid">
                <div class="detail-section">
                    <h3 data-i18n="experience.details.period">${isSK ? 'Obdobie' : 'Period'}</h3>
                    <p>July 2023 – August 2025</p>
                </div>
                <div class="detail-section">
                    <h3 data-i18n="experience.job1.title">${isSK ? 'Software & DevOps Engineer' : 'Software & DevOps Engineer'}</h3>
                    <p data-i18n="experience.job1.company">${isSK ? 'Webasto Convertibles Slovakia s.r.o.' : 'Webasto Convertibles Slovakia s.r.o.'}</p>
                </div>
            </div>
            
            <div class="detail-grid">
                <div class="detail-section">
                    <h3 data-i18n="experience.details.company">${isSK ? 'Spoločnosť' : 'Company'}</h3>
                    <p data-i18n="experience.job1.company">Webasto Convertibles Slovakia s.r.o.</p>
                </div>
                <div class="detail-section">
                    <h3 data-i18n="experience.details.location">${isSK ? 'Miesto' : 'Location'}</h3>
                    <p data-i18n="experience.job1.location">${isSK ? 'Košice, Slovenská republika' : 'Košice, Slovak Republic'}</p>
                </div>
            </div>
            
            <div class="detail-section">
                <h3 data-i18n="experience.details.responsibilities">${isSK ? 'Povinnosti' : 'Responsibilities'}</h3>
                <p data-i18n="experience.details.responsibilities.text">${isSK ? 'Ako Software & DevOps Engineer v spoločnosti Webasto Convertibles Slovakia som sa zameriavala na vývoj a údržbu škálovateľných softvérových riešení a zavádzanie DevOps best practices. Moje povinnosti zahŕňali správu infraštruktúry, optimalizáciu CI/CD potrubí a spoluprácu s medziodborovými tímami na dodaní vysokokvalitných produktov.' : 'As a Software & DevOps Engineer at Webasto Convertibles Slovakia, I focused on developing and maintaining scalable software solutions while implementing DevOps best practices. My responsibilities included infrastructure management, CI/CD pipeline optimization, and collaborating with cross-functional teams to deliver high-quality products.'}</p>
            </div>
        </div>
    `;
    
    // Apply i18n to the newly created elements
    const pref = localStorage.getItem('preferredLanguage') || 'en';
    detailContent.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (window.translations[pref] && window.translations[pref][key]) {
            element.textContent = window.translations[pref][key];
        }
    });
}

// Expozuj pre router
window.loadExperienceDetailPage = loadExperienceDetailPage;

// Listen for navigation events from experience timeline
window.addEventListener('navigateToExperienceDetail', () => {
    loadExperienceDetailPage();
    window.router.goToExperienceDetail();
});

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.router) {
        window.router.init();
    }
});