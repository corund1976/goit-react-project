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

import { errorSelectors } from 'redux/error';
import { loaderSelector } from 'redux/loader';
import { reportsSelectors } from 'redux/reports';

import s from './ReportPage.module.css';

function ReportPage() {
  const isLoading = useSelector(loaderSelector.getLoaderStatus);
  const errorMessage = useSelector(errorSelectors.getErrorMessage);

  const [activeTypeOfTransactions, setActiveTypeOfTransactions] =
    useState('Расходы');
  const [activeCategoryOfTransactions, setActiveCategoryOfTransaction] =
    useState('');

  const [showErrorModal, setShowErrorModal] = useState(false);
  const toggleErrorModal = () => setShowErrorModal((prevState) => !prevState);

  const arrEexpensesOfMonth = useSelector(reportsSelectors.expensesOfMonthSelector);
  const arrIncomesOfMonth = useSelector(reportsSelectors.incomesOfMonthSelector);

  const isLoadingReport = useSelector(reportsSelectors.isLoadingSelector);

  const error = useSelector(reportsSelectors.errorSelector);

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
      {isLoading && <Loading />}

      <div className={s.reportHeaderBalance}>
        <GoBack />
        <div className={s.calendarBalanceBox}>
          <Balance displayStyle={false} />
          <Calendar />
        </div>
      </div>
      <IncomeExpenseTotal />
      {!isLoadingReport ? (
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
            <p>{errorMessage}</p>
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

      {showErrorModal && (
        <ErrorModal toggleErrorModal={toggleErrorModal}>
          <p>{errorMessage}</p>
        </ErrorModal>
      )}

    </Section>
  );
}

export default ReportPage;
