const div = document.getElementById("header");

const hx = window.innerHeight * 0.95;
const hy = window.innerHeight * 1.1;

function scrolled() {
    if (window.innerWidth <= 800) {
        return;
    }
    let px = window.scrollY;
    if (px >= hx) {
        let a = Math.min((px - hx) / (hy - hx), 1);
        div.style.backgroundColor = `rgba(255, 255, 255, ${a})`;
        let r = 8 + 203 * (1 - a);
        let g = 65 + 146 * (1 - a);
        let b = 102 + 109 * (1 - a);
        div.style.color = `rgb(${r}, ${g}, ${b})`;
    } else {
        div.style.backgroundColor = `rgba(255, 255, 255, 0.0)`;
        div.style.color = `lightgray`;
    }
}

document.addEventListener("scroll", scrolled);
window.addEventListener("resize", scrolled);

scrolled();