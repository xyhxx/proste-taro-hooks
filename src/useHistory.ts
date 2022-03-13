/*
 * @Description: 小程序导航hooks
 * @FilePath: /proste-taro/packages/hooks/src/useHistory.ts
 */

import { useCallback, useMemo } from 'react';
import { navigateTo, navigateBack, redirectTo, switchTab, reLaunch } from '@tarojs/taro';
import { trim } from 'lodash';

type Params = Record<string, any>;

/**
 * 导航钩子
 *
 * @example
 *
 * const {push, pop} = useNavigate();
 */
export function useNavigate() {
  const formatParams = useCallback(function (name: string, params?: Params) {
    if (!params) return name;

    let result = name + '?';

    for (const key in params) {
      result += `${key}=${params[key].toString()}&`;
    }

    return trim(result, '&');
  }, []);

  const actions = useMemo(() => {
    function push<T>(name: string, params?: T | Params) {
      navigateTo({ url: formatParams(name, params) });
    }

    function pop(dep = 1) {
      navigateBack({ delta: dep });
    }

    function redirect<T>(name: string, params?: T | Params) {
      redirectTo({ url: formatParams(name, params) });
    }

    function redirectToTab(name: string) {
      switchTab({ url: name });
    }

    function launchTo(url: string) {
      reLaunch({ url });
    }

    return { push, pop, redirect, redirectToTab, launchTo };
  }, [formatParams]);

  return { ...actions };
}
