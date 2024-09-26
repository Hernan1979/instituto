document.addEventListener('DOMContentLoaded', () => {
    const analysesList = document.getElementById('analyses-list');

    const analyses = [
        {
            title: "La rebelión del 2022",
            summary: "Un análisis de los eventos que llevaron a la toma de Lima.",
            link: "#"
        },
        {
            title: "Elecciones 2024: Un punto de inflexión",
            summary: "¿Hacia dónde se dirige Perú con las próximas elecciones?",
            link: "#"
        }
    ];

    analyses.forEach(analysis => {
        const analysisCard = `
            <div class="analysis-card">
                <h3>${analysis.title}</h3>
                <p>${analysis.summary}</p>
                <a href="${analysis.link}" class="btn">Leer más</a>
            </div>
        `;
        analysesList.innerHTML += analysisCard;
    });
});
