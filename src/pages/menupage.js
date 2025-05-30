import "../../styles/menustyle.css";
//importing createElement Factory function to create DOM elements
import { createElement } from "../domUtils.js";
// Importing menu items data from JSON file
import menuItemsData from "../Data/menuItems.json"; 


//Factory function to create menu item elements
function createMenuItemCard(itemData) {
  return createElement("div", {
        classList: "menuItemDetails",
        children: [
          createElement("h3", {
            textContent: itemData.name,
            classList: "menuItemName",
          }),
          createElement("p", {
            textContent: itemData.description,
            classList: "menuItemDescription",
          }),
          createElement("p", {
            textContent: itemData.price,
            classList: "menuItemPrice",
          }),
        ],
      })
}

function loadMenuPage() {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = ""; // Clear previous content

  const menuItemElements = menuItemsData.map((itemData) =>
    createMenuItemCard(itemData)
  );

  //create DOM Structure/Elements for the menupage
  const menuPageContent = createElement("div", {
    classList: "menuPageContent",
    children: [
      createElement("h1", {
        textContent: "Our Menu",
        classList: "menuPageTitle",
      }),
      createElement("p", {
        textContent: `Explore our delicious kebab offerings, crafted with the finest ingredients and bursting with flavor.`,
        classList: "menuPageDescription",
      }),
      createElement("br"),
      createElement("p", {
        textContent: `Whether you're a meat lover or a veggie enthusiast, we have something for everyone!`,
        classList: "menuPageDescription",
      }),
      createElement("div", {
        classList: "menuItems",
        children: menuItemElements,
      }),
    ],
  });

  //Append the created DOM elements to the mainContent Div for it to be displayed
  mainContent.appendChild(menuPageContent);
}

export { loadMenuPage };
