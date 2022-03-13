declare type Params = Record<string, any>;
/**
 * 导航钩子
 *
 * @example
 *
 * const {push, pop} = useNavigate();
 */
export declare function useNavigate(): {
    push: <T>(name: string, params?: Params | T | undefined) => void;
    pop: (dep?: number) => void;
    redirect: <T_1>(name: string, params?: Params | T_1 | undefined) => void;
    redirectToTab: (name: string) => void;
    launchTo: (url: string) => void;
};
export {};
