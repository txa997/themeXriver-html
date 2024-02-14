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



const boxes = gsap.utils.toArray('.txa-showcase-1-item-img');
boxes.forEach(img => {
	gsap.to(img, {
		scrollTrigger: {
			trigger: img,
			scrub: 1,
			start: "top 80%",
			end: "bottom bottom",
			toggleClass: "active",
			toggleActions: "play none none none",
			once: true,
		}
	});
});




// gsap-end


if($(".txa-item-view-toggle").length) {
	var products = $(".txa-themes-page-item"),
	allButton = $(".txa-item-view-toggle div"),
	grid4 = $(".grid-view"),
	grid3 = $(".grid-2x-view"),
	listView = $(".list-view");

	allButton.each(function() {
		var $this = $(this);
		$this.on("click", function(e) {
			e.preventDefault();
			$this.addClass("active").siblings().removeClass('active');
			e.stopPropagation();
		})
	});

	grid4.on("click", function(f) {
		products.removeClass("list-view three-column");
		products.addClass("default-column");
		f.stopPropagation();
	});

	grid3.on("click", function(g) {
		products.removeClass("default-column list-view");
		products.addClass("three-column");
		g.stopPropagation();
	});

	listView.on("click", function(h) {
		products.removeClass("default-column three-column");
		products.addClass("list-view");
		h.stopPropagation();
	});
};


document.addEventListener("mousemove" , parallax);
function parallax(e){

	document.querySelectorAll(".object").forEach(function(move){

		var moving_value = move.getAttribute("data-value");
		var x = (e.clientX * moving_value) /250;
		var y = (e.clientY * moving_value) /250;

		move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
	})

}


var txacategorie1 = new Swiper(".txa-categorie-1-active", {
    loop: true,
    speed: 1000,
    autoplay: {     //add
        delay: 4000,   //add
    },   
	navigation: {
		nextEl: ".txa_c1_next",
		prevEl: ".txa_c1_prev",
	},
  });




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
art-details
====start====
*/

let artthumbs = new Swiper('.txa-art-d-preview-img-active', {
	spaceBetween: 15,
	loop: true,
	speed: 1000,
	slidesPerView: 3,
	rtl: false,
	watchSlidesProgress: false,	
	breakpoints: {
		320: {
		slidesPerView: 2,
		},
		576: {
		slidesPerView: 3,
		},
		768: {
		slidesPerView: 3,

		},
		992: {
		slidesPerView: 3,
		},
		1200: {
		slidesPerView: 3,
		},
	}
});

let artdetails = new Swiper('.txa-art-d-main-img-active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	autoplay: {
		delay: 4000,
	},
	navigation: {
		nextEl: ".art_details_next",
		prevEl: ".art_details_prev",
	},
	thumbs: {
		swiper: artthumbs,
	},
});


// UPDATE: I was able to get this working again... Enjoy!

var element = document.querySelector('.cursor');
if (element) {
	var cursor = document.querySelector('.cursor');

	document.addEventListener('mousemove', function(e){
	  var x = e.clientX;
	  var y = e.clientY;
	  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
	});
	
} 



/*
art-details
====end====
*/


// button-click-animation-start
//   var myButton = document.getElementById("pr-btn-1");


//   function addHighlightClass() {
// 	myButton.classList.add("highlight");
//   }

//   function removeHighlightClass() {
// 	myButton.classList.remove("highlight");
//   }

//   myButton.addEventListener("mousedown", addHighlightClass);

//   myButton.addEventListener("mouseup", removeHighlightClass);

//   myButton.addEventListener("mouseout", removeHighlightClass);


// var myButton = document.getElementById("pr-btn-1");

// function addHighlightClass() {
//     myButton.classList.add("highlight");
// }

// function removeHighlightClass() {
//     myButton.classList.remove("highlight");
// }

// function handleClickAndMouse() {
//     // Add any additional logic you want to execute on button click
//     console.log("Button clicked!");
//     removeHighlightClass(); // You can include this line if you want to remove highlight on click
// }

// myButton.addEventListener("mousedown", addHighlightClass);
// myButton.addEventListener("mouseup", removeHighlightClass);
// myButton.addEventListener("mouseout", removeHighlightClass);

// // Add click event listener
// myButton.addEventListener("click", handleClickAndMouse);


// button-click-animation-end


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
popup-img-activition
====start====
*/


var element = document.querySelector('.popup-image');
if (element) {
	$('.popup-image').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below
	  
		zoom: {
		  enabled: true, // By default it's false, so don't forget to enable it
	  
		  duration: 500, // duration of the effect, in milliseconds
		  easing: 'ease-in-out', // CSS transition easing function
	  
		  // The "opener" function should return the element from which popup will be zoomed in
		  // and to which popup will be scaled down
		  // By defailt it looks for an image tag:
		  opener: function(openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		  }
		}
	  
	});
	
} 

/*
popup-img-activition
====end====
*/

/*
nice-selector-activiton
====start====
*/
var niceselect = document.querySelector(".nice-select");
if (niceselect) {
	$('.nice-select select').niceSelect();
}
/*
nice-selector-activiton
=====end==== 
*/


/*
counter-activition
====start====
*/
$('.counter').counterUp({
	delay: 10,
	time: 3000
});
/*
counter-activition
====end====
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