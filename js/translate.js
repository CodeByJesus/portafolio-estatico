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
        projects_section_title: "Proyectos",
        no_projects: "No se encontraron proyectos aún. (Debes añadirlos manualmente aquí)",
        contact_title: "Contacto",
        lets_talk: "Hablemos",
        contact_text: "Si tienes alguna pregunta, una oferta de trabajo o simplemente quieres saludar, no dudes en contactarme. ¡Estoy disponible para nuevos proyectos!",
        made_with: "Esta página fue hecha con:",
        portfolio_tech: "Portafolio Técnico",
        cv_path: "cv/CV-jesus_martinez.pdf", // Ruta del CV en español

        technologies_label: "Tecnologías:",

        // Traducciones para el proyecto "404/Blog"
        blog_project_title: "404/Blog",
        blog_project_description: "Un blog técnico desarrollado inicialmente con Django, ahora transformado en un sitio estático usando Pelican para optimizar rendimiento y costos. Incluye un backend de Django para la gestión de contenido.",
        view_blog: "Ver Blog",

        // Traducciones para el proyecto "Synapse"
        synapse_project_title: "Synapse - Asistente de Datos",
        synapse_project_description: "Proyecto educativo completo de análisis de datos con Django. Incluye análisis automático de datasets, detección de valores faltantes, limpieza de datos con múltiples estrategias, visualizaciones interactivas (barras, líneas, dispersión), generación de reportes PDF profesionales y soporte multilingüe. Demuestra habilidades avanzadas en análisis de datos y desarrollo web full-stack.",
        synapse_open_app: "Abrir App",
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
        projects_section_title: "Projects",
        no_projects: "No projects found yet. (You must add them manually here)",
        contact_title: "Contact",
        lets_talk: "Let's Talk",
        contact_text: "If you have any questions, a job offer, or just want to say hello, don't hesitate to contact me. I'm available for new projects!",
        made_with: "This page was made with:",
        portfolio_tech: "Technical Portfolio",
        cv_path: "cv/CV-jesus_martinez-EN.pdf", // Ruta del CV en inglés

        technologies_label: "Technologies:",

        // Traducciones para el proyecto "404/Blog"
        blog_project_title: "404/Blog",
        blog_project_description: "A technical blog initially developed with Django, now transformed into a static site using Pelican to optimize performance and costs. It includes a Django backend for content management.",
        view_blog: "View Blog",

        // Traducciones para el proyecto "Synapse"
        synapse_project_title: "Synapse - Data Assistant",
        synapse_project_description: "Complete educational data analysis project with Django. Includes automatic dataset analysis, missing value detection, data cleaning with multiple strategies, interactive visualizations (bars, lines, scatter), professional PDF report generation, and multilingual support. Demonstrates advanced skills in data analysis and full-stack web development.",
        synapse_open_app: "Open App",
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
