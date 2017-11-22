+ function (win, doc, $) {

  function api(obj) {
    return obj.data("bs.dropdown");
  }

  function downhover($toggle) {
    var api_ = api($toggle);

    api_ ? api_.toggle() : $toggle.click();
  }

  function getToggle(e) {
    var $obj = $(e.target);

    return $obj.hasClass("dropdown-menu") ? $obj.closest(".dropdown").children(".dropdown-toggle") : $obj;
  }

  function downEnter(a) {
    downhover($(a.target));
  }

  function downLeave(a) {
    var $t = getToggle(a);

    api($t).sett = setTimeout(function () {
      downhover($t);
    }, 150);
  }

  function menuDownEnter(a) {
    clearTimeout(api(getToggle(a)).sett);
  }

  function menuDownLeave(a) {
    downhover(getToggle(a));
  }

  $(doc)
    .on("mouseenter", ".dropdown-toggle", downEnter)
    .on("mouseleave", ".dropdown-toggle", downLeave)
    .on("mouseenter", ".dropdown-menu", menuDownEnter)
    .on("mouseleave", ".dropdown-menu", menuDownLeave)

}(window, document, $)