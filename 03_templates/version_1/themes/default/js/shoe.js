+ function (win, doc, $) {
  // DROPDOWN HOVER
  var Selector = {
    DROPDOWN: ".dropdown"
  };
  var Event = {
    SHOW: "hide.bs.dropdown"
  };

  function api(obj) {
    return obj.data("bs.dropdown");
  }

  function triggerClick(obj) {
    obj.dropdown();

    var api_ = api(obj),
      cfg = api_._config;

    if (!cfg.hover) {
      api_.dispose();
    } else {
      api_.toggle();
    }
  }

  function downhover($toggle) {
    var api_ = api($toggle);

    if (api_) {
      var cfg = api_._config
      if (cfg.hover) {
        api_.toggle();
      }
    } else {
      triggerClick($toggle);
    }
  }

  function getToggle(e) {
    var $obj = $(e.target),
    dd = $obj.hasClass("dropdown-menu") ? $obj.siblings(".dropdown-toggle") : $obj;
    return dd;
  }

  function eventDownEnter(e) {
    downhover(getToggle(e));
  }

  function eventDownLeave(a) {
    // var $t = getToggle(a);

    // api($t).sett = setTimeout(function () {
    //   downhover($t);
    // }, 150);
  }

  function eventMenuDownEnter(a) {
    // clearTimeout(api(getToggle(a)).sett);
  }

  function eventMenuDownLeave(a) {
    downhover(getToggle(a));
  }

  $(doc)
    .on("mouseenter", ".dropdown-toggle", eventDownEnter)
    .on("mouseleave", ".dropdown-toggle", eventDownLeave)
    .on("mouseenter", ".dropdown-menu", eventMenuDownEnter)
    .on("mouseleave", ".dropdown-menu", eventMenuDownLeave);

}(window, document, $)
