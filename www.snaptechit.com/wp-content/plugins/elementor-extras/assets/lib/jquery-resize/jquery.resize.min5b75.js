!function(e){function i(e){var i=e.__resizeTriggers__,t=i.firstElementChild,r=i.lastElementChild,n=t.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,n.style.width=t.offsetWidth+1+"px",n.style.height=t.offsetHeight+1+"px",t.scrollLeft=t.scrollWidth,t.scrollTop=t.scrollHeight}function t(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height}function r(e){var r=this;i(this),this.__resizeRAF__&&c(this.__resizeRAF__),this.__resizeRAF__=_(function(){t(r)&&(r.__resizeLast__.width=r.offsetWidth,r.__resizeLast__.height=r.offsetHeight,r.__resizeListeners__.forEach(function(i){i.call(r,e)}))})}function n(){if(!o){var e=(w||"")+".resize-triggers { "+(p||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),i.appendChild(t),o=!0}}var s=document.attachEvent,o=!1,a=e.fn._resize;if(e.fn._resize=function(e){return this.each(function(){this==window?a.call(jQuery(this),e):addResizeListener(this,e)})},e.fn.removeResize=function(e){return this.each(function(){removeResizeListener(this,e)})},!s){var _=function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)};return function(i){return e(i)}}(),c=function(){var e=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(i){return e(i)}}(),d=!1,l="",h="animationstart",m="Webkit Moz O ms".split(" "),f="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),g="",u=document.createElement("fakeelement");if(void 0!==u.style.animationName&&(d=!0),!1===d)for(var z=0;z<m.length;z++)if(void 0!==u.style[m[z]+"AnimationName"]){g=m[z],g+"Animation",l="-"+g.toLowerCase()+"-",h=f[z],d=!0;break}var v="resizeanim",w="@"+l+"keyframes "+v+" { from { opacity: 0; } to { opacity: 0; } } ",p=l+"animation: 1ms "+v+"; "}window.addResizeListener=function(e,t){s?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),n(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),i(e),e.addEventListener("scroll",r,!0),h&&e.__resizeTriggers__.addEventListener(h,function(t){t.animationName==v&&i(e)})),e.__resizeListeners__.push(t))},window.removeResizeListener=function(e,i){s?e.detachEvent("onresize",i):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(i),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",r),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))}}(jQuery);