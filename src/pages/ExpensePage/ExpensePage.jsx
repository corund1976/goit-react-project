// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import Container from 'components/Container';
import Balance from 'components/Balance';
import GoReports from 'components/GoReports';
import TransactionForm from 'components/TransactionForm';
import TransactionTable from 'components/TransactionTable';
import Summary from 'components/Summary';

// import s from './ExpensePage.module.css';

function ExpensePage() {
  return (
    <Container>
      <div>
        <Balance />
        <GoReports />
      </div>

      <TransactionForm />
      
      <div>
        <TransactionTable />
        <Summary />
      </div>
    </Container>
  );
}

export default ExpensePage;