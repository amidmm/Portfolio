jQuery(document).ready(function ($) {
    $('#pic1-6').css('left', $('#pic1-5').width()+'px');
    var test = 0;
    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        var myPicPos = $('#myPic').offset();
        var h = $(window).height();
        if (scrolled <= $(window).width() + 20) {
            $('.pic1').css('display', 'block');
            $('.pic2').css('display', 'none');
            $('#pic1-1').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-2').css('transform', 'translateX(-' + scrolled + 'px)');
            $('#pic1-3').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-4').css('transform', 'translateX(-' + scrolled + 'px)');
            $('#pic1-5').css('transform', 'translateY(' + scrolled + 'px)');
            $('#pic1-6').css('transform', 'translateY(-' + scrolled + 'px)');
            $('#pic1-7').css('transform', 'translateY(' + scrolled + 'px)');
            if (myPicPos.left < $(window).width() / 2 + $('#myPic').width()) {
                $('#myPic').css('transform', 'translateX(' + scrolled + 'px)');
                test = scrolled;
            }
            if (myPicPos.left > $(window).width() / 2) {
                $('#myPic').css('transform', 'translateX(' + ($(window).width() / 2) - $('#myPic').width() + 'px)');
            }
            if (scrolled <= test && myPicPos.left >= $(window).width() / 2) {
                $('#myPic').css('transform', 'translateX(-' + scrolled + 'px)');
            }
            
        }
        else if (scrolled < $(window).width()*2) {
            $('.pic1').css('display', 'none');
            $('.pic2').css('display', 'block');
            $('.pic2').fadeIn('fast');
            
        };
    });
});