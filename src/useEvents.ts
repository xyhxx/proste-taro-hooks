/*
 * @Description:发布订阅hooks
 * @FilePath: /proste-taro/packages/hooks/useEvents.ts
 */

import { Events } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';

const events = new Events();

/**
 * 发布订阅钩子
 *
 * @example
 *
 * 只使用触发
 * const toggle = useEvents('key');
 *
 * 只进行监听
 * useEvents('key', fn);
 */
export function useEvents<T>(key: string, listener?: (event: T) => void) {
  useEffect(() => {
    if (!listener) return;
    events.on(key, listener);

    return () => {
      events.off(key, listener);
    };
  }, [listener, key]);

  return useCallback(
    (args?: T) => {
      events.trigger(key, args);
    },
    [key],
  );
}
