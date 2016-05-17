# mobile_stop_moved JS插件 v1.0.2
###阻止 IOS/微信 浏览器滑屏时出现上下灰条。同时可以实现盒内滚动回弹

页面引用：
-------------
1. 页面底端引用最新版 /Jquery.min.js#1.x.x 或 zepto.min.js
2. Jquery/zepto后引用 /mobile_stop_moved.min.js

方法调用：
--------------

###阻止页面出现灰条：
		mobile_stop_moved.init(selector);
		其中selector为一个定高的容器盒

###阻止页面出现灰条并实现盒内滚动回弹：
		mobile_stop_moved.init(selector,true);
		其中selector为一个定高的容器盒

更新历史：
--------------

v 1.0.2
		
		支持在页面中，先将一个盒设为不可滚动，再设为可以滚动