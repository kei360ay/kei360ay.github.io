document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar-menu a');
    const sections = document.querySelectorAll('section, main > div'); // Select all sections and main content divs

    // Hide the projects section on initial load
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
        projectsSection.style.display = 'none';
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');

            // Hide all sections and main content divs
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.display = 'none';
            });

            setTimeout(() => {
                if (targetId === 'about-me') {
                    // Show all elements relevant to the "about me" section
                    const aboutMeSection = document.querySelector('.about-me');
                    const mainContent = document.querySelector('.main-content');
                    const skillsSection = document.querySelector('.skills-section');

                    if (aboutMeSection) {
                        aboutMeSection.style.display = 'block';
                        aboutMeSection.style.opacity = '1';
                        aboutMeSection.classList.add('tab-content');
                    }

                    if (mainContent) {
                        mainContent.style.display = 'flex';
                        mainContent.style.opacity = '1';
                        mainContent.classList.add('tab-content');
                    }

                    if (skillsSection) {
                        skillsSection.style.display = 'flex';
                        skillsSection.style.opacity = '1';
                        skillsSection.classList.add('tab-content');
                    }
                } else if (targetId === 'projects-section') {
                    // Show all elements relevant to the "projects" section
                    const projectsSection = document.querySelector('.projects-section');
                    const projectsTable = document.querySelector('.projects-table');

                    if (projectsSection) {
                        projectsSection.style.display = 'block';
                        projectsSection.style.opacity = '1';
                        projectsSection.classList.add('tab-content');
                    }

                    if (projectsTable) {
                        projectsTable.style.display = 'block';
                        projectsTable.style.opacity = '1';
                        projectsTable.classList.add('tab-content');
                    }
                } else {
                    // Show the target section
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.style.display = 'block';
                        targetSection.classList.add('tab-content');
                    }
                }
            }, 200);
        });
    });

});