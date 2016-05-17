// 1.0.2
var mobile_stop_moved = {
    init: function(selector, overflow_scrolling) {
        $(selector).css("overflow", "hidden");
        $(document).on("touchmove", function(e) { e.preventDefault(); });
        $("body").on("touchmove", selector, function(e) {e.preventDefault(); e.stopPropagation() })

        if (overflow_scrolling) {
            $(selector).css("overflow", "scroll").css("-webkit-overflow-scrolling", "touch").css("overflow-scrolling", "touch");
            $("body").on("touchstart", selector, function(e) {
                var el = e.currentTarget;
                if (el.scrollTop === 0) { el.scrollTop = 1 } else {
                    if (el.scrollHeight == el.scrollTop + el.offsetHeight) { el.scrollTop = el.scrollTop - 1 }
                }
            });
            $("body").unbind("touchmove").on("touchmove", selector, function(e) { e.stopPropagation() })
        }
    }
};
