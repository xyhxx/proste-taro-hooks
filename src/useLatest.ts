/*
 * @Description: 永远引用最后一个元素的hook
 * @FilePath: /proste-taro-hooks/src/useLatest.ts
 */

import { useRef } from 'react';

/**
 * 引用最新的信息
 *
 * @example
 *
 * const fn = useLatest(function(){});
 *
 *
 * useEffect(function(){
 *  fn();
 * }, []);
 */
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}
