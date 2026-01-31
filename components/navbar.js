class CustomNavbar extends HTMLElement {
    connectedCallback() {
        // Determine if we're in a subdirectory
        const path = window.location.pathname;
        const isInSubdir = path.includes('/experiences/') || path.includes('/projects/');
        const homeLink = isInSubdir ? '../index.html' : 'index.html';
        const experienceLink = isInSubdir ? '../index.html#experience' : 'index.html#experience';
        const projectsLink = isInSubdir ? '../index.html#school-projects' : 'index.html#school-projects';
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: var(--surface);
                    box-shadow: var(--shadow);
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0.75rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    position: relative;
                }
                .nav-left {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                .nav-right {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-left: auto;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 1.25rem;
                }
                .nav-link {
                    color: var(--muted-text);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--primary);
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1.25rem;
                    padding: 0.25rem 0.5rem;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 100%;
                        right: 1rem;
                        background: var(--surface);
                        padding: 0.75rem;
                        box-shadow: var(--shadow);
                        flex-direction: column;
                        gap: 0.5rem;
                        border-radius: 0.5rem;
                    }
                    .nav-links.open {
                        display: flex;
                    }
                    .mobile-menu-btn {
                        display: block;
                        margin-left: auto;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <div class="nav-left">
                        <a href="${homeLink}" class="logo" data-nav="home">MTweb</a>
                        <div class="nav-links" id="navLinks">
                            <a href="${homeLink}" class="nav-link" data-i18n="nav.home" data-nav="home">Home</a>
                            <a href="${experienceLink}" class="nav-link" data-i18n="nav.experience" data-nav="experience">Experience</a>
                            <a href="${projectsLink}" class="nav-link" data-i18n="nav.school" data-nav="school-projects">School Projects</a>
                            <a href="#" id="cvLink" class="nav-link" data-i18n="nav.cv" onclick="return false;">CV</a>
                        </div>
                    </div>

                    <div class="nav-right">
                        <slot name="right"></slot>

                        <button class="mobile-menu-btn" id="mobileBtn" aria-label="Toggle menu">☰</button>
                    </div>
                </div>
            </nav>
        `;

        // add mobile menu toggle behavior
        const mobileBtn = this.shadowRoot.getElementById('mobileBtn');
        const navLinks = this.shadowRoot.getElementById('navLinks');
        if (mobileBtn && navLinks) {
            mobileBtn.addEventListener('click', () => {
                navLinks.classList.toggle('open');
            });
            // Close mobile menu when a nav link is clicked
            navLinks.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('open');
                });
            });
        }
        
        // Simply close mobile menu when a nav link is clicked
        const navElements = this.shadowRoot.querySelectorAll('[data-nav], #cvLink');
        navElements.forEach(el => {
            el.addEventListener('click', () => {
                // Close mobile menu
                if (navLinks) {
                    navLinks.classList.remove('open');
                }
            });
        });
        
        // i18n: update nav texts inside shadow DOM when language changes
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
            window.AppState.on('languageChange', (e) => {
                console.log('[navbar] languageChange received', e.detail.language);
                applyI18n(e.detail.language);
            }, { immediate: true });
        }
        document.addEventListener('languageChange', (e) => { console.log('[navbar] document languageChange', e.detail.language); applyI18n(e.detail.language); });

        // CV button: construct PDF URL based on current language
        const cvLink = this.shadowRoot.getElementById('cvLink');
        const openCvPdf = () => {
            const lang = (window.getLanguage && window.getLanguage()) || window.currentLanguage || 'en';
            const fileName = lang === 'sk' ? 'CV_SK.pdf' : 'CV_EN.pdf';
            const cvPath = isInSubdir ? '../biography/' : './biography/';
            const cvUrl = cvPath + fileName;
            window.open(cvUrl, '_blank');
        };

        // update CV when language changes
        const updateCvForLang = () => {
            // nothing to mutate here; openCvPdf will read the AppState when used
        };

        if (window.AppState && window.AppState.on) {
            window.AppState.on('languageChange', (e) => { console.log('[navbar] languageChange for CV', e.detail.language); updateCvForLang(); }, { immediate: true });
        }
        document.addEventListener('languageChange', (e) => { console.log('[navbar] document languageChange for CV', e.detail.language); updateCvForLang(); });

        if (cvLink) {
            cvLink.addEventListener('click', (e) => {
                e.preventDefault();
                openCvPdf();
            });
        }
    }
}
customElements.define('custom-navbar', CustomNavbar);