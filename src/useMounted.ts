/*
 * @Description: 只有在加载时触发一次的useEffect
 * @FilePath: /proste-taro/packages/hooks/useMounted.ts
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
  console.log('mounted');
  const isMounted = useRef(false);

  useEffect(function () {
    if (isMounted.current) return;
    isMounted.current = true;

    return effect();
  }, []);
}
