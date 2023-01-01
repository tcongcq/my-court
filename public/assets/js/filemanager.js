/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * Knockout JavaScript library v3.3.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(p){var y=this||(0,eval)("this"),w=y.document,M=y.navigator,u=y.jQuery,E=y.JSON;(function(p){"function"===typeof define&&define.amd?define(["exports","require"],p):"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):p(y.ko={})})(function(N,O){function J(a,d){return null===a||typeof a in Q?a===d:!1}function R(a,d){var c;return function(){c||(c=setTimeout(function(){c=p;a()},d))}}function S(a,d){var c;return function(){clearTimeout(c);
c=setTimeout(a,d)}}function K(b,d,c,e){a.d[b]={init:function(b,k,h,l,g){var m,x;a.w(function(){var q=a.a.c(k()),n=!c!==!q,r=!x;if(r||d||n!==m)r&&a.Z.oa()&&(x=a.a.la(a.e.childNodes(b),!0)),n?(r||a.e.T(b,a.a.la(x)),a.Ja(e?e(g,q):g,b)):a.e.ma(b),m=n},null,{q:b});return{controlsDescendantBindings:!0}}};a.h.ka[b]=!1;a.e.R[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,d){for(var c=b.split("."),e=a,f=0;f<c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};a.D=function(a,d,c){a[d]=c};a.version="3.3.0";
a.b("version",a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function d(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,b){a.__proto__=b;return a}function e(b,c,g,d){var e=b[c].match(m)||[];a.a.o(g.match(m),function(b){a.a.ga(e,b,d)});b[c]=e.join(" ")}var f={__proto__:[]}instanceof Array,k={},h={};k[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];k.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
b(k,function(a,b){if(b.length)for(var c=0,g=b.length;c<g;c++)h[b[c]]=a});var l={propertychange:!0},g=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}(),m=/\S+/g;return{Bb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],o:function(a,b){for(var c=0,g=a.length;c<g;c++)b(a[c],c)},m:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,
b);for(var c=0,g=a.length;c<g;c++)if(a[c]===b)return c;return-1},vb:function(a,b,c){for(var g=0,d=a.length;g<d;g++)if(b.call(c,a[g],g))return a[g];return null},ya:function(b,c){var g=a.a.m(b,c);0<g?b.splice(g,1):0===g&&b.shift()},wb:function(b){b=b||[];for(var c=[],g=0,d=b.length;g<d;g++)0>a.a.m(c,b[g])&&c.push(b[g]);return c},Ka:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)c.push(b(a[g],g));return c},xa:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)b(a[g],g)&&c.push(a[g]);
return c},ia:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,g=b.length;c<g;c++)a.push(b[c]);return a},ga:function(b,c,g){var d=a.a.m(a.a.cb(b),c);0>d?g&&b.push(c):g||b.splice(d,1)},za:f,extend:d,Fa:c,Ga:f?c:d,A:b,pa:function(a,b){if(!a)return a;var c={},g;for(g in a)a.hasOwnProperty(g)&&(c[g]=b(a[g],g,a));return c},Ra:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Jb:function(b){b=a.a.O(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),g=0,d=b.length;g<
d;g++)c.appendChild(a.S(b[g]));return c},la:function(b,c){for(var g=0,d=b.length,e=[];g<d;g++){var m=b[g].cloneNode(!0);e.push(c?a.S(m):m)}return e},T:function(b,c){a.a.Ra(b);if(c)for(var g=0,d=c.length;g<d;g++)b.appendChild(c[g])},Qb:function(b,c){var g=b.nodeType?[b]:b;if(0<g.length){for(var d=g[0],e=d.parentNode,m=0,f=c.length;m<f;m++)e.insertBefore(c[m],d);m=0;for(f=g.length;m<f;m++)a.removeNode(g[m])}},na:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==
b;)a.splice(0,1);if(1<a.length){var c=a[0],g=a[a.length-1];for(a.length=0;c!==g;)if(a.push(c),c=c.nextSibling,!c)return;a.push(g)}}return a},Sb:function(a,b){7>g?a.setAttribute("selected",b):a.selected=b},ib:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Dc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},jc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?
a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Qa:function(b){return a.a.jc(b,b.ownerDocument.documentElement)},tb:function(b){return!!a.a.vb(b,a.a.Qa)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,c,d){var m=g&&l[c];if(!m&&u)u(b).bind(c,d);else if(m||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var e=function(a){d.call(b,a)},f="on"+c;b.attachEvent(f,e);a.a.C.fa(b,
function(){b.detachEvent(f,e)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,d,!1)},qa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var g;"input"===a.a.v(b)&&b.type&&"click"==c.toLowerCase()?(g=b.type,g="checkbox"==g||"radio"==g):g=!1;if(u&&!g)u(b).trigger(c);else if("function"==typeof w.createEvent)if("function"==typeof b.dispatchEvent)g=w.createEvent(h[c]||"HTMLEvents"),g.initEvent(c,
!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(g);else throw Error("The supplied element doesn't support dispatchEvent");else if(g&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.F(b)?b():b},cb:function(b){return a.F(b)?b.B():b},Ia:function(b,c,g){var d;c&&("object"===typeof b.classList?(d=b.classList[g?"add":"remove"],a.a.o(c.match(m),function(a){d.call(b.classList,a)})):"string"===
typeof b.className.baseVal?e(b.className,"baseVal",c,g):e(b,"className",c,g))},Ha:function(b,c){var g=a.a.c(c);if(null===g||g===p)g="";var d=a.e.firstChild(b);!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.T(b,[b.ownerDocument.createTextNode(g)]):d.data=g;a.a.mc(b)},Rb:function(a,b){a.name=b;if(7>=g)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},mc:function(a){9<=g&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},kc:function(a){if(g){var b=a.style.width;
a.style.width=0;a.style.width=b}},Bc:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var g=[],d=b;d<=c;d++)g.push(d);return g},O:function(a){for(var b=[],c=0,g=a.length;c<g;c++)b.push(a[c]);return b},Hc:6===g,Ic:7===g,M:g,Db:function(b,c){for(var g=a.a.O(b.getElementsByTagName("input")).concat(a.a.O(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},m=[],e=g.length-1;0<=e;e--)d(g[e])&&m.push(g[e]);return m},yc:function(b){return"string"==
typeof b&&(b=a.a.ib(b))?E&&E.parse?E.parse(b):(new Function("return "+b))():null},jb:function(b,c,g){if(!E||!E.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return E.stringify(a.a.c(b),c,g)},zc:function(c,g,d){d=d||{};var m=d.params||{},e=d.includeFields||this.Bb,f=c;if("object"==typeof c&&"form"===a.a.v(c))for(var f=c.action,
l=e.length-1;0<=l;l--)for(var k=a.a.Db(c,e[l]),h=k.length-1;0<=h;h--)m[k[h].name]=k[h].value;g=a.a.c(g);var s=w.createElement("form");s.style.display="none";s.action=f;s.method="post";for(var p in g)c=w.createElement("input"),c.type="hidden",c.name=p,c.value=a.a.jb(a.a.c(g[p])),s.appendChild(c);b(m,function(a,b){var c=w.createElement("input");c.type="hidden";c.name=a;c.value=b;s.appendChild(c)});w.body.appendChild(s);d.submitter?d.submitter(s):s.submit();setTimeout(function(){s.parentNode.removeChild(s)},
0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.o);a.b("utils.arrayFirst",a.a.vb);a.b("utils.arrayFilter",a.a.xa);a.b("utils.arrayGetDistinctValues",a.a.wb);a.b("utils.arrayIndexOf",a.a.m);a.b("utils.arrayMap",a.a.Ka);a.b("utils.arrayPushAll",a.a.ia);a.b("utils.arrayRemoveItem",a.a.ya);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Bb);a.b("utils.getFormFields",a.a.Db);a.b("utils.peekObservable",a.a.cb);a.b("utils.postJson",a.a.zc);a.b("utils.parseJson",a.a.yc);a.b("utils.registerEventHandler",
a.a.n);a.b("utils.stringifyJson",a.a.jb);a.b("utils.range",a.a.Bc);a.b("utils.toggleDomNodeCssClass",a.a.Ia);a.b("utils.triggerEvent",a.a.qa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.A);a.b("utils.addOrRemoveItem",a.a.ga);a.b("utils.setTextContent",a.a.Ha);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var d=this;if(1===arguments.length)return function(){return d.apply(a,arguments)};var c=Array.prototype.slice.call(arguments,1);return function(){var e=
c.slice(0);e.push.apply(e,arguments);return d.apply(a,e)}});a.a.f=new function(){function a(b,k){var h=b[c];if(!h||"null"===h||!e[h]){if(!k)return p;h=b[c]="ko"+d++;e[h]={}}return e[h]}var d=0,c="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[c];return b?(delete e[b],a[c]=null,!0):!1},I:function(){return d++ +c}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);
a.a.C=new function(){function b(b,d){var e=a.a.f.get(b,c);e===p&&d&&(e=[],a.a.f.set(b,c,e));return e}function d(c){var e=b(c,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](c);a.a.f.clear(c);a.a.C.cleanExternalData(c);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}var c=a.a.f.I(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{fa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},Pb:function(d,e){var f=b(d,!1);f&&(a.a.ya(f,
e),0==f.length&&a.a.f.set(d,c,p))},S:function(b){if(e[b.nodeType]&&(d(b),f[b.nodeType])){var c=[];a.a.ia(c,b.getElementsByTagName("*"));for(var l=0,g=c.length;l<g;l++)d(c[l])}return b},removeNode:function(b){a.S(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){u&&"function"==typeof u.cleanData&&u.cleanData([a])}}};a.S=a.a.C.S;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.S);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.C.fa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.Pb);(function(){a.a.ca=function(b,d){var c;if(u)if(u.parseHTML)c=u.parseHTML(b,d)||[];else{if((c=u.clean([b],d))&&c[0]){for(var e=c[0];e.parentNode&&11!==e.parentNode.nodeType;)e=e.parentNode;e.parentNode&&e.parentNode.removeChild(e)}}else{(e=d)||(e=w);c=e.parentWindow||e.defaultView||y;var f=a.a.ib(b).toLowerCase(),e=e.createElement("div"),f=f.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!f.indexOf("<tr")&&[2,"<table><tbody>",
"</tbody></table>"]||(!f.indexOf("<td")||!f.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""],k="ignored<div>"+f[1]+b+f[2]+"</div>";for("function"==typeof c.innerShiv?e.appendChild(c.innerShiv(k)):e.innerHTML=k;f[0]--;)e=e.lastChild;c=a.a.O(e.lastChild.childNodes)}return c};a.a.gb=function(b,d){a.a.Ra(b);d=a.a.c(d);if(null!==d&&d!==p)if("string"!=typeof d&&(d=d.toString()),u)u(b).html(d);else for(var c=a.a.ca(d,b.ownerDocument),e=0;e<c.length;e++)b.appendChild(c[e])}})();
a.b("utils.parseHtmlFragment",a.a.ca);a.b("utils.setHtml",a.a.gb);a.H=function(){function b(c,d){if(c)if(8==c.nodeType){var f=a.H.Lb(c.nodeValue);null!=f&&d.push({ic:c,wc:f})}else if(1==c.nodeType)for(var f=0,k=c.childNodes,h=k.length;f<h;f++)b(k[f],d)}var d={};return{$a:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
d[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Wb:function(a,b){var f=d[a];if(f===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete d[a]}},Xb:function(c,d){var f=[];b(c,f);for(var k=0,h=f.length;k<h;k++){var l=f[k].ic,g=[l];d&&a.a.ia(g,d);a.H.Wb(f[k].wc,g);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},Lb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.H);
a.b("memoization.memoize",a.H.$a);a.b("memoization.unmemoize",a.H.Wb);a.b("memoization.parseMemoText",a.H.Lb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.H.Xb);a.Sa={throttle:function(b,d){b.throttleEvaluation=d;var c=null;return a.j({read:b,write:function(a){clearTimeout(c);c=setTimeout(function(){b(a)},d)}})},rateLimit:function(a,d){var c,e,f;"number"==typeof d?c=d:(c=d.timeout,e=d.method);f="notifyWhenChangesStop"==e?S:R;a.Za(function(a){return f(a,c)})},notify:function(a,d){a.equalityComparer=
"always"==d?null:J}};var Q={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Sa);a.Ub=function(b,d,c){this.da=b;this.La=d;this.hc=c;this.Gb=!1;a.D(this,"dispose",this.p)};a.Ub.prototype.p=function(){this.Gb=!0;this.hc()};a.Q=function(){a.a.Ga(this,a.Q.fn);this.G={};this.rb=1};var z={U:function(b,d,c){var e=this;c=c||"change";var f=new a.Ub(e,d?b.bind(d):b,function(){a.a.ya(e.G[c],f);e.ua&&e.ua(c)});e.ja&&e.ja(c);e.G[c]||(e.G[c]=[]);e.G[c].push(f);return f},notifySubscribers:function(b,
d){d=d||"change";"change"===d&&this.Yb();if(this.Ba(d))try{a.k.xb();for(var c=this.G[d].slice(0),e=0,f;f=c[e];++e)f.Gb||f.La(b)}finally{a.k.end()}},Aa:function(){return this.rb},pc:function(a){return this.Aa()!==a},Yb:function(){++this.rb},Za:function(b){var d=this,c=a.F(d),e,f,k;d.ta||(d.ta=d.notifySubscribers,d.notifySubscribers=function(a,b){b&&"change"!==b?"beforeChange"===b?d.pb(a):d.ta(a,b):d.qb(a)});var h=b(function(){c&&k===d&&(k=d());e=!1;d.Wa(f,k)&&d.ta(f=k)});d.qb=function(a){e=!0;k=a;
h()};d.pb=function(a){e||(f=a,d.ta(a,"beforeChange"))}},Ba:function(a){return this.G[a]&&this.G[a].length},nc:function(b){if(b)return this.G[b]&&this.G[b].length||0;var d=0;a.a.A(this.G,function(a,b){d+=b.length});return d},Wa:function(a,d){return!this.equalityComparer||!this.equalityComparer(a,d)},extend:function(b){var d=this;b&&a.a.A(b,function(b,e){var f=a.Sa[b];"function"==typeof f&&(d=f(d,e)||d)});return d}};a.D(z,"subscribe",z.U);a.D(z,"extend",z.extend);a.D(z,"getSubscriptionsCount",z.nc);
a.a.za&&a.a.Fa(z,Function.prototype);a.Q.fn=z;a.Hb=function(a){return null!=a&&"function"==typeof a.U&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.Q);a.b("isSubscribable",a.Hb);a.Z=a.k=function(){function b(a){c.push(e);e=a}function d(){e=c.pop()}var c=[],e,f=0;return{xb:b,end:d,Ob:function(b){if(e){if(!a.Hb(b))throw Error("Only subscribable things can act as dependencies");e.La(b,b.ac||(b.ac=++f))}},u:function(a,c,e){try{return b(),a.apply(c,e||[])}finally{d()}},oa:function(){if(e)return e.w.oa()},
Ca:function(){if(e)return e.Ca}}}();a.b("computedContext",a.Z);a.b("computedContext.getDependenciesCount",a.Z.oa);a.b("computedContext.isInitial",a.Z.Ca);a.b("computedContext.isSleeping",a.Z.Jc);a.b("ignoreDependencies",a.Gc=a.k.u);a.r=function(b){function d(){if(0<arguments.length)return d.Wa(c,arguments[0])&&(d.X(),c=arguments[0],d.W()),this;a.k.Ob(d);return c}var c=b;a.Q.call(d);a.a.Ga(d,a.r.fn);d.B=function(){return c};d.W=function(){d.notifySubscribers(c)};d.X=function(){d.notifySubscribers(c,
"beforeChange")};a.D(d,"peek",d.B);a.D(d,"valueHasMutated",d.W);a.D(d,"valueWillMutate",d.X);return d};a.r.fn={equalityComparer:J};var H=a.r.Ac="__ko_proto__";a.r.fn[H]=a.r;a.a.za&&a.a.Fa(a.r.fn,a.Q.fn);a.Ta=function(b,d){return null===b||b===p||b[H]===p?!1:b[H]===d?!0:a.Ta(b[H],d)};a.F=function(b){return a.Ta(b,a.r)};a.Da=function(b){return"function"==typeof b&&b[H]===a.r||"function"==typeof b&&b[H]===a.j&&b.qc?!0:!1};a.b("observable",a.r);a.b("isObservable",a.F);a.b("isWriteableObservable",a.Da);
a.b("isWritableObservable",a.Da);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.r(b);a.a.Ga(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var d=this.B(),c=[],e="function"!=typeof b||a.F(b)?function(a){return a===b}:b,f=0;f<d.length;f++){var k=d[f];e(k)&&(0===c.length&&this.X(),c.push(k),d.splice(f,1),f--)}c.length&&this.W();return c},
removeAll:function(b){if(b===p){var d=this.B(),c=d.slice(0);this.X();d.splice(0,d.length);this.W();return c}return b?this.remove(function(c){return 0<=a.a.m(b,c)}):[]},destroy:function(b){var d=this.B(),c="function"!=typeof b||a.F(b)?function(a){return a===b}:b;this.X();for(var e=d.length-1;0<=e;e--)c(d[e])&&(d[e]._destroy=!0);this.W()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(d){return 0<=a.a.m(b,d)}):[]},indexOf:function(b){var d=this();return a.a.m(d,
b)},replace:function(a,d){var c=this.indexOf(a);0<=c&&(this.X(),this.B()[c]=d,this.W())}};a.a.o("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.B();this.X();this.yb(a,b,arguments);a=a[b].apply(a,arguments);this.W();return a}});a.a.o(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.za&&a.a.Fa(a.ba.fn,a.r.fn);a.b("observableArray",a.ba);a.Sa.trackArrayChanges=function(b){function d(){if(!c){c=!0;var g=
b.notifySubscribers;b.notifySubscribers=function(a,b){b&&"change"!==b||++k;return g.apply(this,arguments)};var d=[].concat(b.B()||[]);e=null;f=b.U(function(c){c=[].concat(c||[]);if(b.Ba("arrayChange")){var g;if(!e||1<k)e=a.a.Ma(d,c,{sparse:!0});g=e}d=c;e=null;k=0;g&&g.length&&b.notifySubscribers(g,"arrayChange")})}}if(!b.yb){var c=!1,e=null,f,k=0,h=b.ja,l=b.ua;b.ja=function(a){h&&h.call(b,a);"arrayChange"===a&&d()};b.ua=function(a){l&&l.call(b,a);"arrayChange"!==a||b.Ba("arrayChange")||(f.p(),c=!1)};
b.yb=function(b,d,f){function l(a,b,c){return h[h.length]={status:a,value:b,index:c}}if(c&&!k){var h=[],r=b.length,v=f.length,t=0;switch(d){case "push":t=r;case "unshift":for(d=0;d<v;d++)l("added",f[d],t+d);break;case "pop":t=r-1;case "shift":r&&l("deleted",b[t],t);break;case "splice":d=Math.min(Math.max(0,0>f[0]?r+f[0]:f[0]),r);for(var r=1===v?r:Math.min(d+(f[1]||0),r),v=d+v-2,t=Math.max(r,v),G=[],A=[],p=2;d<t;++d,++p)d<r&&A.push(l("deleted",b[d],d)),d<v&&G.push(l("added",f[p],d));a.a.Cb(A,G);break;
default:return}e=h}}}};a.w=a.j=function(b,d,c){function e(a,b,c){if(I&&b===g)throw Error("A 'pure' computed must not be called recursively");B[a]=c;c.sa=F++;c.ea=b.Aa()}function f(){var a,b;for(a in B)if(B.hasOwnProperty(a)&&(b=B[a],b.da.pc(b.ea)))return!0}function k(){!s&&B&&a.a.A(B,function(a,b){b.p&&b.p()});B=null;F=0;G=!0;s=r=!1}function h(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(z),z=setTimeout(function(){l(!0)},a)):g.nb?g.nb():l(!0)}function l(b){if(!v&&!G){if(y&&y()){if(!t){w();return}}else t=
!1;v=!0;try{var c=B,m=F,f=I?p:!F;a.k.xb({La:function(a,b){G||(m&&c[b]?(e(b,a,c[b]),delete c[b],--m):B[b]||e(b,a,s?{da:a}:a.U(h)))},w:g,Ca:f});B={};F=0;try{var l=d?A.call(d):A()}finally{a.k.end(),m&&!s&&a.a.A(c,function(a,b){b.p&&b.p()}),r=!1}g.Wa(n,l)&&(s||q(n,"beforeChange"),n=l,s?g.Yb():b&&q(n));f&&q(n,"awake")}finally{v=!1}F||w()}}function g(){if(0<arguments.length){if("function"===typeof C)C.apply(d,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}a.k.Ob(g);(r||s&&f())&&l();return n}function m(){(r&&!F||s&&f())&&l();return n}function x(){return r||0<F}function q(a,b){g.notifySubscribers(a,b)}var n,r=!0,v=!1,t=!1,G=!1,A=b,I=!1,s=!1;A&&"object"==typeof A?(c=A,A=c.read):(c=c||{},A||(A=c.read));if("function"!=typeof A)throw Error("Pass a function that returns the value of the ko.computed");var C=c.write,D=c.disposeWhenNodeIsRemoved||c.q||null,u=c.disposeWhen||c.Pa,y=u,w=k,B={},F=0,z=null;d||(d=c.owner);a.Q.call(g);a.a.Ga(g,a.j.fn);
g.B=m;g.oa=function(){return F};g.qc="function"===typeof C;g.p=function(){w()};g.$=x;var T=g.Za;g.Za=function(a){T.call(g,a);g.nb=function(){g.pb(n);r=!0;g.qb(g)}};c.pure?(s=I=!0,g.ja=function(b){if(!G&&s&&"change"==b){s=!1;if(r||f())B=null,F=0,r=!0,l();else{var c=[];a.a.A(B,function(a,b){c[b.sa]=a});a.a.o(c,function(a,b){var c=B[a],g=c.da.U(h);g.sa=b;g.ea=c.ea;B[a]=g})}G||q(n,"awake")}},g.ua=function(b){G||"change"!=b||g.Ba("change")||(a.a.A(B,function(a,b){b.p&&(B[a]={da:b.da,sa:b.sa,ea:b.ea},b.p())}),
s=!0,q(p,"asleep"))},g.bc=g.Aa,g.Aa=function(){s&&(r||f())&&l();return g.bc()}):c.deferEvaluation&&(g.ja=function(a){"change"!=a&&"beforeChange"!=a||m()});a.D(g,"peek",g.B);a.D(g,"dispose",g.p);a.D(g,"isActive",g.$);a.D(g,"getDependenciesCount",g.oa);D&&(t=!0,D.nodeType&&(y=function(){return!a.a.Qa(D)||u&&u()}));s||c.deferEvaluation||l();D&&x()&&D.nodeType&&(w=function(){a.a.C.Pb(D,w);k()},a.a.C.fa(D,w));return g};a.sc=function(b){return a.Ta(b,a.j)};z=a.r.Ac;a.j[z]=a.r;a.j.fn={equalityComparer:J};
a.j.fn[z]=a.j;a.a.za&&a.a.Fa(a.j.fn,a.Q.fn);a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.sc);a.Nb=function(b,d){if("function"===typeof b)return a.w(b,d,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.w(b,d)};a.b("pureComputed",a.Nb);(function(){function b(a,f,k){k=k||new c;a=f(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};k.save(a,h);d(a,function(c){var g=
f(a[c]);switch(typeof g){case "boolean":case "number":case "string":case "function":h[c]=g;break;case "object":case "undefined":var d=k.get(g);h[c]=d!==p?d:b(g,f,k)}});return h}function d(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function c(){this.keys=[];this.mb=[]}a.Vb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.F(b)&&
10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Vb(b);return a.a.jb(b,c,d)};c.prototype={save:function(b,c){var d=a.a.m(this.keys,b);0<=d?this.mb[d]=c:(this.keys.push(b),this.mb.push(c))},get:function(b){b=a.a.m(this.keys,b);return 0<=b?this.mb[b]:p}}})();a.b("toJS",a.Vb);a.b("toJSON",a.toJSON);(function(){a.i={s:function(b){switch(a.a.v(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.ab):7>=a.a.M?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?
b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex]):p;default:return b.value}},Y:function(b,d,c){switch(a.a.v(b)){case "option":switch(typeof d){case "string":a.a.f.set(b,a.d.options.ab,p);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=d;break;default:a.a.f.set(b,a.d.options.ab,d),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof d?d:""}break;case "select":if(""===d||null===d)d=p;for(var e=-1,f=0,k=b.options.length,
h;f<k;++f)if(h=a.i.s(b.options[f]),h==d||""==h&&d===p){e=f;break}if(c||0<=e||d===p&&1<b.size)b.selectedIndex=e;break;default:if(null===d||d===p)d="";b.value=d}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",a.i.s);a.b("selectExtensions.writeValue",a.i.Y);a.h=function(){function b(b){b=a.a.ib(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),x,h=[],n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){c.push(x&&h.length?{key:x,
value:h.join("")}:{unknown:x||h.join("")});x=n=0;h=[];continue}}else if(58===t){if(!n&&!x&&1===h.length){x=h.pop();continue}}else 47===t&&r&&1<v.length?(t=d[r-1].match(f))&&!k[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/"):40===t||123===t||91===t?++n:41===t||125===t||93===t?--n:x||h.length||34!==t&&39!==t||(v=v.slice(1,-1));h.push(v)}}return c}var d=["true","false","null","undefined"],c=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
"g"),f=/[\])"'A-Za-z0-9_$]+$/,k={"in":1,"return":1,"typeof":1},h={};return{ka:[],V:h,bb:b,Ea:function(e,g){function m(b,g){var e;if(!r){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(g=l.preprocess(g,b,m)))return;if(l=h[b])e=g,0<=a.a.m(d,e)?e=!1:(l=e.match(c),e=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:e),l=e;l&&k.push("'"+b+"':function(_z){"+e+"=_z}")}n&&(g="function(){return "+g+" }");f.push("'"+b+"':"+g)}g=g||{};var f=[],k=[],n=g.valueAccessors,r=g.bindingParams,v="string"===typeof e?b(e):e;
a.a.o(v,function(a){m(a.key||a.unknown,a.value)});k.length&&m("_ko_property_writers","{"+k.join(",")+" }");return f.join(",")},vc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},ra:function(b,c,d,e,f){if(b&&a.F(b))!a.Da(b)||f&&b.B()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.ka);a.b("expressionRewriting.parseObjectLiteral",a.h.bb);a.b("expressionRewriting.preProcessBindings",
a.h.Ea);a.b("expressionRewriting._twoWayBindings",a.h.V);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Ea);(function(){function b(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function c(a,c){for(var e=a,f=1,l=[];e=e.nextSibling;){if(d(e)&&(f--,0===f))return l;l.push(e);b(e)&&f++}if(!c)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,
b){var d=c(a,b);return d?0<d.length?d[d.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,k=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.e={R:{},childNodes:function(a){return b(a)?c(a):a.childNodes},ma:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Ra(c)},T:function(c,d){if(b(c)){a.e.ma(c);for(var e=c.nextSibling,
f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.T(c,d)},Mb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Fb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.Mb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||d(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&
d(a.nextSibling)?null:a.nextSibling},oc:b,Fc:function(a){return(a=(f?a.text:a.nodeValue).match(k))?a[1]:null},Kb:function(c){if(l[a.a.v(c)]){var m=c.firstChild;if(m){do if(1===m.nodeType){var f;f=m.firstChild;var h=null;if(f){do if(h)h.push(f);else if(b(f)){var k=e(f,!0);k?f=k:h=[f]}else d(f)&&(h=[f]);while(f=f.nextSibling)}if(f=h)for(h=m.nextSibling,k=0;k<f.length;k++)h?c.insertBefore(f[k],h):c.appendChild(f[k])}while(m=m.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",
a.e.R);a.b("virtualElements.emptyNode",a.e.ma);a.b("virtualElements.insertAfter",a.e.Fb);a.b("virtualElements.prepend",a.e.Mb);a.b("virtualElements.setDomNodeChildren",a.e.T);(function(){a.L=function(){this.ec={}};a.a.extend(a.L.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.e.oc(b);default:return!1}},getBindings:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,
d,b):null;return a.g.sb(c,b,d,!1)},getBindingAccessors:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b,{valueAccessors:!0}):null;return a.g.sb(c,b,d,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Fc(b);default:return null}},parseBindingsString:function(b,d,c,e){try{var f=this.ec,k=b+(e&&e.valueAccessors||""),h;if(!(h=f[k])){var l,g="with($context){with($data||{}){return{"+a.h.Ea(b,e)+"}}}";l=new Function("$context",
"$element",g);h=f[k]=l}return h(d,c)}catch(m){throw m.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+m.message,m;}}});a.L.instance=new a.L})();a.b("bindingProvider",a.L);(function(){function b(a){return function(){return a}}function d(a){return a()}function c(b){return a.a.pa(a.k.u(b),function(a,c){return function(){return b()[c]}})}function e(d,g,e){return"function"===typeof d?c(d.bind(null,g,e)):a.a.pa(d,b)}function f(a,b){return c(this.getBindings.bind(this,a,b))}function k(b,
c,d){var g,e=a.e.firstChild(c),f=a.L.instance,m=f.preprocessNode;if(m){for(;g=e;)e=a.e.nextSibling(g),m.call(f,g);e=a.e.firstChild(c)}for(;g=e;)e=a.e.nextSibling(g),h(b,g,d)}function h(b,c,d){var e=!0,f=1===c.nodeType;f&&a.e.Kb(c);if(f&&d||a.L.instance.nodeHasBindings(c))e=g(c,null,b,d).shouldBindDescendants;e&&!x[a.a.v(c)]&&k(b,c,!f)}function l(b){var c=[],d={},g=[];a.a.A(b,function I(e){if(!d[e]){var f=a.getBindingHandler(e);f&&(f.after&&(g.push(e),a.a.o(f.after,function(c){if(b[c]){if(-1!==a.a.m(g,
c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+g.join(", "));I(c)}}),g.length--),c.push({key:e,Eb:f}));d[e]=!0}});return c}function g(b,c,g,e){var m=a.a.f.get(b,q);if(!c){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,q,!0)}!m&&e&&a.Tb(b,g);var h;if(c&&"function"!==typeof c)h=c;else{var k=a.L.instance,x=k.getBindingAccessors||f,n=a.j(function(){(h=c?c(g,b):x.call(k,b,g))&&g.K&&g.K();return h},null,{q:b});
h&&n.$()||(n=null)}var u;if(h){var w=n?function(a){return function(){return d(n()[a])}}:function(a){return h[a]},y=function(){return a.a.pa(n?n():h,d)};y.get=function(a){return h[a]&&d(w(a))};y.has=function(a){return a in h};e=l(h);a.a.o(e,function(c){var d=c.Eb.init,e=c.Eb.update,f=c.key;if(8===b.nodeType&&!a.e.R[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.k.u(function(){var a=d(b,w(f),y,g.$data,g);if(a&&a.controlsDescendantBindings){if(u!==
p)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.j(function(){e(b,w(f),y,g.$data,g)},null,{q:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+h[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===p}}function m(b){return b&&b instanceof a.N?b:new a.N(b)}a.d={};var x={script:!0,textarea:!0};a.getBindingHandler=function(b){return a.d[b]};
a.N=function(b,c,d,g){var e=this,f="function"==typeof b&&!a.F(b),m,l=a.j(function(){var m=f?b():b,h=a.a.c(m);c?(c.K&&c.K(),a.a.extend(e,c),l&&(e.K=l)):(e.$parents=[],e.$root=h,e.ko=a);e.$rawData=m;e.$data=h;d&&(e[d]=h);g&&g(e,c,h);return e.$data},null,{Pa:function(){return m&&!a.a.tb(m)},q:!0});l.$()&&(e.K=l,l.equalityComparer=null,m=[],l.Zb=function(b){m.push(b);a.a.C.fa(b,function(b){a.a.ya(m,b);m.length||(l.p(),e.K=l=p)})})};a.N.prototype.createChildContext=function(b,c,d){return new a.N(b,this,
c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.N.prototype.extend=function(b){return new a.N(this.K||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.f.I(),n=a.a.f.I();a.Tb=function(b,c){if(2==arguments.length)a.a.f.set(b,n,c),c.K&&c.K.Zb(b);else return a.a.f.get(b,n)};a.va=function(b,c,d){1===b.nodeType&&a.e.Kb(b);return g(b,c,m(d),!0)};a.cc=function(b,
c,d){d=m(d);return a.va(b,e(c,d,b),d)};a.Ja=function(a,b){1!==b.nodeType&&8!==b.nodeType||k(m(a),b,!0)};a.ub=function(a,b){!u&&y.jQuery&&(u=y.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(m(a),b,!0)};a.Oa=function(b){switch(b.nodeType){case 1:case 8:var c=a.Tb(b);if(c)return c;if(b.parentNode)return a.Oa(b.parentNode)}return p};a.gc=function(b){return(b=a.Oa(b))?
b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.ub);a.b("applyBindingsToDescendants",a.Ja);a.b("applyBindingAccessorsToNode",a.va);a.b("applyBindingsToNode",a.cc);a.b("contextFor",a.Oa);a.b("dataFor",a.gc)})();(function(b){function d(d,e){var g=f.hasOwnProperty(d)?f[d]:b,m;g?g.U(e):(g=f[d]=new a.Q,g.U(e),c(d,function(a,b){var c=!(!b||!b.synchronous);k[d]={definition:a,tc:c};delete f[d];m||c?g.notifySubscribers(a):setTimeout(function(){g.notifySubscribers(a)},0)}),m=!0)}function c(a,b){e("getConfig",
[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,g,f){f||(f=a.g.loaders.slice(0));var k=f.shift();if(k){var q=k[c];if(q){var n=!1;if(q.apply(k,d.concat(function(a){n?g(null):null!==a?g(a):e(c,d,g,f)}))!==b&&(n=!0,!k.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,g,f)}else g(null)}var f={},k={};a.g={get:function(c,e){var g=k.hasOwnProperty(c)?k[c]:
b;g?g.tc?a.k.u(function(){e(g.definition)}):setTimeout(function(){e(g.definition)},0):d(c,e)},zb:function(a){delete k[a]},ob:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.zb)})();(function(){function b(b,c,d,e){function k(){0===--v&&e(h)}var h={},v=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.ob("loadTemplate",[b,c],function(a){h.template=a;k()})}):k();d?f(c,d,function(c){a.g.ob("loadViewModel",[b,c],function(a){h[l]=a;k()})}):
k()}function d(a,b,c){if("function"===typeof b)c(function(a){return new b(a)});else if("function"===typeof b[l])c(b[l]);else if("instance"in b){var e=b.instance;c(function(){return e})}else"viewModel"in b?d(a,b.viewModel,c):a("Unknown viewModel value: "+b)}function c(b){switch(a.a.v(b)){case "script":return a.a.ca(b.text);case "textarea":return a.a.ca(b.value);case "template":if(e(b.content))return a.a.la(b.content.childNodes)}return a.a.la(b.childNodes)}function e(a){return y.DocumentFragment?a instanceof
DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?O||y.require?(O||y.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function k(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.Xa(b))throw Error("Component "+b+" is already registered");h[b]=c};a.g.Xa=function(a){return a in h};a.g.Ec=function(b){delete h[b];a.g.zb(b)};a.g.Ab={getConfig:function(a,
b){b(h.hasOwnProperty(a)?h[a]:null)},loadComponent:function(a,c,d){var e=k(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,d,f){b=k(b);if("string"===typeof d)f(a.a.ca(d));else if(d instanceof Array)f(d);else if(e(d))f(a.a.O(d.childNodes));else if(d.element)if(d=d.element,y.HTMLElement?d instanceof HTMLElement:d&&d.tagName&&1===d.nodeType)f(c(d));else if("string"===typeof d){var l=w.getElementById(d);l?f(c(l)):b("Cannot find element with ID "+d)}else b("Unknown element type: "+d);else b("Unknown template value: "+
d)},loadViewModel:function(a,b,c){d(k(a),b,c)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.Xa);a.b("components.unregister",a.g.Ec);a.b("components.defaultLoader",a.g.Ab);a.g.loaders.push(a.g.Ab);a.g.$b=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=d.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.pa(f,function(d){return a.w(d,null,{q:b})}),k=a.a.pa(f,function(d){var e=d.B();return d.$()?a.w({read:function(){return a.a.c(d())},
write:a.Da(e)&&function(a){d()(a)},q:b}):e});k.hasOwnProperty("$raw")||(k.$raw=f);return k}return{$raw:{}}}a.g.getComponentNameForNode=function(b){b=a.a.v(b);return a.g.Xa(b)&&b};a.g.sb=function(c,d,f,k){if(1===d.nodeType){var h=a.g.getComponentNameForNode(d);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var l={name:h,params:b(d,f)};c.component=k?function(){return l}:l}}return c};var d=new a.L;9>a.a.M&&(a.g.register=function(a){return function(b){w.createElement(b);
return a.apply(this,arguments)}}(a.g.register),w.createDocumentFragment=function(b){return function(){var d=b(),f=a.g.$b,k;for(k in f)f.hasOwnProperty(k)&&d.createElement(k);return d}}(w.createDocumentFragment))})();(function(b){function d(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.la(c);a.e.T(d,b)}function c(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,k,h,l,g){function m(){var a=x&&
x.dispose;"function"===typeof a&&a.call(x);q=null}var x,q,n=a.a.O(a.e.childNodes(f));a.a.C.fa(f,m);a.w(function(){var l=a.a.c(k()),h,t;"string"===typeof l?h=l:(h=a.a.c(l.name),t=a.a.c(l.params));if(!h)throw Error("No component name specified");var p=q=++e;a.g.get(h,function(e){if(q===p){m();if(!e)throw Error("Unknown component '"+h+"'");d(h,e,f);var l=c(e,f,n,t);e=g.createChildContext(l,b,function(a){a.$component=l;a.$componentTemplateNodes=n});x=l;a.Ja(e,f)}})},null,{q:f});return{controlsDescendantBindings:!0}}};
a.e.R.component=!0})();var P={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,d){var c=a.a.c(d())||{};a.a.A(c,function(c,d){d=a.a.c(d);var k=!1===d||null===d||d===p;k&&b.removeAttribute(c);8>=a.a.M&&c in P?(c=P[c],k?b.removeAttribute(c):b[c]=d):k||b.setAttribute(c,d.toString());"name"===c&&a.a.Rb(b,k?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,d,c){function e(){var e=b.checked,f=x?k():e;if(!a.Z.Ca()&&(!l||e)){var h=a.k.u(d);g?m!==f?(e&&(a.a.ga(h,
f,!0),a.a.ga(h,m,!1)),m=f):a.a.ga(h,f,e):a.h.ra(h,c,"checked",f,!0)}}function f(){var c=a.a.c(d());b.checked=g?0<=a.a.m(c,k()):h?c:k()===c}var k=a.Nb(function(){return c.has("checkedValue")?a.a.c(c.get("checkedValue")):c.has("value")?a.a.c(c.get("value")):b.value}),h="checkbox"==b.type,l="radio"==b.type;if(h||l){var g=h&&a.a.c(d())instanceof Array,m=g?k():p,x=l||g;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.w(e,null,{q:b});a.a.n(b,"click",e);a.w(f,null,{q:b})}}};a.h.V.checked=!0;a.d.checkedValue=
{update:function(b,d){b.value=a.a.c(d())}}})();a.d.css={update:function(b,d){var c=a.a.c(d());null!==c&&"object"==typeof c?a.a.A(c,function(c,d){d=a.a.c(d);a.a.Ia(b,c,d)}):(c=String(c||""),a.a.Ia(b,b.__ko__cssValue,!1),b.__ko__cssValue=c,a.a.Ia(b,c,!0))}};a.d.enable={update:function(b,d){var c=a.a.c(d());c&&b.disabled?b.removeAttribute("disabled"):c||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,d){a.d.enable.update(b,function(){return!a.a.c(d())})}};a.d.event={init:function(b,d,c,
e,f){var k=d()||{};a.a.A(k,function(h){"string"==typeof h&&a.a.n(b,h,function(b){var g,m=d()[h];if(m){try{var k=a.a.O(arguments);e=f.$data;k.unshift(e);g=m.apply(e,k)}finally{!0!==g&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===c.get(h+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Ib:function(b){return function(){var d=b(),c=a.a.cb(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:a.P.Va};a.a.c(d);return{foreach:c.data,as:c.as,
includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:a.P.Va}}},init:function(b,d){return a.d.template.init(b,a.d.foreach.Ib(d))},update:function(b,d,c,e,f){return a.d.template.update(b,a.d.foreach.Ib(d),c,e,f)}};a.h.ka.foreach=!1;a.e.R.foreach=!0;a.d.hasfocus={init:function(b,d,c){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(m){g=
f.body}e=g===b}f=d();a.h.ra(f,c,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),k=e.bind(null,!1);a.a.n(b,"focus",f);a.a.n(b,"focusin",f);a.a.n(b,"blur",k);a.a.n(b,"focusout",k)},update:function(b,d){var c=!!a.a.c(d());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===c||(c?b.focus():b.blur(),a.k.u(a.a.qa,null,[b,c?"focusin":"focusout"]))}};a.h.V.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.V.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,d){a.a.gb(b,d())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,d){return a.createChildContext(d)});var L={};a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,d,c){function e(){return a.a.xa(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function k(d,e){if(r&&
m)a.i.Y(b,a.a.c(c.get("value")),!0);else if(n.length){var g=0<=a.a.m(n,a.i.s(e[0]));a.a.Sb(e[0],g);r&&!g&&a.k.u(a.a.qa,null,[b,"change"])}}var h=b.multiple,l=0!=b.length&&h?b.scrollTop:null,g=a.a.c(d()),m=c.get("valueAllowUnset")&&c.has("value"),x=c.get("optionsIncludeDestroyed");d={};var q,n=[];m||(h?n=a.a.Ka(e(),a.i.s):0<=b.selectedIndex&&n.push(a.i.s(b.options[b.selectedIndex])));g&&("undefined"==typeof g.length&&(g=[g]),q=a.a.xa(g,function(b){return x||b===p||null===b||!a.a.c(b._destroy)}),c.has("optionsCaption")&&
(g=a.a.c(c.get("optionsCaption")),null!==g&&g!==p&&q.unshift(L)));var r=!1;d.beforeRemove=function(a){b.removeChild(a)};g=k;c.has("optionsAfterRender")&&"function"==typeof c.get("optionsAfterRender")&&(g=function(b,d){k(0,d);a.k.u(c.get("optionsAfterRender"),null,[d[0],b!==L?b:p])});a.a.fb(b,q,function(d,e,g){g.length&&(n=!m&&g[0].selected?[a.i.s(g[0])]:[],r=!0);e=b.ownerDocument.createElement("option");d===L?(a.a.Ha(e,c.get("optionsCaption")),a.i.Y(e,p)):(g=f(d,c.get("optionsValue"),d),a.i.Y(e,a.a.c(g)),
d=f(d,c.get("optionsText"),g),a.a.Ha(e,d));return[e]},d,g);a.k.u(function(){m?a.i.Y(b,a.a.c(c.get("value")),!0):(h?n.length&&e().length<n.length:n.length&&0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex])!==n[0]:n.length||0<=b.selectedIndex)&&a.a.qa(b,"change")});a.a.kc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.ab=a.a.f.I();a.d.selectedOptions={after:["options","foreach"],init:function(b,d,c){a.a.n(b,"change",function(){var e=d(),f=[];a.a.o(b.getElementsByTagName("option"),
function(b){b.selected&&f.push(a.i.s(b))});a.h.ra(e,c,"selectedOptions",f)})},update:function(b,d){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var c=a.a.c(d());c&&"number"==typeof c.length&&a.a.o(b.getElementsByTagName("option"),function(b){var d=0<=a.a.m(c,a.i.s(b));a.a.Sb(b,d)})}};a.h.V.selectedOptions=!0;a.d.style={update:function(b,d){var c=a.a.c(d()||{});a.a.A(c,function(c,d){d=a.a.c(d);if(null===d||d===p||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,
d,c,e,f){if("function"!=typeof d())throw Error("The value for a submit binding must be a function");a.a.n(b,"submit",function(a){var c,e=d();try{c=e.call(f.$data,b)}finally{!0!==c&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,d){a.a.Ha(b,d())}};a.e.R.text=!0;(function(){if(y&&y.navigator)var b=function(a){if(a)return parseFloat(a[1])},d=y.opera&&y.opera.version&&parseInt(y.opera.version()),c=y.navigator.userAgent,
e=b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(c.match(/Firefox\/([^ ]*)/));if(10>a.a.M)var k=a.a.f.I(),h=a.a.f.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.f.get(c,h))&&c(b)},g=function(b,c){var d=b.ownerDocument;a.a.f.get(d,k)||(a.a.f.set(d,k,!0),a.a.n(d,"selectionchange",l));a.a.f.set(b,h,c)};a.d.textInput={init:function(b,c,l){function h(c,d){a.a.n(b,c,d)}function k(){var d=a.a.c(c());if(null===d||d===p)d="";w!==p&&d===w?setTimeout(k,4):b.value!==d&&(u=d,b.value=d)}function v(){A||
(w=b.value,A=setTimeout(t,4))}function t(){clearTimeout(A);w=A=p;var d=b.value;u!==d&&(u=d,a.h.ra(c(),l,"textInput",d))}var u=b.value,A,w;10>a.a.M?(h("propertychange",function(a){"value"===a.propertyName&&t()}),8==a.a.M&&(h("keyup",t),h("keydown",t)),8<=a.a.M&&(g(b,t),h("dragend",v))):(h("input",t),5>e&&"textarea"===a.a.v(b)?(h("keydown",v),h("paste",v),h("cut",v)):11>d?h("keydown",v):4>f&&(h("DOMAutoComplete",t),h("dragdrop",t),h("drop",t)));h("change",t);a.w(k,null,{q:b})}};a.h.V.textInput=!0;a.d.textinput=
{preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,d){if(d()){var c="ko_unique_"+ ++a.d.uniqueName.fc;a.a.Rb(b,c)}}};a.d.uniqueName.fc=0;a.d.value={after:["options","foreach"],init:function(b,d,c){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=c.get("valueUpdate"),k=!1,h=null;f&&("string"==typeof f&&(f=[f]),a.a.ia(e,f),e=a.a.wb(e));var l=function(){h=null;k=!1;var e=d(),g=a.i.s(b);a.h.ra(e,c,"value",g)};!a.a.M||"input"!=
b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.m(e,"propertychange")||(a.a.n(b,"propertychange",function(){k=!0}),a.a.n(b,"focus",function(){k=!1}),a.a.n(b,"blur",function(){k&&l()}));a.a.o(e,function(c){var d=l;a.a.Dc(c,"after")&&(d=function(){h=a.i.s(b);setTimeout(l,0)},c=c.substring(5));a.a.n(b,c,d)});var g=function(){var e=a.a.c(d()),f=a.i.s(b);if(null!==h&&e===h)setTimeout(g,0);else if(e!==f)if("select"===a.a.v(b)){var l=c.get("valueAllowUnset"),
f=function(){a.i.Y(b,e,l)};f();l||e===a.i.s(b)?setTimeout(f,0):a.k.u(a.a.qa,null,[b,"change"])}else a.i.Y(b,e)};a.w(g,null,{q:b})}else a.va(b,{checkedValue:d})},update:function(){}};a.h.V.value=!0;a.d.visible={update:function(b,d){var c=a.a.c(d()),e="none"!=b.style.display;c&&!e?b.style.display="":!c&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(d,c,e,f,k){return a.d.event.init.call(this,d,function(){var a={};a[b]=c();return a},e,f,k)}}})("click");a.J=function(){};a.J.prototype.renderTemplateSource=
function(){throw Error("Override renderTemplateSource");};a.J.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.J.prototype.makeTemplateSource=function(b,d){if("string"==typeof b){d=d||w;var c=d.getElementById(b);if(!c)throw Error("Cannot find template with ID "+b);return new a.t.l(c)}if(1==b.nodeType||8==b.nodeType)return new a.t.ha(b);throw Error("Unknown template type: "+b);};a.J.prototype.renderTemplate=function(a,d,c,e){a=this.makeTemplateSource(a,
e);return this.renderTemplateSource(a,d,c,e)};a.J.prototype.isTemplateRewritten=function(a,d){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,d).data("isRewritten")};a.J.prototype.rewriteTemplate=function(a,d,c){a=this.makeTemplateSource(a,c);d=d(a.text());a.text(d);a.data("isRewritten",!0)};a.b("templateEngine",a.J);a.kb=function(){function b(b,c,d,h){b=a.h.bb(b);for(var l=a.h.ka,g=0;g<b.length;g++){var m=b[g].key;if(l.hasOwnProperty(m)){var x=l[m];if("function"===typeof x){if(m=
x(b[g].value))throw Error(m);}else if(!x)throw Error("This template engine does not support the '"+m+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Ea(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var d=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,c=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{lc:function(b,
c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kb.xc(b,c)},d)},xc:function(a,f){return a.replace(d,function(a,c,d,e,m){return b(m,c,d,f)}).replace(c,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},dc:function(b,c){return a.H.$a(function(d,h){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.va(l,b,h)})}}}();a.b("__tr_ambtns",a.kb.dc);(function(){a.t={};a.t.l=function(a){this.l=a};a.t.l.prototype.text=function(){var b=a.a.v(this.l),b="script"===b?"text":
"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.l[b];var d=arguments[0];"innerHTML"===b?a.a.gb(this.l,d):this.l[b]=d};var b=a.a.f.I()+"_";a.t.l.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.l,b+c);a.a.f.set(this.l,b+c,arguments[1])};var d=a.a.f.I();a.t.ha=function(a){this.l=a};a.t.ha.prototype=new a.t.l;a.t.ha.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.l,d)||{};b.lb===p&&b.Na&&(b.lb=b.Na.innerHTML);return b.lb}a.a.f.set(this.l,
d,{lb:arguments[0]})};a.t.l.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.l,d)||{}).Na;a.a.f.set(this.l,d,{Na:arguments[0]})};a.b("templateSources",a.t);a.b("templateSources.domElement",a.t.l);a.b("templateSources.anonymousTemplate",a.t.ha)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function d(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,k=a.L.instance,r=k.preprocessNode;if(r){b(e,f,function(a,
b){var c=a.previousSibling,d=r.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.na(c,h))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.ub(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.H.Xb(b,[d])});a.a.na(c,h)}}function c(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,q){q=q||{};var n=(b&&c(b)||f||{}).ownerDocument,r=q.templateEngine||k;a.kb.lc(f,r,n);f=r.renderTemplate(f,h,q,n);if("number"!=
typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.e.T(b,f);n=!0;break;case "replaceNode":a.a.Qb(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(d(f,h),q.afterRender&&a.k.u(q.afterRender,null,[f,h.$data]));return f}function f(b,c,d){return a.F(b)?b():"function"===typeof b?b(c,d):b}var k;a.hb=function(b){if(b!=p&&!(b instanceof a.J))throw Error("templateEngine must inherit from ko.templateEngine");
k=b};a.eb=function(b,d,h,x,q){h=h||{};if((h.templateEngine||k)==p)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(x){var n=c(x);return a.j(function(){var k=d&&d instanceof a.N?d:new a.N(a.a.c(d)),p=f(b,k.$data,k),k=e(x,q,p,k,h);"replaceNode"==q&&(x=k,n=c(x))},null,{Pa:function(){return!n||!a.a.Qa(n)},q:n&&"replaceNode"==q?n.parentNode:n})}return a.H.$a(function(c){a.eb(b,d,h,c,"replaceNode")})};a.Cc=function(b,c,h,k,q){function n(a,b){d(b,v);h.afterRender&&
h.afterRender(b,a);v=null}function r(a,c){v=q.createChildContext(a,h.as,function(a){a.$index=c});var d=f(b,a,v);return e(null,"ignoreTargetNode",d,v,h)}var v;return a.j(function(){var b=a.a.c(c)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.xa(b,function(b){return h.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)});a.k.u(a.a.fb,null,[k,b,r,h,n])},null,{q:k})};var h=a.a.f.I();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.e.ma(b);else{if("nodes"in d){if(d=
d.nodes||[],a.F(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.e.childNodes(b);d=a.a.Jb(d);(new a.t.ha(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var k=c(),r;c=a.a.c(k);d=!0;e=null;"string"==typeof c?c={}:(k=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),r=a.a.c(c.data));"foreach"in c?e=a.Cc(k||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.createChildContext(r,c.as):f,e=a.eb(k||b,f,c,b)):a.e.ma(b);f=
e;(r=a.a.f.get(b,h))&&"function"==typeof r.p&&r.p();a.a.f.set(b,h,f&&f.$()?f:p)}};a.h.ka.template=function(b){b=a.h.bb(b);return 1==b.length&&b[0].unknown||a.h.vc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.e.R.template=!0})();a.b("setTemplateEngine",a.hb);a.b("renderTemplate",a.eb);a.a.Cb=function(a,d,c){if(a.length&&d.length){var e,f,k,h,l;for(e=f=0;(!c||e<c)&&(h=a[f]);++f){for(k=0;l=d[k];++k)if(h.value===l.value){h.moved=l.index;l.moved=
h.index;d.splice(k,1);e=k=0;break}e+=k}}};a.a.Ma=function(){function b(b,c,e,f,k){var h=Math.min,l=Math.max,g=[],m,p=b.length,q,n=c.length,r=n-p||1,v=p+n+1,t,u,w;for(m=0;m<=p;m++)for(u=t,g.push(t=[]),w=h(n,m+r),q=l(0,m-1);q<=w;q++)t[q]=q?m?b[m-1]===c[q-1]?u[q-1]:h(u[q]||v,t[q-1]||v)+1:q+1:m+1;h=[];l=[];r=[];m=p;for(q=n;m||q;)n=g[m][q]-1,q&&n===g[m][q-1]?l.push(h[h.length]={status:e,value:c[--q],index:q}):m&&n===g[m-1][q]?r.push(h[h.length]={status:f,value:b[--m],index:m}):(--q,--m,k.sparse||h.push({status:"retained",
value:c[q]}));a.a.Cb(l,r,10*p);return h.reverse()}return function(a,c,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];c=c||[];return a.length<=c.length?b(a,c,"added","deleted",e):b(c,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Ma);(function(){function b(b,d,f,k,h){var l=[],g=a.j(function(){var g=d(f,h,a.a.na(l,b))||[];0<l.length&&(a.a.Qb(l,g),k&&a.k.u(k,null,[f,g,h]));l.length=0;a.a.ia(l,g)},null,{q:b,Pa:function(){return!a.a.tb(l)}});return{aa:l,j:g.$()?g:p}}var d=a.a.f.I();
a.a.fb=function(c,e,f,k,h){function l(b,d){s=u[d];t!==d&&(z[b]=s);s.Ua(t++);a.a.na(s.aa,c);r.push(s);y.push(s)}function g(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.o(c[d].aa,function(a){b(a,d,c[d].wa)})}e=e||[];k=k||{};var m=a.a.f.get(c,d)===p,u=a.a.f.get(c,d)||[],q=a.a.Ka(u,function(a){return a.wa}),n=a.a.Ma(q,e,k.dontLimitMoves),r=[],v=0,t=0,w=[],y=[];e=[];for(var z=[],q=[],s,C=0,D,E;D=n[C];C++)switch(E=D.moved,D.status){case "deleted":E===p&&(s=u[v],s.j&&s.j.p(),w.push.apply(w,a.a.na(s.aa,
c)),k.beforeRemove&&(e[C]=s,y.push(s)));v++;break;case "retained":l(C,v++);break;case "added":E!==p?l(C,E):(s={wa:D.value,Ua:a.r(t++)},r.push(s),y.push(s),m||(q[C]=s))}g(k.beforeMove,z);a.a.o(w,k.beforeRemove?a.S:a.removeNode);for(var C=0,m=a.e.firstChild(c),H;s=y[C];C++){s.aa||a.a.extend(s,b(c,f,s.wa,h,s.Ua));for(v=0;n=s.aa[v];m=n.nextSibling,H=n,v++)n!==m&&a.e.Fb(c,n,H);!s.rc&&h&&(h(s.wa,s.aa,s.Ua),s.rc=!0)}g(k.beforeRemove,e);g(k.afterMove,z);g(k.afterAdd,q);a.a.f.set(c,d,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",
a.a.fb);a.P=function(){this.allowTemplateRewriting=!1};a.P.prototype=new a.J;a.P.prototype.renderTemplateSource=function(b,d,c,e){if(d=(9>a.a.M?0:b.nodes)?b.nodes():null)return a.a.O(d.cloneNode(!0).childNodes);b=b.text();return a.a.ca(b,e)};a.P.Va=new a.P;a.hb(a.P.Va);a.b("nativeTemplateEngine",a.P);(function(){a.Ya=function(){var a=this.uc=function(){if(!u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,
e,f,k){k=k||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},f.templateOptions);e=u.tmpl(h,b,e);e.appendTo(k.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ya.prototype=new a.J;var b=new a.Ya;0<b.uc&&a.hb(b);a.b("jqueryTmplTemplateEngine",a.Ya)})()})})();})();

!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return f({type:O.error,iconClass:g().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=g()),v=e("#"+t.containerId),v.length?v:(n&&(v=c(t)),v)}function i(e,t,n){return f({type:O.info,iconClass:g().iconClasses.info,message:e,optionsOverride:n,title:t})}function o(e){w=e}function s(e,t,n){return f({type:O.success,iconClass:g().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return f({type:O.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e){var t=g();v||n(t),l(e,t)||u(t)}function d(t){var i=g();return v||n(i),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function u(t){for(var n=v.children(),i=n.length-1;i>=0;i--)l(e(n[i]),t)}function l(t,n){return t&&0===e(":focus",t).length?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0):!1}function c(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass).attr("aria-live","polite").attr("role","alert"),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function m(e){w&&w(e)}function f(t){function i(t){return!e(":focus",l).length||t?(clearTimeout(O.intervalId),l[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){h(l),r.onHidden&&"hidden"!==b.state&&r.onHidden(),b.state="hidden",b.endTime=new Date,m(b)}})):void 0}function o(){(r.timeOut>0||r.extendedTimeOut>0)&&(u=setTimeout(i,r.extendedTimeOut),O.maxHideTime=parseFloat(r.extendedTimeOut),O.hideEta=(new Date).getTime()+O.maxHideTime)}function s(){clearTimeout(u),O.hideEta=0,l.stop(!0,!0)[r.showMethod]({duration:r.showDuration,easing:r.showEasing})}function a(){var e=(O.hideEta-(new Date).getTime())/O.maxHideTime*100;f.width(e+"%")}var r=g(),d=t.iconClass||r.iconClass;if("undefined"!=typeof t.optionsOverride&&(r=e.extend(r,t.optionsOverride),d=t.optionsOverride.iconClass||d),r.preventDuplicates){if(t.message===C)return;C=t.message}T++,v=n(r,!0);var u=null,l=e("<div/>"),c=e("<div/>"),p=e("<div/>"),f=e("<div/>"),w=e(r.closeHtml),O={intervalId:null,hideEta:null,maxHideTime:null},b={toastId:T,state:"visible",startTime:new Date,options:r,map:t};return t.iconClass&&l.addClass(r.toastClass).addClass(d),t.title&&(c.append(t.title).addClass(r.titleClass),l.append(c)),t.message&&(p.append(t.message).addClass(r.messageClass),l.append(p)),r.closeButton&&(w.addClass("toast-close-button").attr("role","button"),l.prepend(w)),r.progressBar&&(f.addClass("toast-progress"),l.prepend(f)),l.hide(),r.newestOnTop?v.prepend(l):v.append(l),l[r.showMethod]({duration:r.showDuration,easing:r.showEasing,complete:r.onShown}),r.timeOut>0&&(u=setTimeout(i,r.timeOut),O.maxHideTime=parseFloat(r.timeOut),O.hideEta=(new Date).getTime()+O.maxHideTime,r.progressBar&&(O.intervalId=setInterval(a,10))),l.hover(s,o),!r.onclick&&r.tapToDismiss&&l.click(i),r.closeButton&&w&&w.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),i(!0)}),r.onclick&&l.click(function(){r.onclick(),i()}),m(b),r.debug&&console&&console.log(b),l}function g(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),C=void 0))}var v,w,C,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:d,error:t,getContainer:n,info:i,options:{},subscribe:o,success:s,version:"2.1.0",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map

/**!
 * lightgallery.js | 0.0.3 | August 9th 2016
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N;
 * @license Apache 2.0
 */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Lightgallery = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.lgUtils = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    /*
     *@todo remove function from window and document. Update on and off functions
     */
    window.getAttribute = function (label) {
        return window[label];
    };

    window.setAttribute = function (label, value) {
        window[label] = value;
    };

    document.getAttribute = function (label) {
        return document[label];
    };

    document.setAttribute = function (label, value) {
        document[label] = value;
    };

    var utils = {
        wrap: function wrap(el, className) {
            if (!el) {
                return;
            }

            var wrapper = document.createElement('div');
            wrapper.className = className;
            el.parentNode.insertBefore(wrapper, el);
            el.parentNode.removeChild(el);
            wrapper.appendChild(el);
        },

        addClass: function addClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += ' ' + className;
            }
        },

        removeClass: function removeClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.remove(className);
            } else {
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },

        hasClass: function hasClass(el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }

            return false;
        },

        // ex Transform
        // ex TransitionTimingFunction
        setVendor: function setVendor(el, property, value) {
            if (!el) {
                return;
            }

            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        },

        trigger: function trigger(el, event) {
            var detail = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            if (!el) {
                return;
            }

            var customEvent = new CustomEvent(event, {
                detail: detail
            });
            el.dispatchEvent(customEvent);
        },

        Listener: {
            uid: 0
        },
        on: function on(el, events, fn) {
            if (!el) {
                return;
            }

            events.split(' ').forEach(function (event) {
                var _id = el.getAttribute('lg-event-uid') || '';
                utils.Listener.uid++;
                _id += '&' + utils.Listener.uid;
                el.setAttribute('lg-event-uid', _id);
                utils.Listener[event + utils.Listener.uid] = fn;
                el.addEventListener(event.split('.')[0], fn, false);
            });
        },

        off: function off(el, event) {
            if (!el) {
                return;
            }

            var _id = el.getAttribute('lg-event-uid');
            if (_id) {
                _id = _id.split('&');
                for (var i = 0; i < _id.length; i++) {
                    if (_id[i]) {
                        var _event = event + _id[i];
                        if (_event.substring(0, 1) === '.') {
                            for (var key in utils.Listener) {
                                if (utils.Listener.hasOwnProperty(key)) {
                                    if (key.split('.').indexOf(_event.split('.')[1]) > -1) {
                                        el.removeEventListener(key.split('.')[0], utils.Listener[key]);
                                        el.setAttribute('lg-event-uid', el.getAttribute('lg-event-uid').replace('&' + _id[i], ''));
                                        delete utils.Listener[key];
                                    }
                                }
                            }
                        } else {
                            el.removeEventListener(_event.split('.')[0], utils.Listener[_event]);
                            el.setAttribute('lg-event-uid', el.getAttribute('lg-event-uid').replace('&' + _id[i], ''));
                            delete utils.Listener[_event];
                        }
                    }
                }
            }
        },

        param: function param(obj) {
            return Object.keys(obj).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
            }).join('&');
        }
    };

    exports.default = utils;
});

},{}],2:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['./lg-utils'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('./lg-utils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.lgUtils);
        global.lightgallery = mod.exports;
    }
})(this, function (_lgUtils) {
    'use strict';

    var _lgUtils2 = _interopRequireDefault(_lgUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    /** Polyfill the CustomEvent() constructor functionality in Internet Explorer 9 and higher */
    (function () {

        if (typeof window.CustomEvent === 'function') {
            return false;
        }

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    })();

    window.utils = _lgUtils2.default;
    window.lgData = {
        uid: 0
    };

    window.lgModules = {};
    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,
        hideBarsDelay: 6000,

        useLeft: false,

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: false,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // lightGallery settings
        this.s = _extends({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = 'ontouchstart' in document.documentElement;

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        this.items = [];

        // Gallery items
        if (this.s.dynamic) {
            this.items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.items.push(this.el);
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector);
                } else {
                    this.items = this.el.querySelectorAll(this.s.selector);
                }
            } else {
                this.items = this.el.children;
            }
        }

        // .lg-item

        this.___slide = '';

        // .lg-outer
        this.outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function () {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.items.length) {
            _this.s.preload = _this.items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            _lgUtils2.default.addClass(document.body, 'lg-from-hash');
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        }

        if (_this.s.dynamic) {

            _lgUtils2.default.trigger(this.el, 'onBeforeOpen');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        } else {

            for (var i = 0; i < _this.items.length; i++) {

                /*jshint loopfunc: true */
                (function (index) {

                    // Using different namespace for click because click event should not unbind if selector is same object('this')
                    _lgUtils2.default.on(_this.items[index], 'click.lgcustom', function (e) {

                        e.preventDefault();

                        _lgUtils2.default.trigger(_this.el, 'onBeforeOpen');

                        _this.index = _this.s.index || index;

                        if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                            _this.build(_this.index);
                            _lgUtils2.default.addClass(document.body, 'lg-on');
                        }
                    });
                })(i);
            }
        }
    };

    Plugin.prototype.build = function (index) {

        var _this = this;

        _this.structure();

        for (var key in window.lgModules) {
            _this.modules[key] = new window.lgModules[key](_this.el);
        }

        // initiate slide function
        _this.slide(index, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.items.length > 1) {

            _this.arrow();

            setTimeout(function () {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        }

        _this.counter();

        _this.closeGallery();

        _lgUtils2.default.trigger(_this.el, 'onAfterOpen');

        // Hide controllers if mouse doesn't move for some period
        _lgUtils2.default.on(_this.outer, 'mousemove.lg click.lg touchstart.lg', function () {

            _lgUtils2.default.removeClass(_this.outer, 'lg-hide-items');

            clearTimeout(_this.hideBartimeout);

            // Timeout will be cleared on each slide movement also
            _this.hideBartimeout = setTimeout(function () {
                _lgUtils2.default.addClass(_this.outer, 'lg-hide-items');
            }, _this.s.hideBarsDelay);
        });
    };

    Plugin.prototype.structure = function () {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        document.body.insertAdjacentHTML('beforeend', '<div class="lg-backdrop"></div>');
        _lgUtils2.default.setVendor(document.querySelector('.lg-backdrop'), 'TransitionDuration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.items.length > 1) {
            controls = '<div class="lg-actions">' + '<div class="lg-prev lg-icon">' + this.s.prevHtml + '</div>' + '<div class="lg-next lg-icon">' + this.s.nextHtml + '</div>' + '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div class="lg-sub-html"></div>';
        }

        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' + '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' + '<div class="lg-inner">' + list + '</div>' + '<div class="lg-toolbar group">' + '<span class="lg-close lg-icon"></span>' + '</div>' + controls + subHtmlCont + '</div>' + '</div>';

        document.body.insertAdjacentHTML('beforeend', template);
        this.outer = document.querySelector('.lg-outer');
        this.___slide = this.outer.querySelectorAll('.lg-item');

        if (this.s.useLeft) {
            _lgUtils2.default.addClass(this.outer, 'lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        _lgUtils2.default.on(window, 'resize.lg orientationchange.lg', function () {
            setTimeout(function () {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        _lgUtils2.default.addClass(this.___slide[this.index], 'lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            _lgUtils2.default.addClass(this.outer, 'lg-css3');
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        _lgUtils2.default.addClass(this.outer, this.s.mode);

        if (this.s.enableDrag && this.items.length > 1) {
            _lgUtils2.default.addClass(this.outer, 'lg-grab');
        }

        if (this.s.showAfterLoad) {
            _lgUtils2.default.addClass(this.outer, 'lg-show-after-load');
        }

        if (this.doCss()) {
            var inner = this.outer.querySelector('.lg-inner');
            _lgUtils2.default.setVendor(inner, 'TransitionTimingFunction', this.s.cssEasing);
            _lgUtils2.default.setVendor(inner, 'TransitionDuration', this.s.speed + 'ms');
        }

        _lgUtils2.default.addClass(document.querySelector('.lg-backdrop'), 'in');

        setTimeout(function () {
            _lgUtils2.default.addClass(_this.outer, 'lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    };

    // For fixed height gallery
    Plugin.prototype.setTop = function () {
        if (this.s.height !== '100%') {
            var wH = window.innerHeight;
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var lGallery = this.outer.querySelector('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                lGallery.style.top = top + 'px';
            } else {
                lGallery.style.top = '0px';
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function () {
        // check for css animation support
        var support = function support() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function (src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.items[index].getAttribute('data-html');
        }

        if (!src && html) {
            return {
                html5: true
            };
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function () {
        if (this.s.counter) {
            this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML('beforeend', '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function (index) {
        var subHtml = null;
        var currentEle;
        if (this.s.dynamic) {
            subHtml = this.s.dynamicEl[index].subHtml;
        } else {
            currentEle = this.items[index];
            subHtml = currentEle.getAttribute('data-sub-html');
            if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                subHtml = currentEle.getAttribute('title');
                if (subHtml && currentEle.querySelector('img')) {
                    subHtml = currentEle.querySelector('img').getAttribute('alt');
                }
            }
        }

        if (typeof subHtml !== 'undefined' && subHtml !== null) {

            // get first letter of subhtml
            // if first letter starts with . or # get the html form the jQuery object
            var fL = subHtml.substring(0, 1);
            if (fL === '.' || fL === '#') {
                if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                    subHtml = currentEle.querySelector(subHtml).innerHTML;
                } else {
                    subHtml = document.querySelector(subHtml).innerHTML;
                }
            }
        } else {
            subHtml = '';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = subHtml;
        } else {
            this.___slide[index].insertAdjacentHTML('beforeend', subHtml);
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                _lgUtils2.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            } else {
                _lgUtils2.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            }
        }

        _lgUtils2.default.trigger(this.el, 'onAfterAppendSubHtml', {
            index: index
        });
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function (index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function (index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var getResponsiveSrc = function getResponsiveSrc(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = window.innerWidth;
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;
        } else {

            if (_this.items[index].getAttribute('data-poster')) {
                _hasPoster = true;
                _poster = _this.items[index].getAttribute('data-poster');
            }

            _html = _this.items[index].getAttribute('data-html');
            _src = _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src');

            if (_this.items[index].getAttribute('data-responsive')) {
                var srcItms = _this.items[index].getAttribute('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.items[index].getAttribute('data-srcset');
            _sizes = _this.items[index].getAttribute('data-sizes');
        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.items[index].getAttribute('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-loaded')) {
            if (iframe) {
                _this.___slide[index].insertAdjacentHTML('afterbegin', '<div class="lg-video-cont" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
            } else if (_isVideo) {
                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _lgUtils2.default.trigger(_this.el, 'hasVideo', {
                    index: index,
                    src: _src,
                    html: _html
                });
            } else {
                // InnoSoft add custom html type
                var _custom_html = _this.items[index].getAttribute('data-cus-html');
                if(_custom_html){
                    _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');
                    _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-img-wrap"><div class="lg-video-cont"><div class="lg-video"><div class="lg-object">'+$(_custom_html).html()+'</div></div></div></div>');
                }else{
                    // default image type of lightGallery js
                    _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
                }
            }

            _lgUtils2.default.trigger(_this.el, 'onAferAppendSlide', {
                index: index
            });

            _img = _this.___slide[index].querySelector('.lg-object');
            if (_sizes) {
                _img.setAttribute('sizes', _sizes);
            }

            if (_srcset) {
                _img.setAttribute('srcset', _srcset);
                try {
                    picturefill({
                        elements: [_img[0]]
                    });
                } catch (e) {
                    console.error('Make sure you have included Picturefill version 2');
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _lgUtils2.default.addClass(_this.___slide[index], 'lg-loaded');
        }

        _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !_lgUtils2.default.hasClass(document.body, 'lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function () {
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');

                _lgUtils2.default.trigger(_this.el, 'onSlideItemLoad', {
                    index: index,
                    delay: delay || 0
                });
            }, _speed);
        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');
        }

        if (rec === true) {
            if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-complete')) {
                _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    */
    Plugin.prototype.slide = function (index, fromTouch, fromThumb) {

        var _prevIndex = 0;
        for (var i = 0; i < this.___slide.length; i++) {
            if (_lgUtils2.default.hasClass(this.___slide[i], 'lg-current')) {
                _prevIndex = i;
                break;
            }
        }

        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && _prevIndex === index) {
            return;
        }

        var _length = this.___slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;
        var _next = false;
        var _prev = false;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.items[index].getAttribute('data-download-url') !== 'false' && (_this.items[index].getAttribute('data-download-url') || _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src'));
                }

                if (_src) {
                    document.getElementById('lg-download').setAttribute('href', _src);
                    _lgUtils2.default.removeClass(_this.outer, 'lg-hide-download');
                } else {
                    _lgUtils2.default.addClass(_this.outer, 'lg-hide-download');
                }
            }

            _lgUtils2.default.trigger(_this.el, 'onBeforeSlide', {
                prevIndex: _prevIndex,
                index: index,
                fromTouch: fromTouch,
                fromThumb: fromThumb
            });

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function () {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!fromTouch) {

                // remove all transitions
                _lgUtils2.default.addClass(_this.outer, 'lg-no-trans');

                for (var j = 0; j < this.___slide.length; j++) {
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-prev-slide');
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-next-slide');
                }

                if (index < _prevIndex) {
                    _prev = true;
                    if (index === 0 && _prevIndex === _length - 1 && !fromThumb) {
                        _prev = false;
                        _next = true;
                    }
                } else if (index > _prevIndex) {
                    _next = true;
                    if (index === _length - 1 && _prevIndex === 0 && !fromThumb) {
                        _prev = true;
                        _next = false;
                    }
                }

                if (_prev) {

                    //prevslide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-prev-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-next-slide');
                } else if (_next) {

                    // next slide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-next-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function () {
                    _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');

                    // reset all transitions
                    _lgUtils2.default.removeClass(_this.outer, 'lg-no-trans');
                }, 50);
            } else {

                var touchPrev = index - 1;
                var touchNext = index + 1;

                if (index === 0 && _prevIndex === _length - 1) {

                    // next slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                } else if (index === _length - 1 && _prevIndex === 0) {

                    // prev slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                }

                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-prev-slide'), 'lg-prev-slide');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-next-slide'), 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[touchPrev], 'lg-prev-slide');
                _lgUtils2.default.addClass(_this.___slide[touchNext], 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function () {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function () {
                    _this.lgBusy = false;
                    _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                        prevIndex: _prevIndex,
                        index: index,
                        fromTouch: fromTouch,
                        fromThumb: fromThumb
                    });
                }, this.s.speed);
            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                    prevIndex: _prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb
                });
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                if (document.getElementById('lg-counter-current')) {
                    document.getElementById('lg-counter-current').innerHTML = index + 1;
                }
            }
        }
    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index + 1 < _this.___slide.length) {
                _this.index++;
                _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                    index: _this.index
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = 0;
                    _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                        index: _this.index
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-right-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                    index: _this.index,
                    fromTouch: fromTouch
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = _this.items.length - 1;
                    _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                        index: _this.index,
                        fromTouch: fromTouch
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-left-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function () {
        var _this = this;
        if (this.items.length > 1) {
            _lgUtils2.default.on(window, 'keyup.lg', function (e) {
                if (_this.items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        _lgUtils2.default.on(window, 'keydown.lg', function (e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _lgUtils2.default.removeClass(_this.outer, 'lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function () {
        var _this = this;
        _lgUtils2.default.on(this.outer.querySelector('.lg-prev'), 'click.lg', function () {
            _this.goToPrevSlide();
        });

        _lgUtils2.default.on(this.outer.querySelector('.lg-next'), 'click.lg', function () {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function (index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            var next = this.outer.querySelector('.lg-next');
            var prev = this.outer.querySelector('.lg-prev');
            if (index + 1 < this.___slide.length) {
                next.removeAttribute('disabled');
                _lgUtils2.default.removeClass(next, 'disabled');
            } else {
                next.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(next, 'disabled');
            }

            if (index > 0) {
                prev.removeAttribute('disabled');
                _lgUtils2.default.removeClass(prev, 'disabled');
            } else {
                next.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(next, 'disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function (el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            el.style.left = xValue;
        } else {
            _lgUtils2.default.setVendor(el, 'Transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px)');
        }
    };

    Plugin.prototype.touchMove = function (startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            _lgUtils2.default.addClass(this.outer, 'lg-dragging');

            // move current slide
            this.setTranslate(this.___slide[this.index], distance, 0);

            // move next and prev slide with current slide
            this.setTranslate(document.querySelector('.lg-prev-slide'), -this.___slide[this.index].clientWidth + distance, 0);
            this.setTranslate(document.querySelector('.lg-next-slide'), this.___slide[this.index].clientWidth + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function (distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _lgUtils2.default.addClass(_this.outer, 'lg-slide');
        }

        for (var i = 0; i < this.___slide.length; i++) {
            if (!_lgUtils2.default.hasClass(this.___slide[i], 'lg-current') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-prev-slide') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-next-slide')) {
                this.___slide[i].style.opacity = '0';
            }
        }

        // set transition duration
        setTimeout(function () {
            _lgUtils2.default.removeClass(_this.outer, 'lg-dragging');
            if (distance < 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToNextSlide(true);
            } else if (distance > 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _lgUtils2.default.trigger(_this.el, 'onSlideClick');
            }

            for (var i = 0; i < _this.___slide.length; i++) {
                _this.___slide[i].removeAttribute('style');
            }
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging') && _this.s.mode !== 'lg-slide') {
                _lgUtils2.default.removeClass(_this.outer, 'lg-slide');
            }
        }, _this.s.speed + 100);
    };

    Plugin.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.isTouch && _this.doCss()) {

            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'touchstart.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        _this.manageSwipeClass();
                        startCoords = e.targetTouches[0].pageX;
                    }
                });
            }

            for (var j = 0; j < _this.___slide.length; j++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[j], 'touchmove.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        e.preventDefault();
                        endCoords = e.targetTouches[0].pageX;
                        _this.touchMove(startCoords, endCoords);
                        isMoved = true;
                    }
                });
            }

            for (var k = 0; k < _this.___slide.length; k++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[k], 'touchend.lg', function () {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords - startCoords);
                        } else {
                            _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                        }
                    }
                });
            }
        }
    };

    Plugin.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && !_this.isTouch && _this.doCss()) {
            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'mousedown.lg', function (e) {
                    // execute only on .lg-object
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                            e.preventDefault();

                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = e.pageX;
                                isDraging = true;

                                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                                _this.outer.scrollLeft += 1;
                                _this.outer.scrollLeft -= 1;

                                // *

                                _lgUtils2.default.removeClass(_this.outer, 'lg-grab');
                                _lgUtils2.default.addClass(_this.outer, 'lg-grabbing');

                                _lgUtils2.default.trigger(_this.el, 'onDragstart');
                            }
                        }
                    }
                });
            }

            _lgUtils2.default.on(window, 'mousemove.lg', function (e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragmove');
                }
            });

            _lgUtils2.default.on(window, 'mouseup.lg', function (e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragend');
                } else if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                    _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _lgUtils2.default.removeClass(_this.outer, 'lg-grabbing');
                    _lgUtils2.default.addClass(_this.outer, 'lg-grab');
                }
            });
        }
    };

    Plugin.prototype.manageSwipeClass = function () {
        var touchNext = this.index + 1;
        var touchPrev = this.index - 1;
        var length = this.___slide.length;
        if (this.s.loop) {
            if (this.index === 0) {
                touchPrev = length - 1;
            } else if (this.index === length - 1) {
                touchNext = 0;
            }
        }

        for (var i = 0; i < this.___slide.length; i++) {
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-next-slide');
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-prev-slide');
        }

        if (touchPrev > -1) {
            _lgUtils2.default.addClass(this.___slide[touchPrev], 'lg-prev-slide');
        }

        _lgUtils2.default.addClass(this.___slide[touchNext], 'lg-next-slide');
    };

    Plugin.prototype.mousewheel = function () {
        var _this = this;
        _lgUtils2.default.on(_this.outer, 'mousewheel.lg', function (e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });
    };

    Plugin.prototype.closeGallery = function () {

        var _this = this;
        var mousedown = false;
        _lgUtils2.default.on(this.outer.querySelector('.lg-close'), 'click.lg', function () {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _lgUtils2.default.on(_this.outer, 'mousedown.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }
            });

            _lgUtils2.default.on(_this.outer, 'mouseup.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap') && mousedown) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging')) {
                        _this.destroy();
                    }
                }
            });
        }
    };

    Plugin.prototype.destroy = function (d) {

        var _this = this;

        if (!d) {
            _lgUtils2.default.trigger(_this.el, 'onBeforeClose');
        }

        document.body.scrollTop = _this.prevScrollTop;
        document.documentElement.scrollTop = _this.prevScrollTop;

        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection

                for (var i = 0; i < this.items.length; i++) {
                    _lgUtils2.default.off(this.items[i], '.lg');
                    _lgUtils2.default.off(this.items[i], '.lgcustom');
                }
            }

            var lguid = _this.el.getAttribute('lg-uid');
            delete window.lgData[lguid];
            _this.el.removeAttribute('lg-uid');
        }

        // Unbind all events added by lightGallery
        _lgUtils2.default.off(this.el, '.lgtm');

        // Distroy all lightGallery modules
        for (var key in window.lgModules) {
            if (_this.modules[key]) {
                _this.modules[key].destroy();
            }
        }

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        _lgUtils2.default.off(window, '.lg');
        _lgUtils2.default.removeClass(document.body, 'lg-on');
        _lgUtils2.default.removeClass(document.body, 'lg-from-hash');

        if (_this.outer) {
            _lgUtils2.default.removeClass(_this.outer, 'lg-visible');
        }

        _lgUtils2.default.removeClass(document.querySelector('.lg-backdrop'), 'in');
        setTimeout(function () {
            try {
                if (_this.outer) {
                    _this.outer.parentNode.removeChild(_this.outer);
                }

                if (document.querySelector('.lg-backdrop')) {
                    document.querySelector('.lg-backdrop').parentNode.removeChild(document.querySelector('.lg-backdrop'));
                }

                if (!d) {
                    _lgUtils2.default.trigger(_this.el, 'onCloseAfter');
                }
            } catch (err) {}
        }, _this.s.backdropDuration + 50);
    };

    window.lightGallery = function (el, options) {
        if (!el) {
            return;
        }

        try {
            if (!el.getAttribute('lg-uid')) {
                var uid = 'lg' + window.lgData.uid++;
                window.lgData[uid] = new Plugin(el, options);
                el.setAttribute('lg-uid', uid);
            } else {
                try {
                    window.lgData[el.getAttribute('lg-uid')].init();
                } catch (err) {
                    console.error('lightGallery has not initiated properly');
                }
            }
        } catch (err) {
            console.error('lightGallery has not initiated properly');
        }
    };
});

},{"./lg-utils":1}]},{},[2])(2)
});

/**!
 * lg-video.js | 0.0.2 | August 5th 2016
 * http://sachinchoolur.github.io/lg-video.js
 * Copyright (c) 2016 Sachin N; 
 * @license Apache 2.0 
 */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgVideo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgVideo = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var videoDefaults = {
        videoMaxWidth: '855px',
        youtubePlayerParams: false,
        vimeoPlayerParams: false,
        dailymotionPlayerParams: false,
        vkPlayerParams: false,
        videojs: false,
        videojsOptions: {}
    };

    var Video = function Video(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, videoDefaults, this.core.s);

        this.videoLoaded = false;

        this.init();

        return this;
    };

    Video.prototype.init = function () {
        var _this = this;

        // Event triggered when video url found without poster
        utils.on(_this.core.el, 'hasVideo.lgtm', function (event) {
            _this.core.___slide[event.detail.index].querySelector('.lg-video').insertAdjacentHTML('beforeend', _this.loadVideo(event.detail.src, 'lg-object', true, event.detail.index, event.detail.html));
            if (event.detail.html) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(_this.core.___slide[event.detail.index].querySelector('.lg-html5'), _this.core.s.videojsOptions, function () {
                            if (!_this.videoLoaded) {
                                this.play();
                            }
                        });
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    _this.core.___slide[event.detail.index].querySelector('.lg-html5').play();
                }
            }
        });

        // Set max width for video
        utils.on(_this.core.el, 'onAferAppendSlide.lgtm', function (event) {
            if (_this.core.___slide[event.detail.index].querySelector('.lg-video-cont')) {
                _this.core.___slide[event.detail.index].querySelector('.lg-video-cont').style.maxWidth = _this.core.s.videoMaxWidth;
                _this.videoLoaded = true;
            }
        });

        var loadOnClick = function loadOnClick($el) {
            // check slide has poster
            if (utils.hasClass($el.querySelector('.lg-object'), 'lg-has-poster') && $el.querySelector('.lg-object').style.display !== 'none') {

                // check already video element present
                if (!utils.hasClass($el, 'lg-has-video')) {

                    utils.addClass($el, 'lg-video-playing');
                    utils.addClass($el, 'lg-has-video');

                    var _src;
                    var _html;
                    var _loadVideo = function _loadVideo(_src, _html) {

                        $el.querySelector('.lg-video').insertAdjacentHTML('beforeend', _this.loadVideo(_src, '', false, _this.core.index, _html));

                        if (_html) {
                            if (_this.core.s.videojs) {
                                try {
                                    videojs(_this.core.___slide[_this.core.index].querySelector('.lg-html5'), _this.core.s.videojsOptions, function () {
                                        this.play();
                                    });
                                } catch (e) {
                                    console.error('Make sure you have included videojs');
                                }
                            } else {
                                _this.core.___slide[_this.core.index].querySelector('.lg-html5').play();
                            }
                        }
                    };

                    if (_this.core.s.dynamic) {

                        _src = _this.core.s.dynamicEl[_this.core.index].src;
                        _html = _this.core.s.dynamicEl[_this.core.index].html;

                        _loadVideo(_src, _html);
                    } else {

                        _src = _this.core.items[_this.core.index].getAttribute('href') || _this.core.items[_this.core.index].getAttribute('data-src');
                        _html = _this.core.items[_this.core.index].getAttribute('data-html');

                        _loadVideo(_src, _html);
                    }

                    var $tempImg = $el.querySelector('.lg-object');
                    $el.querySelector('.lg-video').appendChild($tempImg);

                    // @todo loading icon for html5 videos also
                    // for showing the loading indicator while loading video
                    if (!utils.hasClass($el.querySelector('.lg-video-object'), 'lg-html5')) {
                        utils.removeClass($el, 'lg-complete');
                        utils.on($el.querySelector('.lg-video-object'), 'load.lg error.lg', function () {
                            utils.addClass($el, 'lg-complete');
                        });
                    }
                } else {

                    var youtubePlayer = $el.querySelector('.lg-youtube');
                    var vimeoPlayer = $el.querySelector('.lg-vimeo');
                    var dailymotionPlayer = $el.querySelector('.lg-dailymotion');
                    var html5Player = $el.querySelector('.lg-html5');
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else if (vimeoPlayer) {
                        try {
                            $f(vimeoPlayer).api('play');
                        } catch (e) {
                            console.error('Make sure you have included froogaloop2 js');
                        }
                    } else if (dailymotionPlayer) {
                        dailymotionPlayer.contentWindow.postMessage('play', '*');
                    } else if (html5Player) {
                        if (_this.core.s.videojs) {
                            try {
                                videojs(html5Player).play();
                            } catch (e) {
                                console.error('Make sure you have included videojs');
                            }
                        } else {
                            html5Player.play();
                        }
                    }

                    utils.addClass($el, 'lg-video-playing');
                }
            }
        };

        if (_this.core.doCss() && _this.core.items.length > 1 && (_this.core.s.enableSwipe && _this.core.isTouch || _this.core.s.enableDrag && !_this.core.isTouch)) {
            utils.on(_this.core.el, 'onSlideClick.lgtm', function () {
                var $el = _this.core.___slide[_this.core.index];
                loadOnClick($el);
            });
        } else {

            // For IE 9 and bellow
            for (var i = 0; i < _this.core.___slide.length; i++) {

                /*jshint loopfunc: true */
                (function (index) {
                    utils.on(_this.core.___slide[index], 'click.lg', function () {
                        loadOnClick(_this.core.___slide[index]);
                    });
                })(i);
            }
        }

        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function (event) {

            var $videoSlide = _this.core.___slide[event.detail.prevIndex];
            var youtubePlayer = $videoSlide.querySelector('.lg-youtube');
            var vimeoPlayer = $videoSlide.querySelector('.lg-vimeo');
            var dailymotionPlayer = $videoSlide.querySelector('.lg-dailymotion');
            var vkPlayer = $videoSlide.querySelector('.lg-vk');
            var html5Player = $videoSlide.querySelector('.lg-html5');
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
                try {
                    $f(vimeoPlayer).api('pause');
                } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                }
            } else if (dailymotionPlayer) {
                dailymotionPlayer.contentWindow.postMessage('pause', '*');
            } else if (html5Player) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(html5Player).pause();
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    html5Player.pause();
                }
            }if (vkPlayer) {

                vkPlayer.setAttribute('src', vkPlayer.getAttribute('src').replace('&autoplay', '&noplay'));
            }

            var _src;
            if (_this.core.s.dynamic) {
                _src = _this.core.s.dynamicEl[event.detail.index].src;
            } else {
                _src = _this.core.items[event.detail.index].getAttribute('href') || _this.core.items[event.detail.index].getAttribute('data-src');
            }

            var _isVideo = _this.core.isVideo(_src, event.detail.index) || {};
            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                utils.addClass(_this.core.outer, 'lg-hide-download');
            }

            //$videoSlide.addClass('lg-complete');
        });

        utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
            utils.removeClass(_this.core.___slide[event.detail.prevIndex], 'lg-video-playing');
        });
    };

    Video.prototype.loadVideo = function (src, addClass, noposter, index, html) {
        var video = '';
        var autoplay = 1;
        var a = '';
        var isVideo = this.core.isVideo(src, index) || {};

        // Enable autoplay for first video if poster doesn't exist
        if (noposter) {
            if (this.videoLoaded) {
                autoplay = 0;
            } else {
                autoplay = 1;
            }
        }

        if (isVideo.youtube) {

            a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
            if (this.core.s.youtubePlayerParams) {
                a = a + '&' + utils.param(this.core.s.youtubePlayerParams);
            }

            video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
        } else if (isVideo.vimeo) {

            a = '?autoplay=' + autoplay + '&api=1';
            if (this.core.s.vimeoPlayerParams) {
                a = a + '&' + utils.param(this.core.s.vimeoPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
        } else if (isVideo.dailymotion) {

            a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
            if (this.core.s.dailymotionPlayerParams) {
                a = a + '&' + utils.param(this.core.s.dailymotionPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
        } else if (isVideo.html5) {
            var fL = html.substring(0, 1);
            if (fL === '.' || fL === '#') {
                html = document.querySelector(html).innerHTML;
            }

            video = html;
        } else if (isVideo.vk) {

            a = '&autoplay=' + autoplay;
            if (this.core.s.vkPlayerParams) {
                a = a + '&' + utils.param(this.core.s.vkPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="http://vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
        }

        return video;
    };

    Video.prototype.destroy = function () {
        this.videoLoaded = false;
    };

    window.lgModules.video = Video;
});

},{}]},{},[1])(1)
});
/**!
 * lg-thumbnail.js | 0.0.4 | August 9th 2016
 * http://sachinchoolur.github.io/lg-thumbnail.js
 * Copyright (c) 2016 Sachin N; 
 * @license Apache 2.0 
 */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgThumbnail = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgThumbnail = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var thumbnailDefaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toggleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function Thumbnail(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, thumbnailDefaults, this.core.s);

        this.thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = this.core.items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin);
        this.thumbIndex = this.core.index;

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function () {
        var _this = this;
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function () {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                utils.addClass(this.core.outer, 'lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb) {
                if (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss()) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss()) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toggle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function () {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' + '<div class="lg-thumb group">' + '</div>' + '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        utils.addClass(_this.core.outer, 'lg-has-thumb');

        _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', html);

        _this.thumbOuter = _this.core.outer.querySelector('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;

        if (_this.core.s.animateThumb) {
            _this.core.outer.querySelector('.lg-thumb').style.width = _this.thumbTotalWidth + 'px';
            _this.core.outer.querySelector('.lg-thumb').style.position = 'relative';
        }

        if (this.core.s.animateThumb) {
            _this.thumbOuter.style.height = _this.core.s.thumbContHeight + 'px';
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
                getThumb(_this.core.s.dynamicEl[j].src, _this.core.s.dynamicEl[j].thumb, j);
            }
        } else {
            for (var i = 0; i < _this.core.items.length; i++) {
                if (!_this.core.s.exThumbImage) {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].querySelector('img').getAttribute('src'), i);
                } else {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].getAttribute(_this.core.s.exThumbImage), i);
                }
            }
        }

        _this.core.outer.querySelector('.lg-thumb').innerHTML = thumbList;

        $thumb = _this.core.outer.querySelectorAll('.lg-thumb-item');

        for (var n = 0; n < $thumb.length; n++) {

            /*jshint loopfunc: true */
            (function (index) {
                var $this = $thumb[index];
                var vimeoVideoId = $this.getAttribute('data-vimeo-id');
                if (vimeoVideoId) {

                    window['lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n] = function (content) {
                        $this.querySelector('img').setAttribute('src', content[0][_this.core.s.vimeoThumbSize]);
                    };

                    var script = document.createElement('script');
                    script.className = 'lg-script';
                    script.src = '//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n;
                    document.body.appendChild(script);
                }
            })(n);
        }

        // manage active class for thumbnail
        utils.addClass($thumb[_this.core.index], 'active');
        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {

            for (var j = 0; j < $thumb.length; j++) {
                utils.removeClass($thumb[j], 'active');
            }

            utils.addClass($thumb[_this.core.index], 'active');
        });

        for (var k = 0; k < $thumb.length; k++) {

            /*jshint loopfunc: true */
            (function (index) {

                utils.on($thumb[index], 'click.lg touchend.lg', function () {

                    setTimeout(function () {

                        // In IE9 and bellow touch does not support
                        // Go to slide if browser does not support css transitions
                        if (_this.thumbClickable && !_this.core.lgBusy || !_this.core.doCss()) {
                            _this.core.index = index;
                            _this.core.slide(_this.core.index, false, true);
                        }
                    }, 50);
                });
            })(k);
        }

        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            _this.animateThumb(_this.core.index);
        });

        utils.on(window, 'resize.lgthumb orientationchange.lgthumb', function () {
            setTimeout(function () {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;
            }, 200);
        });
    };

    Thumbnail.prototype.setTranslate = function (value) {
        utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'Transform', 'translate3d(-' + value + 'px, 0px, 0px)');
    };

    Thumbnail.prototype.animateThumb = function (index) {
        var $thumb = this.core.outer.querySelector('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1 - position;
            if (this.left > this.thumbTotalWidth - this.thumbOuterWidth) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!utils.hasClass($thumb, 'on')) {
                    utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'TransitionDuration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            }

            this.setTranslate(this.left);
        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function () {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        utils.addClass(_this.thumbOuter, 'lg-grab');

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'mousedown.lgthumb', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.outer.scrollLeft += 1;
                _this.core.outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                utils.removeClass(_this.thumbOuter, 'lg-grab');
                utils.addClass(_this.thumbOuter, 'lg-grabbing');
            }
        });

        utils.on(window, 'mousemove.lgthumb', function (e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(window, 'mouseup.lgthumb', function () {
            if (isMoved) {
                isMoved = false;
                utils.removeClass(_this.thumbOuter, 'lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                utils.removeClass(_this.thumbOuter, 'lg-grabbing');
                utils.addClass(_this.thumbOuter, 'lg-grab');
            }
        });
    };

    Thumbnail.prototype.enableThumbSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchstart.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchmove.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.targetTouches[0].pageX;
                isMoved = true;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchend.lg', function () {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    utils.removeClass(_this.thumbOuter, 'lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });
    };

    Thumbnail.prototype.toggle = function () {
        var _this = this;
        if (_this.core.s.toggleThumb) {
            utils.addClass(_this.core.outer, 'lg-can-toggle');
            _this.thumbOuter.insertAdjacentHTML('beforeend', '<span class="lg-toggle-thumb lg-icon"></span>');
            utils.on(_this.core.outer.querySelector('.lg-toggle-thumb'), 'click.lg', function () {
                if (utils.hasClass(_this.core.outer, 'lg-thumb-open')) {
                    utils.removeClass(_this.core.outer, 'lg-thumb-open');
                } else {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function () {
        var _this = this;
        utils.on(window, 'keydown.lgthumb', function (e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                utils.addClass(_this.core.outer, 'lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                utils.removeClass(_this.core.outer, 'lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function () {
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            utils.off(window, '.lgthumb');
            this.thumbOuter.parentNode.removeChild(this.thumbOuter);
            utils.removeClass(this.core.outer, 'lg-has-thumb');

            var lgScript = document.getElementsByClassName('lg-script');
            while (lgScript[0]) {
                lgScript[0].parentNode.removeChild(lgScript[0]);
            }
        }
    };

    window.lgModules.thumbnail = Thumbnail;
});

},{}]},{},[1])(1)
});
/**!
 * lg-zoom.js | 0.0.2 | August 4th 2016
 * http://sachinchoolur.github.io/lg-zoom.js
 * Copyright (c) 2016 Sachin N; 
 * @license Apache 2.0 
 */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgZoom = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgZoom = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var zoomDefaults = {
        scale: 1,
        zoom: true,
        actualSize: true,
        enableZoomAfter: 300
    };

    var Zoom = function Zoom(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, zoomDefaults, this.core.s);

        if (this.core.s.zoom && this.core.doCss()) {
            this.init();

            // Store the zoomable timeout value just to clear it while closing
            this.zoomabletimeout = false;

            // Set the initial value center
            this.pageX = window.innerWidth / 2;
            this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
        }

        return this;
    };

    Zoom.prototype.init = function () {

        var _this = this;
        var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';

        if (_this.core.s.actualSize) {
            zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
        }

        this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', zoomIcons);

        // Add zoomable class
        utils.on(_this.core.el, 'onSlideItemLoad.lgtmzoom', function (event) {

            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + event.detail.delay;

            // set _speed value 0 if gallery opened from direct url and if it is first slide
            if (utils.hasClass(document.body, 'lg-from-hash') && event.detail.delay) {

                // will execute only once
                _speed = 0;
            } else {

                // Remove lg-from-hash to enable starting animation.
                utils.removeClass(document.body, 'lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function () {
                utils.addClass(_this.core.___slide[event.detail.index], 'lg-zoomable');
            }, _speed + 30);
        });

        var scale = 1;
        /**
         * @desc Image zoom
         * Translate the wrap and scale the image to get better user experience
         *
         * @param {String} scaleVal - Zoom decrement/increment value
         */
        var zoom = function zoom(scaleVal) {

            var image = _this.core.outer.querySelector('.lg-current .lg-image');
            var _x;
            var _y;

            // Find offset manually to avoid issue after zoom
            var offsetX = (window.innerWidth - image.clientWidth) / 2;
            var offsetY = (window.innerHeight - image.clientHeight) / 2 + (document.documentElement.scrollTop || document.body.scrollTop);

            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;

            var x = (scaleVal - 1) * _x;
            var y = (scaleVal - 1) * _y;

            utils.setVendor(image, 'Transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)');
            image.setAttribute('data-scale', scaleVal);

            image.parentElement.style.left = -x + 'px';
            image.parentElement.style.top = -y + 'px';
            image.parentElement.setAttribute('data-x', x);
            image.parentElement.setAttribute('data-y', y);
        };

        var callScale = function callScale() {
            if (scale > 1) {
                utils.addClass(_this.core.outer, 'lg-zoomed');
            } else {
                _this.resetZoom();
            }

            if (scale < 1) {
                scale = 1;
            }

            zoom(scale);
        };

        var actualSize = function actualSize(event, image, index, fromIcon) {
            var w = image.clientWidth;
            var nw;
            if (_this.core.s.dynamic) {
                nw = _this.core.s.dynamicEl[index].width || image.naturalWidth || w;
            } else {
                nw = _this.core.items[index].getAttribute('data-width') || image.naturalWidth || w;
            }

            var _scale;

            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                scale = 1;
            } else {
                if (nw > w) {
                    _scale = nw / w;
                    scale = _scale || 2;
                }
            }

            if (fromIcon) {
                _this.pageX = window.innerWidth / 2;
                _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            } else {
                _this.pageX = event.pageX || event.targetTouches[0].pageX;
                _this.pageY = event.pageY || event.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function () {
                utils.removeClass(_this.core.outer, 'lg-grabbing');
                utils.addClass(_this.core.outer, 'lg-grab');
            }, 10);
        };

        var tapped = false;

        // event triggered after appending slide content
        utils.on(_this.core.el, 'onAferAppendSlide.lgtmzoom', function (event) {

            var index = event.detail.index;

            // Get the current element
            var image = _this.core.___slide[index].querySelector('.lg-image');

            if (!_this.core.isTouch) {
                utils.on(image, 'dblclick', function (event) {
                    actualSize(event, image, index);
                });
            }

            if (_this.core.isTouch) {
                utils.on(image, 'touchstart', function (event) {
                    if (!tapped) {
                        tapped = setTimeout(function () {
                            tapped = null;
                        }, 300);
                    } else {
                        clearTimeout(tapped);
                        tapped = null;
                        actualSize(event, image, index);
                    }

                    event.preventDefault();
                });
            }
        });

        // Update zoom on resize and orientationchange
        utils.on(window, 'resize.lgzoom scroll.lgzoom orientationchange.lgzoom', function () {
            _this.pageX = window.innerWidth / 2;
            _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            zoom(scale);
        });

        utils.on(document.getElementById('lg-zoom-out'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
                scale -= _this.core.s.scale;
                callScale();
            }
        });

        utils.on(document.getElementById('lg-zoom-in'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
                scale += _this.core.s.scale;
                callScale();
            }
        });

        utils.on(document.getElementById('lg-actual-size'), 'click.lg', function (event) {
            actualSize(event, _this.core.___slide[_this.core.index].querySelector('.lg-image'), _this.core.index, true);
        });

        // Reset zoom on slide change
        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            scale = 1;
            _this.resetZoom();
        });

        // Drag option after zoom
        if (!_this.core.isTouch) {
            _this.zoomDrag();
        }

        if (_this.core.isTouch) {
            _this.zoomSwipe();
        }
    };

    // Reset zoom effect
    Zoom.prototype.resetZoom = function () {
        utils.removeClass(this.core.outer, 'lg-zoomed');
        for (var i = 0; i < this.core.___slide.length; i++) {
            if (this.core.___slide[i].querySelector('.lg-img-wrap')) {
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('style');
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-x');
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-y');
            }
        }

        for (var j = 0; j < this.core.___slide.length; j++) {
            if (this.core.___slide[j].querySelector('.lg-image')) {
                this.core.___slide[j].querySelector('.lg-image').removeAttribute('style');
                this.core.___slide[j].querySelector('.lg-image').removeAttribute('data-scale');
            }
        }

        // Reset pagx pagy values to center
        this.pageX = window.innerWidth / 2;
        this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
    };

    Zoom.prototype.zoomSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        for (var i = 0; i < _this.core.___slide.length; i++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'touchstart.lg', function (e) {

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

                    allowY = image.offsetHeight * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientHeight;
                    allowX = image.offsetWidth * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientWidth;
                    if (allowX || allowY) {
                        e.preventDefault();
                        startCoords = {
                            x: e.targetTouches[0].pageX,
                            y: e.targetTouches[0].pageY
                        };
                    }
                }
            });
        }

        for (var j = 0; j < _this.core.___slide.length; j++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[j], 'touchmove.lg', function (e) {

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {

                    var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
                    var distanceX;
                    var distanceY;

                    e.preventDefault();
                    isMoved = true;

                    endCoords = {
                        x: e.targetTouches[0].pageX,
                        y: e.targetTouches[0].pageY
                    };

                    // reset opacity and transition duration
                    utils.addClass(_this.core.outer, 'lg-zoom-dragging');

                    if (allowY) {
                        distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
                    } else {
                        distanceY = -Math.abs(_el.getAttribute('data-y'));
                    }

                    if (allowX) {
                        distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
                    } else {
                        distanceX = -Math.abs(_el.getAttribute('data-x'));
                    }

                    if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
                        _el.style.left = distanceX + 'px';
                        _el.style.top = distanceY + 'px';
                    }
                }
            });
        }

        for (var k = 0; k < _this.core.___slide.length; k++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[k], 'touchend.lg', function () {
                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        utils.removeClass(_this.core.outer, 'lg-zoom-dragging');
                        _this.touchendZoom(startCoords, endCoords, allowX, allowY);
                    }
                }
            });
        }
    };

    Zoom.prototype.zoomDrag = function () {

        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        for (var i = 0; i < _this.core.___slide.length; i++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'mousedown.lgzoom', function (e) {

                // execute only on .lg-object
                var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

                allowY = image.offsetHeight * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientHeight;
                allowX = image.offsetWidth * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientWidth;

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    if (utils.hasClass(e.target, 'lg-object') && (allowX || allowY)) {
                        e.preventDefault();
                        startCoords = {
                            x: e.pageX,
                            y: e.pageY
                        };

                        isDraging = true;

                        // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                        _this.core.outer.scrollLeft += 1;
                        _this.core.outer.scrollLeft -= 1;

                        utils.removeClass(_this.core.outer, 'lg-grab');
                        utils.addClass(_this.core.outer, 'lg-grabbing');
                    }
                }
            });
        }

        utils.on(window, 'mousemove.lgzoom', function (e) {
            if (isDraging) {
                var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
                var distanceX;
                var distanceY;

                isMoved = true;
                endCoords = {
                    x: e.pageX,
                    y: e.pageY
                };

                // reset opacity and transition duration
                utils.addClass(_this.core.outer, 'lg-zoom-dragging');

                if (allowY) {
                    distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_el.getAttribute('data-y'));
                }

                if (allowX) {
                    distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_el.getAttribute('data-x'));
                }

                _el.style.left = distanceX + 'px';
                _el.style.top = distanceY + 'px';
            }
        });

        utils.on(window, 'mouseup.lgzoom', function (e) {

            if (isDraging) {
                isDraging = false;
                utils.removeClass(_this.core.outer, 'lg-zoom-dragging');

                // Fix for chrome mouse move on click
                if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
                    endCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);
                }

                isMoved = false;
            }

            utils.removeClass(_this.core.outer, 'lg-grabbing');
            utils.addClass(_this.core.outer, 'lg-grab');
        });
    };

    Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY) {

        var _this = this;
        var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
        var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');
        var distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
        var distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
        var minY = (_this.core.outer.querySelector('.lg').clientHeight - image.offsetHeight) / 2;
        var maxY = Math.abs(image.offsetHeight * Math.abs(image.getAttribute('data-scale')) - _this.core.outer.querySelector('.lg').clientHeight + minY);
        var minX = (_this.core.outer.querySelector('.lg').clientWidth - image.offsetWidth) / 2;
        var maxX = Math.abs(image.offsetWidth * Math.abs(image.getAttribute('data-scale')) - _this.core.outer.querySelector('.lg').clientWidth + minX);

        if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            if (allowY) {
                if (distanceY <= -maxY) {
                    distanceY = -maxY;
                } else if (distanceY >= -minY) {
                    distanceY = -minY;
                }
            }

            if (allowX) {
                if (distanceX <= -maxX) {
                    distanceX = -maxX;
                } else if (distanceX >= -minX) {
                    distanceX = -minX;
                }
            }

            if (allowY) {
                _el.setAttribute('data-y', Math.abs(distanceY));
            } else {
                distanceY = -Math.abs(_el.getAttribute('data-y'));
            }

            if (allowX) {
                _el.setAttribute('data-x', Math.abs(distanceX));
            } else {
                distanceX = -Math.abs(_el.getAttribute('data-x'));
            }

            _el.style.left = distanceX + 'px';
            _el.style.top = distanceY + 'px';
        }
    };

    Zoom.prototype.destroy = function () {

        var _this = this;

        // Unbind all events added by lightGallery zoom plugin
        utils.off(_this.core.el, '.lgzoom');
        utils.off(window, '.lgzoom');
        for (var i = 0; i < _this.core.___slide.length; i++) {
            utils.off(_this.core.___slide[i], '.lgzoom');
        }

        utils.off(_this.core.el, '.lgtmzoom');
        _this.resetZoom();
        clearTimeout(_this.zoomabletimeout);
        _this.zoomabletimeout = false;
    };

    window.lgModules.zoom = Zoom;
});

},{}]},{},[1])(1)
});

(function(a,b){if(typeof define==="function"&&define.amd){define("wavesurfer",[],function(){return(a.WaveSurfer=b())})}else{if(typeof exports==="object"){module.exports=b()}else{a.WaveSurfer=b()}}}(this,function(){var a={defaultParams:{height:128,waveColor:"#999",progressColor:"#555",cursorColor:"#333",cursorWidth:1,skipLength:2,minPxPerSec:20,pixelRatio:window.devicePixelRatio||screen.deviceXDPI/screen.logicalXDPI,fillParent:true,scrollParent:false,hideScrollbar:false,normalize:false,audioContext:null,container:null,dragSelection:true,loopSelection:true,audioRate:1,interact:true,splitChannels:false,mediaContainer:null,mediaControls:false,renderer:"Canvas",backend:"WebAudio",mediaType:"audio",autoCenter:true},init:function(b){this.params=a.util.extend({},this.defaultParams,b);this.container="string"==typeof b.container?document.querySelector(this.params.container):this.params.container;if(!this.container){throw new Error("Container element not found")}if(this.params.mediaContainer==null){this.mediaContainer=this.container}else{if(typeof this.params.mediaContainer=="string"){this.mediaContainer=document.querySelector(this.params.mediaContainer)}else{this.mediaContainer=this.params.mediaContainer}}if(!this.mediaContainer){throw new Error("Media Container element not found")}this.savedVolume=0;this.isMuted=false;this.tmpEvents=[];this.currentAjax=null;this.createDrawer();this.createBackend();this.isDestroyed=false},createDrawer:function(){var b=this;this.drawer=Object.create(a.Drawer[this.params.renderer]);this.drawer.init(this.container,this.params);this.drawer.on("redraw",function(){b.drawBuffer();b.drawer.progress(b.backend.getPlayedPercents())});this.drawer.on("click",function(d,c){setTimeout(function(){b.seekTo(c)},0)});this.drawer.on("scroll",function(c){b.fireEvent("scroll",c)})},createBackend:function(){var b=this;if(this.backend){this.backend.destroy()}if(this.params.backend=="AudioElement"){this.params.backend="MediaElement"}if(this.params.backend=="WebAudio"&&!a.WebAudio.supportsWebAudio()){this.params.backend="MediaElement"}this.backend=Object.create(a[this.params.backend]);this.backend.init(this.params);this.backend.on("finish",function(){b.fireEvent("finish")});this.backend.on("play",function(){b.fireEvent("play")});this.backend.on("pause",function(){b.fireEvent("pause")});this.backend.on("audioprocess",function(c){b.drawer.progress(b.backend.getPlayedPercents());b.fireEvent("audioprocess",c)})},getDuration:function(){return this.backend.getDuration()},getCurrentTime:function(){return this.backend.getCurrentTime()},play:function(c,b){this.fireEvent("interaction",this.play.bind(this,c,b));this.backend.play(c,b)},pause:function(){this.backend.pause()},playPause:function(){this.backend.isPaused()?this.play():this.pause()},isPlaying:function(){return !this.backend.isPaused()},skipBackward:function(b){this.skip(-b||-this.params.skipLength)},skipForward:function(b){this.skip(b||this.params.skipLength)},skip:function(d){var b=this.getCurrentTime()||0;var c=this.getDuration()||1;b=Math.max(0,Math.min(c,b+(d||0)));this.seekAndCenter(b/c)},seekAndCenter:function(b){this.seekTo(b);this.drawer.recenter(b)},seekTo:function(c){this.fireEvent("interaction",this.seekTo.bind(this,c));var d=this.backend.isPaused();var b=this.params.scrollParent;if(d){this.params.scrollParent=false}this.backend.seekTo(c*this.getDuration());this.drawer.progress(this.backend.getPlayedPercents());if(!d){this.backend.pause();this.backend.play()}this.params.scrollParent=b;this.fireEvent("seek",c)},stop:function(){this.pause();this.seekTo(0);this.drawer.progress(0)},setVolume:function(b){this.backend.setVolume(b)},setPlaybackRate:function(b){this.backend.setPlaybackRate(b)},toggleMute:function(){if(this.isMuted){this.backend.setVolume(this.savedVolume);this.isMuted=false}else{this.savedVolume=this.backend.getVolume();this.backend.setVolume(0);this.isMuted=true}},toggleScroll:function(){this.params.scrollParent=!this.params.scrollParent;this.drawBuffer()},toggleInteraction:function(){this.params.interact=!this.params.interact},drawBuffer:function(){var e=Math.round(this.getDuration()*this.params.minPxPerSec*this.params.pixelRatio);var d=this.drawer.getWidth();var c=e;if(this.params.fillParent&&(!this.params.scrollParent||e<d)){c=d}var b=this.backend.getPeaks(c);this.drawer.drawPeaks(b,c);this.fireEvent("redraw",b,c)},zoom:function(b){this.params.minPxPerSec=b;this.params.scrollParent=true;this.drawBuffer();this.drawer.progress(this.backend.getPlayedPercents());this.drawer.recenter(this.getCurrentTime()/this.getDuration());this.fireEvent("zoom",b)},loadArrayBuffer:function(b){this.decodeArrayBuffer(b,function(c){if(!this.isDestroyed){this.loadDecodedBuffer(c)}}.bind(this))},loadDecodedBuffer:function(b){this.backend.load(b);this.drawBuffer();this.fireEvent("ready")},loadBlob:function(c){var d=this;var b=new FileReader();b.addEventListener("progress",function(f){d.onProgress(f)});b.addEventListener("load",function(f){d.loadArrayBuffer(f.target.result)});b.addEventListener("error",function(){d.fireEvent("error","Error reading file")});b.readAsArrayBuffer(c);this.empty()},load:function(c,b){this.empty();switch(this.params.backend){case"WebAudio":return this.loadBuffer(c,b);case"MediaElement":return this.loadMediaElement(c,b)}},loadBuffer:function(c,b){var d=(function(e){if(e){this.tmpEvents.push(this.once("ready",e))}return this.getArrayBuffer(c,this.loadArrayBuffer.bind(this))}).bind(this);if(b){this.backend.setPeaks(b);this.drawBuffer();this.tmpEvents.push(this.once("interaction",d))}else{return d()}},loadMediaElement:function(e,b){var d=e;if(typeof e==="string"){this.backend.load(d,this.mediaContainer,b)}else{var c=e;this.backend.loadElt(c,b);d=c.src}this.tmpEvents.push(this.backend.once("canplay",(function(){this.drawBuffer();this.fireEvent("ready")}).bind(this)),this.backend.once("error",(function(f){this.fireEvent("error",f)}).bind(this)));if(b){this.backend.setPeaks(b)}else{if(this.backend.supportsWebAudio()){this.getArrayBuffer(d,(function(f){this.decodeArrayBuffer(f,(function(g){this.backend.buffer=g;this.drawBuffer()}).bind(this))}).bind(this))}}},decodeArrayBuffer:function(b,c){this.arraybuffer=b;this.backend.decodeArrayBuffer(b,(function(d){if(!this.isDestroyed&&this.arraybuffer==b){c(d);this.arraybuffer=null}}).bind(this),this.fireEvent.bind(this,"error","Error decoding audiobuffer"))},getArrayBuffer:function(b,e){var d=this;var c=a.util.ajax({url:b,responseType:"arraybuffer"});this.currentAjax=c;this.tmpEvents.push(c.on("progress",function(f){d.onProgress(f)}),c.on("success",function(f,g){e(f);d.currentAjax=null}),c.on("error",function(f){d.fireEvent("error","XHR error: "+f.target.statusText);d.currentAjax=null}));return c},onProgress:function(c){if(c.lengthComputable){var b=c.loaded/c.total}else{b=c.loaded/(c.loaded+1000000)}this.fireEvent("loading",Math.round(b*100),c.target)},exportPCM:function(f,g,d){f=f||1024;g=g||10000;d=d||false;var c=this.backend.getPeaks(f,g);var b=[].map.call(c,function(h){return Math.round(h*g)/g});var e=JSON.stringify(b);if(!d){window.open("data:application/json;charset=utf-8,"+encodeURIComponent(e))}return e},exportImage:function(b,c){if(!b){b="image/png"}if(!c){c=1}return this.drawer.getImage(b,c)},cancelAjax:function(){if(this.currentAjax){this.currentAjax.xhr.abort();this.currentAjax=null}},clearTmpEvents:function(){this.tmpEvents.forEach(function(b){b.un()})},empty:function(){if(!this.backend.isPaused()){this.stop();this.backend.disconnectSource()}this.cancelAjax();this.clearTmpEvents();this.drawer.progress(0);this.drawer.setWidth(0);this.drawer.drawPeaks({length:this.drawer.getWidth()},0)},destroy:function(){this.fireEvent("destroy");this.cancelAjax();this.clearTmpEvents();this.unAll();this.backend.destroy();this.drawer.destroy();this.isDestroyed=true}};a.create=function(c){var b=Object.create(a);b.init(c);return b};a.util={extend:function(c){var b=Array.prototype.slice.call(arguments,1);b.forEach(function(d){Object.keys(d).forEach(function(e){c[e]=d[e]})});return c},min:function(b){var d=+Infinity;for(var c in b){if(b[c]<d){d=b[c]}}return d},max:function(c){var b=-Infinity;for(var d in c){if(c[d]>b){b=c[d]}}return b},getId:function(){return"wavesurfer_"+Math.random().toString(32).substring(2)},ajax:function(b){var d=Object.create(a.Observer);var e=new XMLHttpRequest();var c=false;e.open(b.method||"GET",b.url,true);e.responseType=b.responseType||"json";e.addEventListener("progress",function(f){d.fireEvent("progress",f);if(f.lengthComputable&&f.loaded==f.total){c=true}});e.addEventListener("load",function(f){if(!c){d.fireEvent("progress",f)}d.fireEvent("load",f);if(200==e.status||206==e.status){d.fireEvent("success",e.response,f)}else{d.fireEvent("error",f)}});e.addEventListener("error",function(f){d.fireEvent("error",f)});e.send();d.xhr=e;return d}};a.Observer={on:function(d,c){if(!this.handlers){this.handlers={}}var b=this.handlers[d];if(!b){b=this.handlers[d]=[]}b.push(c);return{name:d,callback:c,un:this.un.bind(this,d,c)}},un:function(e,d){if(!this.handlers){return}var b=this.handlers[e];if(b){if(d){for(var c=b.length-1;c>=0;c--){if(b[c]==d){b.splice(c,1)}}}else{b.length=0}}},unAll:function(){this.handlers=null},once:function(d,c){var e=this;var b=function(){c.apply(this,arguments);setTimeout(function(){e.un(d,b)},0)};return this.on(d,b)},fireEvent:function(d){if(!this.handlers){return}var b=this.handlers[d];var c=Array.prototype.slice.call(arguments,1);b&&b.forEach(function(e){e.apply(null,c)})}};a.util.extend(a,a.Observer);"use strict";a.WebAudio={scriptBufferSize:256,PLAYING_STATE:0,PAUSED_STATE:1,FINISHED_STATE:2,supportsWebAudio:function(){return !!(window.AudioContext||window.webkitAudioContext)},getAudioContext:function(){if(!a.WebAudio.audioContext){a.WebAudio.audioContext=new (window.AudioContext||window.webkitAudioContext)}return a.WebAudio.audioContext},getOfflineAudioContext:function(b){if(!a.WebAudio.offlineAudioContext){a.WebAudio.offlineAudioContext=new (window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,b)}return a.WebAudio.offlineAudioContext},init:function(b){this.params=b;this.ac=b.audioContext||this.getAudioContext();this.lastPlay=this.ac.currentTime;this.startPosition=0;this.scheduledPause=null;this.states=[Object.create(a.WebAudio.state.playing),Object.create(a.WebAudio.state.paused),Object.create(a.WebAudio.state.finished)];this.createVolumeNode();this.createScriptNode();this.createAnalyserNode();this.setState(this.PAUSED_STATE);this.setPlaybackRate(this.params.audioRate)},disconnectFilters:function(){if(this.filters){this.filters.forEach(function(b){b&&b.disconnect()});this.filters=null;this.analyser.connect(this.gainNode)}},setState:function(b){if(this.state!==this.states[b]){this.state=this.states[b];this.state.init.call(this)}},setFilter:function(){this.setFilters([].slice.call(arguments))},setFilters:function(b){this.disconnectFilters();if(b&&b.length){this.filters=b;this.analyser.disconnect();b.reduce(function(c,d){c.connect(d);return d},this.analyser).connect(this.gainNode)}},createScriptNode:function(){if(this.ac.createScriptProcessor){this.scriptNode=this.ac.createScriptProcessor(this.scriptBufferSize)}else{this.scriptNode=this.ac.createJavaScriptNode(this.scriptBufferSize)}this.scriptNode.connect(this.ac.destination)},addOnAudioProcess:function(){var b=this;this.scriptNode.onaudioprocess=function(){var c=b.getCurrentTime();if(c>=b.getDuration()){b.setState(b.FINISHED_STATE);b.fireEvent("pause")}else{if(c>=b.scheduledPause){b.pause()}else{if(b.state===b.states[b.PLAYING_STATE]){b.fireEvent("audioprocess",c)}}}}},removeOnAudioProcess:function(){this.scriptNode.onaudioprocess=null},createAnalyserNode:function(){this.analyser=this.ac.createAnalyser();this.analyser.connect(this.gainNode)},createVolumeNode:function(){if(this.ac.createGain){this.gainNode=this.ac.createGain()}else{this.gainNode=this.ac.createGainNode()}this.gainNode.connect(this.ac.destination)},setVolume:function(b){this.gainNode.gain.value=b},getVolume:function(){return this.gainNode.gain.value},decodeArrayBuffer:function(c,d,b){if(!this.offlineAc){this.offlineAc=this.getOfflineAudioContext(this.ac?this.ac.sampleRate:44100)}this.offlineAc.decodeAudioData(c,(function(e){d(e)}).bind(this),b)},setPeaks:function(b){this.peaks=b},getPeaks:function(d){if(this.peaks){return this.peaks}var e=this.buffer.length/d;var n=~~(e/10)||1;var o=this.buffer.numberOfChannels;var h=[];var t=[];for(var p=0;p<o;p++){var r=h[p]=[];var f=this.buffer.getChannelData(p);for(var m=0;m<d;m++){var b=~~(m*e);var g=~~(b+e);var l=0;var q=0;for(var k=b;k<g;k+=n){var s=f[k];if(s>q){q=s}if(s<l){l=s}}r[2*m]=q;r[2*m+1]=l;if(p==0||q>t[2*m]){t[2*m]=q}if(p==0||l<t[2*m+1]){t[2*m+1]=l}}}return this.params.splitChannels?h:t},getPlayedPercents:function(){return this.state.getPlayedPercents.call(this)},disconnectSource:function(){if(this.source){this.source.disconnect()}},destroy:function(){if(!this.isPaused()){this.pause()}this.unAll();this.buffer=null;this.disconnectFilters();this.disconnectSource();this.gainNode.disconnect();this.scriptNode.disconnect();this.analyser.disconnect()},load:function(b){this.startPosition=0;this.lastPlay=this.ac.currentTime;this.buffer=b;this.createSource()},createSource:function(){this.disconnectSource();this.source=this.ac.createBufferSource();this.source.start=this.source.start||this.source.noteGrainOn;this.source.stop=this.source.stop||this.source.noteOff;this.source.playbackRate.value=this.playbackRate;this.source.buffer=this.buffer;this.source.connect(this.analyser)},isPaused:function(){return this.state!==this.states[this.PLAYING_STATE]},getDuration:function(){if(!this.buffer){return 0}return this.buffer.duration},seekTo:function(c,b){if(!this.buffer){return}this.scheduledPause=null;if(c==null){c=this.getCurrentTime();if(c>=this.getDuration()){c=0}}if(b==null){b=this.getDuration()}this.startPosition=c;this.lastPlay=this.ac.currentTime;if(this.state===this.states[this.FINISHED_STATE]){this.setState(this.PAUSED_STATE)}return{start:c,end:b}},getPlayedTime:function(){return(this.ac.currentTime-this.lastPlay)*this.playbackRate},play:function(d,c){if(!this.buffer){return}this.createSource();var b=this.seekTo(d,c);d=b.start;c=b.end;this.scheduledPause=c;this.source.start(0,d,c-d);this.setState(this.PLAYING_STATE);this.fireEvent("play")},pause:function(){this.scheduledPause=null;this.startPosition+=this.getPlayedTime();this.source&&this.source.stop(0);this.setState(this.PAUSED_STATE);this.fireEvent("pause")},getCurrentTime:function(){return this.state.getCurrentTime.call(this)},setPlaybackRate:function(b){b=b||1;if(this.isPaused()){this.playbackRate=b}else{this.pause();this.playbackRate=b;this.play()}}};a.WebAudio.state={};a.WebAudio.state.playing={init:function(){this.addOnAudioProcess()},getPlayedPercents:function(){var b=this.getDuration();return(this.getCurrentTime()/b)||0},getCurrentTime:function(){return this.startPosition+this.getPlayedTime()}};a.WebAudio.state.paused={init:function(){this.removeOnAudioProcess()},getPlayedPercents:function(){var b=this.getDuration();return(this.getCurrentTime()/b)||0},getCurrentTime:function(){return this.startPosition}};a.WebAudio.state.finished={init:function(){this.removeOnAudioProcess();this.fireEvent("finish")},getPlayedPercents:function(){return 1},getCurrentTime:function(){return this.getDuration()}};a.util.extend(a.WebAudio,a.Observer);"use strict";a.MediaElement=Object.create(a.WebAudio);a.util.extend(a.MediaElement,{init:function(b){this.params=b;this.media={currentTime:0,duration:0,paused:true,playbackRate:1,play:function(){},pause:function(){}};this.mediaType=b.mediaType.toLowerCase();this.elementPosition=b.elementPosition;this.setPlaybackRate(this.params.audioRate);this.createTimer()},createTimer:function(){var d=this;var c=false;var b=function(){if(d.isPaused()){return}d.fireEvent("audioprocess",d.getCurrentTime());var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame;e(b)};this.on("play",b)},load:function(d,b,c){var f=this;var e=document.createElement(this.mediaType);e.controls=this.params.mediaControls;e.autoplay=this.params.autoplay||false;e.preload="auto";e.src=d;e.style.width="100%";var g=b.querySelector(this.mediaType);if(g){b.removeChild(g)}b.appendChild(e);this._load(e,c)},loadElt:function(c,b){var e=this;var d=c;d.controls=this.params.mediaControls;d.autoplay=this.params.autoplay||false;this._load(d,b)},_load:function(d,b){var c=this;d.load();d.addEventListener("error",function(){c.fireEvent("error","Error loading media element")});d.addEventListener("canplay",function(){c.fireEvent("canplay")});d.addEventListener("ended",function(){c.fireEvent("finish")});this.media=d;this.peaks=b;this.onPlayEnd=null;this.buffer=null;this.setPlaybackRate(this.playbackRate)},isPaused:function(){return !this.media||this.media.paused},getDuration:function(){var b=this.media.duration;if(b>=Infinity){b=this.media.seekable.end(0)}return b},getCurrentTime:function(){return this.media&&this.media.currentTime},getPlayedPercents:function(){return(this.getCurrentTime()/this.getDuration())||0},setPlaybackRate:function(b){this.playbackRate=b||1;this.media.playbackRate=this.playbackRate},seekTo:function(b){if(b!=null){this.media.currentTime=b}this.clearPlayEnd()},play:function(c,b){this.seekTo(c);this.media.play();b&&this.setPlayEnd(b);this.fireEvent("play")},pause:function(){this.media&&this.media.pause();this.clearPlayEnd();this.fireEvent("pause")},setPlayEnd:function(b){var c=this;this.onPlayEnd=function(d){if(d>=b){c.pause();c.seekTo(b)}};this.on("audioprocess",this.onPlayEnd)},clearPlayEnd:function(){if(this.onPlayEnd){this.un("audioprocess",this.onPlayEnd);this.onPlayEnd=null}},getPeaks:function(b){if(this.buffer){return a.WebAudio.getPeaks.call(this,b)}return this.peaks||[]},getVolume:function(){return this.media.volume},setVolume:function(b){this.media.volume=b},destroy:function(){this.pause();this.unAll();this.media&&this.media.parentNode&&this.media.parentNode.removeChild(this.media);this.media=null}});a.AudioElement=a.MediaElement;"use strict";a.Drawer={init:function(b,c){this.container=b;this.params=c;this.width=0;this.height=c.height*this.params.pixelRatio;this.lastPos=0;this.initDrawer(c);this.createWrapper();this.createElements()},createWrapper:function(){this.wrapper=this.container.appendChild(document.createElement("wave"));this.style(this.wrapper,{display:"block",position:"relative",userSelect:"none",webkitUserSelect:"none",height:this.params.height+"px"});if(this.params.fillParent||this.params.scrollParent){this.style(this.wrapper,{width:"100%",overflowX:this.params.hideScrollbar?"hidden":"auto",overflowY:"hidden"})}this.setupWrapperEvents()},handleEvent:function(g,c){!c&&g.preventDefault();var f=g.targetTouches?g.targetTouches[0].clientX:g.clientX;var h=this.wrapper.getBoundingClientRect();var i=this.width;var d=this.getWidth();var b;if(!this.params.fillParent&&i<d){b=((f-h.left)*this.params.pixelRatio/i)||0;if(b>1){b=1}}else{b=((f-h.left+this.wrapper.scrollLeft)/this.wrapper.scrollWidth)||0}return b},setupWrapperEvents:function(){var b=this;this.wrapper.addEventListener("click",function(c){var f=b.wrapper.offsetHeight-b.wrapper.clientHeight;if(f!=0){var d=b.wrapper.getBoundingClientRect();if(c.clientY>=d.bottom-f){return}}if(b.params.interact){b.fireEvent("click",c,b.handleEvent(c))}});this.wrapper.addEventListener("scroll",function(c){b.fireEvent("scroll",c)})},drawPeaks:function(b,c){this.resetScroll();this.setWidth(c);this.params.barWidth?this.drawBars(b):this.drawWave(b)},style:function(b,c){Object.keys(c).forEach(function(d){if(b.style[d]!==c[d]){b.style[d]=c[d]}});return b},resetScroll:function(){if(this.wrapper!==null){this.wrapper.scrollLeft=0}},recenter:function(c){var b=this.wrapper.scrollWidth*c;this.recenterOnPosition(b,true)},recenterOnPosition:function(b,c){var i=this.wrapper.scrollLeft;var f=~~(this.wrapper.clientWidth/2);var g=b-f;var h=g-i;var e=this.wrapper.scrollWidth-this.wrapper.clientWidth;if(e==0){return}if(!c&&-f<=h&&h<f){var d=5;h=Math.max(-d,Math.min(d,h));g=i+h}g=Math.max(0,Math.min(e,g));if(g!=i){this.wrapper.scrollLeft=g}},getWidth:function(){return Math.round(this.container.clientWidth*this.params.pixelRatio)},setWidth:function(b){this.width=b;if(this.params.fillParent||this.params.scrollParent){this.style(this.wrapper,{width:""})}else{this.style(this.wrapper,{width:~~(this.width/this.params.pixelRatio)+"px"})}this.updateSize()},setHeight:function(b){if(b==this.height){return}this.height=b;this.style(this.wrapper,{height:~~(this.height/this.params.pixelRatio)+"px"});this.updateSize()},progress:function(c){var b=1/this.params.pixelRatio;var e=Math.round(c*this.width)*b;if(e<this.lastPos||e-this.lastPos>=b){this.lastPos=e;if(this.params.scrollParent&&this.params.autoCenter){var d=~~(this.wrapper.scrollWidth*c);this.recenterOnPosition(d)}this.updateProgress(c)}},destroy:function(){this.unAll();if(this.wrapper){this.container.removeChild(this.wrapper);this.wrapper=null}},initDrawer:function(){},createElements:function(){},updateSize:function(){},drawWave:function(c,b){},clearWave:function(){},updateProgress:function(b){}};a.util.extend(a.Drawer,a.Observer);"use strict";a.Drawer.Canvas=Object.create(a.Drawer);a.util.extend(a.Drawer.Canvas,{createElements:function(){var c=this.wrapper.appendChild(this.style(document.createElement("canvas"),{position:"absolute",zIndex:1,left:0,top:0,bottom:0}));this.waveCc=c.getContext("2d");this.progressWave=this.wrapper.appendChild(this.style(document.createElement("wave"),{position:"absolute",zIndex:2,left:0,top:0,bottom:0,overflow:"hidden",width:"0",display:"none",boxSizing:"border-box",borderRightStyle:"solid",borderRightWidth:this.params.cursorWidth+"px",borderRightColor:this.params.cursorColor}));if(this.params.waveColor!=this.params.progressColor){var b=this.progressWave.appendChild(document.createElement("canvas"));this.progressCc=b.getContext("2d")}},updateSize:function(){var b=Math.round(this.width/this.params.pixelRatio);this.waveCc.canvas.width=this.width;this.waveCc.canvas.height=this.height;this.style(this.waveCc.canvas,{width:b+"px"});this.style(this.progressWave,{display:"block"});if(this.progressCc){this.progressCc.canvas.width=this.width;this.progressCc.canvas.height=this.height;this.style(this.progressCc.canvas,{width:b+"px"})}this.clearWave()},clearWave:function(){this.waveCc.clearRect(0,0,this.width,this.height);if(this.progressCc){this.progressCc.clearRect(0,0,this.width,this.height)}},drawBars:function(n,e){if(n[0] instanceof Array){var i=n;if(this.params.splitChannels){this.setHeight(i.length*this.params.height*this.params.pixelRatio);i.forEach(this.drawBars,this);return}else{n=i[0]}}var k=[].some.call(n,function(q){return q<0});if(k){n=[].filter.call(n,function(r,q){return q%2==0})}var h=0.5/this.params.pixelRatio;var b=this.width;var o=this.params.height*this.params.pixelRatio;var g=o*e||0;var j=o/2;var c=n.length;var l=this.params.barWidth*this.params.pixelRatio;var m=Math.max(this.params.pixelRatio,~~(l/2));var d=l+m;var p=1;if(this.params.normalize){p=a.util.max(n)}var f=c/b;this.waveCc.fillStyle=this.params.waveColor;if(this.progressCc){this.progressCc.fillStyle=this.params.progressColor}[this.waveCc,this.progressCc].forEach(function(s){if(!s){return}for(var q=0;q<b;q+=d){var r=Math.round(n[Math.floor(q*f)]/p*j);s.fillRect(q+h,j-r+g,l+h,r*2)}},this)},drawWave:function(p,d){if(p[0] instanceof Array){var l=p;if(this.params.splitChannels){this.setHeight(l.length*this.params.height*this.params.pixelRatio);l.forEach(this.drawWave,this);return}else{p=l[0]}}var b=[].some.call(p,function(i){return i<0});if(!b){var g=[];for(var k=0,n=p.length;k<n;k++){g[2*k]=p[k];g[2*k+1]=-p[k]}p=g}var j=0.5/this.params.pixelRatio;var q=this.params.height*this.params.pixelRatio;var h=q*d||0;var m=q/2;var c=~~(p.length/2);var e=1;if(this.params.fillParent&&this.width!=c){e=this.width/c}var r=1;if(this.params.normalize){var o=a.util.max(p);var f=a.util.min(p);r=-f>o?-f:o}this.waveCc.fillStyle=this.params.waveColor;if(this.progressCc){this.progressCc.fillStyle=this.params.progressColor}[this.waveCc,this.progressCc].forEach(function(u){if(!u){return}u.beginPath();u.moveTo(j,m+h);for(var s=0;s<c;s++){var t=Math.round(p[2*s]/r*m);u.lineTo(s*e+j,m-t+h)}for(var s=c-1;s>=0;s--){var t=Math.round(p[2*s+1]/r*m);u.lineTo(s*e+j,m-t+h)}u.closePath();u.fill();u.fillRect(0,m+h-j,this.width,j)},this)},updateProgress:function(b){var c=Math.round(this.width*b)/this.params.pixelRatio;this.style(this.progressWave,{width:c+"px"})},getImage:function(b,c){return this.waveCc.canvas.toDataURL(b,c)}});"use strict";a.Drawer.MultiCanvas=Object.create(a.Drawer);a.util.extend(a.Drawer.MultiCanvas,{initDrawer:function(b){this.maxCanvasWidth=b.maxCanvasWidth!=null?b.maxCanvasWidth:4000;this.maxCanvasElementWidth=Math.round(this.maxCanvasWidth/this.params.pixelRatio);if(this.maxCanvasWidth<=1){throw"maxCanvasWidth must be greater than 1."}else{if(this.maxCanvasWidth%2==1){throw"maxCanvasWidth must be an even number."}}this.hasProgressCanvas=this.params.waveColor!=this.params.progressColor;this.halfPixel=0.5/this.params.pixelRatio;this.canvases=[]},createElements:function(){this.progressWave=this.wrapper.appendChild(this.style(document.createElement("wave"),{position:"absolute",zIndex:2,left:0,top:0,bottom:0,overflow:"hidden",width:"0",display:"none",boxSizing:"border-box",borderRightStyle:"solid",borderRightWidth:this.params.cursorWidth+"px",borderRightColor:this.params.cursorColor}));this.addCanvas()},updateSize:function(){var c=Math.round(this.width/this.params.pixelRatio),d=Math.ceil(c/this.maxCanvasElementWidth);while(this.canvases.length<d){this.addCanvas()}while(this.canvases.length>d){this.removeCanvas()}for(var e in this.canvases){var b=this.maxCanvasWidth+2*Math.ceil(this.params.pixelRatio/2);if(e==this.canvases.length-1){b=this.width-(this.maxCanvasWidth*(this.canvases.length-1))}this.updateDimensions(this.canvases[e],b,this.height);this.clearWaveForEntry(this.canvases[e])}},addCanvas:function(){var b={},c=this.maxCanvasElementWidth*this.canvases.length;b.wave=this.wrapper.appendChild(this.style(document.createElement("canvas"),{position:"absolute",zIndex:1,left:c+"px",top:0,bottom:0}));b.waveCtx=b.wave.getContext("2d");if(this.hasProgressCanvas){b.progress=this.progressWave.appendChild(this.style(document.createElement("canvas"),{position:"absolute",left:c+"px",top:0,bottom:0}));b.progressCtx=b.progress.getContext("2d")}this.canvases.push(b)},removeCanvas:function(){var b=this.canvases.pop();b.wave.parentElement.removeChild(b.wave);if(this.hasProgressCanvas){b.progress.parentElement.removeChild(b.progress)}},updateDimensions:function(e,d,c){var f=Math.round(d/this.params.pixelRatio),b=Math.round(this.width/this.params.pixelRatio);e.start=(e.waveCtx.canvas.offsetLeft/b)||0;e.end=e.start+f/b;e.waveCtx.canvas.width=d;e.waveCtx.canvas.height=c;this.style(e.waveCtx.canvas,{width:f+"px"});this.style(this.progressWave,{display:"block"});if(this.hasProgressCanvas){e.progressCtx.canvas.width=d;e.progressCtx.canvas.height=c;this.style(e.progressCtx.canvas,{width:f+"px"})}},clearWave:function(){for(var b in this.canvases){this.clearWaveForEntry(this.canvases[b])}},clearWaveForEntry:function(b){b.waveCtx.clearRect(0,0,b.waveCtx.canvas.width,b.waveCtx.canvas.height);if(this.hasProgressCanvas){b.progressCtx.clearRect(0,0,b.progressCtx.canvas.width,b.progressCtx.canvas.height)}},drawBars:function(q,e){if(q[0] instanceof Array){var l=q;if(this.params.splitChannels){this.setHeight(l.length*this.params.height*this.params.pixelRatio);l.forEach(this.drawBars,this);return}else{q=l[0]}}var n=[].some.call(q,function(h){return h<0});if(n){q=[].filter.call(q,function(i,h){return h%2==0})}var b=this.width;var r=this.params.height*this.params.pixelRatio;var j=r*e||0;var m=r/2;var c=q.length;var o=this.params.barWidth*this.params.pixelRatio;var p=Math.max(this.params.pixelRatio,~~(o/2));var d=o+p;var s=1;if(this.params.normalize){s=a.util.max(q)}var f=c/b;for(var g=0;g<b;g+=d){var k=Math.round(q[Math.floor(g*f)]/s*m);this.fillRect(g+this.halfPixel,m-k+j,o+this.halfPixel,k*2)}},drawWave:function(m,c){if(m[0] instanceof Array){var h=m;if(this.params.splitChannels){this.setHeight(h.length*this.params.height*this.params.pixelRatio);h.forEach(this.drawWave,this);return}else{m=h[0]}}var b=[].some.call(m,function(i){return i<0});if(!b){var e=[];for(var g=0,k=m.length;g<k;g++){e[2*g]=m[g];e[2*g+1]=-m[g]}m=e}var n=this.params.height*this.params.pixelRatio;var f=n*c||0;var j=n/2;var o=1;if(this.params.normalize){var l=a.util.max(m);var d=a.util.min(m);o=-d>l?-d:l}this.drawLine(m,o,j,f);this.fillRect(0,j+f-this.halfPixel,this.width,this.halfPixel)},drawLine:function(b,d,g,f){for(var c in this.canvases){var e=this.canvases[c];this.setFillStyles(e);this.drawLineToContext(e,e.waveCtx,b,d,g,f);this.drawLineToContext(e,e.progressCtx,b,d,g,f)}},drawLineToContext:function(l,n,k,o,j,e){if(!n){return}var b=k.length/2;var c=1;if(this.params.fillParent&&this.width!=b){c=this.width/b}var g=Math.round(b*l.start),m=Math.round(b*l.end);n.beginPath();n.moveTo(this.halfPixel,j+e);for(var d=g;d<m;d++){var f=Math.round(k[2*d]/o*j);n.lineTo((d-g)*c+this.halfPixel,j-f+e)}for(var d=m-1;d>=g;d--){var f=Math.round(k[2*d+1]/o*j);n.lineTo((d-g)*c+this.halfPixel,j-f+e)}n.closePath();n.fill()},fillRect:function(c,j,e,b){for(var d in this.canvases){var f=this.canvases[d],g=d*this.maxCanvasWidth;var h={x1:Math.max(c,d*this.maxCanvasWidth),y1:j,x2:Math.min(c+e,d*this.maxCanvasWidth+f.waveCtx.canvas.width),y2:j+b};if(h.x1<h.x2){this.setFillStyles(f);this.fillRectToContext(f.waveCtx,h.x1-g,h.y1,h.x2-h.x1,h.y2-h.y1);this.fillRectToContext(f.progressCtx,h.x1-g,h.y1,h.x2-h.x1,h.y2-h.y1)}}},fillRectToContext:function(d,c,f,e,b){if(!d){return}d.fillRect(c,f,e,b)},setFillStyles:function(b){b.waveCtx.fillStyle=this.params.waveColor;if(this.hasProgressCanvas){b.progressCtx.fillStyle=this.params.progressColor}},updateProgress:function(b){var c=Math.round(this.width*b)/this.params.pixelRatio;this.style(this.progressWave,{width:c+"px"})}});"use strict";(function(){var b=function(){var c=document.querySelectorAll("wavesurfer");Array.prototype.forEach.call(c,function(f){var g=a.util.extend({container:f,backend:"MediaElement",mediaControls:true},f.dataset);f.style.display="block";var d=a.create(g);if(f.dataset.peaks){var e=JSON.parse(f.dataset.peaks)}d.load(f.dataset.url,e)})};if(document.readyState==="complete"){b()}else{window.addEventListener("load",b)}}());return a}));
/**!
 * lg-share.js | 0.0.1 | August 1st 2016
 * http://sachinchoolur.github.io/lg-share.js
 * Copyright (c) 2016 Sachin N;
 * @license Apache 2.0
 */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgShare = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgAudio = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var audioOptions = {
        audios: [],
        audio: true
    };

    var Audio = function Audio(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, audioOptions, this.core.s);

        if (this.core.s.audio) {
            this.init();
        }

        return this;
    };

    Audio.prototype.init = function () {
        var _this = this;

        var audioprocess_format = function(current_time, duration){
            var audioprocess = '';
            if(current_time > 3600){
                audioprocess += (Math.floor(current_time/3600) >= 10 ? '':'0') + Math.floor(current_time/3600) + ':';
                current_time = current_time%3600;
            }else if(duration > 3600){
                audioprocess += '00:';
            }
            if(current_time > 60){
                audioprocess += (Math.floor(current_time/60) >= 10 ? '':'0') + Math.floor(current_time/60) + ':';
                current_time = current_time%60;
            }else if(duration > 60){
                audioprocess += '00:';
            }
            audioprocess += (Math.floor(current_time) >= 10 ? '':'0') + Math.floor(current_time) + ' / ';
            if(duration > 3600){
                audioprocess += (Math.floor(duration/3600) >= 10 ? '':'0') + Math.floor(duration/3600) + ':';
                duration = duration%3600;
            }
            if(duration > 60){
                audioprocess += (Math.floor(duration/60) >= 10 ? '':'0') + Math.floor(duration/60) + ':';
                duration = duration%60;
            }
            audioprocess += (Math.floor(duration) >= 10 ? '':'0') + Math.floor(duration);
            return audioprocess;
        };

        var loadWavesurfer = function(index){
            try {
                if(_this.core.s.audios[String(index)] == undefined){
                    var _uid = $(_this.core.___slide[index]).attr('lg-event-uid');
                    var wavesurfer = WaveSurfer.create({
                        barWidth: 3,
                        height: 100,
                        hideScrollbar: true,
                        scrollParent: true,
                        container: '.lg-item[lg-event-uid="'+_uid+'"] #waveform',
                        cursorColor: '#4d4d4d',
                        waveColor: '#808080',
                        progressColor: '#4285f4'
                    });
                    wavesurfer.load(_this.core.items[index].getAttribute('data-src'));
                    _this.core.s.audios[String(index)] = wavesurfer;
                    wavesurfer.on('ready', function(){
                        var _uid = $(_this.core.___slide[index]).attr('lg-event-uid');
                        $('.lg-item[lg-event-uid="'+ _uid +'"]').children('.lg-img-wrap').children('.lg-video-cont').children('.lg-video').children('.lg-object').children('.lg-audio-container').children('.lg-audio-body').children('.lg-audio-toolbar').children('#btn-group').addClass( 'open' );

                        $('.lg-item[lg-event-uid="'+ _uid +'"]').children('.lg-img-wrap').children('.lg-video-cont').children('.lg-video').children('.lg-object').children('.lg-audio-container').children('.lg-audio-body').children('.lg-audio-toolbar').children('#btn-group').children('.btn-audio-play-pause').on('click', function(){
                            _this.core.s.audios[String(index)].playPause();
                            $(this).toggleClass('playing');
                        });
                        $('.lg-item[lg-event-uid="'+ _uid +'"]').children('.lg-img-wrap').children('.lg-video-cont').children('.lg-video').children('.lg-object').children('.lg-audio-container').children('.lg-audio-body').children('.lg-audio-toolbar').children('#btn-group').children('.btn-audio-toggle-mute').on('click', function(){
                            _this.core.s.audios[String(index)].toggleMute();
                            $(this).toggleClass('off');
                        });

                        $('.lg-item[lg-event-uid="'+ _uid +'"]').children('.lg-img-wrap').children('.lg-video-cont').children('.lg-video').children('.lg-object').children('.lg-audio-container').children('.lg-audio-body').children('.lg-audio-toolbar').children('#lg-audio-process').html( audioprocess_format(wavesurfer.getCurrentTime(), wavesurfer.getDuration()) );
                    });
                    wavesurfer.on('audioprocess', function () {
                        var _uid = $(_this.core.___slide[index]).attr('lg-event-uid');
                        $('.lg-item[lg-event-uid="'+ _uid +'"]').children('.lg-img-wrap').children('.lg-video-cont').children('.lg-video').children('.lg-object').children('.lg-audio-container').children('.lg-audio-body').children('.lg-audio-toolbar').children('#lg-audio-process').html( audioprocess_format(wavesurfer.getCurrentTime(), wavesurfer.getDuration()) );
                    });
                    wavesurfer.on('finish', function () {
                        var _uid = $(_this.core.___slide[index]).attr('lg-event-uid');
                        $('.lg-item[lg-event-uid="'+ _uid +'"]').children('.lg-img-wrap').children('.lg-video-cont').children('.lg-video').children('.lg-object').children('.lg-audio-container').children('.lg-audio-body').children('.lg-audio-toolbar').children('#btn-group').children('.btn-audio-play-pause').removeClass('playing');
                    });
                }
            } catch (e) {
                // console.log("wavesurfer can't play. try again ...");
                setTimeout(function(){ loadWavesurfer(index); }, 100);
            }
        };

        utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
            var _audio = _this.core.items[event.detail.index].getAttribute('data-cus-type');
            if(_audio && _audio === "audio"){
                loadWavesurfer(event.detail.index);
            }
        });

        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function (event) {
            if(_this.core.s.audios[String(event.detail.prevIndex)] != undefined && _this.core.s.audios[String(event.detail.prevIndex)].isPlaying()){
                _this.core.s.audios[String(event.detail.prevIndex)].pause();
                var _uid = $(_this.core.___slide[event.detail.prevIndex]).attr('lg-event-uid');
                $('.lg-item[lg-event-uid="'+ _uid +'"]').children('.lg-img-wrap').children('.lg-video-cont').children('.lg-video').children('.lg-object').children('.lg-audio-container').children('.lg-audio-body').children('.lg-audio-toolbar').children('#btn-group').children('.btn-audio-play-pause').removeClass('playing');
            }
        });
    };

    Audio.prototype.destroy = function () {
        var _this = this;
        $.each(_this.core.s.audios, function(idx, val){
            if(val !== undefined) val.destroy();
        });
        _this.core.s.audios = [];
    };

    window.lgModules.audio = Audio;
});

},{}]},{},[1])(1)
});

/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed MIT */

!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass(a.options.activeClass),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass(a.options.activeClass),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass(f.enabledClass)),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(a){return function(){a.pane.removeClass(a.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});
//# sourceMappingURL=jquery.nanoscroller.min.js.map
/*!
 * Cropper.js v0.8.1
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-09-03T04:55:16.458Z
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _defaults = __webpack_require__(1);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _render = __webpack_require__(3);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _preview = __webpack_require__(5);
	
	var _preview2 = _interopRequireDefault(_preview);
	
	var _events = __webpack_require__(6);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _handlers = __webpack_require__(7);
	
	var _handlers2 = _interopRequireDefault(_handlers);
	
	var _change = __webpack_require__(8);
	
	var _change2 = _interopRequireDefault(_change);
	
	var _methods = __webpack_require__(9);
	
	var _methods2 = _interopRequireDefault(_methods);
	
	var _utilities = __webpack_require__(4);
	
	var $ = _interopRequireWildcard(_utilities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Constants
	var NAMESPACE = 'cropper';
	
	// Classes
	var CLASS_HIDDEN = NAMESPACE + '-hidden';
	
	// Events
	var EVENT_ERROR = 'error';
	var EVENT_LOAD = 'load';
	var EVENT_READY = 'ready';
	var EVENT_CROP = 'crop';
	
	// RegExps
	var REGEXP_DATA_URL = /^data:/;
	var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg.*;base64,/;
	
	var AnotherCropper = void 0;
	
	var Cropper = function () {
	  function Cropper(element, options) {
	    _classCallCheck(this, Cropper);
	
	    var self = this;
	
	    self.element = element;
	    self.options = $.extend({}, _defaults2.default, $.isPlainObject(options) && options);
	    self.loaded = false;
	    self.ready = false;
	    self.complete = false;
	    self.rotated = false;
	    self.cropped = false;
	    self.disabled = false;
	    self.replaced = false;
	    self.limited = false;
	    self.wheeling = false;
	    self.isImg = false;
	    self.originalUrl = '';
	    self.canvasData = null;
	    self.cropBoxData = null;
	    self.previews = null;
	    self.init();
	  }
	
	  _createClass(Cropper, [{
	    key: 'init',
	    value: function init() {
	      var self = this;
	      var element = self.element;
	      var tagName = element.tagName.toLowerCase();
	      var url = void 0;
	
	      if ($.getData(element, NAMESPACE)) {
	        return;
	      }
	
	      $.setData(element, NAMESPACE, self);
	
	      if (tagName === 'img') {
	        self.isImg = true;
	
	        // e.g.: "img/picture.jpg"
	        self.originalUrl = url = element.getAttribute('src');
	
	        // Stop when it's a blank image
	        if (!url) {
	          return;
	        }
	
	        // e.g.: "http://example.com/img/picture.jpg"
	        url = element.src;
	      } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
	        url = element.toDataURL();
	      }
	
	      self.load(url);
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      var self = this;
	      var options = self.options;
	      var element = self.element;
	
	      if (!url) {
	        return;
	      }
	
	      self.url = url;
	      self.imageData = {};
	
	      if (!options.checkOrientation || !window.ArrayBuffer) {
	        self.clone();
	        return;
	      }
	
	      // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
	      if (REGEXP_DATA_URL.test(url)) {
	        if (REGEXP_DATA_URL_JPEG) {
	          self.read($.dataURLToArrayBuffer(url));
	        } else {
	          self.clone();
	        }
	        return;
	      }
	
	      var xhr = new XMLHttpRequest();
	
	      xhr.onerror = xhr.onabort = function () {
	        self.clone();
	      };
	
	      xhr.onload = function () {
	        self.read(xhr.response);
	      };
	
	      if (options.checkCrossOrigin && $.isCrossOriginURL(url) && element.crossOrigin) {
	        url = $.addTimestamp(url);
	      }
	
	      xhr.open('get', url);
	      xhr.responseType = 'arraybuffer';
	      xhr.send();
	    }
	  }, {
	    key: 'read',
	    value: function read(arrayBuffer) {
	      var self = this;
	      var options = self.options;
	      var orientation = $.getOrientation(arrayBuffer);
	      var imageData = self.imageData;
	      var rotate = 0;
	      var scaleX = 1;
	      var scaleY = 1;
	
	      if (orientation > 1) {
	        self.url = $.arrayBufferToDataURL(arrayBuffer);
	
	        switch (orientation) {
	
	          // flip horizontal
	          case 2:
	            scaleX = -1;
	            break;
	
	          // rotate left 180°
	          case 3:
	            rotate = -180;
	            break;
	
	          // flip vertical
	          case 4:
	            scaleY = -1;
	            break;
	
	          // flip vertical + rotate right 90°
	          case 5:
	            rotate = 90;
	            scaleY = -1;
	            break;
	
	          // rotate right 90°
	          case 6:
	            rotate = 90;
	            break;
	
	          // flip horizontal + rotate right 90°
	          case 7:
	            rotate = 90;
	            scaleX = -1;
	            break;
	
	          // rotate left 90°
	          case 8:
	            rotate = -90;
	            break;
	        }
	      }
	
	      if (options.rotatable) {
	        imageData.rotate = rotate;
	      }
	
	      if (options.scalable) {
	        imageData.scaleX = scaleX;
	        imageData.scaleY = scaleY;
	      }
	
	      self.clone();
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var self = this;
	      var element = self.element;
	      var url = self.url;
	      var crossOrigin = void 0;
	      var crossOriginUrl = void 0;
	      var start = void 0;
	      var stop = void 0;
	
	      if (self.options.checkCrossOrigin && $.isCrossOriginURL(url)) {
	        crossOrigin = element.crossOrigin;
	
	        if (crossOrigin) {
	          crossOriginUrl = url;
	        } else {
	          crossOrigin = 'anonymous';
	
	          // Bust cache when there is not a "crossOrigin" property
	          crossOriginUrl = $.addTimestamp(url);
	        }
	      }
	
	      self.crossOrigin = crossOrigin;
	      self.crossOriginUrl = crossOriginUrl;
	
	      var image = $.createElement('img');
	
	      if (crossOrigin) {
	        image.crossOrigin = crossOrigin;
	      }
	
	      image.src = crossOriginUrl || url;
	      self.image = image;
	      self.onStart = start = $.proxy(self.start, self);
	      self.onStop = stop = $.proxy(self.stop, self);
	
	      if (self.isImg) {
	        if (element.complete) {
	          self.start();
	        } else {
	          $.addListener(element, EVENT_LOAD, start);
	        }
	      } else {
	        $.addListener(image, EVENT_LOAD, start);
	        $.addListener(image, EVENT_ERROR, stop);
	        $.addClass(image, 'cropper-hide');
	        element.parentNode.insertBefore(image, element.nextSibling);
	      }
	    }
	  }, {
	    key: 'start',
	    value: function start(event) {
	      var self = this;
	      var image = self.isImg ? self.element : self.image;
	
	      if (event) {
	        $.removeListener(image, EVENT_LOAD, self.onStart);
	        $.removeListener(image, EVENT_ERROR, self.onStop);
	      }
	
	      $.getImageSize(image, function (naturalWidth, naturalHeight) {
	        $.extend(self.imageData, {
	          naturalWidth: naturalWidth,
	          naturalHeight: naturalHeight,
	          aspectRatio: naturalWidth / naturalHeight
	        });
	
	        self.loaded = true;
	        self.build();
	      });
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      var self = this;
	      var image = self.image;
	
	      $.removeListener(image, EVENT_LOAD, self.onStart);
	      $.removeListener(image, EVENT_ERROR, self.onStop);
	
	      $.removeChild(image);
	      self.image = null;
	    }
	  }, {
	    key: 'build',
	    value: function build() {
	      var self = this;
	      var options = self.options;
	      var element = self.element;
	      var image = self.image;
	      var container = void 0;
	      var cropper = void 0;
	      var canvas = void 0;
	      var dragBox = void 0;
	      var cropBox = void 0;
	      var face = void 0;
	
	      if (!self.loaded) {
	        return;
	      }
	
	      // Unbuild first when replace
	      if (self.ready) {
	        self.unbuild();
	      }
	
	      var template = $.createElement('div');
	      template.innerHTML = _template2.default;
	
	      // Create cropper elements
	      self.container = container = element.parentNode;
	      self.cropper = cropper = $.getByClass(template, 'cropper-container')[0];
	      self.canvas = canvas = $.getByClass(cropper, 'cropper-canvas')[0];
	      self.dragBox = dragBox = $.getByClass(cropper, 'cropper-drag-box')[0];
	      self.cropBox = cropBox = $.getByClass(cropper, 'cropper-crop-box')[0];
	      self.viewBox = $.getByClass(cropper, 'cropper-view-box')[0];
	      self.face = face = $.getByClass(cropBox, 'cropper-face')[0];
	
	      $.appendChild(canvas, image);
	
	      // Hide the original image
	      $.addClass(element, CLASS_HIDDEN);
	
	      // Inserts the cropper after to the current image
	      container.insertBefore(cropper, element.nextSibling);
	
	      // Show the image if is hidden
	      if (!self.isImg) {
	        $.removeClass(image, 'cropper-hide');
	      }
	
	      self.initPreview();
	      self.bind();
	
	      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
	      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
	
	      if (options.autoCrop) {
	        self.cropped = true;
	
	        if (options.modal) {
	          $.addClass(dragBox, 'cropper-modal');
	        }
	      } else {
	        $.addClass(cropBox, CLASS_HIDDEN);
	      }
	
	      if (!options.guides) {
	        $.addClass($.getByClass(cropBox, 'cropper-dashed'), CLASS_HIDDEN);
	      }
	
	      if (!options.center) {
	        $.addClass($.getByClass(cropBox, 'cropper-center'), CLASS_HIDDEN);
	      }
	
	      if (options.background) {
	        $.addClass(cropper, 'cropper-bg');
	      }
	
	      if (!options.highlight) {
	        $.addClass(face, 'cropper-invisible');
	      }
	
	      if (options.cropBoxMovable) {
	        $.addClass(face, 'cropper-move');
	        $.setData(face, 'action', 'all');
	      }
	
	      if (!options.cropBoxResizable) {
	        $.addClass($.getByClass(cropBox, 'cropper-line'), CLASS_HIDDEN);
	        $.addClass($.getByClass(cropBox, 'cropper-point'), CLASS_HIDDEN);
	      }
	
	      self.setDragMode(options.dragMode);
	      self.render();
	      self.ready = true;
	      self.setData(options.data);
	
	      // Call the "ready" option asynchronously to keep "image.cropper" is defined
	      self.completing = setTimeout(function () {
	        if ($.isFunction(options.ready)) {
	          $.addListener(element, EVENT_READY, options.ready, true);
	        }
	
	        $.dispatchEvent(element, EVENT_READY);
	        $.dispatchEvent(element, EVENT_CROP, self.getData());
	
	        self.complete = true;
	      }, 0);
	    }
	  }, {
	    key: 'unbuild',
	    value: function unbuild() {
	      var self = this;
	
	      if (!self.ready) {
	        return;
	      }
	
	      if (!self.complete) {
	        clearTimeout(self.completing);
	      }
	
	      self.ready = false;
	      self.complete = false;
	      self.initialImageData = null;
	
	      // Clear `initialCanvasData` is necessary when replace
	      self.initialCanvasData = null;
	      self.initialCropBoxData = null;
	      self.containerData = null;
	      self.canvasData = null;
	
	      // Clear `cropBoxData` is necessary when replace
	      self.cropBoxData = null;
	      self.unbind();
	
	      self.resetPreview();
	      self.previews = null;
	
	      self.viewBox = null;
	      self.cropBox = null;
	      self.dragBox = null;
	      self.canvas = null;
	      self.container = null;
	
	      $.removeChild(self.cropper);
	      self.cropper = null;
	    }
	  }], [{
	    key: 'noConflict',
	    value: function noConflict() {
	      window.Cropper = AnotherCropper;
	      return Cropper;
	    }
	  }, {
	    key: 'setDefaults',
	    value: function setDefaults(options) {
	      $.extend(_defaults2.default, $.isPlainObject(options) && options);
	    }
	  }]);
	
	  return Cropper;
	}();
	
	$.extend(Cropper.prototype, _render2.default);
	$.extend(Cropper.prototype, _preview2.default);
	$.extend(Cropper.prototype, _events2.default);
	$.extend(Cropper.prototype, _handlers2.default);
	$.extend(Cropper.prototype, _change2.default);
	$.extend(Cropper.prototype, _methods2.default);
	
	if (typeof window !== 'undefined') {
	  AnotherCropper = window.Cropper;
	  window.Cropper = Cropper;
	}
	
	exports.default = Cropper;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  // Define the view mode of the cropper
	  viewMode: 0, // 0, 1, 2, 3
	
	  // Define the dragging mode of the cropper
	  dragMode: 'crop', // 'crop', 'move' or 'none'
	
	  // Define the aspect ratio of the crop box
	  aspectRatio: NaN,
	
	  // An object with the previous cropping result data
	  data: null,
	
	  // A selector for adding extra containers to preview
	  preview: '',
	
	  // Re-render the cropper when resize the window
	  responsive: true,
	
	  // Restore the cropped area after resize the window
	  restore: true,
	
	  // Check if the current image is a cross-origin image
	  checkCrossOrigin: true,
	
	  // Check the current image's Exif Orientation information
	  checkOrientation: true,
	
	  // Show the black modal
	  modal: true,
	
	  // Show the dashed lines for guiding
	  guides: true,
	
	  // Show the center indicator for guiding
	  center: true,
	
	  // Show the white modal to highlight the crop box
	  highlight: true,
	
	  // Show the grid background
	  background: true,
	
	  // Enable to crop the image automatically when initialize
	  autoCrop: true,
	
	  // Define the percentage of automatic cropping area when initializes
	  autoCropArea: 0.8,
	
	  // Enable to move the image
	  movable: true,
	
	  // Enable to rotate the image
	  rotatable: true,
	
	  // Enable to scale the image
	  scalable: true,
	
	  // Enable to zoom the image
	  zoomable: true,
	
	  // Enable to zoom the image by dragging touch
	  zoomOnTouch: true,
	
	  // Enable to zoom the image by wheeling mouse
	  zoomOnWheel: true,
	
	  // Define zoom ratio when zoom the image by wheeling mouse
	  wheelZoomRatio: 0.1,
	
	  // Enable to move the crop box
	  cropBoxMovable: true,
	
	  // Enable to resize the crop box
	  cropBoxResizable: true,
	
	  // Toggle drag mode between "crop" and "move" when click twice on the cropper
	  toggleDragModeOnDblclick: true,
	
	  // Size limitation
	  minCanvasWidth: 0,
	  minCanvasHeight: 0,
	  minCropBoxWidth: 0,
	  minCropBoxHeight: 0,
	  minContainerWidth: 200,
	  minContainerHeight: 100,
	
	  // Shortcuts of events
	  ready: null,
	  cropstart: null,
	  cropmove: null,
	  cropend: null,
	  crop: null,
	  zoom: null
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '<div class="cropper-container">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-action="e"></span>' + '<span class="cropper-line line-n" data-action="n"></span>' + '<span class="cropper-line line-w" data-action="w"></span>' + '<span class="cropper-line line-s" data-action="s"></span>' + '<span class="cropper-point point-e" data-action="e"></span>' + '<span class="cropper-point point-n" data-action="n"></span>' + '<span class="cropper-point point-w" data-action="w"></span>' + '<span class="cropper-point point-s" data-action="s"></span>' + '<span class="cropper-point point-ne" data-action="ne"></span>' + '<span class="cropper-point point-nw" data-action="nw"></span>' + '<span class="cropper-point point-sw" data-action="sw"></span>' + '<span class="cropper-point point-se" data-action="se"></span>' + '</div>' + '</div>';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utilities = __webpack_require__(4);
	
	var $ = _interopRequireWildcard(_utilities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  render: function render() {
	    var self = this;
	
	    self.initContainer();
	    self.initCanvas();
	    self.initCropBox();
	
	    self.renderCanvas();
	
	    if (self.cropped) {
	      self.renderCropBox();
	    }
	  },
	  initContainer: function initContainer() {
	    var self = this;
	    var options = self.options;
	    var element = self.element;
	    var container = self.container;
	    var cropper = self.cropper;
	    var containerData = void 0;
	
	    $.addClass(cropper, 'cropper-hidden');
	    $.removeClass(element, 'cropper-hidden');
	
	    self.containerData = containerData = {
	      width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
	      height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
	    };
	
	    $.setStyle(cropper, {
	      width: containerData.width,
	      height: containerData.height
	    });
	
	    $.addClass(element, 'cropper-hidden');
	    $.removeClass(cropper, 'cropper-hidden');
	  },
	
	
	  // Canvas (image wrapper)
	  initCanvas: function initCanvas() {
	    var self = this;
	    var viewMode = self.options.viewMode;
	    var containerData = self.containerData;
	    var imageData = self.imageData;
	    var rotated = Math.abs(imageData.rotate) === 90;
	    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
	    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
	    var aspectRatio = naturalWidth / naturalHeight;
	    var canvasWidth = containerData.width;
	    var canvasHeight = containerData.height;
	
	    if (containerData.height * aspectRatio > containerData.width) {
	      if (viewMode === 3) {
	        canvasWidth = containerData.height * aspectRatio;
	      } else {
	        canvasHeight = containerData.width / aspectRatio;
	      }
	    } else if (viewMode === 3) {
	      canvasHeight = containerData.width / aspectRatio;
	    } else {
	      canvasWidth = containerData.height * aspectRatio;
	    }
	
	    var canvasData = {
	      naturalWidth: naturalWidth,
	      naturalHeight: naturalHeight,
	      aspectRatio: aspectRatio,
	      width: canvasWidth,
	      height: canvasHeight
	    };
	
	    canvasData.oldLeft = canvasData.left = (containerData.width - canvasWidth) / 2;
	    canvasData.oldTop = canvasData.top = (containerData.height - canvasHeight) / 2;
	
	    self.canvasData = canvasData;
	    self.limited = viewMode === 1 || viewMode === 2;
	    self.limitCanvas(true, true);
	    self.initialImageData = $.extend({}, imageData);
	    self.initialCanvasData = $.extend({}, canvasData);
	  },
	  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
	    var self = this;
	    var options = self.options;
	    var viewMode = options.viewMode;
	    var containerData = self.containerData;
	    var canvasData = self.canvasData;
	    var aspectRatio = canvasData.aspectRatio;
	    var cropBoxData = self.cropBoxData;
	    var cropped = self.cropped && cropBoxData;
	    var minCanvasWidth = void 0;
	    var minCanvasHeight = void 0;
	    var newCanvasLeft = void 0;
	    var newCanvasTop = void 0;
	
	    if (sizeLimited) {
	      minCanvasWidth = Number(options.minCanvasWidth) || 0;
	      minCanvasHeight = Number(options.minCanvasHeight) || 0;
	
	      if (viewMode > 1) {
	        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
	        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
	
	        if (viewMode === 3) {
	          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
	            minCanvasWidth = minCanvasHeight * aspectRatio;
	          } else {
	            minCanvasHeight = minCanvasWidth / aspectRatio;
	          }
	        }
	      } else if (viewMode > 0) {
	        if (minCanvasWidth) {
	          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
	        } else if (minCanvasHeight) {
	          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
	        } else if (cropped) {
	          minCanvasWidth = cropBoxData.width;
	          minCanvasHeight = cropBoxData.height;
	
	          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
	            minCanvasWidth = minCanvasHeight * aspectRatio;
	          } else {
	            minCanvasHeight = minCanvasWidth / aspectRatio;
	          }
	        }
	      }
	
	      if (minCanvasWidth && minCanvasHeight) {
	        if (minCanvasHeight * aspectRatio > minCanvasWidth) {
	          minCanvasHeight = minCanvasWidth / aspectRatio;
	        } else {
	          minCanvasWidth = minCanvasHeight * aspectRatio;
	        }
	      } else if (minCanvasWidth) {
	        minCanvasHeight = minCanvasWidth / aspectRatio;
	      } else if (minCanvasHeight) {
	        minCanvasWidth = minCanvasHeight * aspectRatio;
	      }
	
	      canvasData.minWidth = minCanvasWidth;
	      canvasData.minHeight = minCanvasHeight;
	      canvasData.maxWidth = Infinity;
	      canvasData.maxHeight = Infinity;
	    }
	
	    if (positionLimited) {
	      if (viewMode) {
	        newCanvasLeft = containerData.width - canvasData.width;
	        newCanvasTop = containerData.height - canvasData.height;
	
	        canvasData.minLeft = Math.min(0, newCanvasLeft);
	        canvasData.minTop = Math.min(0, newCanvasTop);
	        canvasData.maxLeft = Math.max(0, newCanvasLeft);
	        canvasData.maxTop = Math.max(0, newCanvasTop);
	
	        if (cropped && self.limited) {
	          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
	          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
	          canvasData.maxLeft = cropBoxData.left;
	          canvasData.maxTop = cropBoxData.top;
	
	          if (viewMode === 2) {
	            if (canvasData.width >= containerData.width) {
	              canvasData.minLeft = Math.min(0, newCanvasLeft);
	              canvasData.maxLeft = Math.max(0, newCanvasLeft);
	            }
	
	            if (canvasData.height >= containerData.height) {
	              canvasData.minTop = Math.min(0, newCanvasTop);
	              canvasData.maxTop = Math.max(0, newCanvasTop);
	            }
	          }
	        }
	      } else {
	        canvasData.minLeft = -canvasData.width;
	        canvasData.minTop = -canvasData.height;
	        canvasData.maxLeft = containerData.width;
	        canvasData.maxTop = containerData.height;
	      }
	    }
	  },
	  renderCanvas: function renderCanvas(changed) {
	    var self = this;
	    var canvasData = self.canvasData;
	    var imageData = self.imageData;
	    var rotate = imageData.rotate;
	    var aspectRatio = void 0;
	    var rotatedData = void 0;
	
	    if (self.rotated) {
	      self.rotated = false;
	
	      // Computes rotated sizes with image sizes
	      rotatedData = $.getRotatedSizes({
	        width: imageData.width,
	        height: imageData.height,
	        degree: rotate
	      });
	
	      aspectRatio = rotatedData.width / rotatedData.height;
	
	      if (aspectRatio !== canvasData.aspectRatio) {
	        canvasData.left -= (rotatedData.width - canvasData.width) / 2;
	        canvasData.top -= (rotatedData.height - canvasData.height) / 2;
	        canvasData.width = rotatedData.width;
	        canvasData.height = rotatedData.height;
	        canvasData.aspectRatio = aspectRatio;
	        canvasData.naturalWidth = imageData.naturalWidth;
	        canvasData.naturalHeight = imageData.naturalHeight;
	
	        // Computes rotated sizes with natural image sizes
	        if (rotate % 180) {
	          rotatedData = $.getRotatedSizes({
	            width: imageData.naturalWidth,
	            height: imageData.naturalHeight,
	            degree: rotate
	          });
	
	          canvasData.naturalWidth = rotatedData.width;
	          canvasData.naturalHeight = rotatedData.height;
	        }
	
	        self.limitCanvas(true, false);
	      }
	    }
	
	    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
	      canvasData.left = canvasData.oldLeft;
	    }
	
	    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
	      canvasData.top = canvasData.oldTop;
	    }
	
	    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
	    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
	
	    self.limitCanvas(false, true);
	
	    canvasData.oldLeft = canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
	    canvasData.oldTop = canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
	
	    $.setStyle(self.canvas, {
	      width: canvasData.width,
	      height: canvasData.height,
	      left: canvasData.left,
	      top: canvasData.top
	    });
	
	    self.renderImage();
	
	    if (self.cropped && self.limited) {
	      self.limitCropBox(true, true);
	    }
	
	    if (changed) {
	      self.output();
	    }
	  },
	  renderImage: function renderImage(changed) {
	    var self = this;
	    var canvasData = self.canvasData;
	    var imageData = self.imageData;
	    var newImageData = void 0;
	    var reversedData = void 0;
	    var reversedWidth = void 0;
	    var reversedHeight = void 0;
	
	    if (imageData.rotate) {
	      reversedData = $.getRotatedSizes({
	        width: canvasData.width,
	        height: canvasData.height,
	        degree: imageData.rotate,
	        aspectRatio: imageData.aspectRatio
	      }, true);
	
	      reversedWidth = reversedData.width;
	      reversedHeight = reversedData.height;
	
	      newImageData = {
	        width: reversedWidth,
	        height: reversedHeight,
	        left: (canvasData.width - reversedWidth) / 2,
	        top: (canvasData.height - reversedHeight) / 2
	      };
	    }
	
	    $.extend(imageData, newImageData || {
	      width: canvasData.width,
	      height: canvasData.height,
	      left: 0,
	      top: 0
	    });
	
	    var transform = $.getTransform(imageData);
	
	    $.setStyle(self.image, {
	      width: imageData.width,
	      height: imageData.height,
	      marginLeft: imageData.left,
	      marginTop: imageData.top,
	      WebkitTransform: transform,
	      msTransform: transform,
	      transform: transform
	    });
	
	    if (changed) {
	      self.output();
	    }
	  },
	  initCropBox: function initCropBox() {
	    var self = this;
	    var options = self.options;
	    var aspectRatio = options.aspectRatio;
	    var autoCropArea = Number(options.autoCropArea) || 0.8;
	    var canvasData = self.canvasData;
	    var cropBoxData = {
	      width: canvasData.width,
	      height: canvasData.height
	    };
	
	    if (aspectRatio) {
	      if (canvasData.height * aspectRatio > canvasData.width) {
	        cropBoxData.height = cropBoxData.width / aspectRatio;
	      } else {
	        cropBoxData.width = cropBoxData.height * aspectRatio;
	      }
	    }
	
	    self.cropBoxData = cropBoxData;
	    self.limitCropBox(true, true);
	
	    // Initialize auto crop area
	    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
	    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
	
	    // The width/height of auto crop area must large than "minWidth/Height"
	    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
	    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
	    cropBoxData.oldLeft = cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
	    cropBoxData.oldTop = cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
	
	    self.initialCropBoxData = $.extend({}, cropBoxData);
	  },
	  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
	    var self = this;
	    var options = self.options;
	    var aspectRatio = options.aspectRatio;
	    var containerData = self.containerData;
	    var canvasData = self.canvasData;
	    var cropBoxData = self.cropBoxData;
	    var limited = self.limited;
	    var minCropBoxWidth = void 0;
	    var minCropBoxHeight = void 0;
	    var maxCropBoxWidth = void 0;
	    var maxCropBoxHeight = void 0;
	
	    if (sizeLimited) {
	      minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
	      minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
	
	      // The min/maxCropBoxWidth/Height must be less than containerWidth/Height
	      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
	      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
	      maxCropBoxWidth = Math.min(containerData.width, limited ? canvasData.width : containerData.width);
	      maxCropBoxHeight = Math.min(containerData.height, limited ? canvasData.height : containerData.height);
	
	      if (aspectRatio) {
	        if (minCropBoxWidth && minCropBoxHeight) {
	          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
	            minCropBoxHeight = minCropBoxWidth / aspectRatio;
	          } else {
	            minCropBoxWidth = minCropBoxHeight * aspectRatio;
	          }
	        } else if (minCropBoxWidth) {
	          minCropBoxHeight = minCropBoxWidth / aspectRatio;
	        } else if (minCropBoxHeight) {
	          minCropBoxWidth = minCropBoxHeight * aspectRatio;
	        }
	
	        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
	          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
	        } else {
	          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
	        }
	      }
	
	      // The minWidth/Height must be less than maxWidth/Height
	      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
	      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
	      cropBoxData.maxWidth = maxCropBoxWidth;
	      cropBoxData.maxHeight = maxCropBoxHeight;
	    }
	
	    if (positionLimited) {
	      if (limited) {
	        cropBoxData.minLeft = Math.max(0, canvasData.left);
	        cropBoxData.minTop = Math.max(0, canvasData.top);
	        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
	        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
	      } else {
	        cropBoxData.minLeft = 0;
	        cropBoxData.minTop = 0;
	        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
	        cropBoxData.maxTop = containerData.height - cropBoxData.height;
	      }
	    }
	  },
	  renderCropBox: function renderCropBox() {
	    var self = this;
	    var options = self.options;
	    var containerData = self.containerData;
	    var cropBoxData = self.cropBoxData;
	
	    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
	      cropBoxData.left = cropBoxData.oldLeft;
	    }
	
	    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
	      cropBoxData.top = cropBoxData.oldTop;
	    }
	
	    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
	    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
	
	    self.limitCropBox(false, true);
	
	    cropBoxData.oldLeft = cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
	    cropBoxData.oldTop = cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
	
	    if (options.movable && options.cropBoxMovable) {
	      // Turn to move the canvas when the crop box is equal to the container
	      $.setData(self.face, 'action', cropBoxData.width === containerData.width && cropBoxData.height === containerData.height ? 'move' : 'all');
	    }
	
	    $.setStyle(self.cropBox, {
	      width: cropBoxData.width,
	      height: cropBoxData.height,
	      left: cropBoxData.left,
	      top: cropBoxData.top
	    });
	
	    if (self.cropped && self.limited) {
	      self.limitCanvas(true, true);
	    }
	
	    if (!self.disabled) {
	      self.output();
	    }
	  },
	  output: function output() {
	    var self = this;
	
	    self.preview();
	
	    if (self.complete) {
	      $.dispatchEvent(self.element, 'crop', self.getData());
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.typeOf = typeOf;
	exports.isNumber = isNumber;
	exports.isUndefined = isUndefined;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	exports.isFunction = isFunction;
	exports.isArray = isArray;
	exports.toArray = toArray;
	exports.trim = trim;
	exports.each = each;
	exports.extend = extend;
	exports.proxy = proxy;
	exports.setStyle = setStyle;
	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.toggleClass = toggleClass;
	exports.hyphenate = hyphenate;
	exports.getData = getData;
	exports.setData = setData;
	exports.removeData = removeData;
	exports.removeListener = removeListener;
	exports.dispatchEvent = dispatchEvent;
	exports.getEvent = getEvent;
	exports.getOffset = getOffset;
	exports.getTouchesCenter = getTouchesCenter;
	exports.getByTag = getByTag;
	exports.getByClass = getByClass;
	exports.createElement = createElement;
	exports.appendChild = appendChild;
	exports.removeChild = removeChild;
	exports.empty = empty;
	exports.isCrossOriginURL = isCrossOriginURL;
	exports.addTimestamp = addTimestamp;
	exports.getImageSize = getImageSize;
	exports.getTransform = getTransform;
	exports.getRotatedSizes = getRotatedSizes;
	exports.getSourceCanvas = getSourceCanvas;
	exports.getStringFromCharCode = getStringFromCharCode;
	exports.getOrientation = getOrientation;
	exports.dataURLToArrayBuffer = dataURLToArrayBuffer;
	exports.arrayBufferToDataURL = arrayBufferToDataURL;
	// RegExps
	var REGEXP_DATA_URL_HEAD = /^data:([^;]+);base64,/;
	var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
	var REGEXP_ORIGINS = /^(https?:)\/\/([^:\/\?#]+):?(\d*)/i;
	var REGEXP_SPACES = /\s+/;
	var REGEXP_SUFFIX = /^(width|height|left|top|marginLeft|marginTop)$/;
	var REGEXP_TRIM = /^\s+(.*)\s+$/;
	var REGEXP_USERAGENT = /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i;
	var navigator = window.navigator;
	var IS_SAFARI_OR_UIWEBVIEW = navigator && REGEXP_USERAGENT.test(navigator.userAgent);
	
	// Utilities
	var objectProto = Object.prototype;
	var toString = objectProto.toString;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var slice = Array.prototype.slice;
	var fromCharCode = String.fromCharCode;
	
	function typeOf(obj) {
	  return toString.call(obj).slice(8, -1).toLowerCase();
	}
	
	function isNumber(num) {
	  return typeof num === 'number' && !isNaN(num);
	}
	
	function isUndefined(obj) {
	  return typeof obj === 'undefined';
	}
	
	function isObject(obj) {
	  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
	}
	
	function isPlainObject(obj) {
	  if (!isObject(obj)) {
	    return false;
	  }
	
	  try {
	    var _constructor = obj.constructor;
	    var prototype = _constructor.prototype;
	
	    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
	  } catch (e) {
	    return false;
	  }
	}
	
	function isFunction(fn) {
	  return typeOf(fn) === 'function';
	}
	
	function isArray(arr) {
	  return Array.isArray ? Array.isArray(arr) : typeOf(arr) === 'array';
	}
	
	function toArray(obj, offset) {
	  offset = offset >= 0 ? offset : 0;
	
	  if (Array.from) {
	    return Array.from(obj).slice(offset);
	  }
	
	  return slice.call(obj, offset);
	}
	
	function trim(str) {
	  if (typeof str === 'string') {
	    str = str.trim ? str.trim() : str.replace(REGEXP_TRIM, '$1');
	  }
	
	  return str;
	}
	
	function each(obj, callback) {
	  if (obj && isFunction(callback)) {
	    var i = void 0;
	
	    if (isArray(obj) || isNumber(obj.length) /* array-like */) {
	        var length = obj.length;
	
	        for (i = 0; i < length; i++) {
	          if (callback.call(obj, obj[i], i, obj) === false) {
	            break;
	          }
	        }
	      } else if (isObject(obj)) {
	      Object.keys(obj).forEach(function (key) {
	        callback.call(obj, obj[key], key, obj);
	      });
	    }
	  }
	
	  return obj;
	}
	
	function extend() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var deep = args[0] === true;
	  var data = deep ? args[1] : args[0];
	
	  if (args.length > 1) {
	    // if (Object.assign) {
	    //   return Object.assign.apply(Object, args);
	    // }
	
	    args.shift();
	
	    args.forEach(function (arg) {
	      if (isObject(arg)) {
	        Object.keys(arg).forEach(function (key) {
	          if (deep && isObject(data[key])) {
	            extend(true, data[key], arg[key]);
	          } else {
	            data[key] = arg[key];
	          }
	        });
	      }
	    });
	  }
	
	  return data;
	}
	
	function proxy(fn, context) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    args[_key2 - 2] = arguments[_key2];
	  }
	
	  return function () {
	    for (var _len3 = arguments.length, args2 = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args2[_key3] = arguments[_key3];
	    }
	
	    return fn.apply(context, args.concat(args2));
	  };
	}
	
	function setStyle(element, styles) {
	  var style = element.style;
	
	  each(styles, function (value, property) {
	    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
	      value += 'px';
	    }
	
	    style[property] = value;
	  });
	}
	
	function hasClass(element, value) {
	  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
	}
	
	function addClass(element, value) {
	  if (isNumber(element.length)) {
	    each(element, function (elem) {
	      addClass(elem, value);
	    });
	    return;
	  }
	
	  if (element.classList) {
	    element.classList.add(value);
	    return;
	  }
	
	  var className = trim(element.className);
	
	  if (!className) {
	    element.className = value;
	  } else if (className.indexOf(value) < 0) {
	    element.className = className + ' ' + value;
	  }
	}
	
	function removeClass(element, value) {
	  if (isNumber(element.length)) {
	    each(element, function (elem) {
	      removeClass(elem, value);
	    });
	    return;
	  }
	
	  if (element.classList) {
	    element.classList.remove(value);
	    return;
	  }
	
	  if (element.className.indexOf(value) >= 0) {
	    element.className = element.className.replace(value, '');
	  }
	}
	
	function toggleClass(element, value, added) {
	  if (isNumber(element.length)) {
	    each(element, function (elem) {
	      toggleClass(elem, value, added);
	    });
	    return;
	  }
	
	  // IE10-11 doesn't support the second parameter of `classList.toggle`
	  if (added) {
	    addClass(element, value);
	  } else {
	    removeClass(element, value);
	  }
	}
	
	function hyphenate(str) {
	  return str.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
	}
	
	function getData(element, name) {
	  if (isObject(element[name])) {
	    return element[name];
	  } else if (element.dataset) {
	    return element.dataset[name];
	  }
	
	  return element.getAttribute('data-' + hyphenate(name));
	}
	
	function setData(element, name, data) {
	  if (isObject(data)) {
	    element[name] = data;
	  } else if (element.dataset) {
	    element.dataset[name] = data;
	  } else {
	    element.setAttribute('data-' + hyphenate(name), data);
	  }
	}
	
	function removeData(element, name) {
	  if (isObject(element[name])) {
	    delete element[name];
	  } else if (element.dataset) {
	    delete element.dataset[name];
	  } else {
	    element.removeAttribute('data-' + hyphenate(name));
	  }
	}
	
	function removeListener(element, type, handler) {
	  var types = trim(type).split(REGEXP_SPACES);
	
	  if (types.length > 1) {
	    each(types, function (t) {
	      removeListener(element, t, handler);
	    });
	    return;
	  }
	
	  if (element.removeEventListener) {
	    element.removeEventListener(type, handler, false);
	  } else if (element.detachEvent) {
	    element.detachEvent('on' + type, handler);
	  }
	}
	
	function addListener(element, type, _handler, once) {
	  var types = trim(type).split(REGEXP_SPACES);
	  var originalHandler = _handler;
	
	  if (types.length > 1) {
	    each(types, function (t) {
	      addListener(element, t, _handler);
	    });
	    return;
	  }
	
	  if (once) {
	    _handler = function handler() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      removeListener(element, type, _handler);
	
	      return originalHandler.apply(element, args);
	    };
	  }
	
	  if (element.addEventListener) {
	    element.addEventListener(type, _handler, false);
	  } else if (element.attachEvent) {
	    element.attachEvent('on${type}', _handler);
	  }
	}
	
	exports.addListener = addListener;
	function dispatchEvent(element, type, data) {
	  if (element.dispatchEvent) {
	    var event = void 0;
	
	    // Event and CustomEvent on IE9-11 are global objects, not constructors
	    if (isFunction(Event) && isFunction(CustomEvent)) {
	      if (isUndefined(data)) {
	        event = new Event(type, {
	          bubbles: true,
	          cancelable: true
	        });
	      } else {
	        event = new CustomEvent(type, {
	          detail: data,
	          bubbles: true,
	          cancelable: true
	        });
	      }
	    } else if (isUndefined(data)) {
	      event = document.createEvent('Event');
	      event.initEvent(type, true, true);
	    } else {
	      event = document.createEvent('CustomEvent');
	      event.initCustomEvent(type, true, true, data);
	    }
	
	    // IE9+
	    return element.dispatchEvent(event);
	  } else if (element.fireEvent) {
	    // IE6-10 (native events only)
	    return element.fireEvent('on' + type);
	  }
	
	  return true;
	}
	
	function getEvent(event) {
	  var e = event || window.event;
	
	  // Fix target property (IE8)
	  if (!e.target) {
	    e.target = e.srcElement || document;
	  }
	
	  if (!isNumber(e.pageX) && isNumber(e.clientX)) {
	    var eventDoc = event.target.ownerDocument || document;
	    var doc = eventDoc.documentElement;
	    var body = eventDoc.body;
	
	    e.pageX = e.clientX + ((doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0));
	    e.pageY = e.clientY + ((doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0));
	  }
	
	  return e;
	}
	
	function getOffset(element) {
	  var doc = document.documentElement;
	  var box = element.getBoundingClientRect();
	
	  return {
	    left: box.left + ((window.scrollX || doc && doc.scrollLeft || 0) - (doc && doc.clientLeft || 0)),
	    top: box.top + ((window.scrollY || doc && doc.scrollTop || 0) - (doc && doc.clientTop || 0))
	  };
	}
	
	function getTouchesCenter(touches) {
	  var length = touches.length;
	  var pageX = 0;
	  var pageY = 0;
	
	  if (length) {
	    each(touches, function (touch) {
	      pageX += touch.pageX;
	      pageY += touch.pageY;
	    });
	
	    pageX /= length;
	    pageY /= length;
	  }
	
	  return {
	    pageX: pageX,
	    pageY: pageY
	  };
	}
	
	function getByTag(element, tagName) {
	  return element.getElementsByTagName(tagName);
	}
	
	function getByClass(element, className) {
	  return element.getElementsByClassName ? element.getElementsByClassName(className) : element.querySelectorAll('.' + className);
	}
	
	function createElement(tagName) {
	  return document.createElement(tagName);
	}
	
	function appendChild(element, elem) {
	  element.appendChild(elem);
	}
	
	function removeChild(element) {
	  if (element.parentNode) {
	    element.parentNode.removeChild(element);
	  }
	}
	
	function empty(element) {
	  while (element.firstChild) {
	    element.removeChild(element.firstChild);
	  }
	}
	
	function isCrossOriginURL(url) {
	  var parts = url.match(REGEXP_ORIGINS);
	
	  return parts && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
	}
	
	function addTimestamp(url) {
	  var timestamp = 'timestamp=' + new Date().getTime();
	
	  return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
	}
	
	function getImageSize(image, callback) {
	  // Modern browsers (ignore Safari)
	  if (image.naturalWidth && !IS_SAFARI_OR_UIWEBVIEW) {
	    callback(image.naturalWidth, image.naturalHeight);
	    return;
	  }
	
	  // IE8: Don't use `new Image()` here
	  var newImage = createElement('img');
	
	  newImage.onload = function load() {
	    callback(this.width, this.height);
	  };
	
	  newImage.src = image.src;
	}
	
	function getTransform(data) {
	  var transforms = [];
	  var rotate = data.rotate;
	  var scaleX = data.scaleX;
	  var scaleY = data.scaleY;
	
	  // Rotate should come first before scale to match orientation transform
	  if (isNumber(rotate) && rotate !== 0) {
	    transforms.push('rotate(' + rotate + 'deg)');
	  }
	
	  if (isNumber(scaleX) && scaleX !== 1) {
	    transforms.push('scaleX(' + scaleX + ')');
	  }
	
	  if (isNumber(scaleY) && scaleY !== 1) {
	    transforms.push('scaleY(' + scaleY + ')');
	  }
	
	  return transforms.length ? transforms.join(' ') : 'none';
	}
	
	function getRotatedSizes(data, reversed) {
	  var deg = Math.abs(data.degree) % 180;
	  var arc = (deg > 90 ? 180 - deg : deg) * Math.PI / 180;
	  var sinArc = Math.sin(arc);
	  var cosArc = Math.cos(arc);
	  var width = data.width;
	  var height = data.height;
	  var aspectRatio = data.aspectRatio;
	  var newWidth = void 0;
	  var newHeight = void 0;
	
	  if (!reversed) {
	    newWidth = width * cosArc + height * sinArc;
	    newHeight = width * sinArc + height * cosArc;
	  } else {
	    newWidth = width / (cosArc + sinArc / aspectRatio);
	    newHeight = newWidth / aspectRatio;
	  }
	
	  return {
	    width: newWidth,
	    height: newHeight
	  };
	}
	
	function getSourceCanvas(image, data) {
	  var canvas = createElement('canvas');
	  var context = canvas.getContext('2d');
	  var dstX = 0;
	  var dstY = 0;
	  var dstWidth = data.naturalWidth;
	  var dstHeight = data.naturalHeight;
	  var rotate = data.rotate;
	  var scaleX = data.scaleX;
	  var scaleY = data.scaleY;
	  var scalable = isNumber(scaleX) && isNumber(scaleY) && (scaleX !== 1 || scaleY !== 1);
	  var rotatable = isNumber(rotate) && rotate !== 0;
	  var advanced = rotatable || scalable;
	  var canvasWidth = dstWidth * Math.abs(scaleX || 1);
	  var canvasHeight = dstHeight * Math.abs(scaleY || 1);
	  var translateX = void 0;
	  var translateY = void 0;
	  var rotated = void 0;
	
	  if (scalable) {
	    translateX = canvasWidth / 2;
	    translateY = canvasHeight / 2;
	  }
	
	  if (rotatable) {
	    rotated = getRotatedSizes({
	      width: canvasWidth,
	      height: canvasHeight,
	      degree: rotate
	    });
	
	    canvasWidth = rotated.width;
	    canvasHeight = rotated.height;
	    translateX = canvasWidth / 2;
	    translateY = canvasHeight / 2;
	  }
	
	  canvas.width = canvasWidth;
	  canvas.height = canvasHeight;
	
	  if (advanced) {
	    dstX = -dstWidth / 2;
	    dstY = -dstHeight / 2;
	
	    context.save();
	    context.translate(translateX, translateY);
	  }
	
	  // Rotate should come first before scale as in the "getTransform" function
	  if (rotatable) {
	    context.rotate(rotate * Math.PI / 180);
	  }
	
	  if (scalable) {
	    context.scale(scaleX, scaleY);
	  }
	
	  context.drawImage(image, Math.floor(dstX), Math.floor(dstY), Math.floor(dstWidth), Math.floor(dstHeight));
	
	  if (advanced) {
	    context.restore();
	  }
	
	  return canvas;
	}
	
	function getStringFromCharCode(dataView, start, length) {
	  var str = '';
	  var i = start;
	
	  for (length += start; i < length; i++) {
	    str += fromCharCode(dataView.getUint8(i));
	  }
	
	  return str;
	}
	
	function getOrientation(arrayBuffer) {
	  var dataView = new DataView(arrayBuffer);
	  var length = dataView.byteLength;
	  var orientation = void 0;
	  var exifIDCode = void 0;
	  var tiffOffset = void 0;
	  var firstIFDOffset = void 0;
	  var littleEndian = void 0;
	  var endianness = void 0;
	  var app1Start = void 0;
	  var ifdStart = void 0;
	  var offset = void 0;
	  var i = void 0;
	
	  // Only handle JPEG image (start by 0xFFD8)
	  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
	    offset = 2;
	
	    while (offset < length) {
	      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
	        app1Start = offset;
	        break;
	      }
	
	      offset++;
	    }
	  }
	
	  if (app1Start) {
	    exifIDCode = app1Start + 4;
	    tiffOffset = app1Start + 10;
	
	    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
	      endianness = dataView.getUint16(tiffOffset);
	      littleEndian = endianness === 0x4949;
	
	      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
	          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
	            firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
	
	            if (firstIFDOffset >= 0x00000008) {
	              ifdStart = tiffOffset + firstIFDOffset;
	            }
	          }
	        }
	    }
	  }
	
	  if (ifdStart) {
	    length = dataView.getUint16(ifdStart, littleEndian);
	
	    for (i = 0; i < length; i++) {
	      offset = ifdStart + i * 12 + 2;
	
	      if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {
	          // 8 is the offset of the current tag's value
	          offset += 8;
	
	          // Get the original orientation value
	          orientation = dataView.getUint16(offset, littleEndian);
	
	          // Override the orientation with its default value for Safari
	          if (IS_SAFARI_OR_UIWEBVIEW) {
	            dataView.setUint16(offset, 1, littleEndian);
	          }
	
	          break;
	        }
	    }
	  }
	
	  return orientation;
	}
	
	function dataURLToArrayBuffer(dataURL) {
	  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
	  var binary = atob(base64);
	  var length = binary.length;
	  var arrayBuffer = new ArrayBuffer(length);
	  var dataView = new Uint8Array(arrayBuffer);
	  var i = void 0;
	
	  for (i = 0; i < length; i++) {
	    dataView[i] = binary.charCodeAt(i);
	  }
	
	  return arrayBuffer;
	}
	
	// Only available for JPEG image
	function arrayBufferToDataURL(arrayBuffer) {
	  var dataView = new Uint8Array(arrayBuffer);
	  var length = dataView.length;
	  var base64 = '';
	  var i = void 0;
	
	  for (i = 0; i < length; i++) {
	    base64 += fromCharCode(dataView[i]);
	  }
	
	  return 'data:image/jpeg;base64,' + btoa(base64);
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utilities = __webpack_require__(4);
	
	var $ = _interopRequireWildcard(_utilities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var DATA_PREVIEW = 'preview';
	
	exports.default = {
	  initPreview: function initPreview() {
	    var self = this;
	    var preview = self.options.preview;
	    var image = $.createElement('img');
	    var crossOrigin = self.crossOrigin;
	    var url = crossOrigin ? self.crossOriginUrl : self.url;
	
	    if (crossOrigin) {
	      image.crossOrigin = crossOrigin;
	    }
	
	    image.src = url;
	    $.appendChild(self.viewBox, image);
	    self.image2 = image;
	
	    if (!preview) {
	      return;
	    }
	
	    var previews = document.querySelectorAll(preview);
	
	    self.previews = previews;
	
	    $.each(previews, function (element) {
	      var img = $.createElement('img');
	
	      // Save the original size for recover
	      $.setData(element, DATA_PREVIEW, {
	        width: element.offsetWidth,
	        height: element.offsetHeight,
	        html: element.innerHTML
	      });
	
	      if (crossOrigin) {
	        img.crossOrigin = crossOrigin;
	      }
	
	      img.src = url;
	
	      /**
	       * Override img element styles
	       * Add `display:block` to avoid margin top issue
	       * Add `height:auto` to override `height` attribute on IE8
	       * (Occur only when margin-top <= -height)
	       */
	
	      img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
	
	      $.empty(element);
	      $.appendChild(element, img);
	    });
	  },
	  resetPreview: function resetPreview() {
	    $.each(this.previews, function (element) {
	      var data = $.getData(element, DATA_PREVIEW);
	
	      $.setStyle(element, {
	        width: data.width,
	        height: data.height
	      });
	
	      element.innerHTML = data.html;
	      $.removeData(element, DATA_PREVIEW);
	    });
	  },
	  preview: function preview() {
	    var self = this;
	    var imageData = self.imageData;
	    var canvasData = self.canvasData;
	    var cropBoxData = self.cropBoxData;
	    var cropBoxWidth = cropBoxData.width;
	    var cropBoxHeight = cropBoxData.height;
	    var width = imageData.width;
	    var height = imageData.height;
	    var left = cropBoxData.left - canvasData.left - imageData.left;
	    var top = cropBoxData.top - canvasData.top - imageData.top;
	    var transform = $.getTransform(imageData);
	    var transforms = {
	      WebkitTransform: transform,
	      msTransform: transform,
	      transform: transform
	    };
	
	    if (!self.cropped || self.disabled) {
	      return;
	    }
	
	    $.setStyle(self.image2, $.extend({
	      width: width,
	      height: height,
	      marginLeft: -left,
	      marginTop: -top
	    }, transforms));
	
	    $.each(self.previews, function (element) {
	      var data = $.getData(element, DATA_PREVIEW);
	      var originalWidth = data.width;
	      var originalHeight = data.height;
	      var newWidth = originalWidth;
	      var newHeight = originalHeight;
	      var ratio = 1;
	
	      if (cropBoxWidth) {
	        ratio = originalWidth / cropBoxWidth;
	        newHeight = cropBoxHeight * ratio;
	      }
	
	      if (cropBoxHeight && newHeight > originalHeight) {
	        ratio = originalHeight / cropBoxHeight;
	        newWidth = cropBoxWidth * ratio;
	        newHeight = originalHeight;
	      }
	
	      $.setStyle(element, {
	        width: newWidth,
	        height: newHeight
	      });
	
	      $.setStyle($.getByTag(element, 'img')[0], $.extend({
	        width: width * ratio,
	        height: height * ratio,
	        marginLeft: -left * ratio,
	        marginTop: -top * ratio
	      }, transforms));
	    });
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utilities = __webpack_require__(4);
	
	var $ = _interopRequireWildcard(_utilities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// Events
	var EVENT_MOUSE_DOWN = 'mousedown touchstart pointerdown MSPointerDown';
	var EVENT_MOUSE_MOVE = 'mousemove touchmove pointermove MSPointerMove';
	var EVENT_MOUSE_UP = 'mouseup touchend touchcancel pointerup pointercancel' + ' MSPointerUp MSPointerCancel';
	var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
	var EVENT_DBLCLICK = 'dblclick';
	var EVENT_RESIZE = 'resize';
	var EVENT_CROP_START = 'cropstart';
	var EVENT_CROP_MOVE = 'cropmove';
	var EVENT_CROP_END = 'cropend';
	var EVENT_CROP = 'crop';
	var EVENT_ZOOM = 'zoom';
	
	exports.default = {
	  bind: function bind() {
	    var self = this;
	    var options = self.options;
	    var element = self.element;
	    var cropper = self.cropper;
	
	    if ($.isFunction(options.cropstart)) {
	      $.addListener(element, EVENT_CROP_START, options.cropstart);
	    }
	
	    if ($.isFunction(options.cropmove)) {
	      $.addListener(element, EVENT_CROP_MOVE, options.cropmove);
	    }
	
	    if ($.isFunction(options.cropend)) {
	      $.addListener(element, EVENT_CROP_END, options.cropend);
	    }
	
	    if ($.isFunction(options.crop)) {
	      $.addListener(element, EVENT_CROP, options.crop);
	    }
	
	    if ($.isFunction(options.zoom)) {
	      $.addListener(element, EVENT_ZOOM, options.zoom);
	    }
	
	    $.addListener(cropper, EVENT_MOUSE_DOWN, self.onCropStart = $.proxy(self.cropStart, self));
	
	    if (options.zoomable && options.zoomOnWheel) {
	      $.addListener(cropper, EVENT_WHEEL, self.onWheel = $.proxy(self.wheel, self));
	    }
	
	    if (options.toggleDragModeOnDblclick) {
	      $.addListener(cropper, EVENT_DBLCLICK, self.onDblclick = $.proxy(self.dblclick, self));
	    }
	
	    $.addListener(document, EVENT_MOUSE_MOVE, self.onCropMove = $.proxy(self.cropMove, self));
	    $.addListener(document, EVENT_MOUSE_UP, self.onCropEnd = $.proxy(self.cropEnd, self));
	
	    if (options.responsive) {
	      $.addListener(window, EVENT_RESIZE, self.onResize = $.proxy(self.resize, self));
	    }
	  },
	  unbind: function unbind() {
	    var self = this;
	    var options = self.options;
	    var element = self.element;
	    var cropper = self.cropper;
	
	    if ($.isFunction(options.cropstart)) {
	      $.removeListener(element, EVENT_CROP_START, options.cropstart);
	    }
	
	    if ($.isFunction(options.cropmove)) {
	      $.removeListener(element, EVENT_CROP_MOVE, options.cropmove);
	    }
	
	    if ($.isFunction(options.cropend)) {
	      $.removeListener(element, EVENT_CROP_END, options.cropend);
	    }
	
	    if ($.isFunction(options.crop)) {
	      $.removeListener(element, EVENT_CROP, options.crop);
	    }
	
	    if ($.isFunction(options.zoom)) {
	      $.removeListener(element, EVENT_ZOOM, options.zoom);
	    }
	
	    $.removeListener(cropper, EVENT_MOUSE_DOWN, self.onCropStart);
	
	    if (options.zoomable && options.zoomOnWheel) {
	      $.removeListener(cropper, EVENT_WHEEL, self.onWheel);
	    }
	
	    if (options.toggleDragModeOnDblclick) {
	      $.removeListener(cropper, EVENT_DBLCLICK, self.onDblclick);
	    }
	
	    $.removeListener(document, EVENT_MOUSE_MOVE, self.onCropMove);
	    $.removeListener(document, EVENT_MOUSE_UP, self.onCropEnd);
	
	    if (options.responsive) {
	      $.removeListener(window, EVENT_RESIZE, self.onResize);
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.REGEXP_ACTIONS = undefined;
	
	var _utilities = __webpack_require__(4);
	
	var $ = _interopRequireWildcard(_utilities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var REGEXP_ACTIONS = exports.REGEXP_ACTIONS = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
	
	exports.default = {
	  resize: function resize() {
	    var self = this;
	    var restore = self.options.restore;
	    var container = self.container;
	    var containerData = self.containerData;
	
	    // Check `container` is necessary for IE8
	    if (self.disabled || !containerData) {
	      return;
	    }
	
	    var ratio = container.offsetWidth / containerData.width;
	    var canvasData = void 0;
	    var cropBoxData = void 0;
	
	    // Resize when width changed or height changed
	    if (ratio !== 1 || container.offsetHeight !== containerData.height) {
	      if (restore) {
	        canvasData = self.getCanvasData();
	        cropBoxData = self.getCropBoxData();
	      }
	
	      self.render();
	
	      if (restore) {
	        self.setCanvasData($.each(canvasData, function (n, i) {
	          canvasData[i] = n * ratio;
	        }));
	        self.setCropBoxData($.each(cropBoxData, function (n, i) {
	          cropBoxData[i] = n * ratio;
	        }));
	      }
	    }
	  },
	  dblclick: function dblclick() {
	    var self = this;
	
	    if (self.disabled) {
	      return;
	    }
	
	    self.setDragMode($.hasClass(self.dragBox, 'cropper-crop') ? 'move' : 'crop');
	  },
	  wheel: function wheel(event) {
	    var self = this;
	    var e = $.getEvent(event);
	    var ratio = Number(self.options.wheelZoomRatio) || 0.1;
	    var delta = 1;
	
	    if (self.disabled) {
	      return;
	    }
	
	    e.preventDefault();
	
	    // Limit wheel speed to prevent zoom too fast (#21)
	    if (self.wheeling) {
	      return;
	    }
	
	    self.wheeling = true;
	
	    setTimeout(function () {
	      self.wheeling = false;
	    }, 50);
	
	    if (e.deltaY) {
	      delta = e.deltaY > 0 ? 1 : -1;
	    } else if (e.wheelDelta) {
	      delta = -e.wheelDelta / 120;
	    } else if (e.detail) {
	      delta = e.detail > 0 ? 1 : -1;
	    }
	
	    self.zoom(-delta * ratio, e);
	  },
	  cropStart: function cropStart(event) {
	    var self = this;
	    var options = self.options;
	    var e = $.getEvent(event);
	    var touches = e.touches;
	    var touchesLength = void 0;
	    var touch = void 0;
	    var action = void 0;
	
	    if (self.disabled) {
	      return;
	    }
	
	    if (touches) {
	      touchesLength = touches.length;
	
	      if (touchesLength > 1) {
	        if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
	          touch = touches[1];
	          self.startX2 = touch.pageX;
	          self.startY2 = touch.pageY;
	          action = 'zoom';
	        } else {
	          return;
	        }
	      }
	
	      touch = touches[0];
	    }
	
	    action = action || $.getData(e.target, 'action');
	
	    if (REGEXP_ACTIONS.test(action)) {
	      if ($.dispatchEvent(self.element, 'cropstart', {
	        originalEvent: e,
	        action: action
	      }) === false) {
	        return;
	      }
	
	      e.preventDefault();
	
	      self.action = action;
	      self.cropping = false;
	
	      self.startX = touch ? touch.pageX : e.pageX;
	      self.startY = touch ? touch.pageY : e.pageY;
	
	      if (action === 'crop') {
	        self.cropping = true;
	        $.addClass(self.dragBox, 'cropper-modal');
	      }
	    }
	  },
	  cropMove: function cropMove(event) {
	    var self = this;
	    var options = self.options;
	    var e = $.getEvent(event);
	    var touches = e.touches;
	    var action = self.action;
	    var touchesLength = void 0;
	    var touch = void 0;
	
	    if (self.disabled) {
	      return;
	    }
	
	    if (touches) {
	      touchesLength = touches.length;
	
	      if (touchesLength > 1) {
	        if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
	          touch = touches[1];
	          self.endX2 = touch.pageX;
	          self.endY2 = touch.pageY;
	        } else {
	          return;
	        }
	      }
	
	      touch = touches[0];
	    }
	
	    if (action) {
	      if ($.dispatchEvent(self.element, 'cropmove', {
	        originalEvent: e,
	        action: action
	      }) === false) {
	        return;
	      }
	
	      e.preventDefault();
	
	      self.endX = touch ? touch.pageX : e.pageX;
	      self.endY = touch ? touch.pageY : e.pageY;
	
	      self.change(e.shiftKey, action === 'zoom' ? e : null);
	    }
	  },
	  cropEnd: function cropEnd(event) {
	    var self = this;
	    var options = self.options;
	    var e = $.getEvent(event);
	    var action = self.action;
	
	    if (self.disabled) {
	      return;
	    }
	
	    if (action) {
	      e.preventDefault();
	
	      if (self.cropping) {
	        self.cropping = false;
	        $.toggleClass(self.dragBox, 'cropper-modal', self.cropped && options.modal);
	      }
	
	      self.action = '';
	
	      $.dispatchEvent(self.element, 'cropend', {
	        originalEvent: e,
	        action: action
	      });
	    }
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utilities = __webpack_require__(4);
	
	var $ = _interopRequireWildcard(_utilities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// Actions
	var ACTION_EAST = 'e';
	var ACTION_WEST = 'w';
	var ACTION_SOUTH = 's';
	var ACTION_NORTH = 'n';
	var ACTION_SOUTH_EAST = 'se';
	var ACTION_SOUTH_WEST = 'sw';
	var ACTION_NORTH_EAST = 'ne';
	var ACTION_NORTH_WEST = 'nw';
	
	exports.default = {
	  change: function change(shiftKey, originalEvent) {
	    var self = this;
	    var options = self.options;
	    var containerData = self.containerData;
	    var canvasData = self.canvasData;
	    var cropBoxData = self.cropBoxData;
	    var aspectRatio = options.aspectRatio;
	    var action = self.action;
	    var width = cropBoxData.width;
	    var height = cropBoxData.height;
	    var left = cropBoxData.left;
	    var top = cropBoxData.top;
	    var right = left + width;
	    var bottom = top + height;
	    var minLeft = 0;
	    var minTop = 0;
	    var maxWidth = containerData.width;
	    var maxHeight = containerData.height;
	    var renderable = true;
	    var offset = void 0;
	
	    // Locking aspect ratio in "free mode" by holding shift key
	    if (!aspectRatio && shiftKey) {
	      aspectRatio = width && height ? width / height : 1;
	    }
	
	    if (self.limited) {
	      minLeft = cropBoxData.minLeft;
	      minTop = cropBoxData.minTop;
	      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
	      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
	    }
	
	    var range = {
	      x: self.endX - self.startX,
	      y: self.endY - self.startY
	    };
	
	    if (aspectRatio) {
	      range.X = range.y * aspectRatio;
	      range.Y = range.x / aspectRatio;
	    }
	
	    switch (action) {
	      // Move crop box
	      case 'all':
	        left += range.x;
	        top += range.y;
	        break;
	
	      // Resize crop box
	      case ACTION_EAST:
	        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
	          renderable = false;
	          break;
	        }
	
	        width += range.x;
	
	        if (aspectRatio) {
	          height = width / aspectRatio;
	          top -= range.Y / 2;
	        }
	
	        if (width < 0) {
	          action = ACTION_WEST;
	          width = 0;
	        }
	
	        break;
	
	      case ACTION_NORTH:
	        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
	          renderable = false;
	          break;
	        }
	
	        height -= range.y;
	        top += range.y;
	
	        if (aspectRatio) {
	          width = height * aspectRatio;
	          left += range.X / 2;
	        }
	
	        if (height < 0) {
	          action = ACTION_SOUTH;
	          height = 0;
	        }
	
	        break;
	
	      case ACTION_WEST:
	        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
	          renderable = false;
	          break;
	        }
	
	        width -= range.x;
	        left += range.x;
	
	        if (aspectRatio) {
	          height = width / aspectRatio;
	          top += range.Y / 2;
	        }
	
	        if (width < 0) {
	          action = ACTION_EAST;
	          width = 0;
	        }
	
	        break;
	
	      case ACTION_SOUTH:
	        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
	          renderable = false;
	          break;
	        }
	
	        height += range.y;
	
	        if (aspectRatio) {
	          width = height * aspectRatio;
	          left -= range.X / 2;
	        }
	
	        if (height < 0) {
	          action = ACTION_NORTH;
	          height = 0;
	        }
	
	        break;
	
	      case ACTION_NORTH_EAST:
	        if (aspectRatio) {
	          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
	            renderable = false;
	            break;
	          }
	
	          height -= range.y;
	          top += range.y;
	          width = height * aspectRatio;
	        } else {
	          if (range.x >= 0) {
	            if (right < maxWidth) {
	              width += range.x;
	            } else if (range.y <= 0 && top <= minTop) {
	              renderable = false;
	            }
	          } else {
	            width += range.x;
	          }
	
	          if (range.y <= 0) {
	            if (top > minTop) {
	              height -= range.y;
	              top += range.y;
	            }
	          } else {
	            height -= range.y;
	            top += range.y;
	          }
	        }
	
	        if (width < 0 && height < 0) {
	          action = ACTION_SOUTH_WEST;
	          height = 0;
	          width = 0;
	        } else if (width < 0) {
	          action = ACTION_NORTH_WEST;
	          width = 0;
	        } else if (height < 0) {
	          action = ACTION_SOUTH_EAST;
	          height = 0;
	        }
	
	        break;
	
	      case ACTION_NORTH_WEST:
	        if (aspectRatio) {
	          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
	            renderable = false;
	            break;
	          }
	
	          height -= range.y;
	          top += range.y;
	          width = height * aspectRatio;
	          left += range.X;
	        } else {
	          if (range.x <= 0) {
	            if (left > minLeft) {
	              width -= range.x;
	              left += range.x;
	            } else if (range.y <= 0 && top <= minTop) {
	              renderable = false;
	            }
	          } else {
	            width -= range.x;
	            left += range.x;
	          }
	
	          if (range.y <= 0) {
	            if (top > minTop) {
	              height -= range.y;
	              top += range.y;
	            }
	          } else {
	            height -= range.y;
	            top += range.y;
	          }
	        }
	
	        if (width < 0 && height < 0) {
	          action = ACTION_SOUTH_EAST;
	          height = 0;
	          width = 0;
	        } else if (width < 0) {
	          action = ACTION_NORTH_EAST;
	          width = 0;
	        } else if (height < 0) {
	          action = ACTION_SOUTH_WEST;
	          height = 0;
	        }
	
	        break;
	
	      case ACTION_SOUTH_WEST:
	        if (aspectRatio) {
	          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
	            renderable = false;
	            break;
	          }
	
	          width -= range.x;
	          left += range.x;
	          height = width / aspectRatio;
	        } else {
	          if (range.x <= 0) {
	            if (left > minLeft) {
	              width -= range.x;
	              left += range.x;
	            } else if (range.y >= 0 && bottom >= maxHeight) {
	              renderable = false;
	            }
	          } else {
	            width -= range.x;
	            left += range.x;
	          }
	
	          if (range.y >= 0) {
	            if (bottom < maxHeight) {
	              height += range.y;
	            }
	          } else {
	            height += range.y;
	          }
	        }
	
	        if (width < 0 && height < 0) {
	          action = ACTION_NORTH_EAST;
	          height = 0;
	          width = 0;
	        } else if (width < 0) {
	          action = ACTION_SOUTH_EAST;
	          width = 0;
	        } else if (height < 0) {
	          action = ACTION_NORTH_WEST;
	          height = 0;
	        }
	
	        break;
	
	      case ACTION_SOUTH_EAST:
	        if (aspectRatio) {
	          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
	            renderable = false;
	            break;
	          }
	
	          width += range.x;
	          height = width / aspectRatio;
	        } else {
	          if (range.x >= 0) {
	            if (right < maxWidth) {
	              width += range.x;
	            } else if (range.y >= 0 && bottom >= maxHeight) {
	              renderable = false;
	            }
	          } else {
	            width += range.x;
	          }
	
	          if (range.y >= 0) {
	            if (bottom < maxHeight) {
	              height += range.y;
	            }
	          } else {
	            height += range.y;
	          }
	        }
	
	        if (width < 0 && height < 0) {
	          action = ACTION_NORTH_WEST;
	          height = 0;
	          width = 0;
	        } else if (width < 0) {
	          action = ACTION_SOUTH_WEST;
	          width = 0;
	        } else if (height < 0) {
	          action = ACTION_NORTH_EAST;
	          height = 0;
	        }
	
	        break;
	
	      // Move canvas
	      case 'move':
	        self.move(range.x, range.y);
	        renderable = false;
	        break;
	
	      // Zoom canvas
	      case 'zoom':
	        self.zoom(function (x1, y1, x2, y2) {
	          var z1 = Math.sqrt(x1 * x1 + y1 * y1);
	          var z2 = Math.sqrt(x2 * x2 + y2 * y2);
	
	          return (z2 - z1) / z1;
	        }(Math.abs(self.startX - self.startX2), Math.abs(self.startY - self.startY2), Math.abs(self.endX - self.endX2), Math.abs(self.endY - self.endY2)), originalEvent);
	        self.startX2 = self.endX2;
	        self.startY2 = self.endY2;
	        renderable = false;
	        break;
	
	      // Create crop box
	      case 'crop':
	        if (!range.x || !range.y) {
	          renderable = false;
	          break;
	        }
	
	        offset = $.getOffset(self.cropper);
	        left = self.startX - offset.left;
	        top = self.startY - offset.top;
	        width = cropBoxData.minWidth;
	        height = cropBoxData.minHeight;
	
	        if (range.x > 0) {
	          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
	        } else if (range.x < 0) {
	          left -= width;
	          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
	        }
	
	        if (range.y < 0) {
	          top -= height;
	        }
	
	        // Show the crop box if is hidden
	        if (!self.cropped) {
	          $.removeClass(self.cropBox, 'cropper-hidden');
	          self.cropped = true;
	
	          if (self.limited) {
	            self.limitCropBox(true, true);
	          }
	        }
	
	        break;
	
	      // No default
	    }
	
	    if (renderable) {
	      cropBoxData.width = width;
	      cropBoxData.height = height;
	      cropBoxData.left = left;
	      cropBoxData.top = top;
	      self.action = action;
	
	      self.renderCropBox();
	    }
	
	    // Override
	    self.startX = self.endX;
	    self.startY = self.endY;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utilities = __webpack_require__(4);
	
	var $ = _interopRequireWildcard(_utilities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = {
	  // Show the crop box manually
	  crop: function crop() {
	    var self = this;
	
	    if (self.ready && !self.disabled) {
	      if (!self.cropped) {
	        self.cropped = true;
	        self.limitCropBox(true, true);
	
	        if (self.options.modal) {
	          $.addClass(self.dragBox, 'cropper-modal');
	        }
	
	        $.removeClass(self.cropBox, 'cropper-hidden');
	      }
	
	      self.setCropBoxData(self.initialCropBoxData);
	    }
	
	    return self;
	  },
	
	
	  // Reset the image and crop box to their initial states
	  reset: function reset() {
	    var self = this;
	
	    if (self.ready && !self.disabled) {
	      self.imageData = $.extend({}, self.initialImageData);
	      self.canvasData = $.extend({}, self.initialCanvasData);
	      self.cropBoxData = $.extend({}, self.initialCropBoxData);
	
	      self.renderCanvas();
	
	      if (self.cropped) {
	        self.renderCropBox();
	      }
	    }
	
	    return self;
	  },
	
	
	  // Clear the crop box
	  clear: function clear() {
	    var self = this;
	
	    if (self.cropped && !self.disabled) {
	      $.extend(self.cropBoxData, {
	        left: 0,
	        top: 0,
	        width: 0,
	        height: 0
	      });
	
	      self.cropped = false;
	      self.renderCropBox();
	
	      self.limitCanvas();
	
	      // Render canvas after crop box rendered
	      self.renderCanvas();
	
	      $.removeClass(self.dragBox, 'cropper-modal');
	      $.addClass(self.cropBox, 'cropper-hidden');
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Replace the image's src and rebuild the cropper
	   *
	   * @param {String} url
	   * @param {Boolean} onlyColorChanged (optional)
	   */
	  replace: function replace(url, onlyColorChanged) {
	    var self = this;
	
	    if (!self.disabled && url) {
	      if (self.isImg) {
	        self.element.src = url;
	      }
	
	      if (onlyColorChanged) {
	        self.url = url;
	        self.image.src = url;
	
	        if (self.ready) {
	          self.image2.src = url;
	
	          $.each(self.previews, function (element) {
	            $.getByTag(element, 'img')[0].src = url;
	          });
	        }
	      } else {
	        if (self.isImg) {
	          self.replaced = true;
	        }
	
	        // Clear previous data
	        self.options.data = null;
	        self.load(url);
	      }
	    }
	
	    return self;
	  },
	
	
	  // Enable (unfreeze) the cropper
	  enable: function enable() {
	    var self = this;
	
	    if (self.ready) {
	      self.disabled = false;
	      $.removeClass(self.cropper, 'cropper-disabled');
	    }
	
	    return self;
	  },
	
	
	  // Disable (freeze) the cropper
	  disable: function disable() {
	    var self = this;
	
	    if (self.ready) {
	      self.disabled = true;
	      $.addClass(self.cropper, 'cropper-disabled');
	    }
	
	    return self;
	  },
	
	
	  // Destroy the cropper and remove the instance from the image
	  destroy: function destroy() {
	    var self = this;
	    var element = self.element;
	    var image = self.image;
	
	    if (self.loaded) {
	      if (self.isImg && self.replaced) {
	        element.src = self.originalUrl;
	      }
	
	      self.unbuild();
	      $.removeClass(element, 'cropper-hidden');
	    } else if (self.isImg) {
	      $.removeListener(element, 'load', self.start);
	    } else if (image) {
	      $.removeChild(image);
	    }
	
	    $.removeData(element, 'cropper');
	
	    return self;
	  },
	
	
	  /**
	   * Move the canvas with relative offsets
	   *
	   * @param {Number} offsetX
	   * @param {Number} offsetY (optional)
	   */
	  move: function move(offsetX, offsetY) {
	    var self = this;
	    var canvasData = self.canvasData;
	
	    return self.moveTo($.isUndefined(offsetX) ? offsetX : canvasData.left + Number(offsetX), $.isUndefined(offsetY) ? offsetY : canvasData.top + Number(offsetY));
	  },
	
	
	  /**
	   * Move the canvas to an absolute point
	   *
	   * @param {Number} x
	   * @param {Number} y (optional)
	   */
	  moveTo: function moveTo(x, y) {
	    var self = this;
	    var canvasData = self.canvasData;
	    var changed = false;
	
	    // If "y" is not present, its default value is "x"
	    if ($.isUndefined(y)) {
	      y = x;
	    }
	
	    x = Number(x);
	    y = Number(y);
	
	    if (self.ready && !self.disabled && self.options.movable) {
	      if ($.isNumber(x)) {
	        canvasData.left = x;
	        changed = true;
	      }
	
	      if ($.isNumber(y)) {
	        canvasData.top = y;
	        changed = true;
	      }
	
	      if (changed) {
	        self.renderCanvas(true);
	      }
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Zoom the canvas with a relative ratio
	   *
	   * @param {Number} ratio
	   * @param {Event} _originalEvent (private)
	   */
	  zoom: function zoom(ratio, _originalEvent) {
	    var self = this;
	    var canvasData = self.canvasData;
	
	    ratio = Number(ratio);
	
	    if (ratio < 0) {
	      ratio = 1 / (1 - ratio);
	    } else {
	      ratio = 1 + ratio;
	    }
	
	    return self.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, _originalEvent);
	  },
	
	
	  /**
	   * Zoom the canvas to an absolute ratio
	   *
	   * @param {Number} ratio
	   * @param {Event} _originalEvent (private)
	   */
	  zoomTo: function zoomTo(ratio, _originalEvent) {
	    var self = this;
	    var options = self.options;
	    var canvasData = self.canvasData;
	    var width = canvasData.width;
	    var height = canvasData.height;
	    var naturalWidth = canvasData.naturalWidth;
	    var naturalHeight = canvasData.naturalHeight;
	    var newWidth = void 0;
	    var newHeight = void 0;
	    var offset = void 0;
	    var center = void 0;
	
	    ratio = Number(ratio);
	
	    if (ratio >= 0 && self.ready && !self.disabled && options.zoomable) {
	      newWidth = naturalWidth * ratio;
	      newHeight = naturalHeight * ratio;
	
	      if ($.dispatchEvent(self.element, 'zoom', {
	        originalEvent: _originalEvent,
	        oldRatio: width / naturalWidth,
	        ratio: newWidth / naturalWidth
	      }) === false) {
	        return self;
	      }
	
	      if (_originalEvent) {
	        offset = $.getOffset(self.cropper);
	        center = _originalEvent.touches ? $.getTouchesCenter(_originalEvent.touches) : {
	          pageX: _originalEvent.pageX,
	          pageY: _originalEvent.pageY
	        };
	
	        // Zoom from the triggering point of the event
	        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
	        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
	      } else {
	        // Zoom from the center of the canvas
	        canvasData.left -= (newWidth - width) / 2;
	        canvasData.top -= (newHeight - height) / 2;
	      }
	
	      canvasData.width = newWidth;
	      canvasData.height = newHeight;
	      self.renderCanvas(true);
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Rotate the canvas with a relative degree
	   *
	   * @param {Number} degree
	   */
	  rotate: function rotate(degree) {
	    var self = this;
	
	    return self.rotateTo((self.imageData.rotate || 0) + Number(degree));
	  },
	
	
	  /**
	   * Rotate the canvas to an absolute degree
	   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate()
	   *
	   * @param {Number} degree
	   */
	  rotateTo: function rotateTo(degree) {
	    var self = this;
	
	    degree = Number(degree);
	
	    if ($.isNumber(degree) && self.ready && !self.disabled && self.options.rotatable) {
	      self.imageData.rotate = degree % 360;
	      self.rotated = true;
	      self.renderCanvas(true);
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Scale the image
	   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale()
	   *
	   * @param {Number} scaleX
	   * @param {Number} scaleY (optional)
	   */
	  scale: function scale(scaleX, scaleY) {
	    var self = this;
	    var imageData = self.imageData;
	    var changed = false;
	
	    // If "scaleY" is not present, its default value is "scaleX"
	    if ($.isUndefined(scaleY)) {
	      scaleY = scaleX;
	    }
	
	    scaleX = Number(scaleX);
	    scaleY = Number(scaleY);
	
	    if (self.ready && !self.disabled && self.options.scalable) {
	      if ($.isNumber(scaleX)) {
	        imageData.scaleX = scaleX;
	        changed = true;
	      }
	
	      if ($.isNumber(scaleY)) {
	        imageData.scaleY = scaleY;
	        changed = true;
	      }
	
	      if (changed) {
	        self.renderImage(true);
	      }
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Scale the abscissa of the image
	   *
	   * @param {Number} scaleX
	   */
	  scaleX: function scaleX(_scaleX) {
	    var self = this;
	    var scaleY = self.imageData.scaleY;
	
	    return self.scale(_scaleX, $.isNumber(scaleY) ? scaleY : 1);
	  },
	
	
	  /**
	   * Scale the ordinate of the image
	   *
	   * @param {Number} scaleY
	   */
	  scaleY: function scaleY(_scaleY) {
	    var self = this;
	    var scaleX = self.imageData.scaleX;
	
	    return self.scale($.isNumber(scaleX) ? scaleX : 1, _scaleY);
	  },
	
	
	  /**
	   * Get the cropped area position and size data (base on the original image)
	   *
	   * @param {Boolean} rounded (optional)
	   * @return {Object} data
	   */
	  getData: function getData(rounded) {
	    var self = this;
	    var options = self.options;
	    var imageData = self.imageData;
	    var canvasData = self.canvasData;
	    var cropBoxData = self.cropBoxData;
	    var ratio = void 0;
	    var data = void 0;
	
	    if (self.ready && self.cropped) {
	      data = {
	        x: cropBoxData.left - canvasData.left,
	        y: cropBoxData.top - canvasData.top,
	        width: cropBoxData.width,
	        height: cropBoxData.height
	      };
	
	      ratio = imageData.width / imageData.naturalWidth;
	
	      $.each(data, function (n, i) {
	        n /= ratio;
	        data[i] = rounded ? Math.round(n) : n;
	      });
	    } else {
	      data = {
	        x: 0,
	        y: 0,
	        width: 0,
	        height: 0
	      };
	    }
	
	    if (options.rotatable) {
	      data.rotate = imageData.rotate || 0;
	    }
	
	    if (options.scalable) {
	      data.scaleX = imageData.scaleX || 1;
	      data.scaleY = imageData.scaleY || 1;
	    }
	
	    return data;
	  },
	
	
	  /**
	   * Set the cropped area position and size with new data
	   *
	   * @param {Object} data
	   */
	  setData: function setData(data) {
	    var self = this;
	    var options = self.options;
	    var imageData = self.imageData;
	    var canvasData = self.canvasData;
	    var cropBoxData = {};
	    var rotated = void 0;
	    var scaled = void 0;
	    var ratio = void 0;
	
	    if ($.isFunction(data)) {
	      data = data.call(self.element);
	    }
	
	    if (self.ready && !self.disabled && $.isPlainObject(data)) {
	      if (options.rotatable) {
	        if ($.isNumber(data.rotate) && data.rotate !== imageData.rotate) {
	          imageData.rotate = data.rotate;
	          self.rotated = rotated = true;
	        }
	      }
	
	      if (options.scalable) {
	        if ($.isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
	          imageData.scaleX = data.scaleX;
	          scaled = true;
	        }
	
	        if ($.isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
	          imageData.scaleY = data.scaleY;
	          scaled = true;
	        }
	      }
	
	      if (rotated) {
	        self.renderCanvas();
	      } else if (scaled) {
	        self.renderImage();
	      }
	
	      ratio = imageData.width / imageData.naturalWidth;
	
	      if ($.isNumber(data.x)) {
	        cropBoxData.left = data.x * ratio + canvasData.left;
	      }
	
	      if ($.isNumber(data.y)) {
	        cropBoxData.top = data.y * ratio + canvasData.top;
	      }
	
	      if ($.isNumber(data.width)) {
	        cropBoxData.width = data.width * ratio;
	      }
	
	      if ($.isNumber(data.height)) {
	        cropBoxData.height = data.height * ratio;
	      }
	
	      self.setCropBoxData(cropBoxData);
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Get the container size data
	   *
	   * @return {Object} data
	   */
	  getContainerData: function getContainerData() {
	    var self = this;
	
	    return self.ready ? self.containerData : {};
	  },
	
	
	  /**
	   * Get the image position and size data
	   *
	   * @return {Object} data
	   */
	  getImageData: function getImageData() {
	    var self = this;
	
	    return self.loaded ? self.imageData : {};
	  },
	
	
	  /**
	   * Get the canvas position and size data
	   *
	   * @return {Object} data
	   */
	  getCanvasData: function getCanvasData() {
	    var self = this;
	    var canvasData = self.canvasData;
	    var data = {};
	
	    if (self.ready) {
	      $.each(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
	        data[n] = canvasData[n];
	      });
	    }
	
	    return data;
	  },
	
	
	  /**
	   * Set the canvas position and size with new data
	   *
	   * @param {Object} data
	   */
	  setCanvasData: function setCanvasData(data) {
	    var self = this;
	    var canvasData = self.canvasData;
	    var aspectRatio = canvasData.aspectRatio;
	
	    if ($.isFunction(data)) {
	      data = data.call(self.element);
	    }
	
	    if (self.ready && !self.disabled && $.isPlainObject(data)) {
	      if ($.isNumber(data.left)) {
	        canvasData.left = data.left;
	      }
	
	      if ($.isNumber(data.top)) {
	        canvasData.top = data.top;
	      }
	
	      if ($.isNumber(data.width)) {
	        canvasData.width = data.width;
	        canvasData.height = data.width / aspectRatio;
	      } else if ($.isNumber(data.height)) {
	        canvasData.height = data.height;
	        canvasData.width = data.height * aspectRatio;
	      }
	
	      self.renderCanvas(true);
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Get the crop box position and size data
	   *
	   * @return {Object} data
	   */
	  getCropBoxData: function getCropBoxData() {
	    var self = this;
	    var cropBoxData = self.cropBoxData;
	    var data = void 0;
	
	    if (self.ready && self.cropped) {
	      data = {
	        left: cropBoxData.left,
	        top: cropBoxData.top,
	        width: cropBoxData.width,
	        height: cropBoxData.height
	      };
	    }
	
	    return data || {};
	  },
	
	
	  /**
	   * Set the crop box position and size with new data
	   *
	   * @param {Object} data
	   */
	  setCropBoxData: function setCropBoxData(data) {
	    var self = this;
	    var cropBoxData = self.cropBoxData;
	    var aspectRatio = self.options.aspectRatio;
	    var widthChanged = void 0;
	    var heightChanged = void 0;
	
	    if ($.isFunction(data)) {
	      data = data.call(self.element);
	    }
	
	    if (self.ready && self.cropped && !self.disabled && $.isPlainObject(data)) {
	      if ($.isNumber(data.left)) {
	        cropBoxData.left = data.left;
	      }
	
	      if ($.isNumber(data.top)) {
	        cropBoxData.top = data.top;
	      }
	
	      if ($.isNumber(data.width)) {
	        widthChanged = true;
	        cropBoxData.width = data.width;
	      }
	
	      if ($.isNumber(data.height)) {
	        heightChanged = true;
	        cropBoxData.height = data.height;
	      }
	
	      if (aspectRatio) {
	        if (widthChanged) {
	          cropBoxData.height = cropBoxData.width / aspectRatio;
	        } else if (heightChanged) {
	          cropBoxData.width = cropBoxData.height * aspectRatio;
	        }
	      }
	
	      self.renderCropBox();
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Get a canvas drawn the cropped image
	   *
	   * @param {Object} options (optional)
	   * @return {HTMLCanvasElement} canvas
	   */
	  getCroppedCanvas: function getCroppedCanvas(options) {
	    var self = this;
	
	    if (!self.ready || !window.HTMLCanvasElement) {
	      return null;
	    }
	
	    // Return the whole canvas if not cropped
	    if (!self.cropped) {
	      return $.getSourceCanvas(self.image, self.imageData);
	    }
	
	    if (!$.isPlainObject(options)) {
	      options = {};
	    }
	
	    var data = self.getData();
	    var originalWidth = data.width;
	    var originalHeight = data.height;
	    var aspectRatio = originalWidth / originalHeight;
	    var scaledWidth = void 0;
	    var scaledHeight = void 0;
	    var scaledRatio = void 0;
	
	    if ($.isPlainObject(options)) {
	      scaledWidth = options.width;
	      scaledHeight = options.height;
	
	      if (scaledWidth) {
	        scaledHeight = scaledWidth / aspectRatio;
	        scaledRatio = scaledWidth / originalWidth;
	      } else if (scaledHeight) {
	        scaledWidth = scaledHeight * aspectRatio;
	        scaledRatio = scaledHeight / originalHeight;
	      }
	    }
	
	    // The canvas element will use `Math.floor` on a float number, so floor first
	    var canvasWidth = Math.floor(scaledWidth || originalWidth);
	    var canvasHeight = Math.floor(scaledHeight || originalHeight);
	
	    var canvas = $.createElement('canvas');
	    var context = canvas.getContext('2d');
	
	    canvas.width = canvasWidth;
	    canvas.height = canvasHeight;
	
	    if (options.fillColor) {
	      context.fillStyle = options.fillColor;
	      context.fillRect(0, 0, canvasWidth, canvasHeight);
	    }
	
	    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
	    var parameters = function () {
	      var source = $.getSourceCanvas(self.image, self.imageData);
	      var sourceWidth = source.width;
	      var sourceHeight = source.height;
	      var canvasData = self.canvasData;
	      var params = [source];
	
	      // Source canvas
	      var srcX = data.x + canvasData.naturalWidth * (Math.abs(data.scaleX || 1) - 1) / 2;
	      var srcY = data.y + canvasData.naturalHeight * (Math.abs(data.scaleY || 1) - 1) / 2;
	      var srcWidth = void 0;
	      var srcHeight = void 0;
	
	      // Destination canvas
	      var dstX = void 0;
	      var dstY = void 0;
	      var dstWidth = void 0;
	      var dstHeight = void 0;
	
	      if (srcX <= -originalWidth || srcX > sourceWidth) {
	        srcX = srcWidth = dstX = dstWidth = 0;
	      } else if (srcX <= 0) {
	        dstX = -srcX;
	        srcX = 0;
	        srcWidth = dstWidth = Math.min(sourceWidth, originalWidth + srcX);
	      } else if (srcX <= sourceWidth) {
	        dstX = 0;
	        srcWidth = dstWidth = Math.min(originalWidth, sourceWidth - srcX);
	      }
	
	      if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
	        srcY = srcHeight = dstY = dstHeight = 0;
	      } else if (srcY <= 0) {
	        dstY = -srcY;
	        srcY = 0;
	        srcHeight = dstHeight = Math.min(sourceHeight, originalHeight + srcY);
	      } else if (srcY <= sourceHeight) {
	        dstY = 0;
	        srcHeight = dstHeight = Math.min(originalHeight, sourceHeight - srcY);
	      }
	
	      params.push(Math.floor(srcX), Math.floor(srcY), Math.floor(srcWidth), Math.floor(srcHeight));
	
	      // Scale destination sizes
	      if (scaledRatio) {
	        dstX *= scaledRatio;
	        dstY *= scaledRatio;
	        dstWidth *= scaledRatio;
	        dstHeight *= scaledRatio;
	      }
	
	      // Avoid "IndexSizeError" in IE and Firefox
	      if (dstWidth > 0 && dstHeight > 0) {
	        params.push(Math.floor(dstX), Math.floor(dstY), Math.floor(dstWidth), Math.floor(dstHeight));
	      }
	
	      return params;
	    }();
	
	    context.drawImage.apply(context, _toConsumableArray(parameters));
	
	    return canvas;
	  },
	
	
	  /**
	   * Change the aspect ratio of the crop box
	   *
	   * @param {Number} aspectRatio
	   */
	  setAspectRatio: function setAspectRatio(aspectRatio) {
	    var self = this;
	    var options = self.options;
	
	    if (!self.disabled && !$.isUndefined(aspectRatio)) {
	      // 0 -> NaN
	      options.aspectRatio = Math.max(0, aspectRatio) || NaN;
	
	      if (self.ready) {
	        self.initCropBox();
	
	        if (self.cropped) {
	          self.renderCropBox();
	        }
	      }
	    }
	
	    return self;
	  },
	
	
	  /**
	   * Change the drag mode
	   *
	   * @param {String} mode (optional)
	   */
	  setDragMode: function setDragMode(mode) {
	    var self = this;
	    var options = self.options;
	    var dragBox = self.dragBox;
	    var face = self.face;
	    var croppable = void 0;
	    var movable = void 0;
	
	    if (self.loaded && !self.disabled) {
	      croppable = mode === 'crop';
	      movable = options.movable && mode === 'move';
	      mode = croppable || movable ? mode : 'none';
	
	      $.setData(dragBox, 'action', mode);
	      $.toggleClass(dragBox, 'cropper-crop', croppable);
	      $.toggleClass(dragBox, 'cropper-move', movable);
	
	      if (!options.cropBoxMovable) {
	        // Sync drag mode to crop box when it is not movable
	        $.setData(face, 'action', mode);
	        $.toggleClass(face, 'cropper-crop', croppable);
	        $.toggleClass(face, 'cropper-move', movable);
	      }
	    }
	
	    return self;
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cropper.js.map

var filemanager_lang_vi={error_connection:"Lỗi kết nối. Vui lòng tải lại trang.",search:"Tìm kiếm",disk_space:"Dung lượng",file:"tập tin",folder:"thư mục",files:"tập tin",folders:"thư mục",refresh:"Làm mới",folders_tit:"Thư mục",media_files:"Media files",audios:"Âm thanh",photos:"Hình ảnh",videos:"Videos",others:"Tập tin khác",files_tit:"Tập tin",filters:"Lọc",all:"Tất cả tập tin","delete":"Xoá",save:"Lưu",cancel:"Huỷ",dirname:"Tên thư mục",saved:"Đã lưu",new_filename:"Tên tập tin/thư mục mới",choose:"Chọn...",edit:"Chỉnh sửa",rename:"Đổi tên...",download:"Tải về",selected:"Đã chọn",select_all:"Chọn tất cả",upload:"Tải lên",new_dir:"Tạo thư mục",back:"Quay lại",error:"Lỗi",uploading:"Đang tải lên...",uploaded:"Đã tải lên",upload_fail:"Không thể tải lên",drop_to_upload:"Thả tập tin để tải lên ngay...",note_create_dir:"Tên thư mục không được chứa các ký tự đặc biệt, hệ thống sẽ tự động chuẩn hoá tên thư mục của bạn. Thư mục của bạn chỉ được tạo mới khi chưa thật sự tồn tại.",note_filename:"Tên tập tin/thư mục không được chứa các ký tự đặc biệt, hệ thống sẽ tự động chuẩn hoá tên tập tin/thư mục của bạn.",delete_confirm:"Bạn chắc chắn muốn xoá dữ liệu này?",created_dir:'Đã tạo ":Dirname"',deleted:"Đã xoá",create_dir_denied:"Tài khoản của bạn không có quyền tạo mới thư mục.",delete_denied:"Tài khoản của bạn không có quyền xoá dữ liệu này.",upload_denied:"Tài khoản của bạn không có quyền tải lên dữ liệu này.",rename_folder_denied:"Tài khoản của bạn không có quyền đổi tên thư mục này.",rename_file_denied:"Tài khoản của bạn không có quyền đổi tên tập tin này.",photo_editor_denied:"Tài khoản của bạn không có quyền chỉnh sửa tập tin này.",max_size_upload_denied:"Kích thước vượt quá :Size M cho phép",max_size_dir_denied:"Đã hết dung lượng tối đa :Size M cho phép",extension_not_allowed:"Định dạnh không cho phép",file_not_valid:"Tập tin không hợp lệ",};

var filemanager_lang_en={error_connection:"Error connecting. Please reload the page.",search:"Search",disk_space:"Disk space",file:"file",folder:"folder",files:"files",folders:"folders",refresh:"Refresh",folders_tit:"Folders",media_files:"Media files",audios:"Audios",photos:"Photos",videos:"Videos",others:"Other Files",files_tit:"Files",filters:"Filter",all:"All files","delete":"Delete",save:"Save",cancel:"Cancel",dirname:"Folder name",saved:"Saved",new_filename:"The filename / new folder",choose:"Select...",edit:"Edit photo",rename:"Rename...",download:"Download",selected:"Selected",select_all:"Select all",upload:"Upload",new_dir:"New folder",back:"Back",error:"Fail",uploading:"Uploading...",uploaded:"Upload success",upload_fail:"Upload fail",drop_to_upload:"Drop files to upload...",note_create_dir:"The folder name can not contain special characters, the system will automatically standardize your folder name. Your folder is created only when they were not really exist.",note_filename:"The filename / folder cannot contain special characters, the system will automatically normalized.",delete_confirm:"Are you sure you want to delete this data?",created_dir:'Created ":Dirname"',deleted:"Deleted",create_dir_denied:"Your account does not have permission to create a new folder.",delete_denied:"Your account does not have permission to delete this data.",upload_denied:"Your account does not have permission to upload this data.",rename_folder_denied:"Your account does not have the right to rename this folder.",rename_file_denied:"Your account does not have the right to rename this file",photo_editor_denied:"Your account does not have permission to edit this file.",max_size_upload_denied:"The size exceeds :Size M",max_size_dir_denied:"This size exceeds :Size M of your storage",extension_not_allowed:"The file extension is not allowed",file_not_valid:"The file is invalid",};

(function(b,a){b.fn.contextMenu=function(e){var c="contextmenu";return this.each(function(){b(this).on("contextmenu",function(g){if(g.ctrlKey){return}if(e===undefined){return false}b("#"+c).remove();b("body").append('<ul id="'+c+'" class="dropdown-menu" role="menu" style="display:none" >'+e.init+"</ul>");var f=b("#"+c).data("invokedOn",b(this)).show().css({position:"absolute",left:d(g.clientX,"width","scrollLeft"),top:d(g.clientY,"height","scrollTop")}).off("click").on("click","a",function(i){f.hide();var h=f.data("invokedOn");var j=b(this);e.menuSelected.call(this,h,j)});return false});b("body").click(function(){b("#"+c).remove()})});function d(i,k,h){var j=b(a)[k](),g=b(a)[h](),l=b("#"+c)[k](),f=i+g;if(i+l>j&&l<i){f-=l}return f}}})(jQuery,window);String.prototype.latinise=function(){var a=this;a=a.replace(/å|ä|ā|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä|ą/g,"a");a=a.replace(/ß|ḃ/g,"b");a=a.replace(/ç|ć|č|ĉ|ċ|¢|©/g,"c");a=a.replace(/đ|ď|ḋ|đ/g,"d");a=a.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ę|ë|ě|ė/g,"e");a=a.replace(/ḟ|ƒ/g,"f");a=a.replace(/ķ/g,"k");a=a.replace(/ħ|ĥ/g,"h");a=a.replace(/ì|í|î|ị|ỉ|ĩ|ï|î|ī|¡|į/g,"i");a=a.replace(/ĵ/g,"j");a=a.replace(/ṁ/g,"m");a=a.replace(/ö|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö|ø|ō/g,"o");a=a.replace(/ṗ/g,"p");a=a.replace(/ġ|ģ|ğ|ĝ/g,"g");a=a.replace(/ü|ù|ú|ū|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü|ų|ů/g,"u");a=a.replace(/ỳ|ý|ỵ|ỷ|ỹ|ÿ/g,"y");a=a.replace(/ń|ñ|ň|ņ/g,"n");a=a.replace(/ŝ|š|ś|ṡ|ș|ş|³/g,"s");a=a.replace(/ř|ŗ|ŕ/g,"r");a=a.replace(/ṫ|ť|ț|ŧ|ţ/g,"t");a=a.replace(/ź|ż|ž/g,"z");a=a.replace(/ł|ĺ|ļ|ľ/g,"l");a=a.replace(/ẃ|ẅ/g,"w");a=a.replace(/æ/g,"ae");a=a.replace(/þ/g,"th");a=a.replace(/ð/g,"dh");a=a.replace(/£/g,"pound");a=a.replace(/¥/g,"yen");a=a.replace(/ª/g,"2");a=a.replace(/º/g,"0");a=a.replace(/¿/g,"?");a=a.replace(/µ/g,"mu");a=a.replace(/®/g,"r");a=a.replace(/Ä|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|Ą|Å|Ā/g,"A");a=a.replace(/Ḃ|B/g,"B");a=a.replace(/Ç|Ć|Ċ|Ĉ|Č/g,"C");a=a.replace(/Đ|Ď|Ḋ/g,"D");a=a.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ę|Ë|Ě|Ė|Ē/g,"E");a=a.replace(/Ḟ|Ƒ/g,"F");a=a.replace(/Ì|Í|Ị|Ỉ|Ĩ|Ï|Į/g,"I");a=a.replace(/Ĵ|J/g,"J");a=a.replace(/Ö|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ø/g,"O");a=a.replace(/Ü|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ū|Ų|Ů/g,"U");a=a.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ|Ÿ/g,"Y");a=a.replace(/Ł/g,"L");a=a.replace(/Þ/g,"Th");a=a.replace(/Ṁ/g,"M");a=a.replace(/Ń|Ñ|Ň|Ņ/g,"N");a=a.replace(/Ś|Š|Ŝ|Ṡ|Ș|Ş/g,"S");a=a.replace(/Æ/g,"AE");a=a.replace(/Ź|Ż|Ž/g,"Z");a=a.replace(/Ř|R|Ŗ/g,"R");a=a.replace(/Ț|Ţ|T|Ť/g,"T");a=a.replace(/Ķ|K/g,"K");a=a.replace(/Ĺ|Ł|Ļ|Ľ/g,"L");a=a.replace(/Ħ|Ĥ/g,"H");a=a.replace(/Ṗ|P/g,"P");a=a.replace(/Ẁ|Ŵ|Ẃ|Ẅ/g,"W");a=a.replace(/Ģ|G|Ğ|Ĝ|Ġ/g,"G");a=a.replace(/Ŧ|Ṫ/g,"T");return a};ko.components.register("filemanager",{viewModel:function(h){var c=this;if(h.lang=="en"){h.labels=filemanager_lang_en}else{h.labels=filemanager_lang_vi}c.params=h;c.loading=ko.observable(false);c.viewMode=ko.observable("grid");c.paths=ko.observableArray([]);c.files=ko.observableArray([]);c.folders=ko.observableArray([]);c.videos=ko.observableArray([]);c.audios=ko.observableArray([]);c.photos=ko.observableArray([]);c.path=ko.observable("/");c.file=ko.observable({});c.current=ko.observable({});c.ids=ko.observableArray([]);c.filter=ko.observable("");c.filter_label=ko.observable(h.labels.all);c.uploadprogress=ko.observable(false);c.uploadsuccess=ko.observable(0);c.search=ko.observable("");c.is_search=ko.observable(false);c.disk_space_info=ko.observable("");c.disk_space_percent_info=ko.observable(0);c.cropper=ko.observable();c.extension_thumbnails={"7z":"data:image/png;base64,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",accdb:"data:image/png;base64,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",ade:"data:image/png;base64,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",adp:"data:image/png;base64,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",audio:"data:image/png;base64,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",css:"data:image/png;base64,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",csv:"data:image/png;base64,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",doc:"data:image/png;base64,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",docx:"data:image/png;base64,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",gz:"data:image/png;base64,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",html:"data:image/png;base64,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",js:"data:image/png;base64,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",odb:"data:image/png;base64,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",odf:"data:image/png;base64,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",odg:"data:image/png;base64,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",odp:"data:image/png;base64,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",ods:"data:image/png;base64,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",odt:"data:image/png;base64,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",otg:"data:image/png;base64,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",pdf:"data:image/png;base64,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",php:"data:image/png;base64,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",ppt:"data:image/png;base64,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",pptx:"data:image/png;base64,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",rar:"data:image/png;base64,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",rtf:"data:image/png;base64,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",sql:"data:image/png;base64,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",tar:"data:image/png;base64,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",txt:"data:image/png;base64,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",unknown:"data:image/png;base64,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",xls:"data:image/png;base64,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",xlsx:"data:image/png;base64,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",zip:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABkCAYAAABkW8nwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAZWElEQVR4nO1d+48d51l+Zs79vjfv+rZOYjvOtbQlRRQhVUhIpKW0/A38goRUqRK/AKJQCOQHQpqmCa0KbQVISFDohchAo7QVbUpax4nrxGlsx7trr+31rr273nO/n5nhfd/5vjmzZ2dt00q4czJPMjnnzH0zz3ne53u/9/sOIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkR498FAuBGjJY7w/x27waFlQIuFkCHMDyT19NNPP5rP548NBoM4xhD0t3XPnDnzxjPPPHMRLsFCgzATa+r8+fNPH5qf/x3HtmWFYxjuH2SoP8txvPc7/tDd1gfsc0fga+22aZft29b771m9xuJxfP/llz/5+OOPf5nWtBAihPmbnmi326letwv9yIwRIox+/plI9n/AbkTabZsTRDpaF6elWq1mEcLnFGZiGZZlGUwKc9vaAJLcYp338Rbb7hiKIFo1ndtt0+vU9UbX8UIEC2VUCbU3YUKZ7v98eVjeE+AH5V8XQBRjN/L4z+NXktH9A7Y5+rp69cip/UQz1P3tuu4WoTUMCLfpNc2hGo0+eNoWFPJ2U6ZAmvnPeQcq5iexRwufhzLgU6URFXVu5QdDiLFoTXmkGiXOLdbJyy7rA7fdYt8d2kIk8aunM7p+ZJ27ythh5g0jvBQLPbGMkfAj69Sr4yOV/4GOrttxTr3epyKB0NtHw5afdD6Seffj21/W+c/jax2GWbnCTywobxMQ5oJMvbnjBLcIP6Z5m4sHH7vNN428dwLWa1IZo2E0Uqy7iDsJf7t4qztuJQacf1R1tm0O2uZrFfr31/v6jb+nmBGx7h4MX6vQ/61XG++YULfzYZZtkYDFtoU1940jKqip5PiOxUgY3LHOfzl9HG0PVLWQwcQYwditFef79gcpmTG6n6+laRgmauUbePvEcTTLaztVhIk9cn5jl+saQetGlSnkSqUxHubdfbP9geq3vs+3VCVjqCODfgeDXhvt6gbK1xewtb6Ceq2K4sQUzGQGJpEtlkgiFqcl5vaBu9lzR8W63bPuxh2sG95eFArvKnZTKmP3A9yQYw/kddBrodeuotuqoNPcQq9Vo9cq+kQu2+ZQZyGXy6C2uYrLi2fpcAfZTA7pLC3pLDK5IlLZIpLpPBLpHBKpHMxYyqd8MbkZz0/57iHw9rDTt4UNY2Hed3TkYiepjJHtncoyNlfOw7BasPo98lAOkciCZdnuq23LaW2HXuH6opWrl9BsNpFJJ9FtlJFMJmlJIEWviWSc1CsmS5y8WJy3EdFsI4k997wXidyebfeiyWVoTxVg8sOM0HssY8QX7VinE42+7Xa3io3l03B6NdiDPpGHHq5jizp5r0w0JpUQzpF91lZX0KjXYVsWBkQ8JqFlWWqh42hx+JWOs+i8/U4NveYGNpdfJ/ff3XlP7s1uv7+Rew8rxsK8+w2zMWLIjRF/ZTgWKtfOkEp15TMTRhZFJJdcPlJJyLRlaXVtrG/VPRJpQg3olcnGKrdtoW0x00SrXkb9+jlSI3t7Xkvf6+grwo/wK5b3xvAezHDVCKnoc7u8jOrmCuLxmCKQSxxNJFEsj1S22ubux+mGm+W6pB6GSjVcZF/bVS3vPZ0jmYhh89p5Uq8bCMy7BWTZw06w8Ug3+NIDwSkD9zOHwJtX3yIfZLqkshWpfKHPe6/Wu2pmy/4p8lG1elO2s0oNlFpZ8l4plrNTtdxuHQdbV96E3W/tCIUYw1A4XuYdGCZM4W8t0qvdQ2XlTfS7bVErURi/r/KFPk0kXnq9HlrtLt4+fxHffvkUHZsUYtrK7NuWqRTLPSeX8XDAM2zDfc8kMg0x9a3aFmprZzEx/9hOT6jghLxcRmNsasW9frbAEmAHHQqBlY2rSCTiHnG2mXV1HHEA5Vod19bWcWVlDYuXVvD2O5dQrTVJlRykM1m88vo55LNpTE0UMDc7hb20CL9V+GMiMbEsHZ4tUxQrnjBRXltAprQXqdJB70swLmTyYzzyWEHvfWpld7awtXIWsXhMbTIwGAzQaDTQarXl9drqDSxfuYrLV1ZRpXDX7nTRbHUkDUHcQy4dl/fdXhsv/Nf3RPVgxEidTFKjBKanijh0YBaHD+3DvfNzKBVyKOSzmCjlMVkqiM8yyMgz+TavvIG5YxOIpwrwl/o56t7GIeUQfmKNfuOHCXRXEewBqqtnUNlaR71Wxsb6OjY3N1AuV1AjQtVqDZQrNQz6FNbAfYJAwiTVSZlIxjOiUuyT+vxKxCK+iKqZ4oHc6ziSZK3g8tIWli6cF2/FAyFKxTyPtEEul8fMZBEH9s/SMocDczNIZqYwffiD1CAw3HNgqLa+PyG0CDWxOOx0ux1ppel+aFOZXu52YYXg8Hdj6S10Ow3EDAeze+iBTpVcX6RyVF4yVHksMeWkaH0iW3+gTbqt1MtWqQH3HpgXhunIAEcmCV/fLWyldXIf+r6AmJBoCxtXN1CrbOJXJ+5Dvjgt/k5/QRwfneLxBMKKUBOr225I0nLQ78vDcTlluhlwUoxEIolmtYJOb0DKUUSc1ptkvGNCOkORQ9fFD8/rKBViM2+pdITlbykqL2V7KQk31eCo9ISborDcfSQNsT0tYcbcY6vVMjrdgXwxeD99Xrkdup8sKV1YEWpi3bi+ivLNG9Ry6wqZ5MHyeLxYnIxyAolkCoNuE+Vr1zFVyiGdSiLFS5K20fY4kczk2njJLW1vmfkTpkNCBZFq2IK0HV+qQlRuQMrXJ+Vj9etLC7PXo1f6PDB6KC5fJJIl3Ey+NSQXB0H+gkzPzFJsDt0gaEGoiTU1PYWD+/dJ2MtQKy2dTst6fohtMuWdTkdUoVc9gGavhVUiYjadJPXKIZ/LIEP7M9m4pcgpBK9laQ+z8W7SFB55HNW357jmyn2nu4SUIgmJuj0K0z1pBLTpPtrttihncWov8pOTiKVycr+pJC2pFIolragxCaccnpO07erqBsKIUBPLIh/UbFRFHWpVA8ViAZlMRrYlqWmfSuYxUczCbF6m9XsxwCNi3Lc2VlHbqJFJL4vBLhDRMumUtPRYweALhaN5LduBIpv6rMJdn+6FFalDRJKWZrOJbt9GKlNEdmIS9z54kIiSQrN2E/1eB3Ei1SSRyZYTkmKRV0wX8uLN+AbidBvxWJQgvSvwd9jwQ27UG/Iprcilq51sqw+DIopptZCL95GbPyStvFa7g/XVi6jUmihNziKfjiOTMj31GirVsE/RUy3xXUQIDnNk8JlMtXoNzXaXVMvEgXsextRkCYmYSxIuw+k0KuiRekkrUnzhsCXIisY3z61IIyr0+/kCP/g6kYufUDqTdrtS9NhDbplRmMnl0rRPEwMKS2ki0P0PvR/X1q6jEduL5YXTOHxoD3KcaiAPJqkA+DyXSqi6XTWsUANSpja68Wn0E7OwY8uYv+9+zM3OoN/egj1okKra0gDge0ilEkJ1zo8ZUuZsbCtpbjZbQuJCIfzkGqvSZIZLrjo6rAA6x2XElfpA/Fg+n5X6KSZHvXydQpaJFoWudK6EirMXC5fXUWt2qMXWEzWS/j5l1gfioXpEAlK7Gq2ffA/W164hPzGL4vQ8KWMbG2vLpEg91bz05ajo3xT5OfZ3nFQNKvRrtVvy5Qh7Nj7cQ+yNWGB2eqhcEM/FVQmOM/CMN4tBnpWL82DUShu0Nqmltoa9970PGzfLyEwcwsX1GvblW2KsHYM7rWOkWAM6eV8MuTnxILbW3sDcFHD04cewdOHHtM3C/B5uQND1Gy3ksxm4oufTJcPtzE6li25ya7TR57jkYiRTGYQVoVasfCGHbDYbuI3JVSNytclHwYyNhDNHwpAoFynI3J4J7CeGnDn1A7S2rmB6//2oVipYb8ZxcZM818xjmHv4cWQP/ArWWkUsXati+coKPvChj6G+voS3f3IG+ycTODSriEDk6PUtUr2Wl3zVyqU9IeeoioVCcAEDk6tFytVoIqwIt8cy2I/kpMqA/ckomEC1Wo1UySICDXPaTDpDfWDlslVK4X0P34vNch0vv/QNHL7/IZjpGXzso7+FUqlEIbCPcqWMe47cjxe++Q3kY3WceOVlHJgAZg7kVdh1y5j1wAr2cXWnIx3W5kg/DYdCzqkVi0UJ3dI6HAGnLcKKMfBYhrSk8rksDARVNkDKXrgFKGUutr8yVCkXeR5WLop5mJko4LFHKBReXMbho0fFV1XrVTnX1tZNIerM7BxWVtfx0ME0Ds4V3ZSGqa6mvZFSqD6F2nqjLZl7vY6vzTXxbNA5l1Ug5TKNYXFfVEH6cwBd0svk2i0scguMy146nZ4vXaByVI7bqZMTcsXkczwex0QpKyT68enXcOnSEoXUFm7cWMPJkydw7txZSRfkMgmV6ecGQUZaka5audlzlUaVHJdLLre7hq/LQ8c0hFykXOOQZtAYn1YhPZQcVxJkdxpe00zIQ62RZ2mTeunOZi9jrmrR2WwzuZh00/kYFs6/hcfe/0u4/+gxNFsNHL7vCD7y4d/EZCGLB+6ddsOb8k88MofLZNzq1GErUOC45OLUhKW6g7iD2d/wY3Jx9p37MP26SwobSraN3UhoTS7/l9+IuXVQFAmJXC1p1W3LpKv3fEyB/BDXTpXy5IssMv70mHnI14ULCxQKy1LTNUlqdmBPUYU2XZHgSPVCgVMJajIRR/1HuzvuI2ywclkWnSeB0cKYNHftFAte/izMGLs8liZXNjNULtOMq1SDq051TS4OTV53jRo/yOQiQ5/kQj7HTYQuLizic88+h5OvvibdNpwl57Iaz6g7bmWDdMXEiFwcFmM+cvm810CFRSM2WhLj0i+VSgu55IsR4lxWqInFDz3of72nXKQe/HxcYsnzF/vDhGrUtXLZ8LKnqvuGnyq3FvnhckcyVyk8cOwYqYxJPq0tncqsfFypMCw0dLzuH1YsVi7pdxRSGT71MqS2i1MJrFzbrqugycXHR3OQ3gU0m25ZMSdBg2ZMzkk9k4FaRW0TVVJv6Z8GpyicjHS1aGiSuBXCNjrdDubmZvHx3/64XKdNxOoSsYhrdO2WdBEl4qZHKs0Q9lpMLlbHgSp9cXsu3Zox7g6qVqsoka/iBK7vBpRypYjIaYQV4Q6FjiP5KyZXUCGv21rM0cPPKeI5PnVya6nqdHzH81y2tw9/7g/6EvY4rE1PTxGx0uDpv1mx+GpMGA5rXGnqJ5W+E673yivP5WjJgiMKynfDpTWVStVTLn9tlyif1Jg5kXm/G5A8VetW/WtuKiIjndKuCumCQF2lwMoj5PLqr1xySV1XuyWFhKxcXSIVLxwOdauPScFhkYv59P24b1xTH/ORS2/k9IdqTEo4rZBy9bnSFPCurcuUw9oqHIvqBn4WLZV5Dyw7odCTo9ae9PO1u56h9uUyhVwOhbV0MqHOaaPPRp3U6ezZs9Iq3DO7B48++ojq4C5CxMTgwRYcVjsqLMa8cKa7clxypYmALiFNPQWlugFWrmpFh0VzqHxSRWFFxLqbEOVS5OKyE3/+mkMKi3M2k5KiwHa3u+Ng7bkcJy2ly/yZFatarWD+0DxmyWcxYVtEKl70gZo8rFycSmB1isdNH2lVKkLIlSJ17dENuXNq2T6FZSUsl5lcBY94oloRse4+dFhk+JVLvIrSqWwmKXtKi1Af5Tl68mxEDuQcJJNxFNIGXvzWi9KK49FANjt2UrIDk253jC//KeDCP6lqIHXi7L0OzTphGqMQyBn6jhX3hvn4wzeH3GrFQZHJpcY+9gY9/yVCg7H71aygsGiSQnAi1FTJTJ7fivNZXdXFI8fp42ErcmTw3mN7yU8tw4mlceSRD9EDn8Ta0mkcKLnDw7hl52Wq1Al47oZ60+141hOPaDMunosz9LmC1LfbHvF0ugLi5azyQO6927cGrUajjhD+rFyoicUTnrlzJWyHPyzyA+IH5s7Mp7aSWOQoLPIGT7mG/xGw58oSOX79Nz6KVG4SnYGBpZ/8ELlYB9l0jtSJFalND7/vVUro03NYrDfbolz+Lh6do+dKVu545lwWE1QOc4Y19JyE5dauGU+snTj56jnaHLoyh3ATK8OdtwVqslekNeeHDov8KOlbL6EsmTZl7nZHJZR090tQWHSP72Lx5A9RmJzF4Ycfwwc++GtYWTyNGBqI0Ul4IIaUJvf62y7sqPO02r0dysV9gZxiKNRqKE1MyHsmlx5Wxq1LJhbtOFi+cvH4V7/6tTcREev/H+l0SgrmavX6TnKpsHhzq4zVm11pFfpNvaN26nQsIkdvu5FxXBt09KH3Y2JqGhz1jn/ru7C7NeydyQ/NuW2g2bJl/KD/ujq0mWYPGVLHmBnzuoBsY4CZThtFpyQVGTzcv0v+iismmKTpdHawvlk+/uzzn/sinWgTIcRY/DKFjCekN7VqPSCXZdDDy+HAvQ9JYd1uJ+FxiJwM9R/NCnLtxhaaPQP3Hj6CD3/ko1hbvYIceTT/ddgrcZKWPZtuB+pcFNfL8z1mpc49Jt4uTp4vlcoQIVvSSmUVk9BnxjG3b96+vLzy0ic++ftPkBIv0KE9hBBjY97TKSJXEYHKxV0xTL5sLosCeS6ZwXiknM5R5PBXovK6/fPubDKcZV9aWsYEhd4jR46o+RaGx3OLsFqpkfnmVAapkkwmMkCuUIKu/+J7cPzJTzo+kTSRL81g/8GjpHoWXj916rt/8ulP/wWR6gKdqIOQYqxahXokdBC5uHXYIVUyVVFgUN9iQWrQDdebKcN/7tw5ImYO+w8cxNGjx2APOm5LU7UxNTjUcYIT5J06bbfchsPj4fsfluO3jUn0Zf3ZX/H1GvW6/daZM6888+zTTy4uLr6FkP1U7yjGLt1wq7A42loMIhevZ/DD5hbdL7znPZDqGsPEO+9coBZgH8V8VmqnvPMqonBik/0ehzcewMpDx6SLKOA+rYE7nwN3aDcbDefCO+dPPvnkk58+9eabp2hzeEdRKIxdPRYjrWuaAgrmdGuRw15Q36K/zJk91sLiEtY3N0VdHn3kIezfv09KllsdN/vun5HPLRZ0h/pzKkQm+QhQKjbpTCqeW4LHMy5dXHzt+S88/2eKVA2MAUJNLM5U+0e3+Acj8IQfMrwqiFyqtXg7crEfm9+/l2TdxtbWFi4sLGJt7bocX6/VpYQmqL9Fwm0hj0Q8rq63K6mcy5cv/fjLX/rbJ1588TsnaNcaxgShDoWddhfVak1KY8yA3xbM3C4squ4f19DvDIuSCrh0Ddl8AblEHKYzoNMVvRZfjcjl5IemfFiV4I5FZXLpGZpHSdVpt5yrV5bPfPa5z3zq+PGXXsEYkYoR+lDInbdcMOeoIr5R/cncKiw6emBo3S1TdrafgUkxNzMBu9+VSW0tIykjpaH24vncmVwyKDYg5HlDCdmkK1Kxp+Ll8vKlNz//+ec1qcYi/PkxFh5LF8zp2fBGCXbbsCjTDjW8jLnqg5HzNTt9lKZm3Fr3elmy9dt6cGi/Oqkmk8vvtWzdP8hK5TPqvW7Xvnx56Y2vfPlLn/raN49/H65S2RgzjI15l5qm6pBcDD/BhFzFQuDYPY9cI5WovG8Mfdy8sSr77Nk3L5On+c8vBHRsMfQc4jzl4r5JKdcxhqTq9exLlxbe+OxTT/3hP/3LvzGp6hhTjFWrUJPLLTEeQhMsfduw2Kaw2PDyU6w6FhKY2rNPRjrzhG08I6DbIThUJ61QOizq+d5jiYSolYS/bpeM+tKJLzz33B+88OJ3/gdjGP78GLt0gz8sBg0s1kPabxkWVWvRFMWy5EeWeHLc+448gFQ6gxyPuB4dnqVCJysXdw1xhQNP9djtSDmzdXl54Qd/98W/+eN/feE/f4QxyFPdDiFPkAYXV2rl4sk8dmstGru1FiUV4eaosmTYE+ksCtk8EaaCtatLmJooyeCMAYW6tmToHU8RZSFycUuVZ22eyZV4QMZgceHs95797F//6X+8+P03aJc23gUItWKl0klVdrwTu4VFDS8s6rDm+MIbXHLVydCXb27g6vJFGet3z+EH0eeSO+7+4XlL1aBYx3c8h0QeTi/kSqSt06deO/6XTzzxR+8mUjHCXY9FD7tE5NiqVGANrB36pcMiK5cMwRrZLvkn+oeTnV7foo9cbSJXoTSJYmlCOohXriy5BYJwtZJnuGFS8RB8PUepnjU5X5zovHriR9986jNP/dXp02+/gxB3KP80CL3H4p/PnSgWVV37zjyWVi7LDlauDHkmmellF8+1du0KLpw/K5UI9xx+QGaJ0XOBuCOms55y2ZKvGnA1RP0nZxf+4Xd/7xN/TqQ6j3cZqRhhVizHdOeuRiKZwESpKOPzZL5QtYOmyp14LqZKfcRzsQ+b3XtQflScf8X+6qULmJmecmvVdaYdkMw/9wvy2MZu37r28iuvfvErf/+P/1yv168ipPVUPyvCTKzewDavdPuDpUG/L5ORcmisym8271QnrhDtUYgqkToFmX4uhEmQ+tXqwywAk2XhnQX5pfrDxx403vuLv4z1GysOZ/vdSzjy0yacgSdf1Xn7/OLrL337v7/+9X//95O0kWf+D++UfD8jwjxfDieUZmmZoyU1su1Wf5dzm/Mat9mmI65/8kexZLRsqYXfh/O3SiJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiPDTAfhfX4LSfIwbO8AAAAAASUVORK5CYII="};var g=0;var b=0;var a=true;var f;c.extension_filters=function(i){var j=[];$.each(i,function(){if(j.indexOf(this.extension)<0){j.push(this.extension)}});return j};c.contextMenuInit=function(){$(document).contextMenu();$(".thumb-folder").contextMenu({init:'<li><a tabindex="-1" href="#" data-action="rename"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> '+h.labels.rename+"</a></li>",menuSelected:function(j,i){switch(i.attr("data-action")){case"rename":c.rename(JSON.parse(j.attr("data-raw")));break}}});$("#lightgallery .item[data-type='photo']").contextMenu({init:'<li><a tabindex="-1" href="#" data-action="choose">                            <b><i class="fa fa-check" aria-hidden="true"></i> '+h.labels.choose+'</b>                        </a></li>                        <li class="divider"></li>                        <li><a tabindex="-1" href="#" data-action="rename">                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> '+h.labels.rename+'                        </a></li>                        <li><a tabindex="-1" href="#" data-action="photo-editor">                            <i class="fa fa-paint-brush" aria-hidden="true"></i> '+h.labels.edit+'                        </a></li>                        <li><a tabindex="-1" href="#" data-action="download">                            <i class="fa fa-cloud-download" aria-hidden="true"></i> '+h.labels.download+"                        </a></li>",menuSelected:function(j,i){switch(i.attr("data-action")){case"choose":c.chooseItem(JSON.parse(j.attr("data-raw")));break;case"rename":c.rename(JSON.parse(j.attr("data-raw")));break;case"photo-editor":c.photoEditor(JSON.parse(j.attr("data-raw")));break;case"download":c.download(JSON.parse(j.attr("data-raw")));break}}});$("#lightgallery .item[data-type='file']").contextMenu({init:'<li><a tabindex="-1" href="#" data-action="choose">                            <b><i class="fa fa-check" aria-hidden="true"></i> '+h.labels.choose+'</b>                        </a></li>                        <li class="divider"></li>                        <li><a tabindex="-1" href="#" data-action="rename">                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> '+h.labels.rename+'                        </a></li>                        <li><a tabindex="-1" href="#" data-action="download">                            <i class="fa fa-cloud-download" aria-hidden="true"></i> '+h.labels.download+"                        </a></li>",menuSelected:function(j,i){switch(i.attr("data-action")){case"choose":c.chooseItem(JSON.parse(j.attr("data-raw")));break;case"rename":c.rename(JSON.parse(j.attr("data-raw")));break;case"download":c.download(JSON.parse(j.attr("data-raw")));break}}})};c.photoEditor=function(i){$(".photo-editor .work-space").html("");c.current(i);$(".photo-editor .toolbar .pull-right").html('<div class="btnx" id="c-undo"><i class="fa fa-undo" aria-hidden="true"></i></div>                <div class="btnx" id="c-save"><i class="fa fa-floppy-o" aria-hidden="true"></i></div>                <div class="btnx" id="c-back"><i class="fa fa-times" aria-hidden="true"></i></div>');$(".photo-editor .work-space").append('<img style="max-width: 80%;" id="cropper_img" src="'+h.public_path+i.path+'">                <div class="editor-toolbar">                    <div class="btnx" id="arrow"><i class="fa fa-arrows" aria-hidden="true"></i></div>                    <div class="btnx" id="crop"><i class="fa fa-crop" aria-hidden="true"></i></div>                    <div class="btnx" id="zoom-in"><i class="fa fa-search-minus" aria-hidden="true"></i></div>                    <div class="btnx" id="zoom-out"><i class="fa fa-search-plus" aria-hidden="true"></i></div>                    <div class="btnx" id="flip-h" data-option="-1"><i class="fa fa-arrows-h" aria-hidden="true"></i></div>                    <div class="btnx" id="flip-v" data-option="-1"><i class="fa fa-arrows-v" aria-hidden="true"></i></div>                    <div class="btnx" id="rotate-left"><i class="fa fa-undo" aria-hidden="true"></i></div>                    <div class="btnx" id="rotate-right"><i class="fa fa-repeat" aria-hidden="true"></i></div>                    <div class="btnx" id="accept" style="margin-left: 10px;"><i class="fa fa-check" aria-hidden="true"></i></div>                    <div class="btnx" id="clear"><i class="fa fa-refresh" aria-hidden="true"></i></div>                </div>');c.viewMode("photo-editor");var j=document.getElementById("cropper_img");c.cropper(new Cropper(j,{viewMode:1,autoCrop:false,background:false,toggleDragModeOnDblclick:false,minContainerWidth:$(window).width(),minContainerHeight:$(window).height()-40}));c.cropper().setDragMode("move");$("#c-back").on("click",function(){$(".photo-editor .photo-preview").html("");$(".photo-editor").removeClass("preview");c.cropper().destroy();c.back()});$("#flip-h").attr("data-option","-1");$("#flip-v").attr("data-option","-1");$("#arrow").on("click",function(){c.cropper().setDragMode("move")});$("#crop").on("click",function(){c.cropper().setDragMode("crop")});$("#zoom-in").on("click",function(){c.cropper().zoom(-0.1)});$("#zoom-out").on("click",function(){c.cropper().zoom(0.1)});$("#rotate-left").mousedown(function(){f=setInterval(function(){c.cropper().rotate(-0.5)},10);return false}).mouseup(function(){clearInterval(f);return false});$("#rotate-right").mousedown(function(){f=setInterval(function(){c.cropper().rotate(0.5)},10);return false}).mouseup(function(){clearInterval(f);return false});$("#flip-h").on("click",function(){c.cropper().scaleX(parseInt($(this).attr("data-option")));$(this).attr("data-option",parseInt($(this).attr("data-option"))==-1?1:-1)});$("#flip-v").on("click",function(){c.cropper().scaleY(parseInt($(this).attr("data-option")));$(this).attr("data-option",parseInt($(this).attr("data-option"))==-1?1:-1)});$("#accept").on("click",function(){$(".photo-editor .photo-preview").html(c.cropper().getCroppedCanvas());$(".photo-editor").addClass("preview")});$("#c-undo").on("click",function(){$(".photo-editor .photo-preview").html("");$(".photo-editor").removeClass("preview")});$("#c-save").on("click",function(){c.cropper().getCroppedCanvas().toBlob(function(k){var l=new FormData();l.append("_token",h.token);l.append("extension",c.current().extension);l.append("filename",c.current().filename);l.append("path",c.path());l.append("file",k);$.ajax(h.url+"/save-photo-editor",{method:"POST",data:l,processData:false,contentType:false,beforeSend:function(){$(".loading").addClass("open")},complete:function(){$(".loading").removeClass("open")},success:function(m){if(m.status=="success"){$(".photo-editor .photo-preview").html("");$(".photo-editor").removeClass("preview");c.cropper().destroy();c.back();c.fetch()}toastr[m.status](m.message)},error:function(){toastr.error(h.labels.error_connection)}})})});$("#clear").on("click",function(){c.cropper().clear()})};c.status_info=ko.pureComputed(function(){var i=0;var j=0;var k="";switch(c.viewMode()){case"grid":if(c.ids().length==0){if(c.filter()===""){files=c.photos().length+c.videos().length+c.audios().length+c.files().length}else{files=(c.filter()=="photos"?c.photos().length:ko.utils.arrayFilter(c.photos(),function(l){return l.extension==c.filter()}).length);files+=(c.filter()=="videos"?c.videos().length:ko.utils.arrayFilter(c.videos(),function(l){return l.extension==c.filter()}).length);files+=(c.filter()=="audios"?c.audios().length:ko.utils.arrayFilter(c.audios(),function(l){return l.extension==c.filter()}).length);files+=(c.filter()=="audios"?c.audios().length:ko.utils.arrayFilter(c.audios(),function(l){return l.extension==c.filter()}).length);files+=(c.filter()=="files"?c.files().length:ko.utils.arrayFilter(c.files(),function(l){return l.extension==c.filter()}).length)}if(files){k+=files+" "+(files>1?h.labels.files:h.labels.file)}if(c.folders().length){k+=(files?", ":" ")+c.folders().length+" "+(c.folders().length>1?h.labels.folders:h.labels.folder)}}else{k=h.labels.selected;j=ko.utils.arrayFilter(c.ids(),function(l){return l.type=="folder"}).length;i=c.ids().length-j;if(i){k+=" "+i+" "+(i>1?h.labels.files:h.labels.file)}if(j){k+=(i?", ":" ")+j+" "+(j>1?h.labels.folders:h.labels.folder)}}break}return k});c.upload_info=ko.pureComputed(function(){var i="";if(c.uploadsuccess()==0){i=h.labels.uploading}else{i=h.labels.uploaded+" "+c.uploadsuccess()+" "+(c.uploadsuccess()>1?h.labels.files:h.labels.file)}return i});c.filemanager_rendered=function(){$('[data-toggle="tooltip"]').tooltip({placement:"bottom"});$(".upload #fileupload").on("change",function(){var i=$(this)[0].files;c.uploadsuccess(0);d(i);$(".upload #fileupload").val("")});$(document).on("dragover",function(i){i.stopPropagation();i.preventDefault()}).on("dragleave",function(i){i.stopPropagation();i.preventDefault()}).on("drop",function(i){i.preventDefault()});$(".grid-view").on("dragover",function(i){$(this).addClass("drag");i.stopPropagation();i.preventDefault()}).on("mouseout",function(){$(this).removeClass("drag")}).on("drop",function(j){j.stopPropagation();j.preventDefault();$(this).removeClass("drag");var i=j.originalEvent.dataTransfer.files;d(i)})};c.gotoFolder=function(i){c.path(i);c.uploadprogress(false)};c.doFilter=function(j,i){c.ids([]);c.destroy_lg();c.filter(j);c.filter_label(i);$("#lightgallery").removeAttr("lg-uid");$("#lightgallery").removeAttr("lg-event-uid");lightGallery(document.getElementById("lightgallery"),{thumbnail:true,selector:".item-preview"});c.contextMenuInit()};c.destroy_lg=function(){try{var i=document.getElementById("lightgallery");lightGallery(i);window.lgData[i.getAttribute("lg-uid")].destroy(true)}catch(j){c.destroy_lg()}};c.fetch=function(){$.ajax({url:h.url,type:"post",data:{_token:h.token,path:c.path,disk_space:g,disk_space_usage:b,disk_space_usage_computed:a},beforeSend:function(){c.is_search(true);c.loading(true)},error:function(){toastr.error(h.labels.error_connection)},complete:function(){c.is_search(false);c.loading(false)},success:function(i){if(i.status=="success"){c.paths(i.paths);c.files(i.files);c.folders(i.folders);c.videos(i.videos);c.audios(i.audios);c.photos(i.photos);c.ids([]);c.filter("");c.filter_label(h.labels.all);g=i.disk_space;b=i.disk_space_usage;a=false;c.disk_space_info(h.labels.disk_space+" ("+b+"/"+g+"MB)");c.disk_space_percent_info((b*100)/g);$("#lightgallery").removeAttr("lg-uid");lightGallery(document.getElementById("lightgallery"),{thumbnail:true,selector:".item-preview"});c.contextMenuInit()}else{toastr[i.status](i.message)}}})};c.select_item=function(i){if($.inArray(i,c.ids())>=0){c.ids.remove(i)}else{c.ids.push(i)}};c.select_all=function(i){c.ids([]);switch(i){case"folders":$.each(c.folders(),function(){c.ids.push(this)});break;case"files":$.each((c.filter()==""||c.filter()=="photos"?c.photos():ko.utils.arrayFilter(c.photos(),function(j){return j.extension==c.filter()})),function(){c.ids.push(this)});$.each((c.filter()==""||c.filter()=="videos"?c.videos():ko.utils.arrayFilter(c.videos(),function(j){return j.extension==c.filter()})),function(){c.ids.push(this)});$.each((c.filter()==""||c.filter()=="audios"?c.audios():ko.utils.arrayFilter(c.audios(),function(j){return j.extension==c.filter()})),function(){c.ids.push(this)});$.each((c.filter()==""||c.filter()=="files"?c.files():ko.utils.arrayFilter(c.files(),function(j){return j.extension==c.filter()})),function(){c.ids.push(this)});break}};c.createDir=function(){$.ajax({url:h.url+"/create-dir",type:"post",data:{_token:h.token,dirname:$("#dirname").val(),path:c.path()},beforeSend:function(){c.loading(true)},error:function(){toastr.error(h.labels.error_connection)},complete:function(){c.loading(false)},success:function(i){if(i.status=="success"){$("#cfmCreateDir").modal("hide");c.fetch()}toastr[i.status](i.message)}});return false};c.doDelete=function(){$.ajax({url:h.url+"/delete",type:"post",data:{_token:h.token,ids:c.ids()},beforeSend:function(){c.loading(true)},error:function(){toastr.error(h.labels.error_connection)},complete:function(){c.loading(false)},success:function(i){if(i.status=="success"){$("#cfmDelete").modal("hide");a=true;c.fetch()}toastr[i.status](i.message)}});return false};c.rename=function(i){c.current(i);$("#new_filename").val(c.current().filename);$("#cfmRename").modal("show")};c.doRename=function(){$.ajax({url:h.url+"/rename",type:"post",data:{_token:h.token,new_filename:$("#new_filename").val(),path:c.path(),file:c.current()},beforeSend:function(){c.loading(true)},error:function(){toastr.error(h.labels.error_connection)},complete:function(){c.loading(false)},success:function(i){if(i.status=="success"){$("#cfmRename").modal("hide");c.fetch()}toastr[i.status](i.message)}});return false};c.upload=function(){$(".upload #fileupload")[0].click()};c.closeUploadProgress=function(){$(".upload .uploadbar .list-group").html("");c.uploadprogress(false)};c.back=function(){c.viewMode("grid")};function d(l){c.uploadprogress(true);for(var k=0;k<l.length&&c.uploadprogress();k++){var m=new FormData();var j="_"+Math.floor(Date.now()/1000)+"_"+k;m.append("file",l[k]);m.append("path",c.path());m.append("idx",j);m.append("_token",h.token);$(".upload .uploadbar .list-group").append('<li id="idx'+j+'" title="'+l[k].name+'"><div id="filename">'+l[k].name+'</div>                            <div id="res">                                <svg width="40" height="40">                                  <circle r="15" cx="20" cy="20" fill="transparent" stroke="#ccc" stroke-width="4" stroke-dasharray="94.247" stroke-dashoffset="0"></circle>                                  <circle id="pro" r="15" cx="20" cy="20" fill="transparent" stroke="#ff4300" stroke-width="4" stroke-dasharray="94.247" stroke-dashoffset="94.247"></circle>                                  <text x="12" y="24" font-size="9">00%</text>                                </svg>                            </div>                        </li>');$(".nano").nanoScroller();$.ajax({url:h.url+"/upload",type:"post",data:m,cache:false,contentType:false,processData:false,beforeSend:function(){},error:function(){var i=this.data.get("idx");var n=this.data.get("file");$(".upload .uploadbar .list-group #idx"+i+" #res").html("");$(".upload .uploadbar .list-group #idx"+i+" #filename").html('<i class="error">('+h.labels.error+")</i> "+n.name)},xhr:function(){var n=new window.XMLHttpRequest();var i=this.data.get("idx");n.upload.addEventListener("progress",function(o){e(o,i)},false);return n},success:function(o){var i=this.data.get("idx");var n=this.data.get("file");if(o.status=="success"){c.uploadsuccess(c.uploadsuccess()+1);$(".upload .uploadbar .list-group #idx"+i+" > #res").html('<i class="fa fa-check" aria-hidden="true"></i>');a=true;c.fetch()}else{$(".upload .uploadbar .list-group #idx"+i+" #res").html("");$(".upload .uploadbar .list-group #idx"+i+" #filename").html('<i class="error">('+(o.message===undefined?h.labels.error:o.message)+")</i> "+n.name)}}})}}function e(j,i){if(j.lengthComputable){var l=j.loaded/j.total;var k=Math.floor(l*100);var m=((100-(l*100))/100)*(Math.PI*(15*2));$(".upload .uploadbar .list-group #idx"+i+" #res #pro").css("stroke-dashoffset",m+"px");$(".upload .uploadbar .list-group #idx"+i+" #res text").html(k<10?("0"+k+"%"):(k+"%"))}}c.chooseItem=function(i){switch(h.type){case"CKEditor":window.opener.CKEDITOR.tools.callFunction(h.CKEditorFuncNum,h.public_path+i.path);break;case"imageID":$("#"+h.fieldID,window.opener.document).attr("src",h.public_path+i.path);$("#"+h.fieldID,window.opener.document).attr("data-src",i.path);break;case"backgroundID":$("#"+h.fieldID,window.opener.document).css("background-image","url("+h.public_path+i.path+")");$("#"+h.fieldID,window.opener.document).attr("data-src",i.path);break;default:$("#"+h.fieldID,window.opener.document).val(i.path);window.opener.$("#"+h.fieldID).trigger("change");break}if(h.callback!=""){window.opener[h.callback](i.path)}window.close()};c.download=function(j){var i=$("<a>").attr("href",h.public_path+j.path).attr("download",j.filename).appendTo("body");i[0].click();i.remove()};c.doSearch=function(j,i){c.ids([]);c.destroy_lg();c.search($(i.target).val());$("#lightgallery").removeAttr("lg-uid");$("#lightgallery").removeAttr("lg-event-uid");lightGallery(document.getElementById("lightgallery"),{thumbnail:true,selector:".item-preview"});c.contextMenuInit()};c.clearSearch=function(j,i){$(i.target).parent().children("input").val("");c.ids([]);c.destroy_lg();c.search("");$("#lightgallery").removeAttr("lg-uid");$("#lightgallery").removeAttr("lg-event-uid");lightGallery(document.getElementById("lightgallery"),{thumbnail:true,selector:".item-preview"});c.contextMenuInit()};ko.computed(c.fetch)},template:'<script type="text/html" id="filemanager-template">    <div data-bind="attr: {class: loading() ? \'loading open\':\'loading\'}">        <span class="g-loading-container">            <div></div>            <div></div>            <div></div>            <div></div>        </span>    </div>    <div class="grid-view" data-bind="visible: viewMode() == \'grid\'">        <nav class="navbar navbar-default navbar-fixed-top">            <div class="toolbar">                <button class="btn btn-primary navbar-btn btn-sm" data-bind="click: upload">                    <i class="fa fa-cloud-upload" aria-hidden="true"></i> <span data-bind="html: params.labels.upload"></span>                </button>                <button class="btn btn-default navbar-btn btn-sm" data-toggle="modal" data-target="#cfmCreateDir">                    <i class="fa fa-folder" aria-hidden="true"></i> <span data-bind="html: params.labels.new_dir"></span>                </button>                <button data-bind="click: fetch, attr: {title: params.labels.refresh}" class="btn btn-default navbar-btn btn-sm" data-toggle="tooltip">                    <i class="fa fa-refresh" aria-hidden="true"></i>                </button>                <button data-bind="visible: ids().length > 0, attr:{title: params.labels.delete}, click: function(){ $(\'#cfmDelete\').modal(\'show\'); }" class="btn btn-danger navbar-btn btn-sm"  data-toggle="tooltip">                    <i class="fa fa-trash" aria-hidden="true"></i>                </button>                <div class="pull-right">                    <div class="btn-group" role="group">                        <button data-bind="visible: ids().length == 1 && ids()[0].type != \'folder\', attr:{title: params.labels.choose}, click: chooseItem.bind($data, ids()[0])" class="btn btn-default navbar-btn btn-sm" data-toggle="tooltip">                            <i class="fa fa-check" aria-hidden="true"></i>                        </button>                        <button data-bind="visible: ids().length == 1, attr:{title: params.labels.rename}, click: rename.bind($data, ids()[0])" class="btn btn-default navbar-btn btn-sm" data-toggle="tooltip">                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>                        </button>                        <button data-bind="visible: ids().length == 1 && ids()[0].type == \'photo\', attr:{title: params.labels.edit}, click: photoEditor.bind($data, ids()[0])" class="btn btn-default navbar-btn btn-sm" data-toggle="tooltip">                            <i class="fa fa-paint-brush" aria-hidden="true"></i>                        </button>                        <button data-bind="visible: ids().length == 1 && ids()[0].type != \'folder\', attr:{title: params.labels.download}, click: download.bind($data, ids()[0])" class="btn btn-default navbar-btn btn-sm" data-toggle="tooltip">                            <i class="fa fa-cloud-download" aria-hidden="true"></i>                        </button>                    </div>                    <!--ko if: photos().length > 0 || videos().length > 0 || audios().length > 0 || files().length > 0 -->                    <div class="btn-group" role="group" aria-label="group-action">                        <button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                            <i class="fa fa-filter" aria-hidden="true"></i> <span data-bind="html: filter_label()"></span> <span class="caret"></span>                        </button>                        <ul class="dropdown-menu pull-right filter-files">                            <div data-bind="html: params.labels.all, click: doFilter.bind($data, \'\', params.labels.all)"></div>                            <!-- ko if: photos().length > 0 -->                            <div data-bind="html: params.labels.photos, click: doFilter.bind($data, \'photos\', params.labels.photos)"></div>                            <!-- ko foreach: extension_filters(photos()) -->                            <span data-bind="html: $data, click: $parent.doFilter.bind($data, $rawData, $rawData)"></span>                            <!-- /ko -->                            <!-- /ko -->                            <!-- ko if: videos().length > 0 -->                            <div data-bind="html: params.labels.videos, click: doFilter.bind($data, \'videos\', params.labels.videos)"></div>                            <!-- ko foreach: extension_filters(videos()) -->                            <span data-bind="html: $data, click: $parent.doFilter.bind($data, $rawData, $rawData)"></span>                            <!-- /ko -->                            <!-- /ko -->                            <!-- ko if: audios().length > 0 -->                            <div data-bind="html: params.labels.audios, click: doFilter.bind($data, \'audios\', params.labels.audios)"></div>                            <!-- ko foreach: extension_filters(audios()) -->                            <span data-bind="html: $data, click: $parent.doFilter.bind($data, $rawData, $rawData)"></span>                            <!-- /ko -->                            <!-- /ko -->                            <!-- ko if: files().length > 0 -->                            <div data-bind="html: params.labels.files_tit, click: doFilter.bind($data, \'files\', params.labels.files_tit)"></div>                            <!-- ko foreach: extension_filters(files()) -->                            <span data-bind="html: $data, click: $parent.doFilter.bind($data, $rawData, $rawData)"></span>                            <!-- /ko -->                            <!-- /ko -->                        <ul>                    </div>                    <!-- /ko -->					<div class="btn-group" role="group">                        <div id="search-wrap">                            <input class="form-control input-sm" data-bind="event: {keyup: doSearch}, attr:{placeholder: params.labels.search}">                            <i id="search-clear" class="fa fa-times" aria-hidden="true" data-bind="click: clearSearch, attr: {\'data-toggle\': search()!=\'\'}"></i>                        </div>                    </div>                </div>            </div>            <ol class="breadcrumb">                <li data-bind="click: gotoFolder.bind($data, \'/\')"><i class="fa fa-home" aria-hidden="true"></i></li>                <!-- ko foreach: paths -->                <li data-bind="click: $parent.gotoFolder.bind($data, path), html: dir"></li>                <!-- /ko -->            <ol>        </nav>        <div class="upload" id="upload">            <input id="fileupload" type="file" name="fileupload" multiple>            <!-- ko if: uploadprogress -->            <div class="uploadbar">                <div id="header">                    <span data-bind="html: upload_info()"></span>                    <i class="fa fa-times" aria-hidden="true" data-bind="click: closeUploadProgress"></i>                </div>                <div id="about" class="nano" style="max-height: 200px;">                    <div class="nano-content">                        <ul class="list-group"></ul>                    </div>                </div>            </div>            <!-- /ko -->        </div>        <div class="main">            <!--ko if: folders().length > 0-->            <div class="container-fluid" style="margin-top: 10px;">                <span data-bind="html: params.labels.folders_tit"></span>                <div class="badge" data-bind="html: params.labels.select_all, click: select_all.bind($data, \'folders\')"></div>            </div>            <!--ko foreach: folders-->            <div data-bind="attr: {class: $.inArray($rawData, $parent.ids())>=0 ? \'thumb-folder selected\':\'thumb-folder\', \'data-raw\': JSON.stringify($data)}">                <i data-bind="click: $parent.select_item" class="fa fa-folder" aria-hidden="true"></i> <span data-bind="click: $parent.gotoFolder.bind($data, $parent.path() + \'/\' + filename), html: filename"></span>            </div>            <!--/ko-->            <!--/ko-->            <!--ko if: photos().length > 0 || videos().length > 0 || audios().length > 0 || files().length > 0 -->            <div class="container-fluid" style="margin-top: 10px;">                <span data-bind="html: params.labels.files_tit"></span>                <div class="badge" data-bind="html: params.labels.select_all, click: select_all.bind($data, \'files\')"></div>            </div>            <!--ko foreach: videos-->            <!-- ko if: ($parent.filter() === "" || $parent.filter() === "videos" || $parent.filter() === extension) && ( $parent.search() === "" || String(filename).latinise().toLowerCase().indexOf(String($parent.search()).latinise().toLowerCase()) !== -1) -->            <div style="display:none;" data-bind="attr:{id: \'video\'+($index()+1)}">                <video class="lg-video-object lg-html5" controls preload="none">                    <source data-bind="attr: {src: $parent.params.public_path + path}">                </video>            </div>            <!--/ko-->            <!--/ko-->            <!--ko foreach: audios-->            <!-- ko if: ($parent.filter() === "" || $parent.filter() === "audios" || $parent.filter() === extension) && ( $parent.search() === "" || String(filename).latinise().toLowerCase().indexOf(String($parent.search()).latinise().toLowerCase()) !== -1) -->            <div style="display:none;" data-bind="attr:{id: \'audio\'+($index()+1)}">                <div class="lg-audio-container">                    <div class="lg-disk-cd"></div>                    <div class="lg-audio-body">                        <div id="waveform"></div>                        <div class="lg-audio-toolbar">                            <div id="btn-group">                                <span class="btn-audio-play-pause">                                    <i class="fa fa-play" aria-hidden="true"></i>                                </span>                                <span class="btn-audio-toggle-mute">                                    <i class="fa fa-volume-up" aria-hidden="true"></i>                                </span>                            </div>                            <span id="lg-audio-process"></span>                        </div>                    </div>                </div>            </div>            <!--/ko-->            <!--/ko-->            <!--ko foreach: files-->            <!-- ko if: ($parent.filter() === "" || $parent.filter() === "files" || $parent.filter() === extension) && ( $parent.search() === "" || String(filename).latinise().toLowerCase().indexOf(String($parent.search()).latinise().toLowerCase()) !== -1) -->            <div style="display:none;" data-bind="attr:{id: \'file\'+($index()+1)}">                <div class="lg-file-container" data-bind="attr: {\'style\': \'background-image: url(\' + ($parent.extension_thumbnails[extension] === undefined ? $parent.extension_thumbnails[\'unknown\']:$parent.extension_thumbnails[extension]) + \');\' }"></div>            </div>            <!--/ko-->            <!--/ko-->            <div id="lightgallery">                <!--ko foreach: photos-->                <!-- ko if: ($parent.filter() === "" || $parent.filter() === "photos" || $parent.filter() === extension) && ( $parent.search() === "" || String(filename).latinise().toLowerCase().indexOf(String($parent.search()).latinise().toLowerCase()) !== -1) -->                <div data-type="photo" data-bind="attr: {class: $.inArray($rawData, $parent.ids())>=0 ? \'item selected\':\'item\', \'data-raw\': JSON.stringify($data), \'data-src\': $parent.params.public_path + path}">                    <span class="item-select fa" data-bind="click: $parent.select_item"></span>                    <div class="item-preview" data-bind="attr: {title: filename + \'.\' + extension, \'data-src\': $parent.params.public_path + path, \'data-sub-html\': filename+ \'.\'+extension+\'<br><small>\'+size+\' KB</small>\'}">                        <img class="img-cover" data-bind="attr: {\'src\': $parent.params.public_path + path}" />                    </div>                    <span class="filename" data-bind="html: filename + \'.\' + extension"></span>                </div>                <!-- /ko -->                <!--/ko-->                <!--ko foreach: videos-->                <!-- ko if: ($parent.filter() === "" || $parent.filter() === "videos" || $parent.filter() === extension) && ( $parent.search() === "" || String(filename).latinise().toLowerCase().indexOf(String($parent.search()).latinise().toLowerCase()) !== -1) -->                <div data-type="file" data-bind="attr: {class: $.inArray($rawData, $parent.ids())>=0 ? \'item selected\':\'item\', \'data-raw\': JSON.stringify($data), \'data-src\': $parent.params.public_path + path}">                    <span class="item-select fa" data-bind="click: $parent.select_item"></span>                    <div class="item-preview" data-bind="attr: {title: filename + \'.\' + extension, \'data-download-url\': $parent.params.public_path + path, \'data-html\': \'#video\'+($index()+1), \'data-sub-html\': filename+ \'.\'+extension+\'<br><small>\'+size+\' KB</small>\'}" data-poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABkCAYAAABkW8nwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABCUlEQVR4nO3SQQHAIADEsBv+PTMT9JdoyLftDh47g4BYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQiIRYJsUiIRUIsEmKREIuEWCTEIiEWCbFIiEVCLBJikRCLhFgkxCIhFgmxSIhFQiwSYpEQi4RYJMQisP2HrgHHDkcEwwAAAABJRU5ErkJggg==">                        <img class="img-cover" src="data:image/png;base64,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" />                    </div>                    <span class="filename" data-bind="html: filename + \'.\' + extension"></span>                </div>                <!--/ko-->                <!--/ko-->                <!--ko foreach: audios-->                <!-- ko if: ($parent.filter() === "" || $parent.filter() === "audios" || $parent.filter() === extension) && ( $parent.search() === "" || String(filename).latinise().toLowerCase().indexOf(String($parent.search()).latinise().toLowerCase()) !== -1) -->                <div data-type="file" data-bind="attr: {class: $.inArray($rawData, $parent.ids())>=0 ? \'item selected\':\'item\', \'data-raw\': JSON.stringify($data), \'data-src\': $parent.params.public_path + path}">                    <span class="item-select fa" data-bind="click: $parent.select_item"></span>                    <div class="item-preview" data-cus-type="audio" data-bind="attr: {\'data-cus-html\': \'#audio\'+($index()+1), title: filename + \'.\' + extension, \'data-src\': $parent.params.public_path + path, \'data-sub-html\': filename+ \'.\'+extension+\'<br><small>\'+size+\' KB</small>\'}">                        <img class="img-cover" data-bind="attr: {src: $parent.extension_thumbnails[\'audio\']}" />                    </div>                    <span class="filename" data-bind="html: filename + \'.\' + extension"></span>                </div>                <!--/ko-->                <!--/ko-->                <!--ko foreach: files-->                <!-- ko if: ($parent.filter() === "" || $parent.filter() === "files" || $parent.filter() === extension) && ( $parent.search() === "" || String(filename).latinise().toLowerCase().indexOf(String($parent.search()).latinise().toLowerCase()) !== -1) -->                <div data-type="file" data-bind="attr: {class: $.inArray($rawData, $parent.ids())>=0 ? \'item selected\':\'item\', \'data-raw\': JSON.stringify($data), \'data-src\': $parent.params.public_path + path}">                    <span class="item-select fa" data-bind="click: $parent.select_item"></span>                    <div class="item-preview" data-bind="attr: {\'data-cus-html\': \'#file\'+($index()+1), title: filename + \'.\' + extension, \'data-src\': $parent.params.public_path + path, \'data-sub-html\': filename+ \'.\'+extension+\'<br><small>\'+size+\' KB</small>\'}">                        <img class="img-cover" data-bind="attr: {src: $parent.extension_thumbnails[extension] === undefined ? $parent.extension_thumbnails[\'unknown\']:$parent.extension_thumbnails[extension] }"/>                    </div>                    <span class="filename" data-bind="html: filename + \'.\' + extension"></span>                </div>                <!--/ko-->                <!--/ko-->            </div>            <!--/ko-->        </div>        <div class="dragover">            <span class="bouncetoup"></span>            <span data-bind="html: params.labels.drop_to_upload"></span>        </div>    </div>    <div class="photo-editor" data-bind="visible: viewMode() == \'photo-editor\'">        <div class="toolbar">            <span id="title" data-bind="html: current().filename + \'.\' + current().extension"></span>            <div class="pull-right"></div>        </div>        <div class="work-space"></div>        <div class="photo-preview"></div>    </div>    <div class="status-bar text-muted" data-bind="visible: viewMode() == \'grid\'">        <div class="pull-left" data-bind="html: status_info"></div>        <div class="disk-space pull-right">            <span data-bind="html: disk_space_info"></span>             <span class="progress-container">                 <span data-bind="attr: {style: \'width: \'+disk_space_percent_info()+\'%\'}"></span>            </span>        </div>    </div>    <!--cfmCreateDir-->    <div class="modal" id="cfmCreateDir" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="cfmCreateDir" aria-hidden="true">        <div class="modal-dialog">            <div class="modal-content modal-create-dir">                <div class="modal-body">                    <form role="form" data-bind="submit: createDir">                        <div class="form-group">                            <label for="dirname" class="control-label"><span data-bind="html: params.labels.dirname"></span> <sup class="text-danger">(*)</sup></label>                            <input type="text" class="form-control" name="dirname" id="dirname" required autofocus>                            <small data-bind="html: params.labels.note_create_dir"></small>                        </div>                        <button class="btn btn-primary" type="submit"><span data-bind="html: params.labels.save"></span></button>                        <button class="btn btn-default" data-dismiss="modal"><span data-bind="html: params.labels.cancel"></span></button>                    </form>                </div>            </div>        </div>    </div>    <!--cfmRename-->    <div class="modal" id="cfmRename" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="cfmRename" aria-hidden="true">        <div class="modal-dialog">            <div class="modal-content modal-info">                <div class="modal-body">                    <form role="form" data-bind="submit: doRename">                        <div class="form-group">                            <label for="new_filename" class="control-label"><span data-bind="html: params.labels.new_filename"></span> <sup class="text-danger">(*)</sup></label>                            <input type="text" class="form-control" name="new_filename" id="new_filename" required autofocus>                            <small data-bind="html: params.labels.note_filename"></small>                        </div>                        <button class="btn btn-primary" type="submit"><span data-bind="html: params.labels.save"></span></button>                        <button class="btn btn-default" data-dismiss="modal"><span data-bind="html: params.labels.cancel"></span></button>                    </form>                </div>            </div>        </div>    </div>    <!--cfmDelete-->    <div class="modal" id="cfmDelete" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="cfmDelete" aria-hidden="true">        <div class="modal-dialog">            <div class="modal-content modal-delete">                <div class="modal-body">                    <form role="form" data-bind="submit: doDelete">                        <h4 data-bind="html: params.labels.delete_confirm"></h4>                        <button class="btn btn-danger" type="submit"><span data-bind="html: params.labels.delete"></span></button>                        <button class="btn btn-default" data-dismiss="modal"><span data-bind="html: params.labels.cancel"></span></button>                    </form>                </div>            </div>        </div>    </div><\/script>	<div data-bind="template: {name: params.template, afterRender: filemanager_rendered }"></div>	<script type="text/html" id="filemanager-template"><\/script>'});
//# sourceMappingURL=filemanager.js.map
