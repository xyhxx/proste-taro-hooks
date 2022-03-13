/*
 * @Description: 小程序loading调用hook
 * @FilePath: /proste-taro/packages/hooks/useLoading.ts
 */

import { showLoading, hideLoading } from '@tarojs/taro';
import { useCallback } from 'react';
import { useLatest } from 'react-use';

type Options = {
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
export function useLoading(
  options?: Options,
): [
  showLoading: (opt?: Options) => Promise<TaroGeneral.CallbackResult>,
  hideLoading: (opt?: Pick<Options, 'complete' | 'fail' | 'success'>) => void,
] {
  const lastOptions = useLatest(Object.assign({ mask: true }, options));

  const loading = useCallback(function (opt?: Options) {
    return showLoading(Object.assign(lastOptions, opt));
  }, []);

  return [loading, hideLoading];
}
