var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*------------------------------------------------------------------
    Navbar Toggle
------------------------------------------------------------------*/

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const navItems = document.querySelectorAll("#menu li"); // Select all menu items

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// Add click event to each menu item to close the menu when clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.add("hidden");
    btn.classList.remove("open");
  });
});

/*------------------------------------------------------------------
    jQuery Functions
------------------------------------------------------------------*/
$(function () {
  "use strict";

  /*------------------------------------------------------------------
		    Window onload
	------------------------------------------------------------------*/
  window.onload = function () {
    window.setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  /*------------------------------------------------------------------
	    Scroll to Top
	------------------------------------------------------------------*/
  const scrollToTopBtn = $(".scroll-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      scrollToTopBtn.addClass("show");
    } else {
      scrollToTopBtn.removeClass("show");
    }
  });

  scrollToTopBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  /*------------------------------------------------------------------
	    Sticky Navbar
	------------------------------------------------------------------*/
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
      $("#navbar").addClass("sticky-menu");
    } else {
      $("#navbar").removeClass("sticky-menu");
    }
  });
});


let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-80px'; // Adjust based on your navbar height
      } else {
        // Scrolling up
        navbar.style.top = '0';
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    });