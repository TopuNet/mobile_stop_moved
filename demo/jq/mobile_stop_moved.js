// 1.1.1
var mobile_stop_moved = {
    /*
        opt:{
            selector: "", // 容器盒选择器（需要在样式表中将此盒定高），无默认值
            scroll: true, // 盒内可滚动，默认true
            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题
        }
    */
    init: function(opt) {
        var opt_default = {
            selector: "",
            scroll: true,
            resize_toWindow: true
        }
        opt = $.extend(opt_default, opt);

        $(opt.selector).css("overflow", "hidden");
        $(document).on("touchmove", function(e) { e.preventDefault(); });
        $("body").on("touchmove", opt.selector, function(e) {
            e.preventDefault();
            e.stopPropagation()
        })

        if (opt.scroll) {
            $(opt.selector).css("overflow", "scroll").css("-webkit-overflow-scrolling", "touch").css("overflow-scrolling", "touch");
            $("body").on("touchstart", opt.selector, function(e) {
                var el = e.currentTarget;
                if (el.scrollTop === 0) { el.scrollTop = 1 } else {
                    if (el.scrollHeight == el.scrollTop + el.offsetHeight) { el.scrollTop = el.scrollTop - 1 }
                }
            });
            $("body").unbind("touchmove").on("touchmove", opt.selector, function(e) { e.stopPropagation() })
        }

        if (opt.resize_toWindow) {
            var resize_n = 0;
            var resize_do = function() {
                if (++resize_n % 2 == 0)
                    return;
                setTimeout(function() {
                    $(opt.selector).css("height", window.innerHeight);
                    resize_n = 0;
                }, 0);
            }

            resize_do();

            $(window).resize(function() {
                resize_do();
            });
        }
    }
};
