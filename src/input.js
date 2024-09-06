/*------------------------------------------------------------------
    Navbar Toggle
------------------------------------------------------------------*/

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
// Select all navigation items inside the menu
const navItems = document.querySelectorAll("#menu li");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// Add click event to each navigation item to close the menu when clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.add("hidden");
    btn.classList.remove("open");
  });
});

/*------------------------------------------------------------------
    Contact Form
------------------------------------------------------------------*/

const toggleInputContainer = function (input) {
  if (input.value !== "") {
    input.classList.add("filled");
  } else {
    input.classList.remove("filled");
  }
};

// Add click event to labels to focus on the associated input
const labels = document.querySelectorAll(".label");
labels.forEach((label) => {
  label.addEventListener("click", function () {
    this.previousElementSibling.focus();
  });
});

// Initialize input fields on page load
window.addEventListener("load", function () {
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input) => {
    console.log("looped");
    input.addEventListener("keyup", function () {
      toggleInputContainer(this);
    });
    toggleInputContainer(input);
  });
});

/*------------------------------------------------------------------
    Password Toggle
------------------------------------------------------------------*/

const passwordToggle = document.querySelector(".js-password-toggle");

if (passwordToggle) {
  passwordToggle.addEventListener("change", function () {
    const password = document.querySelector(".js-password");
    const passwordLabel = document.querySelector(".js-password-label");

    if (password && passwordLabel) {
      if (password.type === "password") {
        password.type = "text";
        passwordLabel.innerHTML = "hide";
      } else {
        password.type = "password";
        passwordLabel.innerHTML = "show";
      }

      password.focus();
    }
  });
}


