/*
    高京
    2015-12-28
    移动端解决微信浏览器上下灰条并执行内部移动
    需要jquery或zepto支持
*/

var mobile_stop_moved = {

    // selector: 固定高度的盒选择器。如.panel
    // overflow_scrolling：是否执行盒内部移动。true-移动 else-不移动
    init: function(selector, overflow_scrolling) {

        $(selector).css("overflow", "scroll")

        // 终止body应有的滚动事件
        $(document).on('touchmove', function(e) {
            e.preventDefault();
        });

        if (overflow_scrolling) {
            $(selector).css("overflow", "scroll").css("-webkit-overflow-scrolling", "touch");
            $("body").on('touchstart', selector, function(e) {
                var el = e.currentTarget;
                if (el.scrollTop === 0) {
                    el.scrollTop = 1;
                } else if (el.scrollHeight == el.scrollTop + el.offsetHeight) {
                    el.scrollTop = el.scrollTop - 1;
                }
            });
            $("body").on('touchmove', selector, function(e) {
                e.stopPropagation();
            });
        }
    }
}
