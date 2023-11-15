$(document).ready(function () {
    $('.carousel').slick({
      slidesToShow: 3, 
      slidesToScroll: 1, 
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><</button>',
      nextArrow: '<button type="button" class="slick-next">></button>',
      autoplay: true,
      autoplaySpeed: 2000, 
      responsive: [
        {
          breakpoint: 768,
  settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });