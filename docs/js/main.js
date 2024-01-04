$(document).ready(function(){
    $(".mobile-menu").click(function(){
      $(this).toggleClass("active");
      $(".header .menu").toggleClass("active")
    })
    $('.hero__slider').slick({
      arrows: false,
      dots: true
    });
    $(".reviews__slider").slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1245,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 610,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
});