/**
 * 提供读写缓存能力的hook
 *
 * @example
 *
 *
 * const [value, {set, get}] = useStorage(key);
 *
 */
export declare function useStorageFn<T>(key: string): [
    value: T,
    action: {
        set: (value: T | ((state: T) => T)) => void;
        get: () => T;
        remove: VoidFunction;
    }
];
