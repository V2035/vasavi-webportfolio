
/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "&times;";
        } else {
            menuToggle.innerHTML = "&#9776;";
        }
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.innerHTML = "&#9776;";
        });
    });
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

/* =========================
   FOOTER YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }
    });
});
