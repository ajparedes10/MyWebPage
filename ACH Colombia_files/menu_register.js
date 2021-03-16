$( ".ag-js-submenu" ).click(function(e) {
  e.preventDefault();
  $(this).parent().siblings().find('.ag-js-submenu').not(this).addClass('collapsed');
  $('.ag-menuNav__nav').collapse('hide');
});

$('.ag-js-submenuContainer').on('show.bs.collapse', function () {
  $('.ag-menuNav__nav').collapse('hide');
  $(this).parent().siblings().find('.ag-js-submenuContainer').removeClass('in');
});

$('.ag-menuNav__nav').on('show.bs.collapse', function () {
  $('.ag-js-menuTab-nav').collapse('hide');
});

if ( $(window).width() > 767 ) {
  $('.ag-menuNav__nav, .ag-js-menuTab-nav').collapse({
    toggle: false
  }).height('auto');
} 

$(window).resize(function() {
  if ( $(window).width() > 767 ) {
    $('.ag-menuNav__nav, .ag-js-menuTab-nav').collapse({
      toggle: false
    }).height('auto');
  }
})