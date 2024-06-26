const titleSlide1 = 'Discover innovative ways to decorate';
const textSlide1 =
	'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
const titleSlide2 = 'We are available all across the globe';
const textSlide2 =
	"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
const titleSlide3 = 'Manufactured with the best materials';
const textSlide3 =
	'Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.';

document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.slide');
	const prevBtn = document.querySelector('.slider-btn.prev');
	const nextBtn = document.querySelector('.slider-btn.next');
	const heroTitle = document.querySelector('.hero-title');
	const heroText = document.querySelector('.hero-text');
	let currentSlide = 0;

	function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');

    // Update heroTitle and heroText based on the currentSlide
    switch (currentSlide) {
        case 1: // Assuming slide 2 is at index 1
            heroTitle.textContent = titleSlide2;
            heroText.textContent = textSlide2;
            break;
        case 2: // Assuming slide 3 is at index 2
            heroTitle.textContent = titleSlide3;
            heroText.textContent = textSlide3;
            break;
        default:
            // Reset to default or handle other slides as necessary
            heroTitle.textContent = titleSlide1;
            heroText.textContent = textSlide1;
            break;
    }
}

	function nextSlide() {
		showSlide(currentSlide + 1);
	}

	function prevSlide() {
		showSlide(currentSlide - 1);
	}

	prevBtn.addEventListener('click', prevSlide);
	nextBtn.addEventListener('click', nextSlide);

	// Show the first slide initially
	showSlide(0);

	// Optional: Auto-play the slider
	// setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById('menuToggle');
	const menu = document.getElementById('menu');
	// const listItems = menu.querySelectorAll('.header-link');

	menuToggle.addEventListener('click', function () {
		this.classList.toggle('active');
		menu.classList.toggle('show');
		// listItems.forEach((item) => {
		// 	item.color = 'black';
		// });
	});
});