$(document).ready(function () {
    var lastScrollTop = 0;
    var header = $('.sticky-lg-top');
    var navbar = $('.navbar');

    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            header.addClass('hidden-header');
        } else {
            // upscroll code
            header.removeClass('hidden-header');
        }
        lastScrollTop = st;
    });
});