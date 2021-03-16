
$(document).ready(function() {

	if ( $(window).width() < 768 ) {
		startFeaturedSlider();
	  } else {
		featuredDesktop();
	  }

	headersHeight();
	
});

function startFeaturedSlider(){
	$('.ag-js-featured').owlCarousel({
		items: 1.5,
		nav: false,
		dots: true,
		center: true,
		loop: true,
		margin: 8,
	});
}

function featuredDesktop(){
	$owlContainer = $('.ag-js-featured');
	$owlSlides    = $owlContainer.children('div');
	if ($owlSlides.length >= 5) {
		$owlContainer.owlCarousel({
			items: 3,
			nav: false,
			dots: true,
			margin: 16,
		});

	} else {
		$owlContainer.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
		$owlContainer.find('.owl-stage-outer').children().unwrap();
		$owlContainer.addClass('ag-featured-grid');
	}
}

function headersHeight() {
	var maxHeight = 0;
	$(".ag-featured__title").each(function(){
	if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});
	$(".ag-featured__title").height(maxHeight);
}

