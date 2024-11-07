window.addEventListener('scroll', () => {
    const sections = [
        { id: 'Home' },
        { id: 'About' },
        { id: 'Subscription' },
        { id: 'Contact' },
        { id: 'Testimonial'},
        { id: 'Download_App' },
    ];

    const navLinks = document.querySelectorAll('.nav-links ul li a'); 

    let currentSection = '';

    sections.forEach((section, index) => {
        const element = document.querySelector(`#${section.id}`);
        const sectionTop = element.offsetTop;
        const sectionHeight = element.clientHeight;

        // Check if the current scroll position is within the section
        const nextSectionTop = index + 1 < sections.length ? document.querySelector(`#${sections[index + 1].id}`).offsetTop : Infinity;

        if (window.pageYOffset >= sectionTop - sectionHeight / .7 && window.pageYOffset < nextSectionTop - sectionHeight / 1) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.parentElement.classList.add('active');
        }
    });
});
