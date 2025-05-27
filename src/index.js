import "./styles.css";
import { loadHomepage } from "./pages/homepage";
import { loadMenuPage } from "./pages/menupage";
import { loadAboutPage } from "./pages/aboutpage";

function clearContent() {
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    clearContent();
    loadHomepage();

    const homeButton = document.querySelector(".btn:nth-child(1)");
    const menuButton = document.querySelector(".btn:nth-child(2)");
    const aboutButton = document.querySelector(".btn:nth-child(3)");

    homeButton.addEventListener("click", () => {
        clearContent();
        loadHomepage();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        loadMenuPage();
    });

    aboutButton.addEventListener("click", () => {
        clearContent();
        loadAboutPage();
    });
 });