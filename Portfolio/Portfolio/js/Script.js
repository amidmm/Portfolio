jQuery(document).ready(function ($) {
    var ratio = 2.02248875 * $(window).height() / $(window).width();
    $('#rest').css('height', $(window).width() * 4 *ratio - $('.picContainer').height()*ratio / 3 + 'px');
    $('#pic1-6').css('left', $('#pic1-5').width() + 'px');
    $('#pic1-6').css('height', $(window).height() * 1.1 + 'px');
    $('#pic1-5').css('height', $(window).height() * 1.1 + 'px');
    $('#pic1-7').css('height', $(window).height() * 1.1 + 'px');
    var test = 0;
    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        var myPicPos = $('#myPic').offset();
        var h = $(window).height();
        if (scrolled <= $(window).width()*ratio / 2) {
            $.scrollify.enable();
            $('.pic1').css('display', 'block');
            $('.pic2').css('display', 'none');
            $('.pic3').css('display', 'none');
            $('#pic1-1').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-2').css('transform', 'translateX(-' + scrolled + 'px)');
            $('#pic1-3').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-4').css('transform', 'translateX(-' + scrolled + 'px)');
            $('#pic1-5').css('transform', 'translateY(' + scrolled + 'px)');
            $('#pic1-6').css('transform', 'translateY(-' + scrolled + 'px)');
            $('#pic1-7').css('transform', 'translateY(' + scrolled + 'px)');
            $('#myPic').css('transform', 'translateX(' + Math.min(scrolled, $(window).width() / 2) + 'px)');
        }
        else if (scrolled <= $(window).width()*ratio) {
            $.scrollify.enable();
        }
        else if (scrolled <= $(window).width() * 2*ratio) {
            $('.pic1').css('display', 'block');
            $('.pic2').css('display', 'none');
            $('.pic3').css('display', 'none');
            $('#pic1-1').css('transform', 'translateX(' + scrolled / 2 + 'px)');
            $('#pic1-2').css('transform', 'translateX(-' + scrolled / 2 + 'px)');
            $('#pic1-3').css('transform', 'translateX(' + scrolled / 2 + 'px)');
            $('#pic1-4').css('transform', 'translateX(-' + scrolled / 2 + 'px)');
            $('#pic1-5').css('transform', 'translateY(' + scrolled / 2 + 'px)');
            $('#pic1-6').css('transform', 'translateY(-' + scrolled / 2 + 'px)');
            $('#pic1-7').css('transform', 'translateY(' + scrolled / 2 + 'px)');
            $('#myPic').fadeIn('slow');

        }
        else if (scrolled < $(window).width() * 3 *ratio) {
            $('.pic1').css('display', 'none');
            $('.pic2').css('display', 'block');
            $('.pic3').css('display', 'none');
            $('#myPic').fadeOut('slow');
        }
        else {
            var tempY = scrolled - $(window).width() * 3 * ratio;
            $('#fPic').css('transform', 'translateY(-' + tempY + 'px)');
            $('#sPic').css('transform', 'translateY(-' + tempY + 'px)');
            $('#tPic').css('transform', 'translateY(-' + tempY + 'px)');
            $('.pic1').css('display', 'none');
            $('.pic2').css('display', 'none');
            $('.pic3').css('display', 'block');
        };
    });
    $('#popup').click(function () {
        $(this).css('display', 'none');
    });
});