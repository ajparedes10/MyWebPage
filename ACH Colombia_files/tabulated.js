
$(document).ready(function() {

  $('.ag-tabulated').each(function () {
    if ($(this).find('.ag-tabulated__header-td').length > 2) { 
      $(this).addClass('ag-tabulated--multi');
    }

    if ($(this).find('.ag-o-text').text().split(' ').length >= 10) {
      $(this).find('.ag-o-text').addClass('ag-tabulated--multi__text');
    }
  });  

  $(".ag-embed-article table").wrap($("<div />").addClass('ag-table-wrap'));
});

