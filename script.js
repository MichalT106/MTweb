// Language management
const translations = {
    en: {
        "hero.title": "Welcome to my portfolio",
        "hero.subtitlePrefix": "Showcasing my",
        "hero.projects": "School Projects",
        "hero.experience": "Work Experience",
        "hero.cv": "See CV",
        "projects.title": "Featured Projects",
        "school.title": "School Projects",
        "experience.title": "Work Experience",
        "nav.home": "Home",
        "nav.school": "School Projects",
        "nav.experience": "Work Experience",
        "nav.cv": "CV",
        "footer.links": "Quick Links",
        "footer.contact": "Contact",
        "experience.job1.title": "Software & DevOps Engineer",
        "experience.job1.company": "Webasto Convertibles Slovakia s.r.o.",
        "experience.job1.location": "Košice, Slovak Republic",
        "experience.details.title": "Experience Details",
        "experience.details.period": "Period",
        "experience.details.company": "Company",
        "experience.details.location": "Location",
        "experience.details.responsibilities": "Responsibilities",
        "experience.details.responsibilities.text": "As a Software & DevOps Engineer at Webasto Convertibles Slovakia, I focused on developing and maintaining scalable software solutions while implementing DevOps best practices. My responsibilities included infrastructure management, CI/CD pipeline optimization, and collaborating with cross-functional teams to deliver high-quality products.",
        "school.project1.title": "Game Jam Košice — Game Days",
        "school.project1.subtitle": "48-hour game jam (journalism theme) — Call For Justice",
        "school.project1.desc": "48-hour game challenge",
        "school.project1.tag1": "Unity",
        "school.project1.tag2": "2D Story Game",
        "school.project1.tag3": "Game Jam",

        "school.project2.title": "CarInsight – Live IT Projects TUKE",
        "school.project2.desc": "Cross-platform vehicle management app",
        "school.project2.tag1": "React Native",
        "school.project2.tag2": "FastAPI",
        "school.project1.cta": "View details",

        // ====== ADDED / UPDATED: GameDays – Call For Justice ======
        "project1.title": "Call For Justice",

        // --- EVENT ---
        "project1.eventPrefix": "Created during ",
        "project1.eventLink": "GameDays (Game Jam Košice)",
        "project1.eventSuffix": ", an event I took part in as part of a university course.",
        "project1.eventIntro": "GameDays is a 48-hour game development challenge where a small team has to design and build a playable game around a given theme—from idea, through implementation, to a final build.",

        // --- OVERVIEW ---
        "project1.overview.h": "Project overview",
        "project1.overview.p1": "In our year, the theme was journalism. Call For Justice is a 2D story-driven adventure made in Unity, where you play an investigative journalist trapped in a web of lies, corruption, and betrayal.",
        "project1.overview.p2": "You explore the city, talk to characters, gather clues, and progress through movement on the map, interactions, and short mini-games that push the narrative forward while the mafia closes in.",

        // --- CONTRIBUTION ---
        "project1.contribution.h": "My contribution",
        "project1.contribution.li1": "Implemented character movement and basic animation logic on the overworld map (controller + Animator).",
        "project1.contribution.li2": "Designed, implemented, and integrated several mini-games used throughout the story progression.",
        "project1.contribution.li3": "Worked with the team on rapid iteration, debugging, and polishing gameplay under strict 48-hour time limits.",

        // --- LEARNED ---
        "project1.learned.h": "What I gained",
        "project1.learned.li1": "Better teamwork in a small team: communication and task distribution.",
        "project1.learned.li2": "Faster thinking and decision-making under time pressure.",
        "project1.learned.li3": "A clearer overview of the full game dev process (idea → prototype → implementation → integration → release build) in a short timeframe.",

        // --- LINKS ---
        "project1.links.h": "Links",
        "project1.links.itch": "Play / view on Itch.io",
        "project1.links.youtube": "Watch gameplay on YouTube",
        "project1.links.gamedays": "About the GameDays event",

        // --- MEDIA ---
        "project1.media.video": "Gameplay video",
        "project1.media.gallery": "Screenshots",

        // ===== UPDATED: CarInsight texts (EN) =====

        // --- EVENT ---
        "project2.eventPrefix": "Created as part of the university course ",
        "project2.eventLink": "Live IT Projects TUKE",
        "project2.eventSuffix": " in cooperation with Solar Turbines Slovakia (a Caterpillar company), Team #43.",

        "project2.eventIntro":
        "Live IT Projects is a team-based university course where students collaborate with real companies to design and develop software solutions within a real-world context.",

        // --- OVERVIEW ---
        "project2.overview.h": "Project overview",

        "project2.overview.p1":
        "CarInsight is a cross-platform mobile application developed during a team project course at the Technical University of Košice. The goal was to design a practical solution for managing vehicles and related responsibilities in cooperation with an industry partner.",

        "project2.overview.p2":
        "The application allows users to manage multiple vehicles, track important events such as technical inspections, insurance, highway vignettes, and oil changes, and receive timely notifications via reminders and a clear calendar view.",

        // --- VERSION 1 ---
        "project2.version1.h": "Initial version – Team Project",

        "project2.version1.p":
        "The initial version of CarInsight was developed as part of the Live IT Projects course. It used a centralized backend architecture built with FastAPI and a relational database, focusing on delivering a complete end-to-end solution within one semester.",

        // --- VERSION 1 TECH ---
        "project2.version1.tech":
        "Technologies used:",

        // --- VERSION 2 ---
        "project2.version2.h": "Cloud version – Distributed backend",

        "project2.version2.p":
        "In a follow-up course focused on Cloud Systems, the backend architecture was redesigned to be decentralized. The monolithic backend was split into multiple services with cloud-native principles in mind.",

        // --- VERSION 2 TECH ---
        "project2.version2.tech":
        "Technologies used:",

        // --- LEARNED ---
        "project2.learned.h": "What I gained",

        "project2.learned.li1":
        "Hands-on experience with teamwork and collaborative software development based on real client requirements.",

        "project2.learned.li2":
        "Practical understanding of the full software development lifecycle, including task distribution, iteration, and stakeholder communication.",

        "project2.learned.li3":
        "Experience with transforming a centralized system into a cloud-based distributed architecture and working with AWS services.",

        "project2.links.repo1": "Repository – Team Project version",
        "project2.links.repo2": "Repository – Cloud Systems version",


    },
    sk: {
        "hero.title": "Vitajte v mojom portfóliu",
        "hero.subtitlePrefix": "Prezentácia mojich",
        "hero.projects": " Školské projekty",
        "hero.experience": "Pracovných skúsenosti",
        "hero.cv": "Prezrieť životopis",
        "projects.title": "Vybrané projekty",
        "school.title": "Školské projekty",
        "experience.title": "Pracovné skúsenosti",
        "nav.home": "Domov",
        "nav.school": "Školské projekty",
        "nav.experience": "Pracovné skúsenosti",
        "nav.cv": "Životopis",
        "footer.links": "Rýchle odkazy",
        "footer.contact": "Kontakt",
        "experience.job1.title": "Software & DevOps Engineer",
        "experience.job1.company": "Webasto Convertibles Slovakia s.r.o.",
        "experience.job1.location": "Košice, Slovenská republika",
        "experience.details.title": "Detaily pracovnej skúsenosti",
        "experience.details.period": "Obdobie",
        "experience.details.company": "Spoločnosť",
        "experience.details.location": "Miesto",
        "experience.details.responsibilities": "Povinnosti",
        "experience.details.responsibilities.text": "Ako Software & DevOps Engineer v spoločnosti Webasto Convertibles Slovakia som sa zameriava na vývoj a údržbu škálovateľných softvérových riešení a zavádzanie DevOps best practices. Moje povinnosti zahŕňali správu infraštruktúry, optimalizáciu CI/CD potrubí a spoluprácu s medziodborovými tímami na dodaní vysokokvalitných produktov.",
        "school.project1.title": "Game Jam Košice — Game Days",
        "school.project1.subtitle": "48-hodinová herná výzva (téma žurnalistika) — Call For Justice",
        "school.project1.desc": "48-hodinová herná výzva",
        "school.project1.tag1": "Unity",
        "school.project1.tag2": "2D príbehová hra",
        "school.project1.tag3": "Game Jam",

        "school.project2.title": "CarInsight – Živé IT projekty TUKE",
        "school.project2.desc": "Crossplatformová aplikácia na správu vozidiel",
        "school.project2.tag1": "React Native",
        "school.project2.tag2": "FastAPI",
        "school.project1.cta": "Zobraziť detail",

        // ====== ADDED / UPDATED: GameDays – Call For Justice (SK) ======

        "project1.title": "Call For Justice",

        // --- EVENT ---
        "project1.eventPrefix": "Vytvorené počas ",
        "project1.eventLink": "GameDays (Game Jam Košice)",
        "project1.eventSuffix": ", udalosti, ktorej som sa zúčastnil v rámci univerzitného predmetu.",
        "project1.eventIntro": "GameDays je 48-hodinová výzva vo vývoji hier, kde má malý tím za krátky čas navrhnúť a vytvoriť hrateľnú hru na zadanú tému — od nápadu cez implementáciu až po finálny build.",

        // --- OVERVIEW ---
        "project1.overview.h": "Prehľad projektu",
        "project1.overview.p1": "V našom ročníku bola témou žurnalistika. Call For Justice je 2D príbehová adventúra vytvorená v Unity, v ktorej hráč hrá vyšetrovacieho novinára uväzneného v sieti klamstiev, korupcie a zrady.",
        "project1.overview.p2": "Hráč skúma mesto, komunikuje s postavami, zbiera stopy a postupuje vďaka pohybu po mape, interakciám a krátkym minihrám, ktoré posúvajú príbeh vpred, kým mafia pritvrdzuje.",

        // --- CONTRIBUTION ---
        "project1.contribution.h": "Môj príspevok",
        "project1.contribution.li1": "Implementoval som pohyb postavy a základnú logiku animácií na mape (controller + Animator).",
        "project1.contribution.li2": "Navrhol som, implementoval a integroval viacero mini-hier, ktoré sa používajú počas progresu príbehu.",
        "project1.contribution.li3": "Spolupracoval som s tímom na rýchlej iterácii, debugovaní a doladení hrateľnosti v rámci 48-hodinového limitu.",

        // --- LEARNED ---
        "project1.learned.h": "Čo mi to dalo",
        "project1.learned.li1": "Lepšia práca v tíme: komunikácia a rozdelenie úloh v malom tíme.",
        "project1.learned.li2": "Rýchlejšie rozmýšľanie a rozhodovanie pod časovým tlakom.",
        "project1.learned.li3": "Praktický prehľad celého procesu vývoja hry (nápad → prototyp → implementácia → integrácia → release build) v krátkom čase.",

        // --- LINKS ---
        "project1.links.h": "Odkazy",
        "project1.links.itch": "Hra na Itch.io",
        "project1.links.youtube": "YouTube video",
        "project1.links.gamedays": "Informácie o udalosti GameDays",

        // --- MEDIA ---
        "project1.media.video": "Video z hry",
        "project1.media.gallery": "Screenshoty",


        // ===== UPDATED: CarInsight texts (SK) =====

        // --- EVENT ---
        "project2.eventPrefix": "Vzniklo v rámci univerzitného predmetu ",
        "project2.eventLink": "Živé IT projekty TUKE",
        "project2.eventSuffix": " v spolupráci so spoločnosťou Solar Turbines Slovakia (Caterpillar), tím #43.",

        "project2.eventIntro":
        "Živé IT projekty sú tímovým univerzitným predmetom, v rámci ktorého študenti spolupracujú s reálnymi firmami na návrhu a vývoji softvérových riešení.",

        // --- OVERVIEW ---
        "project2.overview.h": "Prehľad projektu",

        "project2.overview.p1":
        "CarInsight je crossplatformová mobilná aplikácia vytvorená počas tímového projektu na Technickej univerzite v Košiciach. Cieľom bolo navrhnúť praktické riešenie na správu vozidiel a súvisiacich povinností v spolupráci s priemyselným partnerom.",

        "project2.overview.p2":
        "Aplikácia umožňuje spravovať viacero vozidiel, evidovať dôležité udalosti ako STK, EK, poistenie, diaľničné známky či výmeny oleja a včas na ne upozorniť prostredníctvom notifikácií a prehľadného kalendára.",

        // --- VERSION 1 ---
        "project2.version1.h": "Pôvodná verzia – tímový projekt",

        "project2.version1.p":
        "Pôvodná verzia aplikácie CarInsight vznikla v rámci predmetu Živé IT projekty. Backend bol navrhnutý ako centralizovaný systém postavený na FastAPI a relačnej databáze, so zameraním na dodanie kompletného end-to-end riešenia v rámci jedného semestra.",

        // --- VERSION 1 TECH ---
        "project2.version1.tech":
        "Použité technológie:",

        // --- VERSION 2 ---
        "project2.version2.h": "Cloudová verzia – decentralizovaný backend",

        "project2.version2.p":
        "V nadväzujúcom predmete zameranom na cloudové systémy bol backend aplikácie prepracovaný do decentralizovanej architektúry. Monolitický backend bol rozdelený na viacero samostatných služieb navrhnutých podľa cloud-native princípov.",

        // --- VERSION 2 TECH ---
        "project2.version2.tech":
        "Použité technológie: ",

        // --- LEARNED ---
        "project2.learned.h": "Čo mi to dalo",

        "project2.learned.li1":
        "Skúsenosť s tímovou spoluprácou a vývojom softvéru podľa reálnych požiadaviek zadávateľa.",

        "project2.learned.li2":
        "Praktický pohľad na celý proces vývoja softvéru vrátane rozdelenia úloh, iteratívneho vývoja a komunikácie so stakeholdermi.",

        "project2.learned.li3":
        "Skúsenosti s transformáciou centralizovaného systému do cloudovej architektúry a prácou s AWS službami.",

        "project2.links.repo1": "Repozitár – verzia z tímového projektu",
        "project2.links.repo2": "Repozitár – verzia z predmetu Cloudové systémy",

    }
};

// expose translations for components
window.translations = translations;

let currentLanguage = 'en';

// Apply translations for non-shadow DOM elements
function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // update any language-toggle buttons state (if present on page)
    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active'); else btn.classList.remove('active');
    });
}

// Initialize translations on load using the global language (set by globals.js)
document.addEventListener('DOMContentLoaded', () => {
    const lang = (window.AppState && window.AppState.getLanguage && window.AppState.getLanguage()) || (window.getLanguage && window.getLanguage && window.getLanguage()) || window.currentLanguage || 'en';
    console.log('[script] initial language', lang);
    applyTranslations(lang);

    // Re-apply translations whenever language changes (triggered by the language switcher / AppState)
    if (window.AppState && window.AppState.addEventListener) {
        window.AppState.addEventListener('languageChange', (e) => {
            const next = (e && e.detail && e.detail.language) ? e.detail.language : ((window.AppState.getLanguage && window.AppState.getLanguage()) || 'en');
            console.log('[script] languageChange', next);
            applyTranslations(next);
        });
    }
    document.addEventListener('languageChange', (e) => {
        const next = (e && e.detail && e.detail.language) ? e.detail.language : ((window.AppState && window.AppState.getLanguage && window.AppState.getLanguage()) || 'en');
        console.log('[script] document languageChange', next);
        applyTranslations(next);
    });
    // expose for debugging
    window.translations = translations;
    window.applyTranslations = applyTranslations;
    // Attach smooth-scroll handlers after DOM ready
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // CV button handler
    const cvBtn = document.getElementById('cvBtn');
    if (cvBtn) {
        cvBtn.addEventListener('click', () => {
            const lang = (window.getLanguage && window.getLanguage()) || window.currentLanguage || 'en';
            const fileName = lang === 'sk' ? 'CV_SK.pdf' : 'CV_EN.pdf';
            const cvUrl = './biography/' + fileName;
            window.open(cvUrl, '_blank');
        });
    }
});

// Listen for global language changes (AppState emits this)
if (window.AppState && window.AppState.on) {
    window.AppState.on('languageChange', (e) => { console.log('[script] languageChange received', e.detail.language); applyTranslations(e.detail.language); }, { immediate: true });
}
document.addEventListener('languageChange', (e) => { console.log('[script] document languageChange', e.detail.language); applyTranslations(e.detail.language); });
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Theme management is handled globally by globals.js. Components can listen to
// the 'themeChange' event or call window.setTheme / window.toggleTheme (exposed by globals.js).