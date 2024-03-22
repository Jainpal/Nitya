// Hide the splash screen after a delay
window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".splash-screen").style.display = "none";
    }, 2000); // Adjust the delay as needed
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", function() {
        navList.classList.toggle("active");
    });
});

