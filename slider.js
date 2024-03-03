$(document).ready(function () {
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: 50,
    nav: false,
    center: true,
    items: 2,
    responsive: {
      0: {
        items: 3,
        nav: false,
      },
      600: {
        items: 5,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        margin: 30,
      },
    },
  });
});
