var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { useRef, useEffect, useCallback, useMemo } from "react";
import { getCurrentInstance, navigateTo, navigateBack, redirectTo, switchTab, reLaunch, Events, getStorageSync, setStorageSync, removeStorageSync, showToast, hideToast, showLoading, hideLoading, showModal } from "@tarojs/taro";
import { trim, isFunction, isEqual } from "lodash";
import { useLatest } from "react-use";
import { useContextSelector } from "use-context-selector";
function useUpdateEffect(effect, deps) {
  const isMount = useRef(false);
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    return effect();
  }, deps);
}
function useParams() {
  var _a, _b;
  const paramsRef = useRef();
  if (!paramsRef.current) {
    paramsRef.current = (_b = (_a = getCurrentInstance().router) == null ? void 0 : _a.params) != null ? _b : {};
  }
  return paramsRef.current;
}
function useNavigate() {
  const formatParams = useCallback(function(name, params) {
    if (!params)
      return name;
    let result = name + "?";
    for (const key in params) {
      result += `${key}=${params[key].toString()}&`;
    }
    return trim(result, "&");
  }, []);
  const actions = useMemo(() => {
    function push(name, params) {
      navigateTo({ url: formatParams(name, params) });
    }
    function pop(dep = 1) {
      navigateBack({ delta: dep });
    }
    function redirect(name, params) {
      redirectTo({ url: formatParams(name, params) });
    }
    function redirectToTab(name) {
      switchTab({ url: name });
    }
    function launchTo(url) {
      reLaunch({ url });
    }
    return { push, pop, redirect, redirectToTab, launchTo };
  }, [formatParams]);
  return __spreadValues({}, actions);
}
const events = new Events();
function useEvents(key, listener) {
  useEffect(() => {
    if (!listener)
      return;
    events.on(key, listener);
    return () => {
      events.off(key, listener);
    };
  }, [listener, key]);
  return useCallback((args) => {
    events.trigger(key, args);
  }, [key]);
}
function useStorageFn(key) {
  return useMemo(() => {
    const value = getStorageSync(key);
    function set(arg) {
      let val;
      if (isFunction(arg)) {
        val = arg(value);
      } else {
        val = arg;
      }
      return setStorageSync(key, val);
    }
    function get() {
      return getStorageSync(key);
    }
    function remove() {
      return removeStorageSync(key);
    }
    return [value, { set, get, remove }];
  }, [key]);
}
function useContextWithEqual(context, selector) {
  const f = useLatest(selector);
  const callback = useMemo(function() {
    let memoState = null;
    return function(state) {
      const newState = f.current(state);
      if (!memoState || !isEqual(memoState, newState))
        return memoState = newState;
      return memoState;
    };
  }, [f]);
  return useContextSelector(context, callback);
}
function useToast(options) {
  const lastOptions = useLatest(Object.assign({ icon: "none" }, options));
  const toast = useCallback(function(opt) {
    return showToast(Object.assign(lastOptions.current, opt));
  }, []);
  return [toast, hideToast];
}
function useLoading(options) {
  const lastOptions = useLatest(Object.assign({ mask: true }, options));
  const loading = useCallback(function(opt) {
    return showLoading(Object.assign(lastOptions, opt));
  }, []);
  return [loading, hideLoading];
}
function useModal(options) {
  const lastOptions = useLatest(options);
  return useCallback(function(opt) {
    const currentOptions = lastOptions.current || opt ? Object.assign({}, lastOptions.current, opt) : void 0;
    return showModal(currentOptions);
  }, []);
}
function useMounted(effect) {
  console.log("mounted");
  const isMounted = useRef(false);
  useEffect(function() {
    if (isMounted.current)
      return;
    isMounted.current = true;
    return effect();
  }, []);
}
export { useContextWithEqual, useEvents, useLoading, useModal, useMounted, useNavigate, useParams, useStorageFn, useToast, useUpdateEffect };
