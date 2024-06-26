document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.slide');
	const prevBtn = document.querySelector('.slider-btn.prev');
	const nextBtn = document.querySelector('.slider-btn.next');
	let currentSlide = 0;

	function showSlide(n) {
		slides[currentSlide].classList.remove('active');
		currentSlide = (n + slides.length) % slides.length;
		slides[currentSlide].classList.add('active');
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
