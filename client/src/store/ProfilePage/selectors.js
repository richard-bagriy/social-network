export const getProfileInfo = (state) => state.profilePage.profile
export const getProfilePosts = (state) => state.profilePage.posts
export const getProfileLoadingUser = (state) => state.profilePage.isLoadingUser
export const getProfileImage = (state) => state.profilePage.profile.image
export const getSubscribers = state => state.profilePage.subscribers
export const getLoadingSubscribers = state => state.profilePage.isLoadingSubscribers