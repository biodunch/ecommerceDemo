var $item = $('.carousel .carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

//on hover of indicators
$("#carouselExampleIndicators .carousel-indicators li").hover(function(){
    var goto = Number( $(this).attr('data-slide-to') );
    $("#carouselExampleIndicators").carousel(goto);  
  });