ready(function () {
  bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 4,
  });
  bulmaCarousel.attach('#slider1', {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true
  });
  bulmaCarousel.attach('#slider2', {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true
  });
  bulmaCarousel.attach('.hero-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    pagination: false,
    effect: 'fade',
    loop: true
  });
});