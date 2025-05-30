import "../styles/aboutstyle.css";
import { createElement } from "../domUtils.js";
import heroImage from "../images/pexels-musato-8364505.jpg";
import mailIcon from "../svgs/mail.svg";
import phoneIcon from "../svgs/phone.svg";
import personIcon from "../svgs/person.svg";

function loadAboutPage() {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = ""; // Clear previous content

  const aboutPageContent = createElement("div", {
    classList: "aboutPageCard",
    children: [
      createElement("div", {
        classList: "aboutPageHeroImageContainer",
        children: [
          createElement("img", {
            src: `${heroImage}`,
            alt: "About Us Hero Image",
            classList: "aboutPageHeroImage",
          }),
        ],
      }),
      createElement("div", {
        classList: "aboutPageTextContainer",
        children: [
          createElement("h1", {
            textContent: "About Us",
            classList: "aboutPageTitle",
          }),
          createElement("p", {
            textContent:
              "Welcome to our restaurant! We are dedicated to providing you with the best dining experience. Our team is passionate about food and service, ensuring that every visit is memorable.",
            classList: "aboutPageDescription",
          }),
          createElement("p", {
            textContent:
              "Our chefs use only the freshest ingredients to create delicious dishes that cater to all tastes. Whether you're here for a casual meal or a special occasion, we strive to exceed your expectations.",
            classList: "aboutPageDescription",
          }),
          createElement("p", {
            textContent:
              "Thank you for choosing us. We look forward to serving you soon!",
            classList: "aboutPageDescription",
          }),
        ],
      }),
      createElement("div", {
        classList: "aboutPageContactOpeningContainer",
        children: [
          createElement("div", {
            classList: "aboutPageContact",
            children: [
              createElement("div", {
                classList: "aboutPageContactHeader",
                children: [
                  createElement("h2", {
                    textContent: "Contact Us",
                    classList: "aboutPageContactTitle",
                  }),
                ],
              }),
              createElement("div", {
                classList: "aboutPageContactInfo",
                children: [
                  createElement("div", {
                    classList: "aboutPageContactMail",
                    children: [
                      createElement("img", {
                        src: mailIcon,
                        alt: "Email Icon",
                        classList: "aboutPageContactIcon",
                      }),
                      createElement("p", {
                        textContent: "yourEmail@gmail.com",
                        classList: "aboutPageContactEmail",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageContactPhone",
                    children: [
                      createElement("img", {
                        src: phoneIcon,
                        alt: "Phone Icon",
                        classList: "aboutPageContactIcon",
                      }),
                      createElement("p", {
                        textContent: "+123 456 7890",
                        classList: "aboutPageContactPhoneNumber",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageContactPerson",
                    children: [
                      createElement("img", {
                        src: personIcon,
                        alt: "Person Icon",
                        classList: "aboutPageContactIcon",
                      }),
                      createElement("p", {
                        textContent:
                          "Or talk to our manager in the restaurant!",
                        classList: "aboutPageContactPersonal",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          createElement("div", {
            classList: "aboutPageOpeningHours",
            children: [
              createElement("div", {
                classList: "aboutPageOpeningHoursHeader",
                children: [
                  createElement("h2", {
                    textContent: "Opening Hours",
                    classList: "aboutPageOpeningHoursTitle",
                  }),
                ],
              }),
              createElement("div", {
                classList: "aboutPageOpeningHoursInfo",
                children: [
                  createElement("div", {
                    classList: "aboutPageOpeningHoursMonday",
                    children: [
                      createElement("p", {
                        textContent: "Monday:",
                        classList: "aboutPageOpeningHoursText",
                      }),
                      createElement("p", {
                        textContent: "9 AM - 10 PM",
                        classList: "aboutPageOpeningHoursText",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageOpeningHoursTuesday",
                    children: [
                      createElement("p", {
                        textContent: "Tuesday:",
                        classList: "aboutPageOpeningHoursText",
                      }),
                      createElement("p", {
                        textContent: "9 AM - 10 PM",
                        classList: "aboutPageOpeningHoursText",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageOpeningHoursWednesday",
                    children: [
                      createElement("p", {
                        textContent: "Wednesday:",
                        classList: "aboutPageOpeningHoursText",
                      }),
                      createElement("p", {
                        textContent: "9 AM - 10 PM",
                        classList: "aboutPageOpeningHoursText",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageOpeningHoursThursday",
                    children: [
                      createElement("p", {
                        textContent: "Thursday:",
                        classList: "aboutPageOpeningHoursText",
                      }),
                      createElement("p", {
                        textContent: "9 AM - 10 PM",
                        classList: "aboutPageOpeningHoursText",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageOpeningHoursFriday",
                    children: [
                      createElement("p", {
                        textContent: "Friday:",
                        classList: "aboutPageOpeningHoursText",
                      }),
                      createElement("p", {
                        textContent: "9 AM - 11 PM",
                        classList: "aboutPageOpeningHoursText",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageOpeningHoursSaturday",
                    children: [
                      createElement("p", {
                        textContent: "Saturday:",
                        classList: "aboutPageOpeningHoursText",
                      }),
                      createElement("p", {
                        textContent: "10 AM - 11 PM",
                        classList: "aboutPageOpeningHoursText",
                      }),
                    ],
                  }),
                  createElement("div", {
                    classList: "aboutPageOpeningHoursSunday",
                    children: [
                      createElement("p", {
                        textContent: "Sunday:",
                        classList: "aboutPageOpeningHoursText",
                      }),
                      createElement("p", {
                        textContent: "Closed!",
                        classList: "aboutPageOpeningHoursText",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  mainContent.appendChild(aboutPageContent);
}

export { loadAboutPage };
