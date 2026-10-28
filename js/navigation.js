document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('.page-section');
    const heroBtn = document.getElementById('heroBtn');

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        let targetSection = document.getElementById(targetId);
        if (!targetSection && targetId === 'courses') {
            targetSection = document.getElementById('courses-section');
        }

        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === targetId || (href === 'courses-section' && targetId === 'courses')) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            showSection(targetId);
        });
    });

    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            showSection('register');
        });
    }
});