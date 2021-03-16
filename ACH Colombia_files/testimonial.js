
$(document).ready(function() {
	startTestimonialSlider();
	namesHeight();
});

function startTestimonialSlider(){
	$('.ag-js-testimonial').owlCarousel({
		items: 1.2,
		nav: false,
		dots: true,
		center: true,
		loop: true,
		margin: 16,
		responsive : {
			768 : {
				items: 3,
				nav: false,
				dots: true,
				margin: 16,
				loop: false,
				center: false
			}
		}
	});
}

function namesHeight() {
	var maxHeight = 0;
	$(".ag-testimonial__name").each(function(){
	if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});
	$(".ag-testimonial__name").height(maxHeight);
}

