
$(document).ready(function() {
	$('.ag-js-slider').owlCarousel({
		items: 1,
		nav: false,
		dots: true
	});

	if ( $(window).width() < 768 ) {
	  startProdSlider();
	  startNewsSlider();
	
	} else {
	  $('.ag-js-prodSlider, .ag-js-newsSlider').addClass('off');
	}

	$('.ag-js-logosSlider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		responsive:{
			0 : {
				nav: false,
				dots: true,
			},
		
			768 : {
				nav: true,
				dots: false,
			},
		}
	});

  });
  
  $(window).resize(function() {
	  if ( $(window).width() < 768 ) {
		startProdSlider();
		startNewsSlider();
	
	  } else {
		stopProdSlider();
		stopNewsSlider();
		
	  }
	  showLogosSlider();
  });

  

function startProdSlider(){
	$('.ag-js-prodSlider').owlCarousel({
		items: 1.2,
		nav: false,
		dots: true,
		center: true,
		loop: true,
		margin: 16,
	});
}

function stopProdSlider() {
	var owl = $('.ag-js-prodSlider');
	owl.trigger('destroy.owl.carousel');
	owl.addClass('off');
}


function startNewsSlider(){
	$('.ag-js-newsSlider').owlCarousel({
		items: 1,
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

function stopNewsSlider() {
	var owl = $('.ag-js-newsSlider');
	owl.trigger('destroy.owl.carousel');
	owl.addClass('off');
}

function wrapLogos() {
	var divs = $(".ag-js-logoListSlider a");
	$(".ag-js-logoListSlider .ag-logoList__item").contents().unwrap(); 
	for(var i = 0; i < divs.length; i+=6) {
		divs.slice(i, i+6).wrapAll("<div class='ag-logoList__item'></div>");
	}
}


function wrapLogosDesktop() {
	var divs = $(".ag-js-logoListSlider a");
	$(".ag-js-logoListSlider .ag-logoList__item").contents().unwrap(); 
}

var $homeSlider = $(".ag-js-logoListSlider");
function showLogosSlider() {
	if ($homeSlider.data("owlCarousel") !== "undefined") {
	  if (window.matchMedia('(max-width: 767px)').matches) {
		wrapLogos(); 
		initialLogosSlider();
		
	  } else {
		wrapLogosDesktop(); 
		destroyLogosSlider();
		
	  }
	}
  }
  showLogosSlider();
  
  function initialLogosSlider() {
	$homeSlider.addClass("owl-carousel").owlCarousel({
		items: 1,
		dots: true,
	});
  }
  
  function destroyLogosSlider() {
	$homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
  }
  
