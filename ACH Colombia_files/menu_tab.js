
$(document).ready(function() {
	$(".ag-js-menuTab-nav .ag-menuTab__link").click(function () {
		const activeTextClicked = $(this).text();
		$('.ag-js-menuTab-btn .ag-menuTab__text').html(activeTextClicked);
		$('.ag-js-menuTab-nav').collapse('hide');
	});
});


