// 2.0.9
var mobile_stop_moved = {
    /*
        opt:{
            selector: "", // 容器盒选择器（resize_toWindow为false时，需要在样式表中将此盒定高），无默认值
            scroll: true, // 盒内可滚动，默认true
            resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题，默认true
        }
    */
    init: function(opt) {
        var opt_default = {
            selector: "",
            scroll: true,
            resize_toWindow: true
        };
        opt = $.extend(opt_default, opt);

        // 默认阻止
        $(window).on("touchmove", function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        if (opt.scroll) {

            var obj = $(opt.selector);
            obj.css("overflow", "scroll").css("-webkit-overflow-scrolling", "touch").css("overflow-scrolling", "touch");
            var clientY_start;

            $(window).on("touchstart", function(e) {
                var touches = e.touches || e.originalEvent.touches;
                clientY_start = touches[0].clientY;
            });

            $(window).unbind("touchmove").on("touchmove", function(e) {

                var scrollHeight = obj[0].scrollHeight; // 盒内内容实际滚动高度
                var offsetHeight = obj.height(); // 盒高度
                var scrollTop = obj.scrollTop(); // 盒内内容已滚动高度
                var touches = e.touches || e.originalEvent.touches;
                var clientY_now = touches[0].clientY;
                var canScroll = true;

                var neednt = offsetHeight >= scrollHeight; // 不需要滚动（盒高度>=盒内容高度）
                var topest = scrollTop === 0 && clientY_now > clientY_start; // 本身在页首，还往下拉动页面
                var bottemest = scrollHeight <= (scrollTop + offsetHeight) && clientY_now < clientY_start; // 本身在页尾，还往上拉动页面

                if (neednt || topest || bottemest) {
                    canScroll = false;
                }

                if (!canScroll) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        }

        if (opt.resize_toWindow) {

            var i = 0,
                orientation_old = window.orientation,
                orientation,
                window_size_px = {
                    width: window.innerWidth - (screen.height - window.innerHeight),
                    height: window.innerHeight
                };
            var resize_n = 0;
            var resize_do = function() {
                // console.log("resize:", resize_n + 1);
                if (++resize_n % 2 === 0) {
                    // console.log("return");
                    return;
                }

                setTimeout(function() {
                    // console.log(window_size_px.width, window_size_px.height, screen.height);
                    orientation = window.orientation;
                    // console.log(orientation == orientation_old);
                    // console.log(window_size_px.height);
                    // console.log($(opt.selector).length);
                    if (orientation == orientation_old) {
                        // console.log("true");
                        $(opt.selector).css("height", window_size_px.height + "px");
                    } else {
                        // console.log("false");
                        $(opt.selector).css("height", window_size_px.width + "px");
                    }
                    resize_n = 0;
                }, 0);

                // 专为手机浏览器配置代码，但只解决了安卓浏览器，ios还是没解决
                setTimeout(function() {
                    var innerHeight_px = window.innerHeight;
                    if (orientation == orientation_old)
                        window_size_px.height = innerHeight_px;
                    else
                        window_size_px.width = innerHeight_px;
                    $(opt.selector).css("height", innerHeight_px + "px");
                }, 500);
            };
            resize_do();

            $(window).resize(function() {
                resize_do();
            });
        }
    }
};

if (typeof define === "function" && define.amd) {
    define([], function() {
        return mobile_stop_moved;
    });
}
