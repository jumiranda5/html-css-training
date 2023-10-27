'use-strict'

// When the user scrolls the page, execute myFunction
window.onscroll = () => { setScroll() };

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const setSticky = () => {
    if (window.scrollY >= sticky) navbar.classList.add("sticky") 
    else navbar.classList.remove("sticky");
}

// Add the active class to the nav link when the scroll position is reached.

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');
let currentId;

const setActiveLink = () => {

    sections.forEach(sec => {
        
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height && id != currentId) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-link[href*=' + id + ']').classList.add('active');
            });

            currentId = id;
            console.log(currentId);
        };
    });

}

// Add both the sticky nav and active link classes

const setScroll = () => {
    setSticky();
    setActiveLink();
}
