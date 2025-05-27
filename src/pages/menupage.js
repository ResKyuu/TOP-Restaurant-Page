function loadMenuPage() {
    const menuTest = document.createElement('h3');
    menuTest.textContent = "This is the Menu Page";
    const mainContent = document.querySelector("#content");
    mainContent.appendChild(menuTest);
}

export { loadMenuPage };