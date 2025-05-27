function loadAboutPage() {
    const menuTest = document.createElement('h3');
    menuTest.textContent = "This is the About Page";
    const mainContent = document.querySelector("#content");
    mainContent.appendChild(menuTest);
}

export { loadAboutPage };