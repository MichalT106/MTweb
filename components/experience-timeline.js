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
                    <div class="timeline-content">
                        <div class="timeline-date">2022 - Present</div>
                        <h3 class="timeline-title" data-i18n="experience.job1.title">Senior Developer</h3>
                        <p class="timeline-description" data-i18n="experience.job1.description">Leading development teams and implementing complex solutions</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <div class="timeline-date">2019 - 2022</div>
                        <h3 class="timeline-title" data-i18n="experience.job2.title">Software Engineer</h3>
                        <p class="timeline-description" data-i18n="experience.job2.description">Developed web applications and APIs</p>
                    </div>
                </div>
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <div class="timeline-date">2017 - 2019</div>
                        <h3 class="timeline-title" data-i18n="experience.job3.title">Junior Developer</h3>
                        <p class="timeline-description" data-i18n="experience.job3.description">Assisted in development and maintenance of applications</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <div class="timeline-date">2015 - 2017</div>
                        <h3 class="timeline-title" data-i18n="experience.job4.title">Intern</h3>
                        <p class="timeline-description" data-i18n="experience.job4.description">Learned industry practices and assisted senior developers</p>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-experience-timeline', CustomExperienceTimeline);