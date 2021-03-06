/*
 * @Description: 只有在加载时触发一次的useEffect
 * @FilePath: /proste-taro-hooks/src/useMounted.ts
 */

import { EffectCallback, useEffect, useRef } from 'react';

/**
 * 只有在加载时触发一次的useEffect
 *
 * @example
 *
 * useMounted(function(){
 *  ...
 * });
 */
export function useMounted(effect: EffectCallback) {
  const isMounted = useRef(false);

  useEffect(function () {
    if (isMounted.current) return;
    isMounted.current = true;

    return effect();
  }, []);
}
