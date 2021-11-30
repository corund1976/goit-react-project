export const getToken = state => state.auth.user.accessToken;
export const getIsAuthorized = state => state.auth.isAuthorized;

export const getUserEmail = state => state.auth.user.email;
export const getUserBalance = state => state.auth.user.balance;