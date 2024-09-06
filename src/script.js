/*------------------------------------------------------------------
    Navbar Toggle
------------------------------------------------------------------*/

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const navItems = document.querySelectorAll('#menu li'); // Select all menu items

btn.addEventListener('click', () => {
	btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});

// Add click event to each menu item to close the menu when clicked
navItems.forEach((item) => {
	item.addEventListener('click', () => {
		nav.classList.add('hidden');
		btn.classList.remove('open');
	});
});

/*------------------------------------------------------------------
    Contact Form
------------------------------------------------------------------*/

const toggleInputContainer = (input) => {
	if (input.value !== "") {
		input.classList.add('filled');
	} else {
		input.classList.remove('filled');
	}
};

// Add click event to labels to focus on the associated input
document.querySelectorAll('.label').forEach((label) => {
	label.addEventListener('click', function () {
		this.previousElementSibling.focus();
	});
});

// Add event listener to inputs on page load
window.addEventListener('load', () => {
	const inputs = document.querySelectorAll('.input');
	inputs.forEach((input) => {
		// Trigger toggleInputContainer on keyup and on load
		input.addEventListener('keyup', function () {
			toggleInputContainer(this);
		});
		toggleInputContainer(input);
	});
});

/*------------------------------------------------------------------
    jQuery Functions
------------------------------------------------------------------*/
$(function () {
	'use strict';

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
	const scrollToTopBtn = $('.scroll-to-top');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			scrollToTopBtn.addClass('show');
		} else {
			scrollToTopBtn.removeClass('show');
		}
	});

	scrollToTopBtn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

	/*------------------------------------------------------------------
	    Sticky Navbar
	------------------------------------------------------------------*/
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 300) {
			$('#navbar').addClass('sticky-menu');
		} else {
			$('#navbar').removeClass('sticky-menu');
		}
	});
});
