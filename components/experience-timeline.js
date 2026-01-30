class CustomExperienceTimeline extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .timeline {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .timeline::after {
                    content: '';
                    position: absolute;
                    width: 2px;
                    background-color: var(--primary);
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    margin-left: -1px;
                }
                .timeline-item {
                    padding: 10px 40px;
                    position: relative;
                    width: 50%;
                    box-sizing: border-box;
                }
                .timeline-item::after {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: var(--surface);
                    border: 4px solid var(--primary);
                    border-radius: 50%;
                    top: 15px;
                    z-index: 1;
                }
                .left {
                    left: 0;
                }
                .right {
                    left: 50%;
                }
                .left::after {
                    right: -10px;
                }
                .right::after {
                    left: -10px;
                }
                .timeline-content {
                    padding: 20px;
                    background-color: var(--surface);
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .timeline-content:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.12);
                    transform: translateY(-2px);
                }
                .timeline-date {
                    color: var(--primary);
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                .timeline-title {
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                .timeline-description {
                    color: var(--muted-text);
                }
                @media (max-width: 768px) {
                    .timeline::after {
                        left: 31px;
                    }
                    .timeline-item {
                        width: 100%;
                        padding-left: 70px;
                        padding-right: 25px;
                    }
                    .timeline-item::after {
                        left: 21px;
                    }
                    .left::after, .right::after {
                        left: 21px;
                    }
                    .right {
                        left: 0;
                    }
                }
            </style>
            <div class="timeline">
                <div class="timeline-item left">
                    <div class="timeline-content" id="experienceItem">
                        <div class="timeline-date">July 2023 – August 2025</div>
                        <h3 class="timeline-title" data-i18n="experience.job1.title">Software & DevOps Engineer</h3>
                        <p class="timeline-description" data-i18n="experience.job1.company">Webasto Convertibles Slovakia s.r.o.</p>
                        <p class="timeline-description" data-i18n="experience.job1.location">Košice, Slovak Republic</p>
                    </div>
                </div>
            </div>
        `;

        // Handle click on experience item
        const experienceItem = this.shadowRoot.getElementById('experienceItem');
        if (experienceItem) {
            experienceItem.addEventListener('click', () => {
                // Emit custom event that main app can listen to
                window.dispatchEvent(new CustomEvent('navigateToExperienceDetail'));
            });
        }

        // Apply i18n
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

        // Listen for language changes from centralized AppState (and legacy document events)
        if (window.AppState && window.AppState.on) {
            window.AppState.on('languageChange', (e) => { console.log('[timeline] languageChange received', e.detail.language); applyI18n(e.detail.language); }, { immediate: true });
        }
        document.addEventListener('languageChange', (e) => { console.log('[timeline] document languageChange', e.detail.language); applyI18n(e.detail.language); });

        // Initialize from AppState
        const pref = (window.AppState && window.AppState.getLanguage && window.AppState.getLanguage()) || (window.getLanguage && window.getLanguage()) || 'en';
        applyI18n(pref);
    }
}
customElements.define('custom-experience-timeline', CustomExperienceTimeline);