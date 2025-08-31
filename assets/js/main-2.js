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


})(jQuery);