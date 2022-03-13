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
export declare function useEvents<T>(key: string, listener?: (event: T) => void): (args?: T | undefined) => void;
