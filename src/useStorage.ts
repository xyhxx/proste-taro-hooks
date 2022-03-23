/*
 * @Description:提供读写缓存能力的hook
 * @FilePath: /proste-taro-hooks/src/useStorage.ts
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
export function useStorage<T>(key: string): [
  value: T | undefined,
  action: {
    set: (value: T | ((state: T | undefined) => T)) => void;
    get: () => T | undefined;
    remove: () => void;
  },
] {
  return useMemo(() => {
    const value = getStorageSync<T | undefined>(key);

    function set(arg: T | ((state: T | undefined) => T)) {
      let val: T;
      if (isFunction(arg)) {
        val = arg(value);
      } else {
        val = arg;
      }

      return setStorageSync(key, val);
    }

    function get() {
      return getStorageSync<T | undefined>(key);
    }

    function remove() {
      return removeStorageSync(key);
    }

    return [value, { set, get, remove }];
  }, [key]);
}
