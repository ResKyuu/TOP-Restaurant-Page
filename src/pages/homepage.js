import mainImage from "../images/Gemini_Generated_Image_ds5p19ds5p19ds5p.jpeg";

function loadHomepage() {
    const mainContent = document.querySelector("#content");
    const homePageImage = document.createElement("img");

    //create the main image for the homepage
    homePageImage.src = mainImage;
    homePageImage.classList.add("homePageImage")
    mainContent.appendChild(homePageImage);
    
}



export { loadHomepage };
