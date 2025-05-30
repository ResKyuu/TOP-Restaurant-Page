import mainImage from "../images/779246.jpg";
import "../styles.css";
import { createElement } from "../domUtils.js";
import offersData from "../Data/offersData.json";

// Factory function for creating a special offer element (card & offer text)
function createSpecialOffer(offerDetails) {


  const cardTitleEl = createElement("h2", { textContent: offerDetails.cardTitle });
  const cardTextEl = createElement("p", { textContent: "Avaliable Ingeredients:" });
  const cardMeatEl = createElement("p", { textContent: `Meat: ${offerDetails.ingredients.meat}` });
  const cardSaladEl = createElement("p", { textContent: `Veggies: ${offerDetails.ingredients.salad}` });
  const cardSauceEl = createElement("p", { textContent: `Sauces: ${offerDetails.ingredients.sauces}` });

  const cardIngDivEl = createElement("div", {
    classList: "cardDiv",
    children: [cardMeatEl, cardSaladEl, cardSauceEl],
  });

  const cardEl = createElement("div", {
    classList: "card",
    children: [cardTitleEl, cardTextEl, cardIngDivEl],
  });

  const specialOfferTextEl = createElement("h2", {
    classList: "specialOfferText",
    textContent: offerDetails.offerText,
  });

  // Main container for this specific offer (card & text)
  const specialOfferDiv = createElement("div", {
    classList: "specialOfferDiv",
    children: [cardEl, specialOfferTextEl],
  });

  return specialOfferDiv;
}

// Refactored loadHomepage function
function loadHomepage() {
  const mainContent = document.querySelector("#content");
  // Clear existing content
  mainContent.innerHTML = "";


  const homePageTitle = createElement("h1", { textContent: "Craving for a delicious Kebab?" });
  const homePageText = createElement("p", {
    textContent: "Then you're in the right place! We have the best kebabs in town which will make you come back for more.\nCheck out our menu to see what we have to offer!",
  });

  const homePageContent = createElement("div", {
    classList: "homePageContent",
    children: [homePageTitle, homePageText],
  });


  // Create the cards container
  const cardsContainer = createElement("div", { classList: "cards" });

  // Loop through the data and create a special offer element for each
  offersData.forEach(offerData => {
    const offerElement = createSpecialOffer(offerData);
    cardsContainer.appendChild(offerElement);
  });

  homePageContent.appendChild(cardsContainer); // Add the populated cards container

  // Create the main image for the homepage
  const homePageImage = createElement("img", {
    classList: "homePageImage",
    src: mainImage,
    attributes: { alt: "Delicious kebab" } // Good practice to add alt text
  });

  // Append all main sections to the #content div
  // Use DocumentFragment for potentially better performance if appending many top-level items
  const fragment = document.createDocumentFragment();
  fragment.appendChild(homePageContent);
  fragment.appendChild(homePageImage);
  mainContent.appendChild(fragment);
}

export { loadHomepage };
