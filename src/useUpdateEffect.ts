/*
 * @Description:只有在依赖更新（除了第一次）触发的hook
 * @FilePath: /proste-taro-hooks/src/useUpdateEffect.ts
 */

import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * 只有在依赖更新（除了第一次）触发
 *
 * @example
 *
 * useUpdateEffectFn(() => {
 * ...
 * }, [xxx]);
 */
export function useUpdatedEffect(effect: EffectCallback, deps?: DependencyList) {
  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    return effect();
  }, deps);
}
