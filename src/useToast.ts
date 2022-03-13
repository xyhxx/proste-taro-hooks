/*
 * @Description: 使用toast的hook
 * @FilePath: /proste-taro/packages/hooks/useToast.ts
 */

import { showToast, hideToast } from '@tarojs/taro';
import { useCallback } from 'react';
import { useLatest } from 'react-use';

type Options = {
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
export function useToast(
  options?: Options,
): [
  showToast: (opt?: Options | undefined) => Promise<TaroGeneral.CallbackResult>,
  hideToast: (option?: Pick<Options, 'complete' | 'success' | 'fail'> | undefined) => void,
] {
  const lastOptions = useLatest(Object.assign({ icon: 'none' }, options));

  const toast = useCallback(function (opt?: Options) {
    return showToast(Object.assign(lastOptions.current, opt));
  }, []);

  return [toast, hideToast];
}
