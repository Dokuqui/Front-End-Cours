//Burger Menu Function
function toggleMenu() {
  const burgerMenu = document.getElementById("burger-menu");
  const menu = document.getElementById("menu");

  if (burgerMenu && menu) {
    burgerMenu.classList.toggle("open");
    menu.classList.toggle("show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");

  if (burgerMenu) {
    burgerMenu.addEventListener("click", toggleMenu);
  }
});

window.addEventListener("scroll", () => {
  scrollFunction();
});

function scrollFunction() {
  const burgerMenu = document.getElementById("burger-menu");
  const siteName = document.querySelector(".site-name");

  if (burgerMenu && siteName) {
    burgerMenu.style.padding = "6px";
    siteName.style.fontSize = "17px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-container");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  if (searchForm && searchInput && searchButton) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const searchQuery = searchInput.value;
      console.log("Search query:", searchQuery);
    });

    searchInput.addEventListener("change", (event) => {
      const inputValue = event.target.value;
      console.log("Input value:", inputValue);
    });

    searchButton.addEventListener("click", (event) => {
      event.preventDefault();

      searchForm.dispatchEvent(new Event("submit"));
    });
  }
});

// Carrousel Function
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  const prevButtons = document.getElementsByClassName("prev");
  const nextButtons = document.getElementsByClassName("next");

  if (slides.length === 0) {
    return;
  }

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  setInterval(() => {
    plusSlides(1);
  }, 5000);

  for (const prevButton of prevButtons) {
    prevButton.addEventListener("click", () => {
      plusSlides(-1);
    });
  }

  for (const nextButton of nextButtons) {
    nextButton.addEventListener("click", () => {
      plusSlides(1);
    });
  }
});

// Login And Registry page function
function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    window.location.href = "Success.html";
  } else {
    alert("Please fill in both username and password fields.");
  }
}

function login() {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  const storedUsername = sessionStorage.getItem("username");
  const storedPassword = sessionStorage.getItem("password");

  if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
  ) {
    window.location.href = "Home.html";
  } else {
    alert("Invalid username or password.");
  }
}

function goToRegister() {
  const register = document.getElementsByClassName("register");

  if (register) {
    window.location.href = "Registry.html";
  }
}

//Services page function
document.addEventListener("DOMContentLoaded", () => {
  const overviewModal = document.getElementById("overviewModal");
  const overviewButton = document.getElementById("overviewButton");
  const closeOverview = document.getElementById("closeOverview");

  if (overviewButton) {
    overviewButton.addEventListener("click", () => {
      overviewModal.style.display = "block";
    });

    closeOverview.addEventListener("click", () => {
      overviewModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === overviewModal) {
        overviewModal.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dataButton = document.querySelector(".data-btn");
  const subscribeButtons = document.querySelectorAll(".subscribe-btn");

  if (dataButton) {
    dataButton.addEventListener("click", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      console.log("Registration Data:", { name, email });
    });
  }

  subscribeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const selectedPlan = event.target.getAttribute("data-plan");
      console.log("Selected Plan:", { selectedPlan });
    });
  });
});

//Ticket order function
document.addEventListener("DOMContentLoaded", () => {
  const ticketForm = document.getElementById("ticketOrderForm");

  if (ticketForm) {
    ticketForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const ticketQuantity = document.getElementById("ticketQuantity").value;
      const ticketCategory = document.getElementById("ticketCategory").value;

      console.log("Ticket Order Data:", {
        fullName,
        email,
        ticketQuantity,
        ticketCategory,
      });

      ticketForm.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const errorModal = document.getElementById("errorModal");
  const modalErrorMessage = document.getElementById("modalErrorMessage");

  window.closeModal = function () {
    errorModal.style.display = "none";
  };

  function validateForm() {
    let isValid = true;

    const requiredFields = [
      { name: "fname", label: "Nom et prénom" },
      { name: "email", label: "Email" },
      { name: "adr", label: "Adresse" },
      { name: "city", label: "Ville" },
      { name: "state", label: "Département" },
      { name: "zip", label: "Code" },
      { name: "cname", label: "Nom sur la Carte" },
      { name: "ccnum", label: "Credit carte numero" },
      { name: "expmonth", label: "Mois d'exp" },
      { name: "expyear", label: "Année d'expérience" },
      { name: "cvv", label: "CVV" },
    ];

    clearErrorMessages();

    requiredFields.forEach((field) => {
      const input = document.getElementById(field.name);
      const errorElement = document.getElementById(`${field.name}Error`);

      if (input) {
        const value = input.value.trim();

        if (!value && field.name !== "state") {
          isValid = false;
          displayErrorMessage(
            field.name,
            errorElement,
            `${getFieldDisplayName(field.name)} doit être renseigné`
          );
        } else {
          switch (field.name) {
            case "email":
              if (value && !isValidEmail(value)) {
                isValid = false;
                displayErrorMessage(
                  field.name,
                  errorElement,
                  "Adresse e-mail invalide"
                );
              }
              break;
            case "ccnum":
              if (value && !isValidCreditCardNumber(value)) {
                isValid = false;
                displayErrorMessage(
                  field.name,
                  errorElement,
                  "Numéro de carte invalide"
                );
              }
              break;
            case "expmonth":
              if (value && !isValidMonth(value)) {
                isValid = false;
                displayErrorMessage(field.name, errorElement, "Mois invalide");
              }
              break;
            case "expyear":
              if (value && !isValidYear(value)) {
                isValid = false;
                displayErrorMessage(field.name, errorElement, "Année invalide");
              }
              break;
            case "cvv":
              if (value && !isValidCVV(value)) {
                isValid = false;
                displayErrorMessage(field.name, errorElement, "CVV invalide");
              }
              break;
            default:
              logInputValue(field.label, value);
              break;
          }
        }
      }
    });

    return isValid;
  }

  function getFieldDisplayName(fieldName) {
    const fieldDisplayNames = {
      fname: "Nom et prénom",
      email: "Email",
      adr: "Adresse",
      city: "Ville",
      state: "Département",
      zip: "Code",
      cname: "Nom sur la Carte",
      ccnum: "Credit carte numero",
      expmonth: "Mois d'exp",
      expyear: "Année d'expérience",
      cvv: "CVV",
    };

    return fieldDisplayNames[fieldName] || fieldName;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidCreditCardNumber(ccnum) {
    return !isNaN(ccnum) && parseInt(ccnum) > 0;
  }

  function isValidMonth(month) {
    const validMonths = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return validMonths.includes(month.toLowerCase());
  }

  function isValidYear(year) {
    return !isNaN(year) && parseInt(year) > 0;
  }

  function isValidCVV(cvv) {
    return /^[0-9]{3,4}$/.test(cvv);
  }

  function logInputValue(label, value) {
    console.log(`${label}: ${value}`);
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      if (!validateForm()) {
        event.preventDefault();
        const firstErrorFieldName = getFirstErrorFieldName();
        openModal(
          "Il y a des erreurs dans le formulaire. Veuillez vérifier et réessayer.",
          firstErrorFieldName
        );
      } else {
        const destinationPage = determineDestinationPage();
        form.action = destinationPage;
      }
    });
  }

  function determineDestinationPage() {
    return "./Buy.html";
  }

  function displayErrorMessage(fieldName, element, message) {
    if (element) {
      element.textContent = message;
      element.classList.add("error-message-visible");
      element.dataset.fieldName = fieldName;
      console.log(
        `Set dataset.fieldName for ${fieldName}: ${element.dataset.fieldName}`
      );
    }
  }

  function getFirstErrorFieldName() {
    const errorFields = document.querySelectorAll(".error-message-visible");
    if (errorFields.length > 0) {
      return errorFields[0].getAttribute("data-field-name");
    }
    return "";
  }

  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((errorMessage) => {
      errorMessage.textContent = "";
      errorMessage.classList.remove("error-message-visible");
    });
  }

  function openModal(errorMessage) {
    const firstErrorFieldName = getFirstErrorFieldName();
    modalErrorMessage.textContent = `${errorMessage} (${getFieldDisplayName(
      firstErrorFieldName
    )})`;
    errorModal.style.display = "block";
  }

  function closeModal() {
    errorModal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === errorModal) {
      closeModal();
    }
  };
});

//Contact form function
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("Contact.html")) {
    const contactForm = document.querySelector(".contact");

    const savedFormData = {
      firstname: "",
      lastname: "",
      country: "",
      date: "",
      subject: "",
    };

    document.getElementById("fname").value = savedFormData.firstname;
    document.getElementById("lname").value = savedFormData.lastname;
    document.getElementById("country").value = savedFormData.country;
    document.getElementById("date").value = savedFormData.date;
    document.getElementById("subject").value = savedFormData.subject;

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        country: document.getElementById("country").value,
        date: document.getElementById("date").value,
        subject: document.getElementById("subject").value,
      };

      console.log("Form Data:", formData);
    });
  }
});
