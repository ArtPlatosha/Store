var swiper = new Swiper ('.featured-slider', {
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3
		},
	},
});