import { routerRedux } from 'dva/router'
import { stringify } from 'qs';
import { fakeAccountLogin } from '@/services/api'
import { setAuthority } from '@/utils/authority'
import { reloadAuthorized } from '@/utils/Authorized';
import { getPageQuery } from '@/utils/utils';

export default {
  namespace: 'login',

  state : {
    status: undefined,
  },

  // 同步更新
  reducers: {
    changeLoginStatus(state, {payload}) {
      // 设置权限
      setAuthority(payload.currentAuthority)
      return {
        ...state,
        status: payload.status,
        type: payload.type
      }
    }
  },

  // 异步更新
  effects: {
    // payload为传递的参数
    *login({payload}, {call, put}) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response
      })
      // 成功登录
      if (response.status === 'ok') {
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            redirect = null;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },
    // 注销操作
    *logout(_, {put}) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest'
        },
      });
      reloadAuthorized();
      // 重定向至登录页面
      if (window.location.pathname !== '/user/login') {
        yield put(
          routerRedux.replace({
            pathname: '/user/login'
          })
        )
      }
    }
  }
}
