document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-img");
    const backdrop = document.querySelector(".backdrop");
    const navLinks = document.querySelector(".nav-links");
    const closeIcon = document.querySelector(".menu-close");

    //Function to toggle the menu
    function toggleMenu() {
        backdrop.classList.toggle("open");
        navLinks.classList.toggle("open");

        // Toggle the menu icon in the header
        menuIcon.src = backdrop.classList.contains("open")
        ? "/assets/images/icon-menu-close.svg"
        : "/assets/images/icon-menu.svg";
    }

    // Open menu when clocking the hamburger icon
    menuIcon.addEventListener("click", toggleMenu);

    // Close menu when clicking the close icon inside nav-links
    closeIcon.addEventListener("click", toggleMenu);
});