import { getUserList } from "@/api/org-user";
const orgUser = {
  state: {
    list: []
  },
  mutations: {
    SET_LIST: (state, data) => {
      state.list = data;
    }
  },
  actions: {
    GetUserList({ commit }, params) {
      return new Promise((resolve, reject) => {
        getUserList(params)
          .then(res => {
            if (res.code === 1) {
              commit("SET_LIST", res.content);
            }
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default orgUser;
