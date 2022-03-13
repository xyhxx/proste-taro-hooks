/**
 * 获取路由参数
 *
 * @example
 *
 * const {id} = useParams<{id: string}>();
 *
 */
export declare function useParams<T extends Record<string, string>>(): Partial<T>;
