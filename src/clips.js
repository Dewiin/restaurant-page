import "./clips.css";
import clip from "./assets/clips/clips.mp4";

export const displayClips = () => {
    document.body.innerHTML = 
    `
    <div class="nav-menu"></div>
    <div id="clips-bg"></div>
    <div id="tear-bg"></div>
    <div class="clips">
        <video width="105%" height="105%" disablePictureInPicture controlsList="nodownload" autoplay muted loop>
            <source src=${clip}>
        </video>
    </div>
    <div id="main">
        <div id="title"> WATCH </div>
        <footer>
            <div id="nav-home">
                HOME
            </div>
        </footer>
    </div>
    `

    const parallaxBg = document.querySelector("#clips-bg");
    const clipsVideo = document.querySelector(".clips");
    window.addEventListener("mousemove", function(e) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
        const yPos = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        parallaxBg.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
        clipsVideo.style.transform = `translate(${xPos * 5}px, ${yPos * 5}px)`;
    });
};