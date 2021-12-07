const getAccessToken = state => state.auth.accessToken;
const getRefreshToken = state => state.auth.refreshToken;
const getSid = state => state.auth.sid;
const getIsAuthorized = state => state.auth.isAuthorized;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAccessToken,
  getRefreshToken,
  getSid,
  getIsAuthorized,
}