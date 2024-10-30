document.addEventListener("DOMContentLoaded", function () {
    const menuImg = document.querySelector(".menu-img");
    const backdrop = document.querySelector(".backdrop");
    const menuClose = document.querySelector(".menu-close");

    menuImg.addEventListener("click", () => {
        backdrop.classList.add("open");
    });

    menuClose.addEventListener("click", () => {
        backdrop.classList.remove("open");
    });
});
