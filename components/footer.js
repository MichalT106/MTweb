class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
            footer {
                background-color: var(--footer-bg);
                color: var(--footer-text);
                padding: 3rem 0;
            }
            .footer-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 2rem;
            }
            .footer-section h3 {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 1rem;
                color: var(--primary);
            }
            .footer-links {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            .footer-link {
                color: var(--footer-link);
                text-decoration: none;
                transition: color 0.3s ease;
            }
            .footer-link:hover {
                color: var(--footer-text);
            }
            .social-links {
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
            }
            .social-link {
                color: var(--footer-text);
                transition: color 0.3s ease;
            }
            .social-link:hover {
                color: var(--primary);
            }
            .copyright {
                text-align: center;
                margin-top: 3rem;
                padding-top: 1.5rem;
                border-top: 1px solid #374151;
                color: #9CA3AF;
            }
            </style>
            <footer>
            <div class="footer-container">
                <div class="footer-section">
                <h3 data-i18n="footer.links">Quick Links</h3>
                <div class="footer-links">
                    <a href="index.html" class="footer-link" data-i18n="nav.home" data-nav="home">Home</a>
                    <a href="index.html#experience" class="footer-link" data-i18n="nav.experience" data-nav="experience">Experience</a>
                    <a href="index.html#school-projects" class="footer-link" data-i18n="nav.school" data-nav="school-projects">School Projects</a>
                </div>
                </div>
                <div class="footer-section">
                <h3 data-i18n="footer.contact">Contact</h3>
                <div class="footer-links">
                    <a href="mailto:michaltkac106@gmail.com" class="footer-link">michaltkac106@gmail.com</a>
                    <p>+421 902 583 717</p>
                </div>
                <div class="social-links">
                    <a href="#" class="social-link"><i data-feather="github"></i></a>
                    <a href="#" class="social-link"><i data-feather="linkedin"></i></a>
                    <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                </div>
                </div>
            </div>
            </footer>
        `;
        
        // Adjust footer links for subdirectory pages and smooth scroll
        const path = window.location.pathname;
        const isInSubdir = path.includes('/experiences/') || path.includes('/projects/');
        const base = isInSubdir ? '../' : '';
        this.shadowRoot.querySelectorAll('.footer-link').forEach(el => {
            const href = el.getAttribute('href');
            if (href && href.startsWith('index.html')) {
                el.setAttribute('href', base + 'index.html' + href.replace('index.html', '').trim());
            }
            if (href && href.startsWith('#')) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(el.getAttribute('href'));
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                });
            }
        });
        
        // i18n: update footer texts inside shadow DOM when language changes
        const applyI18n = (lang) => {
            try {
                const tr = window.translations || {};
                const elems = this.shadowRoot.querySelectorAll('[data-i18n]');
                elems.forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (tr[lang] && tr[lang][key]) el.textContent = tr[lang][key];
                });
            } catch (e) { /* ignore */ }
        };

        // initialize to preferred language from AppState immediately
        const getPrefLang = () => {
            return (window.AppState && window.AppState.getLanguage && window.AppState.getLanguage()) || (window.getLanguage && window.getLanguage()) || 'en';
        };
        applyI18n(getPrefLang());

        // listen for language changes from centralized AppState with immediate: true to ensure sync
        if (window.AppState && window.AppState.on) {
            window.AppState.on('languageChange', (e) => { console.log('[footer] languageChange received', e.detail.language); applyI18n(e.detail.language); }, { immediate: true });
        }
        document.addEventListener('languageChange', (e) => { console.log('[footer] document languageChange', e.detail.language); applyI18n(e.detail.language); });
    }
}
customElements.define('custom-footer', CustomFooter);