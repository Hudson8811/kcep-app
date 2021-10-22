
; /* Start:"a:4:{s:4:"full";s:71:"/local/templates/kcep/js/jquery-ui-1.10.3.custom.min.js?163273918237663";s:6:"source";s:55:"/local/templates/kcep/js/jquery-ui-1.10.3.custom.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery UI - v1.10.3 - 2014-01-13
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===e)return o[i]===e?null:o[i];o[i]=s}else{if(s===e)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=e.pageX,h=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,a=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,a))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,a,o,r,l,h,c,u,d,p=t(this).data("ui-draggable"),g=p.options,f=g.snapTolerance,m=i.offset.left,_=m+p.helperProportions.width,v=i.offset.top,b=v+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,l=r+p.snapElements[u].width,h=p.snapElements[u].top,c=h+p.snapElements[u].height,r-f>_||m>l+f||h-f>b||v>c+f||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==g.snapMode&&(s=f>=Math.abs(h-b),n=f>=Math.abs(c-v),a=f>=Math.abs(r-_),o=f>=Math.abs(l-m),s&&(i.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l}).left-p.margins.left)),d=s||n||a||o,"outer"!==g.snapMode&&(s=f>=Math.abs(h-v),n=f>=Math.abs(c-b),a=f>=Math.abs(r-m),o=f>=Math.abs(l-_),s&&(i.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||a||o||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e=this.options,i=e.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(i)?i:function(t){return t.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},t.ui.ddmanager.droppables[e.scope]=t.ui.ddmanager.droppables[e.scope]||[],t.ui.ddmanager.droppables[e.scope].push(this),e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,a,o=(t.positionAbs||t.position.absolute).left,r=o+t.helperProportions.width,l=(t.positionAbs||t.position.absolute).top,h=l+t.helperProportions.height,c=i.offset.left,u=c+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return o>=c&&u>=r&&l>=d&&p>=h;case"intersect":return o+t.helperProportions.width/2>c&&u>r-t.helperProportions.width/2&&l+t.helperProportions.height/2>d&&p>h-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,a=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(a,d,i.proportions.height)&&e(n,c,i.proportions.width);case"touch":return(l>=d&&p>=l||h>=d&&p>=h||d>l&&h>p)&&(o>=c&&u>=o||r>=c&&u>=r||c>o&&r>u);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,a=t.ui.ddmanager.droppables[e.options.scope]||[],o=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||e&&!a[s].accept.call(a[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions.height=0;continue t}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions={width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight})}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=t.ui.intersect(e,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),a.length&&(s=t.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/kcep/js/jquery.shapeshift.min.js?163273918211083";s:6:"source";s:45:"/local/templates/kcep/js/jquery.shapeshift.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){(function(e,c,a){var b,f,d;d="shapeshift";f={selector:"*",enableDrag:true,enableCrossDrop:true,enableResize:true,enableTrash:false,align:"center",colWidth:null,columns:null,minColumns:1,autoHeight:true,maxHeight:null,minHeight:100,gutterX:10,gutterY:10,paddingX:10,paddingY:10,animated:true,animateOnInit:false,animationSpeed:225,animationThreshold:100,dragClone:false,deleteClone:true,dragRate:100,dragWhitelist:"*",crossDropWhitelist:"*",cutoffStart:null,cutoffEnd:null,handle:false,cloneClass:"ss-cloned-child",activeClass:"ss-active-child",draggedClass:"ss-dragged-child",placeholderClass:"ss-placeholder-child",originalContainerClass:"ss-original-container",currentContainerClass:"ss-current-container",previousContainerClass:"ss-previous-container"};b=(function(){function g(i,h){this.element=i;this.options=e.extend({},f,h);this.globals={};this.$container=e(i);if(this.errorCheck()){this.init()}}g.prototype.errorCheck=function(){var h,j,k,i;i=this.options;k=false;j="Shapeshift ERROR:";if(i.colWidth===null){h=this.$container.children(i.selector);if(h.length===0){k=true;console.error(""+j+" option colWidth must be specified if Shapeshift is initialized with no active children.")}}return !k};g.prototype.init=function(){this.createEvents();this.setGlobals();this.setIdentifier();this.setActiveChildren();this.enableFeatures();this.gridInit();this.render();return this.afterInit()};g.prototype.createEvents=function(){var i,h,j=this;h=this.options;i=this.$container;i.off("ss-arrange").on("ss-arrange",function(l,k){if(k==null){k=false}return j.render(false,k)});i.off("ss-rearrange").on("ss-rearrange",function(){return j.render(true)});i.off("ss-setTargetPosition").on("ss-setTargetPosition",function(){return j.setTargetPosition()});i.off("ss-destroy").on("ss-destroy",function(){return j.destroy()});return i.off("ss-shuffle").on("ss-shuffle",function(){return j.shuffle()})};g.prototype.setGlobals=function(){this.globals.animated=this.options.animateOnInit;return this.globals.dragging=false};g.prototype.afterInit=function(){return this.globals.animated=this.options.animated};g.prototype.setIdentifier=function(){this.identifier="shapeshifted_container_"+Math.random().toString(36).substring(7);return this.$container.addClass(this.identifier)};g.prototype.enableFeatures=function(){if(this.options.enableResize){this.enableResize()}if(this.options.enableDrag||this.options.enableCrossDrop){return this.enableDragNDrop()}};g.prototype.setActiveChildren=function(){var s,p,h,j,o,q,t,r,m,l,n,k;t=this.options;s=this.$container.children(t.selector);p=t.activeClass;r=s.length;for(o=m=0;0<=r?m<r:m>r;o=0<=r?++m:--m){e(s[o]).addClass(p)}this.setParsedChildren();j=t.columns;k=[];for(o=l=0,n=this.parsedChildren.length;0<=n?l<n:l>n;o=0<=n?++l:--l){h=this.parsedChildren[o].colspan;q=t.minColumns;if(h>j&&h>q){t.minColumns=h;k.push(console.error("Shapeshift ERROR: There are child elements that have a larger colspan than the minimum columns set through options.\noptions.minColumns has been set to "+h))}else{k.push(void 0)}}return k};g.prototype.setParsedChildren=function(){var m,h,o,j,n,k,l;h=this.$container.find("."+this.options.activeClass).filter(":visible");k=h.length;n=[];for(j=l=0;0<=k?l<k:l>k;j=0<=k?++l:--l){m=e(h[j]);o={i:j,el:m,colspan:parseInt(m.attr("data-ss-colspan"))||1,height:m.outerHeight()};n.push(o)}return this.parsedChildren=n};g.prototype.gridInit=function(){var i,h,k,j,l;j=this.options.gutterX;if(!(this.options.colWidth>=1)){k=this.parsedChildren[0];h=k.el.outerWidth();i=k.colspan;l=(h-((i-1)*j))/i;return this.globals.col_width=l+j}else{return this.globals.col_width=this.options.colWidth+j}};g.prototype.render=function(i,h){if(i==null){i=false}this.setGridColumns();return this.arrange(i,h)};g.prototype.setGridColumns=function(){var s,v,u,j,l,q,k,t,p,h,r,w,m,n,o;q=this.globals;w=this.options;u=q.col_width;t=w.gutterX;m=w.paddingX;h=this.$container.innerWidth()-(m*2);r=w.minColumns;l=w.columns||Math.floor((h+t)/u);if(r&&r>l){l=r}q.columns=l;v=this.parsedChildren.length;if(l>v){s=0;for(p=n=0,o=this.parsedChildren.length;0<=o?n<o:n>o;p=0<=o?++n:--n){j=this.parsedChildren[p].colspan;if(j+s<=l){s+=j}}l=s}q.child_offset=m;switch(w.align){case"center":k=(l*u)-t;return q.child_offset+=(h-k)/2;case"right":k=(l*u)-t;return q.child_offset+=h-k}};g.prototype.arrange=function(m,y){var z,v,x,h,r,o,s,q,n,w,j,u,B,p,A,t,l,k;if(m){this.setParsedChildren()}n=this.globals;p=this.options;v=this.$container;o=this.getPositions();A=this.parsedChildren;l=A.length;x=n.animated&&l<=p.animationThreshold;h=p.animationSpeed;q=p.draggedClass;for(w=k=0;0<=l?k<l:k>l;w=0<=l?++k:--k){z=A[w].el;r=o[w];j=z.hasClass(q);if(j){t=p.placeholderClass;z=z.siblings("."+t)}if(x&&!j){z.stop(true,false).animate(r,h,function(){})}else{z.css(r)}}if(y){if(x){setTimeout((function(){return v.trigger("ss-drop-complete")}),h)}else{v.trigger("ss-drop-complete")}}v.trigger("ss-arranged");if(p.autoHeight){s=n.container_height;u=p.maxHeight;B=p.minHeight;if(B&&s<B){s=B}else{if(u&&s>u){s=u}}return v.height(s)}};g.prototype.getPositions=function(v){var n,y,q,o,l,z,h,w,m,t,B,p,A,x,s,k,j,r,u=this;if(v==null){v=true}l=this.globals;m=this.options;h=m.gutterY;t=m.paddingY;o=m.draggedClass;B=this.parsedChildren;k=B.length;n=[];for(w=j=0,r=l.columns;0<=r?j<r:j>r;w=0<=r?++j:--j){n.push(t)}x=function(I){var D,H,C,G,E,F,i;D=I.col;H=I.colspan;G=(I.col*l.col_width)+l.child_offset;E=n[D];p[I.i]={left:G,top:E};n[D]+=I.height+h;if(H>=1){i=[];for(C=F=1;1<=H?F<H:F>H;C=1<=H?++F:--F){i.push(n[D+C]=n[D])}return i}};y=function(i){var N,E,C,M,I,D,H,L,J,K,G,F;J=n.length-i.colspan+1;L=n.slice(0).splice(0,J);N=void 0;for(H=G=0;0<=J?G<J:G>J;H=0<=J?++G:--G){E=u.lowestCol(L,H);C=i.colspan;M=n[E];I=true;for(K=F=1;1<=C?F<C:F>C;K=1<=C?++F:--F){D=n[E+K];if(M<D){I=false;break}}if(I){N=E;break}}return N};s=[];A=function(){var J,i,E,I,K,G,D,H,C,F;K=[];for(I=G=0,H=s.length;0<=H?G<H:G>H;I=0<=H?++G:--G){E=s[I];E.col=y(E);if(E.col>=0){x(E);K.push(I)}}F=[];for(i=D=C=K.length-1;D>=0;i=D+=-1){J=K[i];F.push(s.splice(J,1))}return F};p=[];(q=function(){var D,C,i;i=[];for(w=C=0;0<=k?C<k:C>k;w=0<=k?++C:--C){D=B[w];if(!(!v&&D.el.hasClass(o))){if(D.colspan>1){D.col=y(D)}else{D.col=u.lowestCol(n)}if(D.col===void 0){s.push(D)}else{x(D)}i.push(A())}else{i.push(void 0)}}return i})();if(m.autoHeight){z=n[this.highestCol(n)]-h;l.container_height=z+t}return p};g.prototype.enableDragNDrop=function(){var p,v,n,y,l,t,o,w,q,z,s,m,j,x,r,k,i,h,u=this;j=this.options;v=this.$container;l=j.activeClass;m=j.draggedClass;r=j.placeholderClass;x=j.originalContainerClass;o=j.currentContainerClass;k=j.previousContainerClass;w=j.deleteClone;z=j.dragRate;q=j.dragClone;t=j.cloneClass;y=n=p=h=i=null;s=false;if(j.enableDrag){v.children("."+l).filter(j.dragWhitelist).draggable({addClasses:false,containment:"document",handle:j.handle,zIndex:9999,start:function(C,B){var A;u.globals.dragging=true;y=e(C.target);if(q){p=y.clone(false,false).insertBefore(y).addClass(t)}y.addClass(m);A=y.prop("tagName");n=e("<"+A+" class='"+r+"' style='height: "+(y.height())+"px; width: "+(y.width())+"px'></"+A+">");y.parent().addClass(x).addClass(o);h=y.outerHeight()/2;return i=y.outerWidth()/2},drag:function(B,A){if(!s&&!(q&&w&&e("."+o)[0]===e("."+x)[0])){n.remove().appendTo("."+o);e("."+o).trigger("ss-setTargetPosition");s=true;c.setTimeout((function(){return s=false}),z)}A.position.left=B.pageX-y.parent().offset().left-i;return A.position.top=B.pageY-y.parent().offset().top-h},stop:function(){var A,C,B;u.globals.dragging=false;C=e("."+x);A=e("."+o);B=e("."+k);y.removeClass(m);e("."+r).remove();if(q){if(w&&e("."+o)[0]===e("."+x)[0]){p.remove();e("."+o).trigger("ss-rearrange")}else{p.removeClass(t)}}if(C[0]===A[0]){A.trigger("ss-rearranged",y)}else{C.trigger("ss-removed",y);A.trigger("ss-added",y)}C.trigger("ss-arrange").removeClass(x);A.trigger("ss-arrange",true).removeClass(o);B.trigger("ss-arrange").removeClass(k);return y=n=null}})}if(j.enableCrossDrop){return v.droppable({accept:j.crossDropWhitelist,tolerance:"intersect",over:function(A){e("."+k).removeClass(k);e("."+o).removeClass(o).addClass(k);return e(A.target).addClass(o)},drop:function(E,B){var A,D,C;if(u.options.enableTrash){D=e("."+x);A=e("."+o);C=e("."+k);y=e(B.helper);A.trigger("ss-trashed",y);y.remove();D.trigger("ss-rearrange").removeClass(x);A.trigger("ss-rearrange").removeClass(o);return C.trigger("ss-arrange").removeClass(k)}}})}};g.prototype.setTargetPosition=function(){var C,A,k,t,j,y,u,n,p,m,B,w,z,o,s,q,r,v,x,h,l,i;m=this.options;if(!m.enableTrash){p=m.draggedClass;C=e("."+p);A=C.parent();B=this.parsedChildren;j=this.getPositions(false);x=j.length;s=C.offset().left-A.offset().left+(this.globals.col_width/2);q=C.offset().top-A.offset().top+(C.height()/2);r=9999999;v=0;if(x>1){u=m.cutoffStart+1||0;y=m.cutoffEnd||x;for(z=i=u;u<=y?i<y:i>y;z=u<=y?++i:--i){t=j[z];if(t){l=s-t.left;h=q-t.top;if(l>0&&h>0){n=Math.sqrt((h*h)+(l*l));if(n<r){r=n;v=z;if(z===x-1){if(l>B[z].height/2){v++}}}}}}if(v===B.length){k=B[v-1].el;C.insertAfter(k)}else{k=B[v].el;C.insertBefore(k)}}else{if(x===1){t=j[0];if(t.left<s){this.$container.append(C)}else{this.$container.prepend(C)}}else{this.$container.append(C)}}this.arrange(true);if(A[0]!==C.parent()[0]){o=m.previousContainerClass;return e("."+o).trigger("ss-rearrange")}}else{w=this.options.placeholderClass;return e("."+w).remove()}};g.prototype.enableResize=function(){var i,j,h,k=this;i=this.options.animationSpeed;h=false;j="resize."+this.identifier;return e(c).on(j,function(){if(!h){h=true;setTimeout((function(){return k.render()}),i/3);setTimeout((function(){return k.render()}),i/3);return setTimeout(function(){h=false;return k.render()},i/3)}})};g.prototype.shuffle=function(){var h;h=function(i,j){var k;k=function(m){var o,n,l;n=void 0;l=void 0;o=m.length;while(o){n=parseInt(Math.random()*o);l=m[--o];m[o]=m[n];m[n]=l}return m};return i.each(function(){var l;l=i.find("."+j).filter(":visible");if(l.length){return i.html(k(l))}else{return this}})};if(!this.globals.dragging){h(this.$container,this.options.activeClass);this.enableFeatures();return this.$container.trigger("ss-rearrange")}};g.prototype.lowestCol=function(n,m){var h,j,k,l;if(m==null){m=0}k=n.length;h=[];for(j=l=0;0<=k?l<k:l>k;j=0<=k?++l:--l){h.push([n[j],j])}h.sort(function(o,i){var p;p=o[0]-i[0];if(p===0){p=o[1]-i[1]}return p});return h[m][1]};g.prototype.highestCol=function(h){return e.inArray(Math.max.apply(c,h),h)};g.prototype.destroy=function(){var h,j,i;j=this.$container;j.off("ss-arrange");j.off("ss-rearrange");j.off("ss-setTargetPosition");j.off("ss-destroy");i=this.options.activeClass;h=j.find("."+i);if(this.options.enableDrag){h.draggable("destroy")}if(this.options.enableCrossDrop){j.droppable("destroy")}h.removeClass(i);return j.removeClass(this.identifier)};return g})();return e.fn[d]=function(g){return this.each(function(){var k,i,j,h;i=(j=e(this).attr("class"))!=null?(h=j.match(/shapeshifted_container_\w+/))!=null?h[0]:void 0:void 0;if(i){k="resize."+i;e(c).off(k);e(this).removeClass(i)}return e.data(this,"plugin_"+d,new b(this,g))})}})(jQuery,window,document)}).call(this);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/local/templates/kcep/js/configReelToCarDragAndDropActivation.js?16327391823013";s:6:"source";s:64:"/local/templates/kcep/js/configReelToCarDragAndDropActivation.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function resizeInput() {
    var k=$(this).val().length*28;
    if ($(this).val().length==1) k=40;
    $(this).width(k);
}

(function($){
    'use strict';

    jQuery.fn.extend({
        live: function (event, callback) {
            if (this.selector) {
                jQuery(document).on(event, this.selector, callback);
            }
            return this;
        }
    });

    $(document).ready(function(){
        var reelSelector = $('.reelSelector'),
            reelImg =  reelSelector.find('img'),
            reelDropPlace = $('.reelDropPlace '),
            ssContainer = $('.ss-container');

        reelImg.each(function(){
            $(this).draggable({
                helper : 'clone'
            });
        });

        $('.sizes input[type="text"]').keyup(resizeInput).each(resizeInput);

        reelDropPlace.droppable ({
            drop : function(event, ui) {

                if(!$(ui.helper).hasClass('ss-active-child')) {
                    $(ui.helper).removeClass('ui-draggable-dragging');
                    var newDiv = $(ui.helper).parent().parent().clone().removeClass('ui-draggable-dragging ui-draggable').removeAttr('style');
                    newDiv.find('img').removeClass('ui-draggable').eq(1).remove();
                    $(this).find('p').remove();
                    $(this).append(newDiv);
                } else {
                    $(ui.helper).removeAttr('class');
                    $(this).append('<div class="droppedReel"><div>'+$(ui.helper).html()+'</div></div>');
                    ssContainer.find($(ui.helper)).remove();
                    ssContainer.trigger("ss-rearrange");
                    ssContainer.find('.ss-placeholder-child').remove();
                    setTimeout(function(){
                        ssContainer.trigger("ss-rearrange");
                        ssContainer.find('.ss-placeholder-child').remove();
                    },300);
                }
            }
        });

        reelImg.live('click',function(){

            var newDiv = $(this).parent().parent().clone().removeClass('ui-draggable-dragging ui-draggable').removeAttr('style');

            newDiv.find('img').removeClass('ui-draggable').eq(1).remove();
            reelDropPlace.find('p').remove();
            reelDropPlace.append(newDiv);
            var droppedReel = reelDropPlace.children('.droppedReel'),
                removeAllDroppedReels = $('.removeAllDroppedReels');

            removeAllDroppedReels.click(function(){
                droppedReel.remove();
            });

            droppedReel.click(function(){
                $(this).remove();
            });

            $('.setUp').click();

        });


        var removeAllDroppedReels = $('.removeAllDroppedReels');

        removeAllDroppedReels.click(function(){
            var droppedReel = reelDropPlace.children('.droppedReel'),
                ssContainer = $('.ss-container'),
                setedReels = ssContainer.children('div');

            droppedReel.remove();
            setedReels.remove();
        });
    });

}(jQuery));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:78:"/local/templates/kcep/js/configReelToCarPlacementActivation.js?163273918231882";s:6:"source";s:62:"/local/templates/kcep/js/configReelToCarPlacementActivation.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($) {
    'use strict';

    $(document).ready(function(){

        var ssContainer = $('.ss-container');

        function setCarContainerTop() {
            var carBodyTop = $('.carBodyTop'),
                carBodyTopWrapper = $('.carBodyTopWrapper'),
                ssContainer = $('.ss-container'),
                ssContainerWidth = ssContainer.width();
            carBodyTop.width(ssContainerWidth - 16);
            carBodyTopWrapper.width(ssContainerWidth + 4);
        }

        setCarContainerTop();

        function percentBusy() {
            var ssContainerHeight = ssContainer.height(),
                percent,
                lineLengthContainerInscription = $('.lineLengthContainerInscription'),
                lineLengthBusyInscription = $('.lineLengthBusyInscription'),
                lineLengthBusyTop = $('.lineLengthBusyTop'),
                lineLengthBusyRight = $('.lineLengthBusyRight'),
                lineLengthBusyBottom = $('.lineLengthBusyBottom');
            //определяем высоту из атрибута style, которую устанавливает плагин
            var reelsHeight = ssContainer.attr('style'),
                heightPositionInStr = reelsHeight.indexOf('height');
            reelsHeight = reelsHeight.substr(heightPositionInStr);
            reelsHeight = reelsHeight.split(';');
            reelsHeight = reelsHeight[0].split(' ');
            reelsHeight = reelsHeight[1].split('px');
            reelsHeight = reelsHeight[0] - 4; //4 - рамка контейнера
            //вывод текста
            percent = 100*reelsHeight/ssContainerHeight;
            percent = percent.toFixed(1);
            var meters = ssContainerHeight/50*percent/100;

            var length = $('.lengthWrapper input').val();

            if (meters>parseFloat(length.replace(",","."))) {meters=parseFloat(length.replace(",","."));};

            meters = meters.toFixed(1);

            $('.percentBusy').html('Занято <span>~'+percent+'% (~' + meters + 'м)</span>');
            //ставим сноску занятого пространства
            if ( reelsHeight > 0 ) {
                lineLengthBusyInscription.html(meters + ' м');
                lineLengthBusyInscription.css('top', reelsHeight/2 - 4 );
                lineLengthBusyRight.height(reelsHeight);
                lineLengthBusyBottom.css('top', reelsHeight + 10);
                lineLengthBusyInscription.removeClass('hidden');
                lineLengthBusyTop.removeClass('hidden');
                lineLengthBusyRight.removeClass('hidden');
                lineLengthBusyBottom.removeClass('hidden');
            } else {
                lineLengthBusyInscription.addClass('hidden');
                lineLengthBusyTop.addClass('hidden');
                lineLengthBusyRight.addClass('hidden');
                lineLengthBusyBottom.addClass('hidden');
            }
        }

        //функция выставления сносок габаритов контейнера
        function containerLengthWidth() {
            var lineLengthContainerInscription = $('.lineLengthContainerInscription'),
                lineLengthContainerTop = $('.lineLengthContainerTop'),
                lineLengthContainerLeft = $('.lineLengthContainerLeft'),
                lineLengthContainerBottom = $('.lineLengthContainerBottom'),
                lineWidthContainerInscription = $('.lineWidthContainerInscription'),
                lineWidthContainerLeft = $('.lineWidthContainerLeft'),
                lineWidthContainerRight = $('.lineWidthContainerRight'),
                lineWidthContainerBottom = $('.lineWidthContainerBottom'),
                ssContainerHeight = ssContainer.height(),
                ssContainerWidth = ssContainer.width(),
                length = $('.lengthWrapper input').val(),
                width = $('.widthWrapper input').val();
            lineLengthContainerLeft.height(ssContainerHeight);
            lineLengthContainerBottom.css('top', ssContainerHeight + 10);
            lineLengthContainerInscription.html(length + ' м');
            lineLengthContainerInscription.css('top', ssContainerHeight/2);
            lineWidthContainerLeft.css('top', ssContainerHeight + 10);
            lineWidthContainerRight.css('top', ssContainerHeight + 10);
            lineWidthContainerBottom.css('top', ssContainerHeight + 60);
            lineWidthContainerBottom.width(ssContainerWidth);
            lineWidthContainerInscription.html(width + ' м');
            lineWidthContainerInscription.css('top', ssContainerHeight + 35);
            lineWidthContainerInscription.css('left', ssContainerWidth/2 - 18);
        }

        function shapeActivation () {

            var numberCols = Math.round(ssContainer.width()/10); //определяем кол-во колонок

            //активируем c нужным кол-вом колонок
            ssContainer.shapeshift({
                align: "left",
                autoHeight: "false",
                gutterX:  1,
                gutterY:  1,
                minHeight: 0,
                paddingX: 5,
                paddingY: 5
                //columns: numberCols,
                //colWidth: 10
            });

            //активируем корзину
            $('.trash').shapeshift({
                autoHeight: false,
                enableTrash: true
            });

        }

        //клик по барабанам в грузовике - поворот и перестроение
        var verticalReelsClass = [ '8', '10', '12a', '14', '14g', '17', '17us', '18a', '7op', '8op', '9op', '10op', '10-a-op', '10-b-op', '12-a-op', '14op', '14-g-op', '17op', '18-a-op', '20op', '20-a-op', '25op', 'okko1', 'okko2', 'okko3' ],
            horizontalReelsClass = [ '8_horiz', '10_horiz', '12a_horiz', '14_horiz', '14g_horiz', '17_horiz','17us_horiz','18a_horiz','7op_horiz', '8op_horiz', '9op_horiz', '10op_horiz', '10-a-op_horiz', '10-b-op_horiz', '12-a-op_horiz', '14op_horiz', '14-g-op_horiz', '17op_horiz', '18-a-op_horiz', '20op_horiz', '20-a-op_horiz', '25op_horiz', 'okko1_horiz', 'okko2_horiz', 'okko3_horiz' ];

        ssContainer.on('click', 'div', function(){
            var rotatedReel = $(this),
                rotatedReelOldClass,
                rotatedReelNewClass;

            //проверяем какой класс у элемента и запоминаем старый и новый нужный нам класс
            for (var i = 0; i<25; i++) {
                if (rotatedReel.hasClass(verticalReelsClass[i])) {
                    rotatedReelOldClass = verticalReelsClass[i];
                    rotatedReelNewClass = horizontalReelsClass[i];
                }
                if (rotatedReel.hasClass(horizontalReelsClass[i])) {
                    rotatedReelOldClass = horizontalReelsClass[i];
                    rotatedReelNewClass = verticalReelsClass[i];
                }
            }

            //правим картинку, меняем класс, путь к картинке и ширину/высоту местами
            var imgInRotatedReel = rotatedReel.find('img'),
                imgInRotatedReelOldWidth = imgInRotatedReel.css('width'),
                imgInRotatedReelOldHeight = imgInRotatedReel.css('height');
            imgInRotatedReel.attr('src', '/local/templates/kcep/uploads/reels/'+rotatedReelNewClass+'.png');
            imgInRotatedReel.removeClass(rotatedReelOldClass);
            imgInRotatedReel.addClass(rotatedReelNewClass);
            imgInRotatedReel.css('width', imgInRotatedReelOldHeight);
            imgInRotatedReel.css('height', imgInRotatedReelOldWidth);

            //правим сам блок, меняем класс, кол-во колонок и ширину/высоту местами
            var rotatedReelOldWidth = rotatedReel.width(),
                rotatedReelOldHeight = rotatedReel.height(),
                rotatedReelOldColumn = rotatedReel.attr('data-ss-colspan');
            rotatedReel.removeClass(rotatedReelOldClass);
            rotatedReel.addClass(rotatedReelNewClass);
            rotatedReel.css('width',  rotatedReelOldHeight);
            rotatedReel.css('height', rotatedReelOldWidth);
            rotatedReel.attr('data-ss-colspan', Math.ceil(rotatedReelOldHeight/10));

            //перестраиваем после поворота
            ssContainer.trigger("ss-rearrange");

            percentBusy();

        });

        function reSetReelsInCar() {
            var reelDropPlace = $('.reelDropPlace'),
                ssContainerBottom = ssContainer.offset().top + ssContainer.height(),
                ssContainerRight = ssContainer.offset().left + ssContainer.width();
            ssContainer.children('div').each(function(){
                var $this = $(this);
                var reelBotPos = $this.offset().top + $this.outerHeight(true);
                var reelRightPos = $this.offset().left + $this.outerWidth(true);
                if (reelBotPos > ssContainerBottom) {
                    reelDropPlace.append('<div class="droppedReel"><div>'+$this.html()+'</div></div>');
                    $this.remove();
                    var droppedReel = reelDropPlace.children('.droppedReel');
                    droppedReel.remove();
                }
                if (reelRightPos > ssContainerRight) {
                    reelDropPlace.append('<div class="droppedReel"><div>'+$this.html()+'</div></div>');
                    $this.remove();
                    var droppedReel = reelDropPlace.children('.droppedReel');
                    droppedReel.remove();
                }
            });
            percentBusy();
        }

        function reSetReelsInCar2() {
            var reelDropPlace = $('.reelDropPlace'),
                ssContainerBottom = ssContainer.offset().top + ssContainer.height();
            ssContainer.children('div').each(function(){
                var $this = $(this);
                reelDropPlace.append('<div class="droppedReel"><div>'+$this.html()+'</div></div>');
                $this.remove();
            });
            percentBusy();
        }

        var doit;
        ssContainer.on("ss-arranged",function(){
            clearTimeout(doit);
            doit = setTimeout(function() {
                reSetReelsInCar();
            }, 300);
        });

        $('.setUp2').click(function() {
            reSetReelsInCar2();
            $('.setUp').click();
        });

        $('.setUp').click(function() {

            var reelDropPlace = $('.reelDropPlace'),
                imgs = reelDropPlace.find('img'),
                imgsLength = imgs.length,
                reels = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                reelsHorizontal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

            var reelsDimensions = [[855,665],[1055,640],[1275,860],[1455,850],[1455,1040],[1765,890],[1765,930],[1870,1310],[650,450],[855,705],[955,530],[1055,680],[1055,890],[1055,670],[1275,900],[1455,900],[1455,1090],[1765,940],[1870,1350],[2080,1280],[2080,1340],[2600,1660],[490,440],[600,440],[650,450]];
            var reelsDimensionsHorizontal = [[665,855],[640,1055],[860,1275],[850,1455],[1040,1455],[890,1765],[930,1765],[1310,1870],[450,650],[705,855],[530,955],[680,1055],[890,1055],[670,1055],[900,1275],[900,1455],[1090,1455],[940,1765],[1350,1870],[1280,2080],[1340,2080],[1660,2600],[440,490],[440,600],[450,650]];

            for (var i = 0; i< imgsLength; i++) {
                var reelType = imgs.eq(i).attr('class');

                switch (reelType) {
                    case '8':
                        reels[0]++;
                        break;
                    case '10':
                        reels[1]++;
                        break;
                    case '12a':
                        reels[2]++;
                        break;
                    case '14':
                        reels[3]++;
                        break;
                    case '14g':
                        reels[4]++;
                        break;
                    case '17':
                        reels[5]++;
                        break;
                    case '17us':
                        reels[6]++;
                        break;
                    case '18a':
                        reels[7]++;
                        break;
                    case '7op':
                        reels[8]++;
                        break;
                    case '8op':
                        reels[9]++;
                        break;
                    case '9op':
                        reels[10]++;
                        break;
                    case '10op':
                        reels[11]++;
                        break;
                    case '10-a-op':
                        reels[12]++;
                        break;
                    case '10-b-op':
                        reels[13]++;
                        break;
                    case '12-a-op':
                        reels[14]++;
                        break;
                    case '14op':
                        reels[15]++;
                        break;
                    case '14-g-op':
                        reels[16]++;
                        break;
                    case '17op':
                        reels[17]++;
                        break;
                    case '18-a-op':
                        reels[18]++;
                        break;
                    case '20op':
                        reels[19]++;
                        break;
                    case '20-a-op':
                        reels[20]++;
                        break;
                    case '25op':
                        reels[21]++;
                        break;
                    case 'okko1':
                        reels[22]++;
                        break;
                    case 'okko2':
                        reels[23]++;
                        break;
                    case 'okko3':
                        reels[24]++;
                        break;

                    case '8_horiz':
                        reelsHorizontal[0]++;
                        break;
                    case '10_horiz':
                        reelsHorizontal[1]++;
                        break;
                    case '12a_horiz':
                        reelsHorizontal[2]++;
                        break;
                    case '14_horiz':
                        reelsHorizontal[3]++;
                        break;
                    case '14g_horiz':
                        reelsHorizontal[4]++;
                        break;
                    case '17_horiz':
                        reelsHorizontal[5]++;
                        break;
                    case '17us_horiz':
                        reelsHorizontal[6]++;
                        break;
                    case '18a_horiz':
                        reelsHorizontal[7]++;
                        break;
                    case '7op_horiz':
                        reelsHorizontal[8]++;
                        break;
                    case '8op_horiz':
                        reelsHorizontal[9]++;
                        break;
                    case '9op_horiz':
                        reelsHorizontal[10]++;
                        break;
                    case '10op_horiz':
                        reelsHorizontal[11]++;
                        break;
                    case '10-a-op_horiz':
                        reelsHorizontal[12]++;
                        break;
                    case '10-b-op_horiz':
                        reelsHorizontal[13]++;
                        break;
                    case '12-a-op_horiz':
                        reelsHorizontal[14]++;
                        break;
                    case '14op_horiz':
                        reelsHorizontal[15]++;
                        break;
                    case '14-g-op_horiz':
                        reelsHorizontal[16]++;
                        break;
                    case '17op_horiz':
                        reelsHorizontal[17]++;
                        break;
                    case '18-a-op_horiz':
                        reelsHorizontal[18]++;
                        break;
                    case '20op_horiz':
                        reelsHorizontal[19]++;
                        break;
                    case '20-a-op_horiz':
                        reelsHorizontal[20]++;
                        break;
                    case '25op_horiz':
                        reelsHorizontal[21]++;
                        break;
                    case 'okko1_horiz':
                        reelsHorizontal[22]++;
                        break;
                    case 'okko2_horiz':
                        reelsHorizontal[23]++;
                        break;
                    case 'okko3_horiz':
                        reelsHorizontal[24]++;
                        break;
                }
            }

            var reelTypeIs;

            for (i = reels.length; i >= 0 ; i--) {
                switch (i) {
                    case 0:
                        reelTypeIs = '8';
                        break;
                    case 1:
                        reelTypeIs = '10';
                        break;
                    case 2:
                        reelTypeIs = '12a';
                        break;
                    case 3:
                        reelTypeIs = '14';
                        break;
                    case 4:
                        reelTypeIs = '14g';
                        break;
                    case 5:
                        reelTypeIs = '17';
                        break;
                    case 6:
                        reelTypeIs = '17us';
                        break;
                    case 7:
                        reelTypeIs = '18a';
                        break;
                    case 8:
                        reelTypeIs = '7op';
                        break;
                    case 9:
                        reelTypeIs = '8op';
                        break;
                    case 10:
                        reelTypeIs = '9op';
                        break;
                    case 11:
                        reelTypeIs = '10op';
                        break;
                    case 12:
                        reelTypeIs = '10-a-op';
                        break;
                    case 13:
                        reelTypeIs = '10-b-op';
                        break;
                    case 14:
                        reelTypeIs = '12-a-op';
                        break;
                    case 15:
                        reelTypeIs = '14op';
                        break;
                    case 16:
                        reelTypeIs = '14-g-op';
                        break;
                    case 17:
                        reelTypeIs = '17op';
                        break;
                    case 18:
                        reelTypeIs = '18-a-op';
                        break;
                    case 19:
                        reelTypeIs = '20op';
                        break;
                    case 20:
                        reelTypeIs = '20-a-op';
                        break;
                    case 21:
                        reelTypeIs = '25op';
                        break;
                    case 22:
                        reelTypeIs = 'okko1';
                        break;
                    case 23:
                        reelTypeIs = 'okko2';
                        break;
                    case 24:
                        reelTypeIs = 'okko3';
                        break;
                }
                for (var j = 0; j < reels[i]; j++) {
                    ssContainer.append('<div class="'+reelTypeIs+' num-'+i+' ss-active-child" data-ss-colspan="'+Math.ceil(reelsDimensions[i][1]/200)+'" style="width:'+Math.ceil(reelsDimensions[i][1]/20)+'px;height:'+Math.ceil(reelsDimensions[i][0]/20)+'px;"><img class="'+reelTypeIs+'" src="/local/templates/kcep/uploads/reels/'+reelTypeIs+'.png" style="width:'+Math.ceil(reelsDimensions[i][1]/20)+'px;height:'+Math.ceil(reelsDimensions[i][0]/20)+'px;"/></div>');
                }

            }

            for (i = reelsHorizontal.length; i >= 0 ; i--) {
                switch (i) {
                    case 0:
                        reelTypeIs = '8_horiz';
                        break;
                    case 1:
                        reelTypeIs = '10_horiz';
                        break;
                    case 2:
                        reelTypeIs = '12a_horiz';
                        break;
                    case 3:
                        reelTypeIs = '14_horiz';
                        break;
                    case 4:
                        reelTypeIs = '14g_horiz';
                        break;
                    case 5:
                        reelTypeIs = '17_horiz';
                        break;
                    case 6:
                        reelTypeIs = '17us_horiz';
                        break;
                    case 7:
                        reelTypeIs = '18a_horiz';
                        break;
                    case 8:
                        reelTypeIs = '7op_horiz';
                        break;
                    case 9:
                        reelTypeIs = '8op_horiz';
                        break;
                    case 10:
                        reelTypeIs = '9op_horiz';
                        break;
                    case 11:
                        reelTypeIs = '10op_horiz';
                        break;
                    case 12:
                        reelTypeIs = '10-a-op_horiz';
                        break;
                    case 13:
                        reelTypeIs = '10-b-op_horiz';
                        break;
                    case 14:
                        reelTypeIs = '12-a-op_horiz';
                        break;
                    case 15:
                        reelTypeIs = '14op_horiz';
                        break;
                    case 16:
                        reelTypeIs = '14-g-op_horiz';
                        break;
                    case 17:
                        reelTypeIs = '17op_horiz';
                        break;
                    case 18:
                        reelTypeIs = '18-a-op_horiz';
                        break;
                    case 19:
                        reelTypeIs = '20op_horiz';
                        break;
                    case 20:
                        reelTypeIs = '20-a-op_horiz';
                        break;
                    case 21:
                        reelTypeIs = '25op_horiz';
                        break;
                    case 22:
                        reelTypeIs = 'okko1_horiz';
                        break;
                    case 23:
                        reelTypeIs = 'okko2_horiz';
                        break;
                    case 24:
                        reelTypeIs = 'okko3_horiz';
                        break;
                }
                for (var j = 0; j < reelsHorizontal[i]; j++) {
                    ssContainer.append('<div class="'+reelTypeIs+' num-'+i+' ss-active-child" data-ss-colspan="'+Math.ceil(reelsDimensionsHorizontal[i][1]/200)+'" style="width:'+Math.ceil(reelsDimensionsHorizontal[i][1]/20)+'px;height:'+Math.ceil(reelsDimensionsHorizontal[i][0]/20)+'px;"><img class="'+reelTypeIs+'" src="/local/templates/kcep/uploads/reels/'+reelTypeIs+'.png" style="width:'+Math.ceil(reelsDimensionsHorizontal[i][1]/20)+'px;height:'+Math.ceil(reelsDimensionsHorizontal[i][0]/20)+'px;"/></div>');
                }
            }

            shapeActivation();

            reelDropPlace.find('.droppedReel').remove();

            reSetReelsInCar();

            ssContainer.trigger("ss-rearrange");

        });

        var tabs = $('.tabsChanger > li'),
            width = $('.widthWrapper input'),
            length = $('.lengthWrapper input'),
            widthInt = $('.widthInt'),
            lengthInt = $('.lengthInt');

        tabs.click(function(){
            if ($('a',$(this)).html()==='Еврофура') {
                width.attr('readonly','readonly');
                length.attr('readonly','readonly');
                width.val('2,4');
                widthInt.html('120');
                length.val('13,3');
                lengthInt.html('669');
                ssContainer.width(+widthInt.html());
                ssContainer.height(+lengthInt.html());
                ssContainer.css('max-height',+lengthInt.html());
                ssContainer.css('min-height',+lengthInt.html());
                ssContainer.trigger("ss-rearrange");
                containerLengthWidth();
                setTimeout(function(){
                    reSetReelsInCar();
                    ssContainer.trigger("ss-rearrange");
                },300);
                setCarContainerTop();
            }
            if ($('a',$(this)).html()==='Газель') {
                width.attr('readonly','readonly');
                length.attr('readonly','readonly');
                width.val('2');
                widthInt.html('100');
                length.val('3');
                lengthInt.html('154');
                ssContainer.width(+widthInt.html());
                ssContainer.height(+lengthInt.html());
                ssContainer.css('max-height',+lengthInt.html());
                ssContainer.css('min-height',+lengthInt.html());
                shapeActivation();
                containerLengthWidth();
                ssContainer.trigger("ss-rearrange");
                setTimeout(function(){
                    reSetReelsInCar();
                    ssContainer.trigger("ss-rearrange");
                },300);
                setCarContainerTop();
            }
            if ($('a',$(this)).html()==='БУС') {
                width.attr('readonly','readonly');
                length.attr('readonly','readonly');
                width.val('2');
                widthInt.html('100');
                length.val('4,1');
                lengthInt.html('209');
                ssContainer.width(+widthInt.html());
                ssContainer.height(+lengthInt.html());
                ssContainer.css('max-height',+lengthInt.html());
                ssContainer.css('min-height',+lengthInt.html());
                shapeActivation();
                containerLengthWidth();
                ssContainer.trigger("ss-rearrange");
                setTimeout(function(){
                    reSetReelsInCar();
                    ssContainer.trigger("ss-rearrange");
                },300);
                setCarContainerTop();
            }
            if ($('a',$(this)).html()==='УАЗ') {
                width.attr('readonly','readonly');
                length.attr('readonly','readonly');
                width.val('1,6');
                widthInt.html('80');
                length.val('2,5');
                lengthInt.html('129');
                ssContainer.width(+widthInt.html());
                ssContainer.height(+lengthInt.html());
                ssContainer.css('max-height',+lengthInt.html());
                ssContainer.css('min-height',+lengthInt.html());
                shapeActivation();
                containerLengthWidth();
                ssContainer.trigger("ss-rearrange");
                setTimeout(function(){
                    reSetReelsInCar();
                    ssContainer.trigger("ss-rearrange");
                },300);
                setCarContainerTop();
            }
            if ($('a',$(this)).html()==='Свой размер') {
                width.removeAttr('readonly','readonly');
                length.removeAttr('readonly','readonly');
                width.focus();
                //width.val('');
                width.keydown(function(event) {
                    // Allow: backspace, delete, tab, escape, enter and .
                    if ( $.inArray(event.keyCode,[46,8,9,27,13,188]) !== -1 ||
                        // Allow: Ctrl+A
                        (event.keyCode === 65 && event.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (event.keyCode >= 35 && event.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    else {
                        // Ensure that it is a number and stop the keypress
                        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                            event.preventDefault();
                        }
                    }
                });
                width.keyup(function(){
                    var curWidth = width.val(),
                        n = curWidth.indexOf(",");
                    if (n > -1) {
                        curWidth = curWidth.substr(0, n)+'.'+curWidth.substr(n+1);
                    }
                    ssContainer.width((+curWidth)*50);

                    shapeActivation();
                    containerLengthWidth();
                    ssContainer.trigger("ss-rearrange");
                    setTimeout(function(){
                        reSetReelsInCar();
                        ssContainer.trigger("ss-rearrange");
                    },300);
                    setCarContainerTop();
                });
                //length.val('');
                length.keydown(function(event) {

                    // Allow: backspace, delete, tab, escape, enter and .
                    if ( $.inArray(event.keyCode,[46,8,9,27,13,188]) !== -1 ||
                        // Allow: Ctrl+A
                        (event.keyCode === 65 && event.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (event.keyCode >= 35 && event.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    else {
                        // Ensure that it is a number and stop the keypress
                        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                            event.preventDefault();
                        }
                    }
                });
                length.keyup(function(){
                    var curLenght = length.val(),
                        n = curLenght.indexOf(",");
                    if (n > -1) {
                        curLenght = curLenght.substr(0, n)+'.'+curLenght.substr(n+1);
                    }
                    ssContainer.height((+curLenght)*50 + 4);
                    ssContainer.css('max-height',(+curLenght)*50 + 4);
                    ssContainer.css('min-height',(+curLenght)*50 + 4);

                    shapeActivation();
                    containerLengthWidth();
                    ssContainer.trigger("ss-rearrange");
                    setTimeout(function(){
                        reSetReelsInCar();
                        ssContainer.trigger("ss-rearrange");
                    },300);
                    setCarContainerTop();
                });
            }

            $('.arrangement .dimensions h4').html($('a',$(this)).html());

            $('.tabsChanger li').removeClass('active');
            $(this).addClass('active');
            $('.sizes input[type="text"]').keyup(resizeInput).each(resizeInput);
            return false;
        });
    });

})(jQuery);
/* End */
;; /* /local/templates/kcep/js/jquery-ui-1.10.3.custom.min.js?163273918237663*/
; /* /local/templates/kcep/js/jquery.shapeshift.min.js?163273918211083*/
; /* /local/templates/kcep/js/configReelToCarDragAndDropActivation.js?16327391823013*/
; /* /local/templates/kcep/js/configReelToCarPlacementActivation.js?163273918231882*/
