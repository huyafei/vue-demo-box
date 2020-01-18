import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
const user = {
  state: {
    token: getToken()
    // userInfo: "",
    // username: "",
    // token: localStorage.getItem("token")
  },
  mutations: {
    // SET_USERINFO: (state, userInfo) => {
    //   state.userInfo = userInfo;
    // },
    // SET_USERNAME: (state, username) => {
    //   state.username = username;
    // }
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      //trim()去除字符串的头尾空格:
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(res => {
            console.log(res)
            const data = res.data;
            setToken(data.token);
            commit("SET_TOKEN", data.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then(response => {
            const data = response.data;
            console.log("掉了接口");
            console.log(data);
            if (data.roles && data.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", data.roles);
            } else {
              reject("getInfo: roles must be a non-null array !");
            }
            commit("SET_NAME", data.name);
            commit("SET_AVATAR", data.avatar);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", []);
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    }
    // 获取用户信息
    // getUserInfo({ commit, state }) {
    // commit("SET_USERNAME", userInfoData.username);
    // commit("SET_USERINFO", userInfoData);
    // },
    // 退出登录
    // logOut({ commit, state }) {}
  }
};

export default user;
