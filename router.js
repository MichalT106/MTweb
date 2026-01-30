/**
 * Router - Spravuje SPA routing bez reloadu stránky
 * Rieši problém s renderovaním obsahu pri navigácii
 */

class Router {
    constructor() {
        this.currentPage = 'home';
        this.previousPage = null;
        this.pages = {
            home: null,
            'experience-detail': null
        };
        // Nepusť init() z konstruktora, čakaj na DOM
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        // Inicializuj referencie na stránky
        this.pages.home = document.getElementById('page-home');
        this.pages['experience-detail'] = document.getElementById('page-experience-detail');

        // Ak elementy neexistujú, čakaj
        if (!this.pages.home || !this.pages['experience-detail']) {
            setTimeout(() => this.init(), 100);
            return;
        }

        // Setup event listeners
        window.addEventListener('popstate', (e) => this.handlePopState(e));
        
        // Ak je hash v URL, naviguj na ňu
        const hash = window.location.hash.slice(1) || 'home';
        
        // Ak sa naviguje na experience-detail, zavolaj loadExperienceDetailPage
        if (hash === 'experience-detail') {
            // Zavolaj loadExperienceDetailPage ak existuje (z script.js)
            if (window.loadExperienceDetailPage) {
                window.loadExperienceDetailPage();
            }
            this.navigateToPage('experience-detail');
        } else {
            this.navigateToPage('home', hash !== 'home' ? hash : null);
        }
        
        this.isInitialized = true;
    }

    navigateToPage(page, sectionId = null) {
        if (this.currentPage === page && page === 'home' && !sectionId) {
            // Ak sme už na home bez section, nerob nič
            return;
        }

        this.previousPage = this.currentPage;
        this.currentPage = page;

        // Skry všetky stránky
        Object.keys(this.pages).forEach(key => {
            if (this.pages[key]) {
                this.pages[key].style.display = 'none';
            }
        });

        // Zobraz správnu stránku
        if (this.pages[page]) {
            this.pages[page].style.display = 'block';
        }

        // Posun na sekciu alebo na top
        if (sectionId && page === 'home') {
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    window.scrollTo(0, 0);
                }
            }, 50);
            history.pushState({ page: 'home', sectionId: sectionId }, '', '#' + sectionId);
        } else if (page === 'experience-detail') {
            window.scrollTo(0, 0);
            history.pushState({ page: 'experience-detail', sectionId: null }, '', '#experience-detail');
        } else {
            window.scrollTo(0, 0);
            history.pushState({ page: 'home', sectionId: null }, '', '#home');
        }
    }

    handlePopState(event) {
        if (event.state) {
            const { page, sectionId } = event.state;
            
            // Skry všetky stránky
            Object.keys(this.pages).forEach(key => {
                if (this.pages[key]) {
                    this.pages[key].style.display = 'none';
                }
            });

            // Zobraz správnu stránku
            if (this.pages[page]) {
                this.pages[page].style.display = 'block';
            }

            // Posun na sekciu
            if (sectionId && page === 'home') {
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        window.scrollTo(0, 0);
                    }
                }, 50);
            } else {
                window.scrollTo(0, 0);
            }

            this.currentPage = page;
        }
    }

    goHome(sectionId = null) {
        this.navigateToPage('home', sectionId);
    }

    goToExperienceDetail() {
        this.navigateToPage('experience-detail');
    }

    goBack() {
        if (this.previousPage === 'experience-detail') {
            this.navigateToPage('home', 'experience');
        } else {
            this.navigateToPage('home');
        }
    }
}

// Globálny router
window.router = new Router();

// Expozuj navigačné funkcie
window.goHome = (sectionId = null) => window.router.goHome(sectionId);
window.goToExperienceDetail = () => window.router.goToExperienceDetail();
window.goBack = () => window.router.goBack();
