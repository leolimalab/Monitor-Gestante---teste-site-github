// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.sidebar nav a');

mobileBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking a link on mobile
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.sidebar nav li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
