import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import Section from 'components/Section';
import GoBack from 'components/GoBack';
import Balance from 'components/Balance';
import Calendar from 'components/Calendar';
import IncomeExpenseTotal from 'components/IncomeExpenseTotal';
import ReportSwitch from 'components/ReportSwitch';
import ReportChart from 'components/ReportChart';
import ErrorModal from 'components/Modal/ErrorModal';
import Loading from 'components/Loading';

import { getErrorMessage } from 'redux/error/errorSelector';
import { getLoaderStatus } from 'redux/loader/loaderSelector';

import {
  errorSelector,
  expensesOfMonthSelector,
  incomesOfMonthSelector,
  isLoadingSelector,
} from 'redux/trans_month_stats/trans_month_stats-selectors';

import s from './ReportPage.module.css';

function ReportPage() {
  const isLoad = useSelector(getLoaderStatus);

  const [activeTypeOfTransactions, setActiveTypeOfTransactions] =
    useState('Расходы');
  const [activeCategoryOfTransactions, setActiveCategoryOfTransaction] =
    useState('');

  const [showErrorModal, setShowErrorModal] = useState(false);
  const errorMessage = useSelector(getErrorMessage);
  const toggleErrorModal = () => setShowErrorModal((prevState) => !prevState);

  const arrEexpensesOfMonth = useSelector(expensesOfMonthSelector);
  const arrIncomesOfMonth = useSelector(incomesOfMonthSelector);

  const isLoading = useSelector(isLoadingSelector);

  const error = useSelector(errorSelector);

  const arrForMarkup =
    activeTypeOfTransactions === 'Расходы'
      ? arrEexpensesOfMonth
      : arrIncomesOfMonth;
  const arrTransactionsOfMonth =
    arrForMarkup === undefined ? [] : Object.entries(arrForMarkup);

  const handleChangeCategory = () => {
    activeTypeOfTransactions === 'Расходы'
      ? setActiveTypeOfTransactions('Доходы')
      : setActiveTypeOfTransactions('Расходы');
  };

  const toggleActiveCategory = (e) => {
    setActiveCategoryOfTransaction(e.target.closest('LI').dataset.id);
  };
  useEffect(() => {
    if (arrTransactionsOfMonth.length) {
      setActiveCategoryOfTransaction(arrTransactionsOfMonth[0][0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrEexpensesOfMonth, arrIncomesOfMonth, activeTypeOfTransactions]);

  useEffect(() => {
    if (errorMessage !== null) {
      setShowErrorModal(true);
    }
  }, [errorMessage]);

  return (
    <Section>
      {isLoad && <Loading />}

      <div className={s.reportHeaderBalance}>
        <GoBack />
        <div className={s.calendarBalanceBox}>
          <Balance displayStyle={false} />
          <Calendar />
        </div>
      </div>
      <IncomeExpenseTotal />
      {!isLoading ? (
        <>
          {' '}
          <ReportSwitch
            activeTypeOfTransactions={activeTypeOfTransactions}
            activeCategoryOfTransactions={activeCategoryOfTransactions}
            handleChangeCategory={handleChangeCategory}
            toggleActiveCategory={toggleActiveCategory}
            arrTransactionsOfMonth={arrTransactionsOfMonth}
          />
          {error ? (
            <p>{error.message}</p>
          ) : (
            <ReportChart
              arrTransactionsOfMonth={arrTransactionsOfMonth}
              activeCategoryOfTransactions={activeCategoryOfTransactions}
            />
          )}
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader type='Rings' color='#00BFFF' height={100} width={100} />
        </div>
      )}

      {/* {showErrorModal && (
        <ErrorModal toggleErrorModal={toggleErrorModal}>
          <p>{errorMessage}</p>
        </ErrorModal>
      )} */}

    </Section>
  );
}

export default ReportPage;
