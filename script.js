document.addEventListener("DOMContentLoaded", () => {

    // Welcome alert
    setTimeout(() => {
        alert("Welcome to Laya's Resume");
    }, 500);

    // Animate sections when page loads
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";

        setTimeout(() => {
            section.style.transition = "all 0.8s ease";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });

});
