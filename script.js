// This file can be used for any interactive JavaScript elements.

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('The Club.Jersey website loaded successfully!');

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true,      // whether animation should happen only once - while scrolling down
        mirror: false,   // whether elements should animate out while scrolling past them
    });
});