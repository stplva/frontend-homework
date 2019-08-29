// This is a simple jQuery carousel plugin
// It was made by Sofiia Teplova.

(function($) {

  $.fn.carousel = function(options) {

    //SETTINGS
    var defaults = {
      speed: 700,
      background: 'white',
      pictureWidth: 1000,
      pictureMargin: 100,
      picturePadding: 10
    };

    var settings = $.extend(defaults, options);


    //VARS
    var $arrowPrev = $('.carousel-arrow-prev'),
      $arrowNext = $('.carousel-arrow-next'),
      $carouselUl = $('.carousel-ul'),

      $picturesNumber = $carouselUl.find('.carousel-li').length,

      $pictureWidth = $('.carousel-li img').css('width'),
      $pictureMargin = $('.carousel-li').css('marginRight'),

      $pixelOffset = settings.pictureWidth + settings.pictureMargin,
      $maxOffset = 0,
      $minOffset = -($picturesNumber - 1) * $pixelOffset,
      $currentLeftValue = 0;


    //STYLES
    $('.carousel-hider').css({
      'width': settings.pictureWidth + settings.picturePadding * 2,
      'padding': settings.picturePadding
    });
    $carouselUl.find('.carousel-li').css({
      'background': settings.background,
      'marginRight': settings.pictureMargin
    });
    $carouselUl.find('.carousel-li img').css('width', settings.pictureWidth);


    // ACTUALLY CAROUSEL
    $arrowNext.on('click', function(i) {
      if ($currentLeftValue > $minOffset) {

        $currentLeftValue -= $pixelOffset;
        $carouselUl.animate({
          left: $currentLeftValue + 'px'
        }, settings.speed)

      }
    });

    $arrowPrev.on('click', function(i) {
      if ($currentLeftValue < $maxOffset) {

        $currentLeftValue += $pixelOffset;
        $carouselUl.animate({
          left: $currentLeftValue + 'px'
        }, settings.speed)

      }
    });

  }

})(jQuery);
