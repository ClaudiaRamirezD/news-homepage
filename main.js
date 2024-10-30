document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-img");
    const backdrop = document.querySelector(".backdrop");
    const navLinks = document.querySelector(".nav-links");
    const closeIcon = document.querySelector(".menu-close");

    // Function to toggle the menu
    function toggleMenu() {
        backdrop.classList.toggle("open");
        navLinks.classList.toggle("open");

        // Toggle the menu icon in the header
        menuIcon.src = backdrop.classList.contains("open")
        ? "assets/images/icon-menu-close.svg"
        : "assets/images/icon-menu.svg"; 

        console.log("Backdrop class: ", backdrop.className);
    }

    // Open menu when clicking the hamburger icon
    menuIcon.addEventListener("click", function () {
        console.log("Menu icon clicked");
        toggleMenu();
    });

    // Close menu when clicking the close icon inside nav-links
    closeIcon.addEventListener("click", function () {
        console.log("Close icon clicked");
        toggleMenu();
    });

    // For larger screens nav-links are always visible
    function handleResize() {
        if (window.innerWidth >= 60 * 10) {
        backdrop.classList.remove("open");
        navLinks.classList.remove("open");
        menuIcon.src = "assets/images/icon-menu.svg"; 
        }
    }

    window.addEventListener("resize", handleResize);
});
