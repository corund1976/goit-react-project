import userOperations from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';

import s from './Balance.module.css';

const BtnConfirmBalance = ({ input, displayStyle }) => {
  const dispatch = useDispatch();
  
  const addBalance = () => {
    const newBalance = Number(input);

    if (newBalance > 0) {
      dispatch(userOperations.handleUpdateUserBalance({ newBalance: newBalance }));
    } else {
      alert('Баланс должен быть положительным');
    }
  };
    
  return (
    <button type='button' className={displayStyle? s.balance_submit:s.balance_submit_none} onClick={addBalance}>
      Подтвердить
    </button >
  );
};
    
export default BtnConfirmBalance;