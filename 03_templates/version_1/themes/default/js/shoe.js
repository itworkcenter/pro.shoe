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
}(window, document, jQuery)