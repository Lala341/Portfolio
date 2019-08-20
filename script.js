//Parte de código tomado de https://www.w3schools.com/howto/howto_js_sticky_header.asp

(function($) {
    $(window).scroll(function() { if ($('.navigation').offset().top > 100) { $('.navigation').addClass('nav-bg'); } else { $('.navigation').removeClass('nav-bg'); } });

})(jQuery);