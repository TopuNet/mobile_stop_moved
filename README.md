# mobile_stop_moved JS插件 v2.0.5
###阻止 IOS/微信 浏览器滑屏时出现上下灰条。同时可以实现盒内滚动回弹。
###兼容原生JS规范和AMD规范
###安装：npm install TopuNet-mobile-stop-moved

更新历史：
--------------

v 2.0.5

	    1. 修改jquery1.x不兼容（之前报错但不影响使用）。主要因为获取触摸对象，juqery为event.originEvent.touches，zepto为event.touches
	    2. 更新zepto为最新版本。

v 2.0.4

	    1. 在dist文件夹中，增加package.json
	    2. 将dist发布到npm：TopuNet-mobile-stop-moved

v 2.0.3

	    1. 在dist文件夹中，增加package.json
	    2. 将dist发布到npm：TopuNet-mobile-stop-moved

v 2.0.2

    	1. 修改个小BUG

v 2.0.1

		1. 兼容原生JS和AMD规范
		2. 修改demo

v 1.2.1

		1. 修改阻止方式，参考文章：https://segmentfault.com/a/1190000003810312?_ea=375925
		2. 调用方法参数opt.resize_toWindow为true时，不再强制需要给容器盒定高
		3. 修改demo

v 1.1.1

		1. 增加resize_toWindow属性，用于将容器盒的高自动调整至有效窗口高度(window.innerHeight)，从而解决ios的safari浏览器底部工具栏遮挡页面的问题
		2. 修改传参方式，由多个参数改为单个对象参数
		3. 修改调用方式

v 1.0.2

		1. 支持在页面中，先将一个盒设为不可滚动，再设为可以滚动
		2. 修改demo

文件结构：
-------------
1. mobile_stop_moved.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中

页面引用：
-------------
原生引用

		1. 页面底端引用最新版 /Jquery.min.js#1.x.x 或 zepto.min.js
		2. Jquery/zepto后引用 /jq/mobile_stop_moved.js

requireJS引用

        依赖mobile_stop_moved.js和(jquery.min.js#1.x 或 zepto.js)，成功后返回对象mobile_stop_moved

方法调用：
--------------

		var opt = {
		    selector: "section.a", // 容器盒选择器（resize_toWindow为false时，需要在样式表中将此盒定高），无默认值
		    scroll: true, // 盒内可滚动，默认true
		    resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题，默认true
		};
		mobile_stop_moved.init(opt);