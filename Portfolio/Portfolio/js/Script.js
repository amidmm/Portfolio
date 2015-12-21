jQuery(document).ready(function ($) {
    var test = 0;
    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        var myPicPos = $('#myPic').position();
        var h = $(window).height();
        if (scrolled <= $(window).width() + 20) {
            $('.pic1').css('display', 'block');
            $('.pic2').css('display', 'none');
            $('#pic1-1').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-2').css('transform', 'translateX(-' + scrolled + 'px)');
            $('#pic1-3').css('transform', 'translateX(' + scrolled + 'px)');
            $('#pic1-4').css('transform', 'translateX(-' + scrolled + 'px)');
            /*if (myPicPos.left < $(window).width()/2-20) {
                $('#myPic').css('transform', 'translateX(' + scrolled + 'px)');
                test = scrolled;
            }
            if (myPicPos.left > $(window).width() / 2) {
                $('#myPic').css('transform', 'translateX(' + $(window).width() / 2 - 200 + 'px)');
            }
            if (scrolled <= test && myPicPos.left >= $(window).width() / 2) {
                $('#myPic').css('transform', 'translateX(-' + scrolled + 'px)');
            }*/
            
        }
        else if (scrolled < $(window).width()*2) {
            $('.pic1').css('display', 'none');
            $('.pic2').css('display', 'block');
            $('.pic2').fadeIn('fast');
            
        };
    });
});