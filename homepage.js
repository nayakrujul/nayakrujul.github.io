const div = document.getElementById("header");

const hx = window.innerHeight * 0.95;
const hy = window.innerHeight * 1.1;

function scrolled() {
    let px = window.scrollY;
    if (px >= hx) {
        let a = Math.min((px - hx) / (hy - hx), 1);
        div.style.backgroundColor = `rgba(255, 255, 255, ${a})`;
        let r = 8 + 203 * (1 - a);
        let g = 65 + 146 * (1 - a);
        let b = 102 + 109 * (1 - a);
        div.style.color = `rgb(${r}, ${g}, ${b})`;
        document.getElementById("src").style.content = `url("./src-dark.svg")`;
        document.getElementById("menu").style.content = `url("./menu-dark.svg")`;
    } else {
        div.style.backgroundColor = `rgba(255, 255, 255, 0.0)`;
        div.style.color = `lightgray`;
        document.getElementById("src").style.content = `url("./src-light.svg")`;
        document.getElementById("menu").style.content = `url("./menu-light.svg")`;
    }
}

document.addEventListener("scroll", scrolled);
window.addEventListener("resize", scrolled);

scrolled();

function open_menu() {
    let lst = document.getElementById("menu-dropdown");
    lst.classList.toggle("show");
}

function close_menu({target}) {
    if (target.id !== "menu")
        document.getElementById("menu-dropdown").classList.remove("show");
}

document.getElementById("menu").addEventListener("click", open_menu);

document.body.addEventListener("click", close_menu);