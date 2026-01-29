class CustomLanguageSwitcher extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .language-switcher {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                    display: flex;
                    gap: 0.5rem;
                }
                .language-btn {
                    background-color: white;
                    border: 1px solid #E5E7EB;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .language-btn:hover {
                    background-color: #F3F4F6;
                }
                .language-btn.active {
                    background-color: var(--primary);
                    color: white;
                }
            </style>
            <div class="language-switcher">
                <button class="language-btn" data-lang="en">EN</button>
                <button class="language-btn" data-lang="sk">SK</button>
            </div>
        `;

        // Add event listeners
        this.shadowRoot.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.dispatchEvent(new CustomEvent('languageChange', { 
                    detail: { language: lang },
                    bubbles: true,
                    composed: true 
                }));
            });
        });
    }
}
customElements.define('custom-language-switcher', CustomLanguageSwitcher);