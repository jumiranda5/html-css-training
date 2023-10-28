'use-strict'

const primaryNav = document.querySelector('.primary-nav');
const toggleBtn = document.querySelector('.mobile-nav-toggle');

toggleBtn.addEventListener('click', () => {

    const isVisible = primaryNav.getAttribute("data-visible");

    if (isVisible === "true") {
        primaryNav.setAttribute("data-visible", false);
        toggleBtn.setAttribute("aria-expanded", false);
    }
    else {
        primaryNav.setAttribute("data-visible", true);
        toggleBtn.setAttribute("aria-expanded", true);
    }

});