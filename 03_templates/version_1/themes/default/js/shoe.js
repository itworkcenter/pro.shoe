+ function (win, doc, $) {
    // MAIN SEARCH
    $("#mainSearchTitle").html($(".carousel-item.active .carousel-caption").html());
    $("#mainSearchBanner").on("slide.bs.carousel", function () {
        var api = $(this).data("bs.carousel"),
            $curr = $(".carousel-caption", api._activeElement);

        $("#mainSearchTitle").html($curr.html())
    })
}(window, document, jQuery)

+
function (win, doc, $) {
    // MOBILE NAV 
    win.closeNav = function () {

        $(".navbar-toggler").click();
    }
    $(".navbar-toggle-close").click(function () {
        closeNav();
    });
    $(doc).on("click", function (e) {
        var $navClaps = $(".navbar-collapse"),
            admiss = $(e.target).closest(".navbar-collapse").size();

        if (!admiss && $navClaps.hasClass("show")) {
            closeNav();
        }
    })
    $('.navbar-collapse').on('show.bs.collapse', function () {
        $("#overlay").addClass("open");
    })
    $('.navbar-collapse').on('hidden.bs.collapse', function () {
        $("#overlay").removeClass("open");
    })
    // WINDOW SCROLL ENTRANCE
    function fixedNav() {
        var top = $(win).scrollTop(),
            floatCls = "navbar-floating",
            $nav = $("nav");

        if (top) {
            if (!$nav.hasClass(floatCls)) {
                $nav.addClass(floatCls);
            }
        } else {
            if ($nav.hasClass(floatCls)) {
                $nav.removeClass(floatCls);
            }
        }
    }
    $(win)
        .scroll(function () {
            fixedNav();
        })
        .resize(function () {
            fixedNav();
        })
}(window, document, jQuery)
