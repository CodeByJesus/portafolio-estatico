const translations = {
    es: {
        page_title: "Portafolio",
        greeting: "Hola 👋, soy",
        job_title: "Desarrollador Junior con especialidad en Backend y Analítica de Datos",
        download_cv: "Descargar CV",
        view_projects: "Ver Proyectos",
        about_me_title: "Sobre Mí",
        about_me_text: "Soy un apasionado desarrollador con un fuerte interés en construir soluciones eficientes y escalables. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente. Mi objetivo es aportar valor a través del código y colaborar en proyectos innovadores.",
        skills_title: "Conocimientos",
        languages_title: "Lenguajes",
        frameworks_title: "Frameworks y Librerías",
        databases_title: "Bases de Datos",
        tools_title: "Herramientas y Otros",
        projects_title: "Proyectos recientes",
        no_projects: "No se encontraron proyectos aún. (Debes añadirlos manualmente aquí)",
        contact_title: "Contacto",
        lets_talk: "Hablemos",
        contact_text: "Si tienes alguna pregunta, una oferta de trabajo o simplemente quieres saludar, no dudes en contactarme. ¡Estoy disponible para nuevos proyectos!",
        made_with: "Esta página fue hecha con:",
        portfolio_tech: "Portafolio Técnico",
        cv_path: "cv/CV-jesus_martinez.pdf", // Ruta del CV en español
        // Añade aquí las traducciones para tus proyectos hardcodeados
    },
    en: {
        page_title: "Portfolio",
        greeting: "Hi 👋, I'm",
        job_title: "Junior Developer specializing in Backend and Data Analytics",
        download_cv: "Download CV",
        view_projects: "View Projects",
        about_me_title: "About Me",
        about_me_text: "I am a passionate developer with a strong interest in building efficient and scalable solutions. I love learning new technologies and facing challenges that allow me to grow professionally. My goal is to add value through code and collaborate on innovative projects.",
        skills_title: "Skills",
        languages_title: "Languages",
        frameworks_title: "Frameworks & Libraries",
        databases_title: "Databases",
        tools_title: "Tools & Others",
        projects_title: "Recent Projects",
        no_projects: "No projects found yet. (You must add them manually here)",
        contact_title: "Contact",
        lets_talk: "Let's Talk",
        contact_text: "If you have any questions, a job offer, or just want to say hello, don't hesitate to contact me. I'm available for new projects!",
        made_with: "This page was made with:",
        portfolio_tech: "Technical Portfolio",
        cv_path: "cv/CV-jesus_martinez-EN.pdf", // Ruta del CV en inglés
        // Add here translations for your hardcoded projects
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang; // Set HTML lang attribute
    localStorage.setItem('selectedLanguage', lang); // Save preference

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Special case for title tag
    const titleElement = document.querySelector('title[data-translate="page_title"]');
    if (titleElement && translations[lang] && translations[lang]['page_title']) {
        titleElement.textContent = translations[lang]['page_title'];
    }

    // Update CV download link
    const cvLink = document.getElementById('cv-download-link');
    if (cvLink && translations[lang] && translations[lang]['cv_path']) {
        cvLink.href = translations[lang]['cv_path'];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Default to Spanish

    if (languageSelector) {
        languageSelector.value = savedLanguage;
        languageSelector.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }

    setLanguage(savedLanguage); // Apply initial translation
});