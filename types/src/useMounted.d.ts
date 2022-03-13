import { EffectCallback } from 'react';
/**
 * 只有在加载时触发一次的useEffect
 *
 * @example
 *
 * useMounted(function(){
 *  ...
 * });
 */
export declare function useMounted(effect: EffectCallback): void;
