[...document.querySelectorAll(".spoiler")].map(p => {
    p.onclick = (event) => {
        let elem = event.srcElement.parentElement;
        if ([...elem.classList].includes("show-spoiler")) {
            elem.classList.remove("show-spoiler");
        } else {
            elem.classList.add("show-spoiler");
        }
    };
});