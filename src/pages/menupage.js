import "../../styles/menustyle.css";
import { createElement } from "../domUtils.js";


// Data for menu items
const menuItemsData = [
    {
        name: "Döner Kebab",
        description:
            "Our classic, savory döner kebab with your choice of fresh toppings and sauces.",
        price: "€6.99",
    },
    {
        name: "Dürüm Kebab",
        description:
            "All the goodness of a döner wrapped in a warm, soft yufka bread.",
        price: "€7.50",
    },
    {
        name: "Vegetarian Kebab",
        description:
            "Grilled halloumi cheese and fresh vegetables, served with our special sauces.",
        price: "€6.50",
    },
    {
        name: "Chicken Plate",
        description:
            "Generous portion of grilled chicken served with rice, salad, and bread.",
        price: "€10.99",
    },
    {
        name: "Lamb Skewers",
        description:
            "Tender marinated lamb skewers, grilled to perfection, with sides.",
        price: "€12.50",
    },
    {
        name: "Falafel Wrap",
        description:
            "Crispy homemade falafel balls with hummus and salad in a fresh wrap.",
        price: "€5.99",
    },
    {
        name: "Kebab Box",
        description:
            "Your choice of kebab meat served over crispy fries, topped with sauce.",
        price: "€8.00",
    },
    {
        name: "Lahmacun",
        description:
            "Thin Turkish pizza topped with minced meat, vegetables, and herbs.",
        price: "€4.50",
    },
    {
        name: "Mixed Grill Platter",
        description:
            "A feast of various grilled meats, perfect for sharing or a hearty appetite.",
        price: "€15.00",
    },
    {
        name: "Adana Kebab",
        description:
            "Spicy minced lamb kebab grilled on skewers, served with rice and salad.",
        price: "€11.00",
    },
    {
        name: "Iskender Kebab",
        description:
            "Sliced döner meat over pita bread, topped with tomato sauce and yogurt.",
        price: "€13.50",
    },
    {
        name: "Sigara Böreği",
        description:
            "Crispy pastry rolls filled with feta cheese and herbs.",
        price: "€4.00",
    },
    {
        name: "Shepherd's Salad",
        description:
            "Fresh tomatoes, cucumbers, onions, and parsley with olive oil and lemon.",
        price: "€3.50",
    },
    {
        name: "Baklava",
        description:
            "Traditional Turkish dessert with layers of filo pastry, nuts, and honey syrup.",
        price: "€3.00",
    },
    {
        name: "Pide",
        description:
            "Turkish flatbread with cheese, minced meat, or vegetables.",
        price: "€7.00",
    },
    {
        name: "Ezme",
        description:
            "Spicy Turkish tomato and pepper salad, perfect as a starter.",
        price: "€2.50",
    },
    {
        name: "Ayran",
        description:
            "Refreshing Turkish yogurt drink, lightly salted.",
        price: "€1.50",
    },
    {
        name: "Stuffed Grape Leaves",
        description:
            "Vine leaves stuffed with rice, herbs, and spices.",
        price: "€4.20",
    },
    {
        name: "Köfte Plate",
        description:
            "Grilled Turkish meatballs served with rice and salad.",
        price: "€9.50",
    },
    {
        name: "Chili Sauce Fries",
        description:
            "Crispy fries topped with spicy homemade chili sauce.",
        price: "€3.80",
    },
];

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
