/*
 * @Description: 使用toast的hook
 * @FilePath: /proste-taro-hooks/src/useToast.ts
 */

import { showToast, hideToast } from '@tarojs/taro';
import { isString } from 'lodash';
import { useCallback } from 'react';
import { useLatest } from './useLatest';

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
export function useToast(options?: Partial<Options>) {
  const lastOptions = useLatest(options);

  const toast = useCallback(function (opt?: string | Partial<Options>) {
    return new Promise<TaroGeneral.CallbackResult>(function (res, rej) {
      if (!lastOptions && !opt) {
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

      showToast({
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

  return { showToast: toast, hideToast };
}
