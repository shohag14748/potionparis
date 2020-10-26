$(document).ready(function () {
    $('.footerArea .title').click(function () {
        $(this).siblings().slideToggle();
    })
    $('.menu-toggler').click(function (e) {
        e.preventDefault();
        $('.mobile-menu,.menu-bg').addClass('active');
    })
    $('.mobile-menu .close,.menu-bg').click(function (e) {
        e.preventDefault();
        $('.mobile-menu,.menu-bg').removeClass('active');
    })
})
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});
