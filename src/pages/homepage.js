import mainImage from "../images/779246.jpg";

function loadHomepage() {
  const mainContent = document.querySelector("#content");
  const homePageImage = document.createElement("img");
  const homePageContent = document.createElement("div");
  const homePageTitle = document.createElement("h1");
  const homePageText = document.createElement("p");

  const cards = document.createElement("div");
  const specialOfferDivOne = document.createElement("div");
  const specialOfferDivTwo = document.createElement("div");
  const specialOfferTextOne = document.createElement("h2");
  const specialOfferTextTwo = document.createElement("h2");

  const cardOne = document.createElement("div");
  const cardTwo = document.createElement("div");
  const cardOneTitle = document.createElement("h2");
  const cardOneText = document.createElement("p");
  const cardOneIngDiv = document.createElement("div");
  const cardOneMeat = document.createElement("p");
  const cardOneSalad = document.createElement("p");
  const cardOneSauce = document.createElement("p");

  const cardTwoTitle = document.createElement("h2");
  const cardTwoText = document.createElement("p");
  const cardTwoIngDiv = document.createElement("div");
  const cardTwoMeat = document.createElement("p");
  const cardTwoSalad = document.createElement("p");
  const cardTwoSauce = document.createElement("p");

  homePageContent.classList.add("homePageContent");
  mainContent.appendChild(homePageContent);

  homePageTitle.textContent = "Craving for a delicious Kebab?";
  homePageContent.appendChild(homePageTitle);

  homePageText.textContent =
    "Then you're in the right place! We have the best kebabs in town which will make you come back for more";
  homePageContent.appendChild(homePageText);
  homePageText.textContent +=
    "\nCheck out our menu to see what we have to offer!";
  homePageContent.appendChild(homePageText);

  //create the cards container
  cards.classList.add("cards");
  homePageContent.appendChild(cards);

  //create the special offer div
  specialOfferDivOne.classList.add("specialOfferDiv");
  specialOfferDivTwo.classList.add("specialOfferDiv");

  cards.appendChild(specialOfferDivOne);
  cards.appendChild(specialOfferDivTwo);

  //create the special offer text
  specialOfferTextOne.classList.add("specialOfferText");
  specialOfferTextTwo.classList.add("specialOfferText");

  //create the first card
  cardOne.classList.add("card");
  specialOfferDivOne.appendChild(cardOne);

  //create the title and text for the first card
  cardOneTitle.textContent = "Döner Kebab";
  cardOne.appendChild(cardOneTitle);
  cardOneText.textContent = "Avaliable Ingeredients:";
  cardOne.appendChild(cardOneText);

  //create the lists for the first card
  cardOneIngDiv.classList.add("cardDiv");
  cardOne.appendChild(cardOneIngDiv);
  cardOneMeat.textContent = "Meat: Lamb, Chicken, Beef";
  cardOneIngDiv.appendChild(cardOneMeat);
  cardOneSalad.textContent = "Veggies: Eisberger Salad, Tomatos, Onions";
  cardOneIngDiv.appendChild(cardOneSalad);
  cardOneSauce.textContent =
    "Sauces: Garlic, Chili, Yogurt, Tsatsiki, Cocktail";
  cardOneIngDiv.appendChild(cardOneSauce);
  //create the second card
  cardTwo.classList.add("card");
  specialOfferDivTwo.appendChild(cardTwo);

  //create the title and text for the second card
  cardTwoTitle.textContent = "Dürüm Kebab";
  cardTwo.appendChild(cardTwoTitle);
  cardTwoText.textContent = "Avaliable Ingeredients:";
  cardTwo.appendChild(cardTwoText);

  //create the lists for the second card
  cardTwoIngDiv.classList.add("cardDiv");
  cardTwo.appendChild(cardTwoIngDiv);
  cardTwoMeat.textContent = "Meat: Lamb, Chicken, Beef";
  cardTwoIngDiv.appendChild(cardTwoMeat);
  cardTwoSalad.textContent = "Veggies: Eisberger Salad, Tomatos, Onions";
  cardTwoIngDiv.appendChild(cardTwoSalad);
  cardTwoSauce.textContent =
    "Sauces: Garlic, Chili, Yogurt, Tsatsiki, Cocktail";
  cardTwoIngDiv.appendChild(cardTwoSauce);

  specialOfferTextOne.textContent =
    "SPECIAL OFFER: TODAY FOR JUST 6.99€!";
  specialOfferTextTwo.textContent =
    "SPECIAL OFFER: TODAY FOR JUST 7.99€!";
  specialOfferDivOne.appendChild(specialOfferTextOne);
  specialOfferDivTwo.appendChild(specialOfferTextTwo);

  //create the main image for the homepage
  homePageImage.classList.add("homePageImage");
  homePageImage.src = mainImage;
  mainContent.appendChild(homePageImage);
}

export { loadHomepage };
