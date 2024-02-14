const div = document.getElementById("header");

const hx = window.innerHeight * 0.95;
const hy = window.innerHeight * 1.1;

function scrolled() {
    let px = window.scrollY;
    console.log(px);
    if (px >= hx) {
        let a = (px - hx) / (hy - hx);
        div.style.backgroundColor = `rgba(255, 255, 255, ${a})`;
        let r = 1 + 210 * (1 - a);
        let g = 97 + 114 * (1 - a);
        let b = 109 + 102 * (1 - a);
        div.style.color = `rgb(${r}, ${g}, ${b})`;
    } else {
        div.style.backgroundColor = `rgba(255, 255, 255, 0.0)`;
        div.style.color = `lightgray`;
    }
}

document.addEventListener("scroll", scrolled);

scrolled();