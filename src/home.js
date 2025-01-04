import "./home.css";

export const displayHome = () => {
    document.body.innerHTML = 
    `
    <div id="home-bg"></div>
    <div id="tear-bg"></div>
    <div id="mr-bg"></div>
    <div id="main">
        <div id="title"> Regular Food </div>

        <footer>
            <div id="nav-menu">
                MENU
            </div>
        </footer>
    </div>
    `

    const parallaxBg = document.querySelector("#home-bg");
    const mrBg = document.querySelector('#mr-bg');
    window.addEventListener("mousemove", function(e) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
        const yPos = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        parallaxBg.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
        mrBg.style.transform = `translate(${xPos * 50}px, ${yPos * 40}px)`;
    });
};