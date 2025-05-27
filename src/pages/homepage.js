import mainImage from "../images/779246.jpg";

function loadHomepage() {
  const mainContent = document.querySelector("#content");
  const homePageImage = document.createElement("img");
  const homePageContent = document.createElement("div");
  const homePageTitle = document.createElement("h1");
  const homePageText = document.createElement("p");

  homePageContent.classList.add("homePageContent");
  mainContent.appendChild(homePageContent);

  homePageTitle.textContent = "Craving for a delicious Kebab?";
  homePageContent.appendChild(homePageTitle);

  //create the main image for the homepage
  homePageImage.classList.add("homePageImage");
  homePageImage.src = mainImage;
  mainContent.appendChild(homePageImage);
}

export { loadHomepage };
