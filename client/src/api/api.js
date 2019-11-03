import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY" : "6080288c-2237-4f64-bb84-a5fbb29d9eb8" }
})

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data);
    }
}

export const usersAPI = {
    getUsers(limit = 12, page = 1){
        return instance.get('/users', {
            params: {
                count: limit,
                page: page,
            },
        }).then(response => response.data);
    },

    follow(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data.resultCode);
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data.resultCode);
    }
}

export const authAPI = {
    login(data) {
        return instance.post('/auth/login', data).then(response => response.data);
    },

    check() {
        return instance.get('/auth/me').then(response => response.data)
    },

    logout() {
        return instance.delete('/auth/login').then(response => response.data.resultCode);
    }
}