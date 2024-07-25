let nav = document.querySelector('nav');
const hamburger = document.querySelector(".hamburger");
const mobileNavbar = document.querySelector(".mobileView");
const closeIcon = document.querySelector(".closeIcon");
const mainLoader = document.querySelector(".loaderContainer");
const body = document.body;


// Loader removal on body load
body.onload = function () {
    mainLoader.classList.add("removeLoader");
    body.style.overflowY = "auto";
};

// Hamburger menu toggle
if (hamburger) {
    hamburger.addEventListener("click", () => {
        mobileNavbar?.classList.add("active");
        body.style.overflow = "hidden";
    });
}

if (closeIcon) {
    closeIcon.addEventListener("click", () => {
        mobileNavbar?.classList.remove("active");
        body.style.overflowY = "auto";
    });
}

if (mobileNavbar) {
    mobileNavbar.addEventListener("click", () => {
        mobileNavbar.classList.remove("active");
        body.style.overflowY = "auto";
    });
}



// Nav active class toggle on scroll
let isNavActive = true;

window.onscroll = () => {
    if (isNavActive && window.scrollY > 40) {
        isNavActive = false;
        nav?.classList.add("active");
    } else if (!isNavActive && window.scrollY < 40) {
        isNavActive = true;
        nav?.classList.remove("active");
    }
};

// Intersection observer for animating elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("animateElement");
        } else {
            entry.target.classList.add("animateElement");
        }
    });
});

// Observe elements with the class "animateElement"
const hiddenElements = document.querySelectorAll(".animateElement");

hiddenElements.forEach((element) => observer.observe(element));