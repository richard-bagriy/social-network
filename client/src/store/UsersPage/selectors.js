export const getUsersSelector = (state) => state.usersPage.users
export const getUsersPage = (state) => state.usersPage.page
export const getUsersLimit = (state) => state.usersPage.limit
export const getUsersLoadingUser = (state) => state.usersPage.isLoadingUsers
export const getUsersFollowing = (state) => state.usersPage.followingInProgress
export const getHaveUsers = (state) => state.usersPage.haveUsers
export const getSubscribers = state => state.usersPage.subscribers