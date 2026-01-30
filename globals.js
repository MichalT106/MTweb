// globals.js (AppState)
// Centralized global application state for language and theme.
// Provides a single source of truth, persistence, and a simple pub/sub API.
(function () {
    const DEFAULT_LANG = 'en';
    const LANG_KEY = 'preferredLanguage';
    const THEME_KEY = 'theme';

    // Toggle this to `false` when you no longer need verbose runtime logs
    const DEBUG = true;

    class AppStateClass extends EventTarget {
        constructor() {
            super();
            // Initialize from storage or fallbacks
            const savedLang = localStorage.getItem(LANG_KEY) || (navigator.language && navigator.language.startsWith('sk') ? 'sk' : DEFAULT_LANG);
            const savedTheme = localStorage.getItem(THEME_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            this._lang = savedLang;
            this._theme = savedTheme === 'dark' ? 'dark' : 'light';

            // Apply theme immediately to avoid flash
            document.documentElement.setAttribute('data-theme', this._theme);

            // Keep in sync with other tabs/windows
            window.addEventListener('storage', (e) => this._onStorage(e));
        }

        // Internal storage sync
        _onStorage(e) {
            if (DEBUG) console.log('[AppState] storage event', e.key, e.newValue);
            if (e.key === LANG_KEY && e.newValue && e.newValue !== this._lang) {
                this._lang = e.newValue;
                this._emit('languageChange', { language: this._lang });
            }
            if (e.key === THEME_KEY && e.newValue && e.newValue !== this._theme) {
                this._theme = e.newValue === 'dark' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', this._theme);
                this._emit('themeChange', { theme: this._theme });
            }
        }

        // Emit a DOM CustomEvent on document for compatibility
        _emit(name, detail) {
            if (DEBUG) console.log(`[AppState] emit ${name}`, detail);
            // EventTarget listeners (AppState.on)
            this.dispatchEvent(new CustomEvent(name, { detail }));
            // Backwards-compatible document-level event used by existing code
            document.dispatchEvent(new CustomEvent(name, { detail }));
        }

        // Public getters
        getLanguage() { return this._lang; }
        getTheme() { return this._theme; }

        // Public setters (manage persistence & notify)
        setLanguage(lang) {
            if (!lang || lang === this._lang) return;
            if (DEBUG) console.log('[AppState] setLanguage called', lang);
            this._lang = lang;
            localStorage.setItem(LANG_KEY, lang);
            this._emit('languageChange', { language: lang });
        }

        setTheme(theme) {
            const t = theme === 'dark' ? 'dark' : 'light';
            if (t === this._theme) return;
            if (DEBUG) console.log('[AppState] setTheme called', t);
            this._theme = t;
            document.documentElement.setAttribute('data-theme', t);
            localStorage.setItem(THEME_KEY, t);
            this._emit('themeChange', { theme: t });
        }

        toggleTheme() { if (DEBUG) console.log('[AppState] toggleTheme called'); this.setTheme(this._theme === 'dark' ? 'light' : 'dark'); }

        // Convenience: allow `on(eventName, handler)` subscription
        // Subscribe; options: { immediate: true } will invoke handler with current state immediately
        on(name, handler, options = {}) {
            this.addEventListener(name, handler);
            if (options && options.immediate) {
                try {
                    if (name === 'languageChange') handler({ detail: { language: this._lang } });
                    if (name === 'themeChange') handler({ detail: { theme: this._theme } });
                } catch (e) { if (DEBUG) console.error('[AppState] immediate handler error', e); }
            }
        }
        off(name, handler) { this.removeEventListener(name, handler); }
    }

    // single global instance
    const AppState = new AppStateClass();

    // Expose on window for components/pages to use. Components should prefer `window.AppState`.
    window.AppState = AppState;

    // Backwards compatibility shim: previous global functions
    window.getLanguage = () => AppState.getLanguage();
    window.getTheme = () => AppState.getTheme();
    window.setLanguage = (lang) => AppState.setLanguage(lang);
    window.setTheme = (theme) => AppState.setTheme(theme);
    window.toggleTheme = () => AppState.toggleTheme();

    // Broadcast initial values on next microtask so other scripts can attach listeners
    Promise.resolve().then(() => {
        AppState._emit('languageChange', { language: AppState.getLanguage() });
        AppState._emit('themeChange', { theme: AppState.getTheme() });
        if (DEBUG) console.log('[AppState] initial state', { language: AppState.getLanguage(), theme: AppState.getTheme() });
    });

})();
