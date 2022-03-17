/*
 * @Description: 小程序loading调用hook
 * @FilePath: /proste-taro-hooks/src/useLoading.ts
 */

import { showLoading, hideLoading } from '@tarojs/taro';
import { isString } from 'lodash';
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
  options?: Partial<Options>,
): [
  showLoading: (opt?: string | Partial<Options> | undefined) => Promise<TaroGeneral.CallbackResult>,
  hideLoading: (opt?: Pick<Options, 'complete' | 'fail' | 'success'>) => void,
] {
  const lastOptions = useLatest(options);

  const loading = useCallback(function (opt?: Partial<Options> | string) {
    return new Promise<TaroGeneral.CallbackResult>(function (res, rej) {
      if (!opt && !options) {
        rej({ errMsg: '必须传入options或者opt中一个' });
        return;
      }
      let option;

      if (isString(opt)) {
        option = { ...lastOptions.current, ...{ title: opt } };
      } else {
        option = { ...lastOptions.current, ...opt };
      }

      if (!option.title) {
        rej({ errMsg: '必须传入title属性' });
        return;
      }

      showLoading({
        ...(option as unknown as Options),
        success(e) {
          res(e);
        },
        fail(e) {
          rej(e);
        },
      });
    });
  }, []);

  return [loading, hideLoading];
}
