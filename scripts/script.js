window.addEventListener('load', function () {
  function equalizeHeights() {
    var maxHeight = 0;
    var blocks = $('.js-staff .staff-about')

    blocks.css('height', '');

    if ($(window).width() > 767.98) {
      blocks.each(function () {
        var blockHeight = $(this).outerHeight(true);
        if (blockHeight > maxHeight) {
          maxHeight = blockHeight;
        }
      });

      blocks.height(maxHeight);
    }
  }

  equalizeHeights();

  $(window).resize(function () {
    equalizeHeights();
  });
})
