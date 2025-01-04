import "./menu.css";
import deathSandwich from "./assets/menu/death_sandwich.png";
import eggscellent from "./assets/menu/eggscellent.png";
import grilledCheese from "./assets/menu/grilled_cheese_deluxe.png";
import mississippiQueen from "./assets/menu/mississippi_queen.png";

export const displayMenu = () => {
    document.body.innerHTML = 
    `
    <div id="menu-bg"></div>
    <div id="tear-bg"></div>
    <div id="main">
        <div class="nav-home"></div>
        <div id="title">MENU</div>
        <div class="menu-foods">
            <div>
                <img src=${deathSandwich}>
                <p>Death Sandwich</p>
                <p>0.01</p>
            </div>
            <div>
                <img src=${eggscellent}>
                <p>Eggscellent Challenge</p>
                <p>7.77</p>
            </div>
            <div>
                <img src=${grilledCheese}>
                <p>Grilled Cheese Deluxe</p>
                <p>4.20</p>
            </div>
            <div>
                <img src=${mississippiQueen}>
                <p>Mississippi Queen</p>
                <p>6.66</p>
            </div>
        </div>
        <footer>
            <div id="nav-clips" class="homepage">
                WATCH
            </div>
        </footer>
    </div>
    `

    const parallaxBg = document.querySelector("#menu-bg");
    window.addEventListener("mousemove", function(e) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
        const yPos = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        parallaxBg.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px)`;
    });
};