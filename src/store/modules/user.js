import axios from "axios";
import router from "../../router"
const state = {
    users: [],
    pUsers : [],
}

const getters = {
    getUsers(state) {
        return state.users;
    },
    getPUsers(state) {
        return state.pUsers[0];
    }
}

const mutations = {
    updateUserList(state, user) {
        state.users.push(user);
    },
    updatePUsersList(state, puser) {
        state.pUsers.push(puser);
    }
}

const actions = {
    initApp({ commit }) {
        axios
        .get("https://abbtask-ced9d-default-rtdb.firebaseio.com/users.json")
        .then((response) => { 
            let data = response.data;
            for(let key in data) {
                data[key].key = key;
                commit("updateUserList", data[key])
            }
        })
    },
    saveUser({ commit }, user) {
        axios
            .post("https://abbtask-ced9d-default-rtdb.firebaseio.com/users.json", user)
            .then((response) => {
                user.id = response.data.name;
                commit("updateUserList", user)
            })
            .catch((e) => console.log(e));
        router.replace("/");
    },
    permanentUser({ commit }) {
        axios.get("https://abbtask-ced9d-default-rtdb.firebaseio.com/permanentUsers.json")
            .then((response) => {
                commit("updatePUsersList", response.data)

            }
        )
    },

}



export default {
    state,
    getters,
    mutations,
    actions
}