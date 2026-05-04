document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const navOverlay = document.getElementById('nav-overlay');

    function toggleMenu() {
        mainNav.classList.toggle('open');
        navOverlay.classList.toggle('open');
        document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    }

    if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
    if(navOverlay) navOverlay.addEventListener('click', toggleMenu);


    // --- Product Image Gallery ---
    const thumbnails = document.querySelectorAll('.thumb');
    const mainProductImg = document.getElementById('main-product-img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Update main image src
            mainProductImg.src = this.src;
            
            // Update active state
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // --- Color Selector ---
    const colorBtns = document.querySelectorAll('.color-btn');
    const selectedColorText = document.getElementById('selected-color-text');

    colorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update text
            const colorName = this.getAttribute('data-color');
            if(selectedColorText) selectedColorText.textContent = colorName;
            
            // Update active state
            colorBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // --- FAQ Accordion ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            
            // Toggle active class
            item.classList.toggle('active');
            
            // Optional: Close others
            /*
            const siblings = document.querySelectorAll('.accordion-item');
            siblings.forEach(sibling => {
                if(sibling !== item) {
                    sibling.classList.remove('active');
                }
            });
            */
        });
    });
});

// Global function for gallery if onclick is used in HTML
window.changeImage = function(src) {
    const mainImg = document.getElementById('main-product-img');
    if(mainImg) mainImg.src = src;
}
