export const getToken = state => state.auth.token;
export const getIsAuthorized = state => state.auth.isAuthorized;

export const getUserEmail = state => state.auth.user.userData.email;
export const getUserBalance = state => state.auth.userData.balance;
export const getUserTransactions = state => state.auth.userData.transactions;
