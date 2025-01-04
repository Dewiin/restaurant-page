import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayClips } from "./clips.js";

function initializePage() {
    displayHome();

    document.body.addEventListener("click", (e) => {
        if((e.target.id === "nav-menu") || (e.target.classList.contains("nav-menu"))) {
            displayMenu();
        }
        else if((e.target.id === "nav-home") || (e.target.classList.contains("nav-home"))) {
            displayHome();
        }
        else if((e.target.id === "nav-clips") || (e.target.classList.contains("nav-clips"))) {
            displayClips();
        }
    });
};

initializePage();

