<image src="https://raw.githubusercontent.com/xyhxx/program_preview/master/logo/proste-tarp-hooks.png">

## useBeforeMount

> 在 dom 挂载前触发

```typescript
function useBeforeMount(effect: EffectCallback): void;
```

## useContextWithEqual

> 比较相同 contexthook 判断返回数据是否有变化进行渲染 依赖 use-context-selector 使用
> use-context-selector 的 createContext 创建 congtext

```typescript
function useContextWithEqual<T, R>(context: Context<T>, selector: (state: T) => R): R;
```

## useDelay

> 可以主动调用的延迟函数

```typescript
function useDelay<T>(fn: (state?: T) => void, delay: number): (state?: T | undefined) => void;
```

## useEvents

> 发布订阅钩子

```typescript
// 只使用触发
const toggle = useEvents('key');

// 只进行监听
useEvents('key', fn);

function useEvents<T>(key: string, listener?: (event: T) => void): (args?: T | undefined) => void;
```

## useNavigate

> 导航钩子

```typescript
type Params = Record<string, any>;

function useNavigate(): {
  push: <T>(name: string, params?: Params | T | undefined) => void;
  pop: (dep?: number) => void;
  redirect: <T_1>(name: string, params?: Params | T_1 | undefined) => void;
  redirectToTab: (name: string) => void;
  launchTo: (url: string) => void;
  navigate: {
    (delta: number): void;
    <T_2>(name: string, params?: Params | T_2 | undefined): void;
  };
};
```

## useLoading

> 显示和隐藏 loading

```typescript
declare type Options = {
  /** 提示的内容 */
  title: string;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: TaroGeneral.CallbackResult) => void;
  /** 接口调用失败的回调函数 */
  fail?: (res: TaroGeneral.CallbackResult) => void;
  /** 是否显示透明蒙层，防止触摸穿透 */
  mask?: boolean;
  /** 接口调用成功的回调函数 */
  success?: (res: TaroGeneral.CallbackResult) => void;
};
/**
 * 显示和隐藏loading
 *
 * @example
 *
 * const [showLoading] = useLoading();
 *
 * showLoading();
 */
export declare function useLoading(options?: Partial<Options>): {
  showLoading: (opt?: string | Partial<Options> | undefined) => Promise<TaroGeneral.CallbackResult>;
  hideLoading: (opt?: Pick<Options, 'complete' | 'fail' | 'success'>) => void;
};
```

## useModal

> 显示 modal

```typescript
declare type SuccessCallbackResult = TaroGeneral.CallbackResult & {
  /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
  cancel: boolean;
  /** 为 true 时，表示用户点击了确定按钮 */
  confirm: boolean;
  /** 调用结果 */
  errMsg: string;
};
declare type Options = {
  /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
  cancelColor?: string;
  /** 取消按钮的文字，最多 4 个字符 */
  cancelText?: string;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: TaroGeneral.CallbackResult) => void;
  /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
  confirmColor?: string;
  /** 确认按钮的文字，最多 4 个字符 */
  confirmText?: string;
  /** 提示的内容 */
  content?: string;
  /** 接口调用失败的回调函数 */
  fail?: (res: TaroGeneral.CallbackResult) => void;
  /** 是否显示取消按钮 */
  showCancel?: boolean;
  /** 接口调用成功的回调函数 */
  success?: (result: SuccessCallbackResult) => void;
  /** 提示的标题 */
  title?: string;
};
/**
 * 显示modal
 *
 * @example
 *
 * const showModal = useModal();
 *
 */
export declare function useModal(
  options?: Partial<Options>,
): (opt?: string | Partial<Options> | undefined) => Promise<TaroGeneral.CallbackResult>;
```

## useMounted

> 只有在加载时触发一次的 useEffect

```typescript
function useMounted(effect: EffectCallback): void;
```

## useParams

> 获取路由参数

```typescript
function useParams<T extends Record<string, string>>(): Partial<T>;
```

## useStorage

> 提供读写缓存能力的 hook

```typescript
function useStorage<T>(key: string): [
  value: MaybeUndefind<T>,
  action: {
    set: (value: T | ((state: T | undefined) => T)) => void;
    get: () => T | undefined;
    remove: () => void;
  },
];
```

## useTitle

> 设置当前页面标题

```typescript
function useTitle(title: string): void;
```

## useToast

> 弹出 toast 提示

```typescript
declare type Options = {
  /** 提示的内容 */
  title: string;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: TaroGeneral.CallbackResult) => void;
  /** 提示的延迟时间 */
  duration?: number;
  /** 接口调用失败的回调函数 */
  fail?: (res: TaroGeneral.CallbackResult) => void;
  /** 图标
   *
   * 可选值：
   * - 'success': 显示成功图标，此时 title 文本最多显示 7 个汉字长度;
   * - 'error': 显示失败图标，此时 title 文本最多显示 7 个汉字长度;
   * - 'loading': 显示加载图标，此时 title 文本最多显示 7 个汉字长度;
   * - 'none': 不显示图标，此时 title 文本最多可显示两行 */
  icon?: 'success' | 'error' | 'loading' | 'none';
  /** 自定义图标的本地路径，image 的优先级高于 icon */
  image?: string;
  /** 是否显示透明蒙层，防止触摸穿透 */
  mask?: boolean;
  /** 接口调用成功的回调函数 */
  success?: (res: TaroGeneral.CallbackResult) => void;
};
/**
 * 弹出toast提示
 *
 * @example
 *
 * const [showToast] = useToast({title: '1234'});
 *
 * showToast();
 */
export declare function useToast(options?: Partial<Options>): {
  showToast: (opt?: string | Options | undefined) => Promise<TaroGeneral.CallbackResult>;
  hideToast: (option?: Pick<Options, 'complete' | 'success' | 'fail'> | undefined) => void;
};
```

## useUpdateEffect

> 只有在依赖更新（除了第一次）触发

```typescript
function useUpdateEffect(effect: EffectCallback, deps?: DependencyList): void;
```
