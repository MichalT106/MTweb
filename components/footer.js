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
                        <h3 data-i18n="footer.about">About Me</h3>
                        <p data-i18n="footer.aboutText">Passionate developer with experience in various technologies and industries.</p>
                    </div>
                    <div class="footer-section">
                        <h3 data-i18n="footer.links">Quick Links</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link" data-i18n="nav.home" data-nav="home">Home</a>
                            <a href="#experience" class="footer-link" data-i18n="nav.experience" data-nav="experience">Experience</a>
                            <a href="#school-projects" class="footer-link" data-i18n="nav.school" data-nav="school-projects">School Projects</a>
                            <a href="#skills" class="footer-link" data-i18n="nav.skills">Skills</a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3 data-i18n="footer.contact">Contact</h3>
                        <div class="footer-links">
                            <a href="mailto:example@example.com" class="footer-link">example@example.com</a>
                            <a href="tel:+421123456789" class="footer-link">+421 123 456 789</a>
                        </div>
                        <div class="social-links">
                            <a href="#" class="social-link"><i data-feather="github"></i></a>
                            <a href="#" class="social-link"><i data-feather="linkedin"></i></a>
                            <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p data-i18n="footer.copyright">© 2023 My Portfolio. All rights reserved.</p>
                </div>
            </footer>
        `;
        
        // Handle data-nav attributes in footer using new router
        const footerNavElements = this.shadowRoot.querySelectorAll('[data-nav]');
        footerNavElements.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const nav = el.getAttribute('data-nav');
                // Use window.router methods from router.js
                if (window.router) {
                    if (nav === 'home') {
                        window.goHome();
                    } else if (nav === 'school-projects') {
                        window.goHome('school-projects');
                    } else if (nav === 'experience') {
                        window.goHome('experience');
                    }
                }
            });
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

        document.addEventListener('languageChange', (e) => {
            applyI18n(e.detail.language);
        });

        // initialize to preferred language immediately
        const pref = localStorage.getItem('preferredLanguage') || (window.currentLanguage || 'en');
        applyI18n(pref);
    }
}
customElements.define('custom-footer', CustomFooter);