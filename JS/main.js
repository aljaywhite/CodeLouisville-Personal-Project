

$('.c-arrows').hide();
$('.carousel-control').hover(function() {
  $('.c-arrows').show();
},
function() {
  $('.c-arrows').hide();
});

$('.navbar').affix({
    offset: {
        top: $('.navbar').offset().top
    }
});
