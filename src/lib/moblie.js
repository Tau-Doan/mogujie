(function () {
	var dpr, rem, scale;
	var docEl = document.documentElement;
	var fontEl = document.createElement('style');
	var metaEl = document.querySelector('meta[name="viewport"]');
	
	dpr = window.devicePixelRatio || 1; // 设备像素比
	rem = docEl.clientWidth * dpr / 10; // 设备像素比 2 * 屏幕的宽度 375 = 750 ， 750 就为一整行的宽度 ， 再将 750 /10 设置为html根节点的 字体大小， 所有的长度单位都使用rem实现
	scale = 1 / dpr;


// 设置viewport，进行缩放，达到高清效果
	metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

// 设置data-dpr属性，留作的css hack之用
	docEl.setAttribute('data-dpr', dpr);

// 动态写入样式
	docEl.firstElementChild.appendChild(fontEl);
	fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

// 给js调用的，某一dpr下rem和px之间的转换函数
	window.rem2px = function(v) {
		v = parseFloat(v);
		return v * rem;
	};
	
	window.px2rem = function(v) {
		v = parseFloat(v);
		return v / rem;
	};
	
	window.dpr = dpr;
	window.rem = rem;
})();