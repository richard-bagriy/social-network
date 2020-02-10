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
    },

    getSubscribers(id) {
        return instance.get(`profile/subscribers/${id}`).then(response => response.data);
    },

    getSubscriptions(id) {
        return instance.get(`profile/subscriptions/${id}`).then(response => response.data);
    },

    addPost(message, userId) {
        return instance.post('profile/post', { message, userId } ).then(response => response.data);
    },

    deletePost({ userId, postId }) {
        return instance.delete('profile/post', { 
            data: { userId, postId }
        })
    },

    update(data) {
        return instance.put('profile/update', { data } ).then(response => response.data);
    },

    changePassword(password) {
        return instance.put('profile/changePassword', { password } ).then(res => res.data)
    }

}

export const usersAPI = {

    getUsers(limit = 1, page = 1) {
        return instance.get('users', {
            params: { limit, page },
        }).then(response => response.data);
    },

    subsribe(userId) {
        return instance.post('users/subscribe', { subscriberId: userId });
    },

    unsubscribe(userId) {
        return instance.delete('users/subscribe', { 
            data : { subscriberId: userId } 
        });
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
        return instance.get('/auth').then(response => response.data);
    },

}