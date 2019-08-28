  //plugins
  $('.carousel').slick({
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $("#mySelect").heapbox();

// Check / uncheck all
  function checkAll (e) {
    e.preventDefault();
    $('input:checkbox').attr('checked', '');
    $(this).on('click', unckeckAll);
  }
  function unckeckAll () {
    $('input:checkbox').removeAttr('checked');
    $(this).on('click', checkAll);
  }

  $('.selectAll').on('click',checkAll);

  // dropping menu
  var $links = $('.submenuLink');
  $links.on('click', function(e) {
    e.preventDefault();
    var $submenu = $(this).siblings('.submenu');
    $submenu.toggleClass('animated')
  })
