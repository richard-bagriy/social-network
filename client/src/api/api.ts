import axios from 'axios'
import { LoginFormValuesType } from '../components/Auth/Login/form'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: { 
        'Cache-Control': 'no-cache'
    },
    withCredentials: true,
})

export const profileAPI = {

    getProfile(id: number) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },

    getSubscribers(id: number) {
        return instance.get(`profile/subscribers/${id}`).then(response => response.data);
    },

    getSubscriptions(id: number) {
        return instance.get(`profile/subscriptions/${id}`).then(response => response.data);
    },

    addPost(message: string, userId: number) {
        return instance.post('profile/post', { message, userId } ).then(response => response.data);
    },

    deletePost({ userId, postId } : { userId: number, postId: number } ) {
        return instance.delete('profile/post', {
            data: {
                userId,
                postId
            }
        })
    },
    // TODO add a type from profile
    update(data: any) {
        return instance.put('profile/update', { data } ).then(response => response.data);
    },

    changePassword(password: string) {
        return instance.put('profile/changePassword', { password } ).then(res => res.data)
    },

    updateImage({ file, name } : { file: File, name: string }) {
        const data = new FormData()
        data.set('name', name)
        data.set('file', file, file.name)
       
        return instance.put('profile/updateImage', data).then(res => res.data)
    },

    getEvents(id: number) {
        return instance.get('profile/events/' + id).then(res => res.data)
    }

}

export const usersAPI = {

    getUsers(limit = 1, page = 1) {
        return instance.get('users', {
            params: { limit, page },
        }).then(response => response.data);
    },

    subscribe(id: number) {
        return instance.post('users/subscribe', { subscriberId: id });
    },

    unsubscribe(id: number) {
        return instance.delete('users/subscribe', { 
            data : { subscriberId: id }
        });
    }
}

export const authAPI = {

    login(data: LoginFormValuesType) {
        return instance.post('/auth/login', data).then(response => response.data);
    },
    // Todo add a type from registration
    registration(data: any) {
        return instance.post('/auth/registration', data).then(response => response.data);
    },

    check() {
        return instance.get('/auth').then(response => response.data);
    },

}

export const dialogsAPI = {

    getDialogs(id: number) {
        if (id) {
            return instance.get(`/dialogs/${id}`).then(res => res.data)    
        }
        return instance.get('/dialogs').then(res => res.data)
    },

    addMessage(id: number, message: string) {
        return instance.post(`/dialogs/dialog/${id}`, { message }).then(res => res.data)
    },

    getDialog(id: number) {
        return instance.get(`/dialogs/dialog/${id}`).then(res => res.data)
    }

}

export const eventAPI = {

    // TODO add a normval type of data
    addEvent(data: any) {
        return instance.post('/event', data).then(res => res.data)
    },

    getEvents(limit = 1, page = 1) {
        return instance.get('/event', {
            params: { limit, page }
        }).then(res => res.data)
    },

    saveEvent(id: number) {
        return instance.post('/event/save', { eventId: id }).then(res => res.data)
    },

    deleteEvent(id: number) {
        return instance.delete('/event/save', { data: { eventId: id } }).then(res => res.data)
    },

    getSavedEvents() {
        return instance.get('/event/saved').then(res => res.data)
    }

}