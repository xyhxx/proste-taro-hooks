import { Context } from 'use-context-selector';
/**
 * 比较相同contexthook 判断返回数据是否有变化进行渲染
 *
 * @example
 *
 * const {...} = useEqualContext(context, (v) => v.state);
 */
export declare function useContextWithEqual<T, R>(context: Context<T>, selector: (state: T) => R): R;
