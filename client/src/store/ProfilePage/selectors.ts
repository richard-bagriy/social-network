import { AppStateType } from ".."

export const getProfileInfo = (state: AppStateType) => state.profilePage.profile
export const getProfileLoadingUser = (state: AppStateType) => state.profilePage.loading
export const getProfilePosts = (state: AppStateType) => state.profilePage.posts
export const getProfileEvents = (state: AppStateType) => state.profilePage.events