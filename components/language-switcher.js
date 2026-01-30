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
            // Do not hold local state; ask AppState to change the language.
            console.log('[language-switcher] toggleLang clicked');
            if (window.AppState && typeof window.AppState.getLanguage === 'function') {
                const current = window.AppState.getLanguage();
                const next = current === 'sk' ? 'en' : 'sk';
                window.AppState.setLanguage(next);
            } else if (window.setLanguage) {
                const current = (window.getLanguage && window.getLanguage()) || 'en';
                const next = current === 'sk' ? 'en' : 'sk';
                window.setLanguage(next);
            }
            // do NOT directly call setLangUI here; UI will update in response to the centralized event
        };

        langToggle.addEventListener('click', toggleLang);
        langToggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleLang(); } });

        // initialize from global AppState
        const initialLang = (window.AppState && window.AppState.getLanguage && window.AppState.getLanguage()) || (window.getLanguage && window.getLanguage()) || 'en';
        setLangUI(initialLang);

        // listen for external language changes from AppState (and legacy document events)
        if (window.AppState && window.AppState.on) {
            // use immediate:true to avoid race where AppState already emitted initial events
            window.AppState.on('languageChange', (e) => {
                console.log('[language-switcher] languageChange received', e.detail.language);
                setLangUI(e.detail.language);
            }, { immediate: true });
        }
        document.addEventListener('languageChange', (e) => { console.log('[language-switcher] document languageChange', e.detail.language); setLangUI(e.detail.language); });

        // Theme toggle (checkbox)
        const themeToggle = this.shadowRoot.getElementById('themeToggle');
        const themeKnob = this.shadowRoot.getElementById('themeKnob');

        const syncThemeUI = (theme) => {
            const t = theme || ((window.AppState && window.AppState.getTheme && window.AppState.getTheme()) || document.documentElement.getAttribute('data-theme') || 'light');
            const isDark = t === 'dark';
            if (isDark) themeToggle.setAttribute('data-checked', 'true'); else themeToggle.removeAttribute('data-checked');
            // Show sun for light mode, moon for dark mode
            themeKnob.textContent = isDark ? '🌙' : '☀️';
        };

        const toggleTheme = () => {
            console.log('[language-switcher] toggleTheme clicked');
            if (window.AppState && window.AppState.toggleTheme) {
                window.AppState.toggleTheme();
            } else if (window.toggleTheme) {
                window.toggleTheme();
            }
        };

        themeToggle.addEventListener('click', toggleTheme);
        themeToggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTheme(); } });

        if (window.AppState && window.AppState.on) {
            window.AppState.on('themeChange', (e) => {
                console.log('[language-switcher] themeChange received', e.detail.theme);
                syncThemeUI(e.detail.theme);
            }, { immediate: true });
        }
        document.addEventListener('themeChange', (e) => { console.log('[language-switcher] document themeChange', e.detail.theme); syncThemeUI(e.detail.theme); });
        // initialize theme UI
        syncThemeUI();
    }
}
customElements.define('custom-language-switcher', CustomLanguageSwitcher);
