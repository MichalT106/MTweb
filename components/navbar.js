class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-link {
                    color: #4B5563;
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
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#" class="logo">PortfolioPro</a>
                    <div class="nav-links">
                    <a href="#" class="nav-link" data-i18n="nav.home">Home</a>
                    <a href="#school-projects" class="nav-link" data-i18n="nav.school">School Projects</a>
                    <a href="#experience" class="nav-link" data-i18n="nav.experience">Experience</a>
</div>
<button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);