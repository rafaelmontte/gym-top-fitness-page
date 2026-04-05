const elements = document.querySelectorAll('.reveal');

let lastScrollTop = 0;

function handleScroll() {
    const scrollTop = window.scrollY;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const isVisible = elementTop < windowHeight - 100;

        const isScrollingDown = scrollTop > lastScrollTop;

        if (isVisible && isScrollingDown + 100) {
            el.classList.add('active');
        } else if (elementTop > windowHeight) {
            el.classList.remove('active');
        }
    });

    lastScrollTop = scrollTop;
}

window.addEventListener('scroll', handleScroll);