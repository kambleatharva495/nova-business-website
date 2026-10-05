const button = document.querySelector(".hero-button");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
menuToggle.addEventListener("click", function () {
    console.log("Menu button clicked");
});
button.addEventListener("click", function (event) {

    event.preventDefault();

    button.textContent = "Let's Work Together";

    setTimeout(function () {
        window.location.href = "#contact";
    }, 500);
});