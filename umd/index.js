var A=Object.defineProperty,D=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var v=(t,n,r)=>n in t?A(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(t,n)=>{for(var r in n||(n={}))U.call(n,r)&&v(t,r,n[r]);if(T)for(var r of T(n))W.call(n,r)&&v(t,r,n[r]);return t},g=(t,n)=>D(t,y(n));(function(t,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react"),require("@tarojs/taro"),require("lodash"),require("use-context-selector")):typeof define=="function"&&define.amd?define(["exports","react","@tarojs/taro","lodash","use-context-selector"],n):(t=typeof globalThis!="undefined"?globalThis:t||self,n(t["@proste-taro/hooks"]={},t.react,t["@tarojs/taro"],t.lodash,t["use-context-selector"]))})(this,function(t,n,r,E,m){"use strict";function w(e,u){const i=n.useRef(!1);n.useEffect(()=>{if(!i.current){i.current=!0;return}return e()},u)}function F(){var u,i;const e=n.useRef();return e.current||(e.current=(i=(u=r.getCurrentInstance().router)==null?void 0:u.params)!=null?i:{}),e.current}function B(){const e=n.useCallback(function(i,s){if(!s)return i;let f=i+"?";for(const o in s)f+=`${o}=${s[o].toString()}&`;return E.trim(f,"&")},[]);return n.useMemo(()=>{function i(a,M){r.navigateTo({url:e(a,M)})}function s(a=1){r.navigateBack({delta:a})}function f(a,M){r.redirectTo({url:e(a,M)})}function o(a){r.switchTab({url:a})}function c(a){r.reLaunch({url:a})}function d(a,M){if(typeof a=="string"){i(a,M);return}if(a<=0)throw new Error("delat\u56DE\u9000\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0");s(a)}return{push:i,pop:s,redirect:f,redirectToTab:o,launchTo:c,navigate:d}},[e])}const S=new r.Events;function L(e,u){return n.useEffect(()=>{if(!!u)return S.on(e,u),()=>{S.off(e,u)}},[u,e]),n.useCallback(i=>{S.trigger(e,i)},[e])}function b(e){return n.useMemo(()=>{const u=r.getStorageSync(e);function i(o){let c;return E.isFunction(o)?c=o(u):c=o,r.setStorageSync(e,c)}function s(){return r.getStorageSync(e)}function f(){return r.removeStorageSync(e)}return[u,{set:i,get:s,remove:f}]},[e])}function C(e){const u=n.useRef(e);return u.current=e,u}function q(e,u){const i=C(u),s=n.useMemo(function(){let f=null;return function(o){const c=i.current(o);return!f||!E.isEqual(f,c)?f=c:f}},[i]);return m.useContextSelector(e,s)}function P(e){const u=C(e);return{showToast:n.useCallback(function(s){return new Promise(function(f,o){if(!u&&!s){o({errMsg:"\u5FC5\u987B\u4F20\u5165options\u6216\u8005opt\u4E2D\u4E00\u4E2A"});return}let c;if(E.isString(s)?c=g(l({},u.current),{title:s}):c=l(l({},u.current),s),!c.title){o({errMsg:"\u5FC5\u987B\u4F20\u5165title\u5C5E\u6027"});return}r.showToast(g(l({},c),{success(d){f(d)},fail(d){o(d)}}))})},[]),hideToast:r.hideToast}}function R(e){const u=C(e);return{showLoading:n.useCallback(function(s){return new Promise(function(f,o){if(!s&&!e){o({errMsg:"\u5FC5\u987B\u4F20\u5165options\u6216\u8005opt\u4E2D\u4E00\u4E2A"});return}let c;if(E.isString(s)?c=g(l({},u.current),{title:s}):c=l(l({},u.current),s),!c.title){o({errMsg:"\u5FC5\u987B\u4F20\u5165title\u5C5E\u6027"});return}r.showLoading(g(l({},c),{success(d){f(d)},fail(d){o(d)}}))})},[]),hideLoading:r.hideLoading}}function N(e){const u=C(e);return n.useCallback(function(i){return new Promise(function(s,f){if(!u.current&&!i){f({errMsg:"\u5FC5\u987B\u4F20\u5165\u4E00\u4E2A\u53C2\u6570"});return}let o;E.isString(i)?o=g(l({},u.current),{content:i}):o=l(l({},u.current),i),r.showModal(g(l({},o),{success(c){s(c)},fail(c){f(c)}}))})},[])}function O(e){const u=n.useRef(!1);n.useEffect(function(){if(!u.current)return u.current=!0,e()},[])}function h(e){const u=n.useRef(!1);n.useLayoutEffect(function(){if(!u.current)return u.current=!1,e()},[])}function p(e){h(function(){r.setNavigationBarTitle({title:e})})}t.useBeforeMount=h,t.useContextWithEqual=q,t.useEvents=L,t.useLoading=R,t.useModal=N,t.useMounted=O,t.useNavigate=B,t.useNavigationBarTitle=p,t.useParams=F,t.useStorage=b,t.useToast=P,t.useUpdatedEffect=w,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});