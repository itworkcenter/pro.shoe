+ function (win, doc, $) {
    // MAIN SEARCH
    $("#mainSearchTitle").html($(".carousel-item.active .carousel-caption").html());
    $("#mainSearchBanner").on("slid.bs.carousel", function () {
        var $this = $(this),
            $curr_item = $(".carousel-item.active", this),
            index = $curr_item.index(),
            api = $this.data("bs.carousel"),
            $curr_caption = $(".carousel-caption", $curr_item);

        $("#mainSearchTitle").html($curr_caption.html());
        $(".show-container").eq(index).addClass("active").siblings().removeClass("active");
        $(".main-search-box > .carousel-indicators > li").eq(index).addClass("active").siblings().removeClass("active");
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
}(window, document, jQuery) +
function (win, doc, $) {
    // MOBILE CATEGORY 
    win.closeCate = function () {
        $(".category-toggle").click();
    }
    $(".category-toggle-close").click(function () {
        closeCate();
    });
    $('.category.collapse').on('show.bs.collapse', function () {
        $("#overlay").addClass("open");
    })
    $('.category.collapse').on('hidden.bs.collapse', function () {
        $("#overlay").removeClass("open");
    })
}(window, document, jQuery) +
function (win, doc, $) {
    $(".option").click(function () {
        var $this = $(this),
            val = $(".title", this).html();
        $this.addClass("selected").siblings(".option").removeClass("selected");
        $("#ProductOptValue").html(val);
    })
}(window, document, jQuery)