/*

Author: themexriver
Version: 2.0

*/



(function ($) {
"use strict";

/* 
    marquee-left
*/
$('.wa_marquee_left').marquee({
	speed: 30,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
})



/* 
    marquee-left
*/
$('.wa_marquee_np_left').marquee({
	speed: 30,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false,
})


/* 
    marquee-left
*/
$('.wa_marquee_np_right').marquee({
	speed: 30,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: false,
})


  
/* 
	testimonial-1-slider-active
*/
if ($('.nm_t1_preview_slider_active').length) {

	const nm_t1_preview_slider_active = new Swiper('.nm_t1_preview_slider_active', {
		speed: 500,
		slidesPerView: "auto",
		spaceBetween: 20,

	});
  
	const nm_t1_main_slider_active = new Swiper('.nm_t1_main_slider_active', {
		speed: 500,
		slidesPerView: "auto",
		effect: "fade",
		fadeEffect: { crossFade: true },
		navigation: {
			nextEl: ".kk_t1_next",
			prevEl: ".kk_t1_prev",
		},
		thumbs: {
			swiper: nm_t1_preview_slider_active,
		},
	});
  
}
  

if($('.txa-testimonial-3-preview-slider').length) { 
	const slides = document.querySelectorAll(".txa-testimonial-3-preview-slider .swiper-slide");
	const wrapper = document.querySelector(".txa-testimonial-3-preview-slider .swiper-wrapper");
  
	const radius = 520; 
	const centerX = wrapper.clientWidth / 2;
	const centerY = wrapper.clientHeight / 2;
	const total = slides.length;
	const angleStep = (2 * Math.PI) / total;
  
	slides.forEach((slide, index) => {
	  const angle = index * angleStep;
	  const x = centerX + radius * Math.cos(angle) - slide.clientWidth / 2;
	  const y = centerY + radius * Math.sin(angle) - slide.clientHeight / 2;
  
	  slide.style.left = `${x}px`;
	  slide.style.top = `${y}px`;
	});
}

var t1scrollAni = gsap.timeline({
		scrollTrigger: {
			trigger: ".txa-testimonial-3-preview-slider",
			toggleActions: "play none none reverse",
			scrub: 1,
			markers: false,
		},
	});

t1scrollAni.fromTo(".txa-testimonial-3-preview-slider .swiper-wrapper", {
	rotation: 40,
},{rotation: -40});


/* 
	price-toggle-function
*/
if($(".txa-price-2-toggle").length) {
	$('.txa-price-2-toggle').on('click', function () {
		$(".txa-price-2-toggle").toggleClass('is-active');
		$('.package-price-wrap').toggleClass('is-active');
	});
}



})(jQuery);