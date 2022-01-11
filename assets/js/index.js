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

  // portfolio slider
  /* 
  $('.portfolio__image__container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  }); */

  // venobox
  $('.venobox').venobox();

  // services slider

  $('.service__slider').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    vertical: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: false,
    prevArrow: "<i class='fas fa-chevron-up service__up'></i>",
    nextArrow: "<i class='fas fa-chevron-down service__down'></i>",
  });
});
