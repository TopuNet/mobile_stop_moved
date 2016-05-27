# mobile_stop_moved JS插件 v1.1.1
###阻止 IOS/微信 浏览器滑屏时出现上下灰条。同时可以实现盒内滚动回弹

页面引用：
-------------
1. 页面底端引用最新版 /Jquery.min.js#1.x.x 或 zepto.min.js
2. Jquery/zepto后引用 /mobile_stop_moved.min.js

方法调用：
--------------

		var opt = {
		    selector: "section.a", // 容器盒选择器（需要在样式表中将此盒定高），无默认值
		    scroll: true, // 盒内可滚动，默认true
		    resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题
		};
		mobile_stop_moved.init(opt);

更新历史：
--------------

v 1.1.1
		1. 增加resize_toWindow属性，用于将容器盒的高自动调整至有效窗口高度(window.innerHeight)，从而解决ios的safari浏览器底部工具栏遮挡页面的问题
		2. 修改传参方式，由多个参数改为单个对象参数
		3. 修改调用方式

v 1.0.2
		1. 支持在页面中，先将一个盒设为不可滚动，再设为可以滚动
		2. 修改demo