$(document).ready(() => {
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

  //testimonial image vertical slider

  $('.testimonial__image__slider').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    prevArrow: "<i class='fas fa-chevron-up testimonial__up'></i>",
    nextArrow: "<i class='fas fa-chevron-down testimonial__down'></i>",
    asNavFor: '.testimonial__text__slider',
    cssEase: 'linear',
  });

  //testimonial text vertical slider

  $('.testimonial__text__slider').slick({
    arrows: false,
    vertical: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial__image__slider',
    verticalSwiping: true,
    speed: 0.5,
    autoplay: true,
    cssEase: 'linear',
  });

  //scroll to top btn function

  $('.scroll__to__top').click(() => {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// scroll to top btn visibility control

const scrollBtn = document.querySelector('.scroll__to__top');
window.addEventListener('scroll', () => {
  scrollY > 50 ? scrollBtn.classList.add('scrolling') : scrollBtn.classList.remove('scrolling');
});
