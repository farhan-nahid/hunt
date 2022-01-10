$(document).ready(function () {
  'use strict';

  // banner slider

  $('#hero__area').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    fade: true,
    pauseOnHover: false,
    cssEase: 'linear',
    nextArrow: `<i class='fas fa-chevron-right banner__next'></i>`,
    prevArrow: `<i class='fas fa-chevron-left banner__prev'></i>`,
  });
});
