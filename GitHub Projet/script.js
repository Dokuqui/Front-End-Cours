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

  burgerMenu.style.padding = "6px";
  siteName.style.fontSize = "17px";
}

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-container");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

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
});

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
