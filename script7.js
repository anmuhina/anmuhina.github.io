$( document ).ready(function() {
 console.log( "ready!" );
});

$('.responsive').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
    }
    }
    ]
   });
