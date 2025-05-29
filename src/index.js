import { loadHomepage } from "./pages/homepage";
import { loadMenuPage } from "./pages/menupage";
import { loadAboutPage } from "./pages/aboutpage";

function clearContent() {
  const mainContent = document.querySelector("#content");

  mainContent.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  clearContent();
  const mainContent = document.querySelector("#content");
  const body = document.querySelector("body");
  body.className = "bodyHomepage";
  mainContent.className = "homepage";
  loadHomepage();

  const homeButton = document.querySelector(".btn:nth-child(1)");
  const menuButton = document.querySelector(".btn:nth-child(2)");
  const aboutButton = document.querySelector(".btn:nth-child(3)");

  homeButton.addEventListener("click", () => {
    clearContent();
    mainContent.className = "homepage";
    body.className = "bodyHomepage";
    loadHomepage();
  });

  menuButton.addEventListener("click", () => {
    clearContent();
    mainContent.className = "menupage";
    body.className = "bodyMenupage";
    loadMenuPage();
  });

  aboutButton.addEventListener("click", () => {
    clearContent();
    mainContent.className = "aboutpage";
    body.className = "bodyAboutpage";
    loadAboutPage();
  });
});
