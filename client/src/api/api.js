import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: { 
        'Cache-Control': 'no-cache'
    },
    withCredentials: true,
})

export const profileAPI = {

    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    }

}

export const usersAPI = {

    getUsers(limit = 1, page = 1) {
        return instance.get('/users', {
            params: { limit, page },
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

    registration(data) {
        return instance.post('/auth/registration', data).then(response => response.data);
    },

    check() {
        return instance.get('/auth');
    },

}