(function ($) {
    "use strict";
    var a = { accordionOn: ["xs"] };
    $.fn.responsiveTabs = function (e) {
        var t = $.extend({}, a, e),
            s = "";
        return (
            $.each(t.accordionOn, function (a, e) {
                s += " ag-accordion-" + e;
            }),
            this.each(function () {
                var a = $(this),
                    e = a.find("> li > a"),
                    t = $(e.first().attr("href")).parent(".ag-tab-content--vertical"),
                    i = t.children(".tab-pane");
                a.add(t).wrapAll('<div class="ag-responsive-tabs-container" />');
                var n = a.parent(".ag-responsive-tabs-container");
                n.addClass(s),
                    e.each(function (a) {
                        var t = $(this),
                            s = t.attr("href"),
                            i = "",
                            n = "",
                            r = "";
                        t.parent("li").hasClass("active") && (i = " active"),
                            0 === a && (n = " first"),
                            a === e.length - 1 && (r = " last"),
                            t
                                .clone(!1)
                                .addClass("ag-accordion-link" + i + n + r)
                                .removeAttr("data-toggle")
                                .insertBefore(s);
                    });
                var r = t.children(".ag-accordion-link");                
            })
        );
    };

})(jQuery);

$('.ag-js-tabcollapse').responsiveTabs({
    accordionOn: ['xs', 'sm']
});

$( ".ag-accordion-link" ).each(function() {
    $(this).on("click", function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
        $('.ag-accordion-link').not(this).removeClass('active');
        $('.ag-accordion-link').not(this).next().removeClass('active');
    });
});

                         
// hiding list link on open 

$('.ag-js-panel__content').on('show.bs.collapse', function () {
    $('.ag-js-panel__list-container').hide();
});

$( ".ag-js-hidePanel" ).click(function(e) {
    e.preventDefault();
    $(this).parent('.ag-js-panel__content').collapse('hide');
});

$('.ag-js-panel__content').on('hide.bs.collapse', function () {
    $('.ag-js-panel__list-container').show();
});