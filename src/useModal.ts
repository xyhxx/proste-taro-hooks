/*
 * @Description: 小程序modal调用hook
 * @FilePath: /proste-taro/packages/hooks/useModal.ts
 */

import { showModal } from '@tarojs/taro';
import { useCallback } from 'react';
import { useLatest } from 'react-use';

type SuccessCallbackResult = TaroGeneral.CallbackResult & {
  /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
  cancel: boolean;
  /** 为 true 时，表示用户点击了确定按钮 */
  confirm: boolean;
  /** 调用结果 */
  errMsg: string;
};

type Options = {
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
export function useModal(options?: Options) {
  const lastOptions = useLatest(options);

  return useCallback(function (opt?: Options) {
    const currentOptions =
      lastOptions.current || opt ? Object.assign({}, lastOptions.current, opt) : void 0;

    return showModal(currentOptions);
  }, []);
}
