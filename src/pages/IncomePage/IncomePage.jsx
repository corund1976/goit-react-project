// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import Container from 'components/Container';
import Balance from 'components/Balance';
import GoReports from 'components/GoReports';
import TransactionForm from 'components/TransactionForm';
import TransactionTable from 'components/TransactionTable';
import Summary from 'components/Summary';

// import s from './IncomePage.module.css';

function IncomePage() {
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

export default IncomePage;