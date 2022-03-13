/*
 * @Description:提供读写缓存能力的hook
 * @FilePath: /proste-taro/packages/hooks/useStorage.ts
 */

import { getStorageSync, removeStorageSync, setStorageSync } from '@tarojs/taro';
import { isFunction } from 'lodash';
import { useMemo } from 'react';

/**
 * 提供读写缓存能力的hook
 *
 * @example
 *
 *
 * const [value, {set, get}] = useStorage(key);
 *
 */
export function useStorageFn<T>(
  key: string,
): [
  value: T,
  action: { set: (value: T | ((state: T) => T)) => void; get: () => T; remove: VoidFunction },
] {
  return useMemo(() => {
    const value = getStorageSync<T>(key);

    function set(arg: T | ((state: T) => T)) {
      let val: T;
      if (isFunction(arg)) {
        val = arg(value);
      } else {
        val = arg;
      }

      return setStorageSync(key, val);
    }

    function get() {
      return getStorageSync<T>(key);
    }

    function remove() {
      return removeStorageSync(key);
    }

    return [value, { set, get, remove }];
  }, [key]);
}
