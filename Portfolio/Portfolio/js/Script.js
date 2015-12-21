jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        if (scrolled < $(document).height()) {
            $('#pic1-1').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-2').css('transform', 'translateX(-' + scrolled + 'px)');
            $('#pic1-3').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-4').css('transform', 'translateX(-' + scrolled + 'px)');
        };
    });
});