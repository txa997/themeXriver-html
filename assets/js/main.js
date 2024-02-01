/*

Template Name:  example
Description:  example
Author: themexriver
Version: 1.0

====javascript indexing======

preloader


*/



(function ($) {
"use strict";



// document.addEventListener("DOMContentLoaded", function () {
// 	let preloader = document.querySelector("#preloader");
// 	window.addEventListener('load', function(){
// 	  preloader.classList.add("preloaded");
// 	  setTimeout(function () {
// 			preloader.remove();

// 		});
// 	})
// });
  


// search-popup-start

$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})
// search-popup-end

// mobile-menu-start

if($('.mobile-main-navigation li.dropdown ul').length){
	$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
	$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}
$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});

// mobile-menu-end


// gsap-start

gsap.registerPlugin(ScrollTrigger);



// mobile-menu-toggle-start

var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")

var menuBar = gsap.timeline();
menuBar.reverse();
var menubgline = gsap.timeline({ paused: true });

menubgline.to('.fullpage-menu' , {
	duration: 0,
	display: "block",
	ease: 'Expo.easeInOut'
});
menubgline.to('.menu-bg span' , {
	duration: .5,
	width: "100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.menu-logo' , {
	x: 0,
	opacity: 1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.mobile-main-navigation , .mobile-search-bar' , {
	opacity: 1,
	y: 0,
	ease: 'Expo.easeInOut'
});
menubgline.to('.fullpage-menu-close' , {
	duration: 0,
	x: 0,
	rotate: 0,
	opacity: 1,
	ease: 'Expo.easeInOut'
}, "<");
menubgline.to('.fullpage-menu-gellary .item' , {
	duration: 0,
	opacity: 1,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});
menubgline.to('.full-page-socail-link li' , {
	opacity: 1,
	y: 1,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});


menubgline.reverse();
menuToggle.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	menubgline.reversed(!menubgline.reversed());
});
menuToggle2.addEventListener('click', function(){
	// menuBar.reversed(!menuBar.reversed());
	menubgline.reversed(!menubgline.reversed());
});
// mobile-menu-toggle-end


var tl = gsap.timeline({
	repeat: -1,
  });
  
  tl.from(".img-path-3", {
	  opacity: 0,
	  duration: 1
  },"1")
  tl.from(".img-path-3", {
	  right: "0%",
	  duration: 2
  })
  tl.from(".img-path-1", {
	opacity: 0,
	duration: .5
  })
  tl.from(".img-path-1", {
	  top: "50%",
	  left: "10%",
	  width: "30%",
	  duration: 2
  },)
  tl.to(".img-path-1", {
	opacity: 0,
	duration: .5
  })
  tl.to(".img-path-3", {
	opacity: 0,
	duration: .5
  })

  var txacta1 = gsap.timeline({

	scrollTrigger: {
	  animation: txacta1,
	  trigger: '.txa-cta-1-area',
	  start: "top 80%",
	  end: "top 0%",
	  scrub: 3,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
	});
	txacta1.from( ".txa-cta-1-il-2" , { right: "0",  duration:1 } )
	txacta1.from( ".txa-cta-1-il-3" , { right: "0",  duration:1 } )
	txacta1.from( ".txa-cta-1-il-1" , { left: "0",  duration:1 } )







// gsap-end



var txacategorie1 = new Swiper(".txa-categorie-1-active", {
    loop: true,
    speed: 1000,
    autoplay: {     //add
        delay: 4000,   //add
    },   
  });
/*
brand-logo-1
====end====
*/



let txat1 = new Swiper('.txa-t1-active', {
	loop: true,
	spaceBetween: 0,
	speed: 1000,
    autoplay: {     //add
        delay: 4000,   //add
    }, 
	navigation: {
		nextEl: ".txa_t1_next",
		prevEl: ".txa_t1_prev",
	},
	breakpoints: {
		768: {
		  slidesPerView: 1,
		},
		992: {
		  slidesPerView: 2,
		},
	},

  });




/*
back-to-top
=====start==== */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});
/*
back-to-top
=====end==== 
*/




/*
data-bg-activition
====start====
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
/*
data-bg-activition
====end====
*/



})(jQuery);