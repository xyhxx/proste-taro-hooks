/*
 * @Description: 修改当前标题信息
 * @FilePath: /proste-taro-hooks/src/useNavigationBarTitle.ts
 */
import { setNavigationBarTitle } from '@tarojs/taro';
import { useBeforeMount } from './useBeforeMount';

/**
 * 设置当前页面标题
 *
 * @example
 *
 * useTitle('标题')
 */
export function useNavigationBarTitle(title: string) {
  useBeforeMount(function () {
    setNavigationBarTitle({ title });
  });
}
