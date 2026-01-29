class CustomProjectCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Project Title';
        const description = this.getAttribute('description') || 'Project description';
        const tags = this.getAttribute('tags') || '';
        const image = this.getAttribute('image') || 'http://static.photos/technology/640x360/1';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .project-card {
                    background-color: white;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .project-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .project-content {
                    padding: 1.5rem;
                }
                .project-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                .project-description {
                    color: #6B7280;
                    margin-bottom: 1rem;
                }
                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .tag {
                    background-color: #E5E7EB;
                    color: #4B5563;
                    padding: 0.25rem 0.5rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                }
            </style>
            <div class="project-card">
                <img src="${image}" alt="${title}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${title}</h3>
                    <p class="project-description">${description}</p>
                    <div class="project-tags">
                        ${tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-project-card', CustomProjectCard);