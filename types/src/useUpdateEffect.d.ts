import { DependencyList, EffectCallback } from 'react';
/**
 * 只有在依赖更新（除了第一次）触发
 *
 * @example
 *
 * useUpdateEffectFn(() => {
 * ...
 * }, [xxx]);
 */
export declare function useUpdateEffect(effect: EffectCallback, deps?: DependencyList): void;
