+ function (win, doc, $) {
 var delay = 150;
  $('.dropdown-hover').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(delay).fadeIn(delay);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(delay).fadeOut(delay);
  });

}(window, document, $)