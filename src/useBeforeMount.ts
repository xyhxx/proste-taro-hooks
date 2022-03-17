/*
 * @Description: dom加载前触发hook
 * @FilePath: /proste-taro-hooks/src/useBeforeMount.ts
 */

import { EffectCallback, useLayoutEffect, useRef } from 'react';

/**
 * 挂载dom前触发
 *
 * @example
 *
 * useBeforeMount(function(){
 *  ...
 * })
 */
export function useBeforeMount(effect: EffectCallback) {
  const isMount = useRef(false);

  useLayoutEffect(function () {
    if (isMount.current) return;

    isMount.current = false;

    return effect();
  }, []);
}
