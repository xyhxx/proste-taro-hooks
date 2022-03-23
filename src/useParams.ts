/*
 * @Description: 获取路由参数
 * @FilePath: /proste-taro-hooks/src/useParams.ts
 */

import { getCurrentInstance } from '@tarojs/taro';
import { useRef } from 'react';

/**
 * 获取路由参数
 *
 * @example
 *
 * const {id} = useParams<{id: string}>();
 *
 */
export function useParams<T extends Record<string, string>>(): Partial<T> {
  const paramsRef = useRef<Partial<T>>();

  if (!paramsRef.current) {
    paramsRef.current = (getCurrentInstance().router?.params ?? {}) as Partial<T>;
  }

  return paramsRef.current;
}
