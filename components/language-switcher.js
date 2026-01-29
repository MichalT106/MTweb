class CustomLanguageSwitcher extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: inline-flex; }
                .language-switcher {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }
                :host([inline]) .language-switcher { position: static; margin-left: auto; }

                /* shared toggle styles */
                .toggle {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    user-select: none;
                }
                /* unified toggle sizing */
                .switch {
                    width: 68px;
                    height: 32px;
                    background: var(--border);
                    border-radius: 999px;
                    position: relative;
                    display: inline-block;
                    transition: background 0.15s ease;
                    overflow: hidden;
                }
                .knob {
                    width: 28px;
                    height: 28px;
                    background: var(--surface);
                    border-radius: 50%;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    box-shadow: var(--shadow);
                    transition: transform 0.15s ease, background 0.15s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    line-height: 1;
                }
                .toggle[data-checked="true"] .switch { background: var(--primary); }
                .toggle[data-checked="true"] .switch .knob { transform: translateX(36px); }
                .toggle[tabindex]:focus { outline: none; }
                .toggle:focus-visible { box-shadow: 0 0 0 3px rgba(79,70,229,0.15); border-radius: 6px; }

                /* no external label; language is shown on the knob */
                /* theme-toggle uses the same sizing as other toggles */
            </style>
            <div class="language-switcher">
                <label class="toggle" title="Language" role="button" tabindex="0" id="langToggle">
                    <span class="switch"><span class="knob" id="langKnob">EN</span></span>
                </label>

                <label class="toggle" title="Theme" role="button" tabindex="0" id="themeToggle">
                    <span class="switch theme-toggle"><span class="knob" id="themeKnob">🌙</span></span>
                </label>
            </div>
        `;

        // Language toggle
        const langToggle = this.shadowRoot.getElementById('langToggle');
        const langKnob = this.shadowRoot.getElementById('langKnob');

        const setLangUI = (lang) => {
            const isSk = (lang === 'sk');
            if (isSk) langToggle.setAttribute('data-checked', 'true'); else langToggle.removeAttribute('data-checked');
            langKnob.textContent = isSk ? 'SK' : 'EN';
        };

        const toggleLang = () => {
            const current = localStorage.getItem('preferredLanguage') || (window.currentLanguage || 'en');
            const next = current === 'sk' ? 'en' : 'sk';
            if (window.setLanguage) {
                window.setLanguage(next);
            } else {
                this.dispatchEvent(new CustomEvent('languageChange', { detail: { language: next }, bubbles: true, composed: true }));
            }
            setLangUI(next);
        };

        langToggle.addEventListener('click', toggleLang);
        langToggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleLang(); } });

        // initialize from preference or global
        const prefLang = localStorage.getItem('preferredLanguage') || (window.currentLanguage || 'en');
        setLangUI(prefLang);

        // listen for external language changes
        document.addEventListener('languageChange', (e) => { setLangUI(e.detail.language); });

        // Theme toggle (checkbox)
        const themeToggle = this.shadowRoot.getElementById('themeToggle');
        const themeKnob = this.shadowRoot.getElementById('themeKnob');

        const syncThemeUI = () => {
            const theme = document.documentElement.getAttribute('data-theme') || 'light';
            const isDark = theme === 'dark';
            if (isDark) themeToggle.setAttribute('data-checked', 'true'); else themeToggle.removeAttribute('data-checked');
            // Show sun for light mode, moon for dark mode
            themeKnob.textContent = isDark ? '🌙' : '☀️';
        };

        const toggleTheme = () => { if (window.toggleTheme) window.toggleTheme(); };

        themeToggle.addEventListener('click', toggleTheme);
        themeToggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTheme(); } });

        document.addEventListener('themeChange', syncThemeUI);
        syncThemeUI();
    }
}
customElements.define('custom-language-switcher', CustomLanguageSwitcher);
