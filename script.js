// Language management
const translations = {
    en: {
        "hero.title": "Welcome to My Portfolio",
        "hero.subtitle": "Showcasing my work experience and school projects",
        "hero.projects": "School Projects",
        "hero.experience": "Work Experience",
        "projects.title": "Featured Projects",
        "school.title": "School Projects",
        "experience.title": "Work Experience",
        "footer.copyright": "© 2023 My Portfolio. All rights reserved.",
        "nav.home": "Home",
        "nav.school": "School Projects",
        "nav.experience": "Work Experience",
        "nav.cv": "CV",
        "footer.about": "About Me",
        "footer.aboutText": "Student with passion for technology and learning.",
        "footer.links": "Quick Links",
        "footer.contact": "Contact",
        "experience.job1.title": "Software & DevOps Engineer",
        "experience.job1.company": "Webasto Convertibles Slovakia s.r.o.",
        "experience.job1.location": "Košice, Slovak Republic",
        "experience.job1.period": "July 2023 – August 2025",
        "experience.back": "Back to Experience",
        "experience.details.period": "Period",
        "experience.details.company": "Company",
        "experience.details.location": "Location",
        "experience.details.responsibilities": "Responsibilities",
        "experience.details.responsibilities.text": "As a Software & DevOps Engineer at Webasto Convertibles Slovakia, I focused on developing and maintaining scalable software solutions while implementing DevOps best practices. My responsibilities included infrastructure management, CI/CD pipeline optimization, and collaborating with cross-functional teams to deliver high-quality products.",
"experience.details.intro.title": "Role overview",
        "experience.details.intro.text": "I worked as a Software & DevOps Engineer, focusing on internal developer enablement and CI automation. I created and maintained extensive GitLab Wiki documentation and later built a full Polyspace static analysis workflow in Jenkins (Bug Finder and Code Prover), from configuration and filtering to exporting results and publishing reports.",
        "experience.details.keyResponsibilities.title": "Key responsibilities",
        "experience.details.keyResponsibilities.item1": "Create and maintain internal GitLab Wiki documentation for development processes, pipelines, and tooling.",
        "experience.details.keyResponsibilities.item2": "Implement Polyspace static analysis in Jenkins pipelines (Bug Finder and Code Prover) with project- and variant-based configuration.",
        "experience.details.keyResponsibilities.item3": "Design continuous jobs for fast analysis of changed files with concise summaries for Merge Requests, and nightly jobs for full-project analysis with detailed results.",
        "experience.details.keyResponsibilities.item4": "Provide ongoing Polyspace support: troubleshooting, output optimization, and keeping automation stable across projects; occasionally build small helper tools and scripts.",
        "experience.details.polyspace.title": "Polyspace in Jenkins (Bug Finder & Code Prover)",
        "experience.details.polyspace.intro": "The goal was to give developers quick, relevant feedback during Merge Requests, while also running deeper full-project verification regularly. The pipelines were structured around variants, robust source filtering, and clear outputs (artifacts, reports, and server uploads).",
        "experience.details.polyspace.continuous.title": "Continuous job (Merge Requests)",
        "experience.details.polyspace.continuous.item1": "Detect changed files by comparing the Merge Request branch against main and store the list for later filtering.",
        "experience.details.polyspace.continuous.item2": "Analyze only valid changed .c/.cpp files that are present in the variant's compile_commands.json, while excluding configured folders to avoid noise.",
        "experience.details.polyspace.continuous.item3": "Run Polyspace Bug Finder for fast feedback (Code Prover intentionally skipped to keep runtime low).",
        "experience.details.polyspace.continuous.item4": "Export results to CSV and SARIF, normalize SARIF paths with a script, generate a human-readable summary, and post it as a Merge Request comment; archive artifacts for download.",
        "experience.details.polyspace.nightly.title": "Nightly job (full analysis)",
        "experience.details.polyspace.nightly.item1": "Run full analysis across predefined variants, not limited to changed files.",
        "experience.details.polyspace.nightly.item2": "Execute both Bug Finder and Code Prover per variant, with parallel processing and consistent preprocessing configuration.",
        "experience.details.polyspace.nightly.item3": "Upload results to Polyspace Access in a structured hierarchy by variant and tool for team-wide browsing and review.",
        "experience.details.polyspace.nightly.item4": "Generate HTML reports from selected templates and export standardized CSV/SARIF outputs, then package and publish the outputs as Jenkins artifacts.",
        "experience.details.polyspace.implementation.title": "Implementation details",
        "experience.details.polyspace.implementation.item1": "Use CMake compilation databases (compile_commands.json) as the single source of truth for per-variant configuration.",
        "experience.details.polyspace.implementation.item2": "Generate .psopts files via polyspace-configure and apply exclude-sources patterns to remove third-party / generated / irrelevant code from analysis sources.",
        "experience.details.polyspace.implementation.item3": "Handle cases where excluded folders still appear in preprocessing options by building a custom -do-not-generate-results-for argument (derived from .psopts content).",
        "experience.details.polyspace.implementation.item4": "Patch configurations for specific compiler environments (e.g., Green Hills) by adding stub include paths required for preprocessing.",
        "experience.details.polyspace.implementation.item5": "Configure analysis for interrupt handling and project-specific preprocessing (macros and interrupt enable/disable routines).",
        "experience.details.polyspace.implementation.item6": "Document safe usage of Polyspace code annotations as a last resort, with clear status/severity and justification comments for traceability.",
        "experience.details.support.title": "Polyspace support & troubleshooting",
        "experience.details.support.item1": "Diagnose and fix pipeline issues (configuration, missing sources/options, preprocessing problems, tool invocation errors).",
        "experience.details.support.item2": "Improve signal-to-noise by refining exclusions, filtering logic, and report/export outputs so results are actionable.",
        "experience.details.support.item3": "Help developers consume results effectively (Jenkins artifacts, Polyspace Access browsing, SARIF workflows in VS Code) and keep documentation up to date.",
        "experience.details.tech.title": "Technologies & tooling",
        "experience.details.tech.subtitle": "Main focus: CI/CD automation, static analysis integration, reporting/export workflows, and internal documentation."
    },
    sk: {
        "hero.title": "Vitajte v mojom portfóliu",
        "hero.subtitle": "Prezentácia mojej pracovnej praxe a školských projektov",
        "hero.projects": " Školské projekty",
        "hero.experience": "Pracovné skúsenosti",
        "projects.title": "Vybrané projekty",
        "school.title": "Školské projekty",
        "experience.title": "Pracovné skúsenosti",
        "footer.copyright": "© 2023 Moje portfólio. Všetky práva vyhradené.",
        "nav.home": "Domov",
        "nav.school": "Školské projekty",
        "nav.experience": "Pracovné skúsenosti",
        "nav.cv": "Životopis",
        "footer.about": "O mne",
        "footer.aboutText": "Študent so záujmom o technológie a učenie.",
        "footer.links": "Rýchle odkazy",
        "footer.contact": "Kontakt",
        "experience.job1.title": "Software & DevOps Engineer",
        "experience.job1.company": "Webasto Convertibles Slovakia s.r.o.",
        "experience.job1.location": "Košice, Slovenská republika",
        "experience.job1.period": "Júl 2023 – Aug 2025",
        "experience.back": "Späť na pracovné skúsenosti",
        "experience.details.period": "Obdobie",
        "experience.details.company": "Spoločnosť",
        "experience.details.location": "Miesto",
        "experience.details.responsibilities": "Povinnosti",
        "experience.details.responsibilities.text": "Ako Software & DevOps Engineer v spoločnosti Webasto Convertibles Slovakia som sa zameriava na vývoj a údržbu škálovateľných softvérových riešení a zavádzanie DevOps best practices. Moje povinnosti zahŕňali správu infraštruktúry, optimalizáciu CI/CD potrubí a spoluprácu s medziodborovými tímami na dodaní vysokokvalitných produktov.",
"experience.details.intro.title": "Prehľad roly",
        "experience.details.intro.text": "Pracoval som ako Software & DevOps Engineer so zameraním na podporu vývojárov a automatizáciu CI. Vytvoril som a spravujem rozsiahlu dokumentáciu v GitLab Wiki a neskôr som v Jenkins pipeline vybudoval kompletný workflow statickej analýzy Polyspace (Bug Finder a Code Prover) – od konfigurácie a filtrovania až po export výsledkov a generovanie reportov.",
        "experience.details.keyResponsibilities.title": "Hlavné zodpovednosti",
        "experience.details.keyResponsibilities.item1": "Tvorba a údržba internej dokumentácie v GitLab Wiki pre vývojové procesy, pipeline a nástroje.",
        "experience.details.keyResponsibilities.item2": "Implementácia statickej analýzy Polyspace v Jenkins pipeline (Bug Finder a Code Prover) s konfiguráciou podľa projektov a variantov.",
        "experience.details.keyResponsibilities.item3": "Návrh continuous jobov na rýchlu analýzu zmien s krátkym súhrnom pre Merge Requesty a nightly jobov na celoprojektovú analýzu s podrobnými výsledkami.",
        "experience.details.keyResponsibilities.item4": "Priebežná podpora Polyspace: riešenie problémov, optimalizácia výstupov a stabilná prevádzka naprieč projektmi; občas tvorba menších nástrojov a skriptov.",
        "experience.details.polyspace.title": "Polyspace v Jenkins (Bug Finder & Code Prover)",
        "experience.details.polyspace.intro": "Cieľom bolo dať vývojárom rýchlu a relevantnú spätnú väzbu počas Merge Requestov, a zároveň pravidelne spúšťať hlbšiu celoprojektovú verifikáciu. Pipeline sú postavené na variantách, spoľahlivom filtrovaní zdrojákov a čitateľných výstupoch (artifacty, reporty a upload na server).",
        "experience.details.polyspace.continuous.title": "Continuous job (Merge Requesty)",
        "experience.details.polyspace.continuous.item1": "Detekcia zmenených súborov porovnaním MR vetvy voči main a uloženie zoznamu pre ďalšie filtrovanie.",
        "experience.details.polyspace.continuous.item2": "Analýza iba platných zmenených .c/.cpp súborov, ktoré sú v compile_commands.json daného variantu, s vylúčením definovaných priečinkov kvôli šumu.",
        "experience.details.polyspace.continuous.item3": "Spustenie Polyspace Bug Finder pre rýchlu spätnú väzbu (Code Prover sa zámerne nespúšťa kvôli času).",
        "experience.details.polyspace.continuous.item4": "Export do CSV a SARIF, normalizácia ciest v SARIF skriptom, generovanie čitateľného súhrnu a jeho pridanie ako komentár do Merge Requestu; archivácia artifactov na stiahnutie.",
        "experience.details.polyspace.nightly.title": "Nightly job (plná analýza)",
        "experience.details.polyspace.nightly.item1": "Plná analýza naprieč preddefinovanými variantami, nie iba zmenené súbory.",
        "experience.details.polyspace.nightly.item2": "Spustenie Bug Finder aj Code Prover pre každý variant s paralelizáciou a konzistentnou konfiguráciou preprocessingu.",
        "experience.details.polyspace.nightly.item3": "Upload výsledkov do Polyspace Access so štruktúrou podľa variantu a nástroja pre tímové prehliadanie a review.",
        "experience.details.polyspace.nightly.item4": "Generovanie HTML reportov zo zvolených šablón, export CSV/SARIF a balenie/publikovanie výstupov ako Jenkins artifactov.",
        "experience.details.polyspace.implementation.title": "Detaily implementácie",
        "experience.details.polyspace.implementation.item1": "Použitie CMake compilation database (compile_commands.json) ako zdroja pravdy pre konfiguráciu analýzy po variantách.",
        "experience.details.polyspace.implementation.item2": "Generovanie .psopts cez polyspace-configure a použitie exclude-sources patternov na odstránenie 3P / generovaného / nerelevantného kódu zo zdrojov analýzy.",
        "experience.details.polyspace.implementation.item3": "Riešenie prípadov, keď sa vylúčené priečinky objavia v preprocessing optionoch, pomocou vlastného argumentu -do-not-generate-results-for (odvodeného z obsahu .psopts).",
        "experience.details.polyspace.implementation.item4": "Patchovanie konfigurácie pre špecifické kompilátorové prostredia (napr. Green Hills) pridaním stub include ciest potrebných pre preprocessing.",
        "experience.details.polyspace.implementation.item5": "Konfigurácia analýzy pre prerušenia a projektový preprocessing (makrá a rutiny na disable/enable interruptov).",
        "experience.details.polyspace.implementation.item6": "Dokumentovanie bezpečného používania Polyspace anotácií ako poslednej možnosti, vrátane statusu/severity a jasného odôvodnenia pre traceability.",
        "experience.details.support.title": "Podpora a troubleshooting Polyspace",
        "experience.details.support.item1": "Diagnostika a oprava problémov v pipeline (konfigurácia, chýbajúce sources/options, preprocessing, chyby volania nástrojov).",
        "experience.details.support.item2": "Zlepšovanie signal-to-noise úpravou vylúčení, filtrovania a výstupov reportov/exportov tak, aby boli výsledky akčné.",
        "experience.details.support.item3": "Pomoc vývojárom s používaním výsledkov (Jenkins artifacty, Polyspace Access, SARIF workflow vo VS Code) a priebežná aktualizácia dokumentácie.",
        "experience.details.tech.title": "Technológie a nástroje",
        "experience.details.tech.subtitle": "Hlavný fokus: automatizácia CI/CD, integrácia statickej analýzy, reporty/exporty a interná dokumentácia."
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
    // Attach smooth-scroll handlers after DOM ready
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
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