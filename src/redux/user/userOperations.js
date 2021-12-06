import api from 'services/kapusta-api';
import userActions from 'redux/user/userActions';

const handleUpdateUserBalance = balance => dispatch => {
  dispatch(userActions.updateUserBalanceRequest());

  api
    .updateUserBalance(balance)
    .then(({ data }) => {
      // data = { "newBalance": 1 }
      dispatch(userActions.updateUserBalanceSuccess(data));
    })
    .catch(error => dispatch(userActions.updateUserBalanceError(error)));
};

const handleGetUserInfo = () => dispatch => {
  dispatch(userActions.getUserInfoRequest());

  api
    .getUserInfo()
    .then(({ data }) => {
      //data = {
      //   "email": "test@email.com",
      //   "balance": 0,
      //   "transactions": [
      //     {
      //       "description": "Transaction's description",
      //       "category": "Продукты",
      //       "amount": 0,
      //       "date": "2020-12-31",
      //       "_id": "507f1f77bcf86cd799439013"
      //     }
      //   ]
      // }
      dispatch(userActions.getUserInfoSuccess(data));
    })
    .catch(error => dispatch(userActions.getUserInfoError(error)));
};

// eslint-disable-next-line
export default {
  handleUpdateUserBalance,
  handleGetUserInfo,
};
