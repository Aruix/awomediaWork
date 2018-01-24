// 设置rem数值
(function (doc, win) {
  var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	  var clientWidth = docEl.clientWidth;
	  if (!clientWidth) return;
	  /*
	  if(clientWidth>700){
			docEl.style.fontSize = '100px';
			return;
	  };
	  */
		docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		document.body.style.display = "block";
	};

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
