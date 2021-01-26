const burger = document.querySelector('.burger_menu');
const navMenu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
});

// ADAPTIV
$(window).resize(function() {
    adaptive_function();
});

function adaptive_header(w, h) {
    var navMenu = $('.header__nav');
    var headerLang = $('.lang');
    var headerRight = $('.header__right');

    if (w < 480) {
        if (!headerLang.hasClass('done')) {
            headerLang.addClass('done').appendTo(navMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo(headerRight);
        }
    }
}

function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();