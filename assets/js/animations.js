/* ==========================================
   ANIMATIONS
========================================== */

// Floating cards effect
document.querySelectorAll(
    ".project-card, .skill-card, .certificate-card"
).forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = -(y - rect.height / 2) / 18;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

// Fade navbar on scroll
window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    navbar.style.transition = "0.4s";

});

// Floating profile image
const profile = document.querySelector(".profile-card img");

if (profile) {

    let angle = 0;

    setInterval(() => {

        angle += 0.02;

        profile.style.transform =
            `translateY(${Math.sin(angle) * 8}px)`;

    }, 20);

}