$(document).ready(function() {
	if($('.ag-counter').length) {
		const el = document.querySelector('.ag-counter');
		new Waypoint( {
			element: el,
			handler:function() {
			startCounter();
			this.destroy()
			},
			offset:'75%'
		})
	}
	startCounterSlider();
});

function startCounter(){
	$('.ag-card__number').each(function () {
		var count_val = $(this).data('cont');
		var $this = $(this);
        $({countNum: $this.text()}).animate({countNum: count_val}, {
            duration: 1500,
            easing: 'linear',
            step: function() {
				var num = Math.ceil(this.countNum).toString();
                if(Number(num) > 999){
                    while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
					}
				}
				$this.text(num);
			},
			complete: function() {
				$this.text(this.countNum);
				var num = Math.ceil(this.countNum).toString();
                if(Number(num) > 999){
                    while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
					}
				}
				$this.text(num);
			}
        });
	});
}

function startCounterSlider(){
	$('.ag-js-counter').owlCarousel({
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
};