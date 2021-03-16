$('.ag-js-menu').on('show.bs.collapse', function () {
  $('.ag-menuNav__brandLink').hide();
  $('.ag-js-submenuContainer').removeClass('in');
  $('.ag-js-submenu').addClass('collapsed');
  $('.ag-js-submenu').parent().siblings().removeClass('is-open');
  $('.ag-menuNav__nav').collapse('hide');
  $('.ag-page').addClass('ag-no-scroll');
});

$('.ag-js-menu').on('hide.bs.collapse', function () {
  $('.ag-menuNav__brandLink').show();
  $('.ag-page').removeClass('ag-no-scroll');
});
