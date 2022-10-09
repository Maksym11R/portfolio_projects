$(document).ready(function () {
	$('.request__carousel').slick(
		{
			speed: 1400,
			autoplay: false,
			autoplaySpeed: 2500,
			prevArrow: '<button type="button" class="slick-prev"><img src="icons/icons_slider/lefts.svg"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="icons/icons_slider/rights.svg"></button>'
		});
});