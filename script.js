/* ---------------------------------------- */
/* --- S I M P L I F I E D  J A V A S C R I P T --- */
/* ---------------------------------------- */

// Use DOMContentLoaded to ensure all elements exist before attaching listeners
document.addEventListener('DOMContentLoaded', () => {

    // 1. Attach listeners for all "View Details" buttons
    document.querySelectorAll('.btn-toggle').forEach(button => {
        button.addEventListener('click', function() {
            // Get ID from aria-controls attribute
            const detailsId = this.getAttribute('aria-controls');
            toggleDetails(detailsId);
        });
    });
    
    // 2. Attach listener for back-to-top button
    document.getElementById('back-to-top').addEventListener('click', scrollToTop);
    
    // 3. Attach listener for scrolling to show/hide the back-to-top button
    window.onscroll = function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
});


/**
 * Toggles the visibility of the course description for a given card.
 */
function toggleDetails(id) {
    const details = document.getElementById(id);
    const button = document.querySelector(`[aria-controls="${id}"]`); 
    
    details.classList.toggle('active');

    if (details.classList.contains('active')) {
        button.textContent = 'Hide Details';
        button.setAttribute('aria-expanded', 'true');
    } else {
        button.textContent = 'View Details';
        button.setAttribute('aria-expanded', 'false');
    }
}

/**
 * 🥳 NEW: Shows a simple alert when a user enrolls.
 * This replaces all the shopping cart logic.
 */
function showEnrollmentMessage(courseTitle) {
    alert(`Thank you for enrolling in ${courseTitle}!\n\nYou will receive a confirmation email shortly.`);
}


/**
 * Smoothly scrolls to the top of the page.
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}