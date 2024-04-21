
// build the nav
function build_nav() {
    const sections = document.querySelectorAll('section');
    let list_of_navbar = document.getElementById('navbar__list');
    for (const section of sections) {
        const list_node = document.createElement('li');
        const sec_anchor = document.createElement('a');

        sec_anchor.href = `#${section.id}`;
        sec_anchor.textContent = section.querySelector('h2').innerHTML;
        sec_anchor.classList.add('menu__link');

        list_node.appendChild(sec_anchor);
        list_of_navbar.appendChild(list_node);
    }
}

// Add class 'active' to section when near top of viewport
function add_active() {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
build_nav();
// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
});
// Set sections as active
document.addEventListener('scroll', function () {
    add_active();
})
